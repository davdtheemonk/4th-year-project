const router = require("express").Router();
const { OpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { OpenAIEmbeddings } = require("@langchain/openai");
const { LLMChain } = require("langchain/chains");
const Message = require("../models/message.model");
let rateLimitAndAuthMiddleware = require("../middleware/rateLimitAndAuthMiddleware");

const sentimentAnalyzer = async (message) => {
  try {
    const template = `
  You are a sentiment analyzer that analyzes sentiments in messages from a system and categorizes the messages in three categories Casual,Moderate and High Risk.
  You are to analyze the given message : {context} and categorize it.
  You must follow the following rules:
  1. You are to strictly give a single  response  based on the the categories given that is Casual,Moderate or High Risk do not even try to generate a sentence or your own thoughts
  
 `;
    const prompt = new PromptTemplate({
      inputVariables: ["context"],
      template: template,
    });
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-3.5-turbo-instruct",
    });

    const chain = new LLMChain({ llm: model, prompt });
    const run = await chain.call({
      context: message,
    });

    const result = await run.text.trim();
    return result;
  } catch (e) {
    console.log(e);
    return "No sentiment";
  }
};
router.post("/send", rateLimitAndAuthMiddleware, async (req, res) => {
  const template = `
   You are a leagal aid assistant that provides legal help to people you are to answer questions based on the following : {context}
  You must follow all the rules below and then give your best response:
  1. in 6 to 10 words, share the main soutions that would help the person
  2. do NOT repeat basic information and  make sure you are confidential
  3. If the situation seems hard to resolve you may generate a report and send it over
   Please write the best response that I should send to the user: 
  `;
  try {
    const context = req.body.message;
    const sentiment = await sentimentAnalyzer(context);
    await new Message({
      sender: req.body.sender,
      message: req.body.message,
      chatId: req.body.chatId,
      recepient: "AI",
      sentiment: sentiment,
    }).save();

    const prompt = new PromptTemplate({
      inputVariables: ["context"],
      template: template,
    });
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-3.5-turbo-instruct",
    });

    const chain = new LLMChain({ llm: model, prompt });
    const run = await chain.call({
      context: context,
    });

    const result = await run.text.trim();
    await new Message({
      sender: "AI",
      message: result,
      chatId: req.body.chatId,
      recepient: req.body.sender,
    }).save();
    return res.status(200).send({ data: result });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "An error occurred generating response" });
  }
});

router.get("/messages/:id", rateLimitAndAuthMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const messages = await Message.find({
      chatId: id,
    });

    return res.status(200).send({ data: messages });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "An error occurred getting conversation" });
  }
});

module.exports = router;
