import { Title } from "@tremor/react";
import React from "react";
import SentimentCard from "../SentimentCard";

const SentimentalAnalysis: React.FC = () => (
  <div className="relative b flex flex-col border border-white border-opacity-10  p-[15px] rounded-md  w-full md:h-[50vh]  h-auto ">
    <Title className="text-white">Messages Sentimental Analysis</Title>
    <div className="absolute topline right-0 top-0 h-px w-[200px]"></div>
    <SentimentCard
      name="Casual Sentiment"
      color=""
      messages={77}
      total={156}
      percentage={30}
    />
    <SentimentCard
      name="Moderate Sentiment"
      color="amber"
      messages={64}
      total={156}
      percentage={88}
    />
    <SentimentCard
      color="red"
      name="High Risk Sentiment"
      messages={14}
      total={156}
      percentage={5}
    />
  </div>
);

export default SentimentalAnalysis;
