const router = require("express").Router();
const { OpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { OpenAIEmbeddings } = require("@langchain/openai");
const Message = require("../models/message.model");
let authtoken = require("../middleware/authToken");

router.post("/help/", authtoken, async (req, res) => {
  const template = `
   You are a leagal aid assistant that provides legal help to people you are to answer questions based on the following : {context}
  You must follow all the rules below and then give your best response:
  1. in 6 to 10 words, share the main soutions that would help the person
  2. do NOT repeat basic information and  make sure you are confidential
  3. If the situation seems hard to resolve you may generate a report and send it over
   Please write the best response that I should send to the user: 
  `;

  try {
    const context = req.body.description;

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
    res.status(200).send({ data: result });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "An error occurred generating description" });
  }
});

module.exports = router;
