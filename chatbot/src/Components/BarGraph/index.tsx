import { BarChart, Title } from "@tremor/react";
import React from "react";
import { ChartDataItem } from "../../myTypes";

const chartdata: ChartDataItem[] = [
  {
    name: "Jan 05",
    "Reported Cases ": 2488,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 05",
    "Reported Cases ": 1445,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 07",
    "Reported Cases ": 743,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 08",
    "Reported Cases ": 281,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 09",
    "Reported Cases ": 251,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 10",
    "Reported Cases ": 232,
    "Users ": 2488,
    "Messages ": 44,
  },
  {
    name: "Jan 11",
    "Reported Cases ": 98,
    "Users ": 2488,
    "Messages ": 44,
  },
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

const Chart: React.FC = () => (
  <div className="relative b flex flex-col border border-white border-opacity-10  p-[15px] rounded-md  w-full md:h-[50vh]  h-auto ">
    <Title className="text-white">Overview</Title>
    <div className="absolute topline right-0 top-0 h-px w-[200px]"></div>

    <BarChart
      className="mt-10 "
      data={chartdata}
      index="name"
      categories={["Reported Cases ", "Users ", "Messages "]}
      colors={["sky", "indigo", "lime", "sky"]}
      valueFormatter={valueFormatter}
    />
  </div>
);

export default Chart;
