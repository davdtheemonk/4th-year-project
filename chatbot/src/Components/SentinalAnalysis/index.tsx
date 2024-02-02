import { Title } from "@tremor/react";
import React from "react";

const SentinalAnalysis: React.FC = () => (
  <div className="relative b flex flex-col border border-white border-opacity-10  p-[15px] rounded-md  w-full md:h-[50vh]  h-auto ">
    <Title className="text-white">Sentinal Analysis</Title>
    <div className="absolute topline right-0 top-0 h-px w-[200px]"></div>
  </div>
);

export default SentinalAnalysis;
