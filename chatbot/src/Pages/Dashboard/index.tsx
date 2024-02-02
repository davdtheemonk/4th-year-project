import React from "react";
import Chart from "../../Components/BarGraph";
import SentinalAnalysis from "../../Components/SentinalAnalysis";
import Table from "../../Components/Table";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary flex  flex-col  py-10 ">
      <div className=" flex  md:flex-row flex-col  gap-4">
        <div className="flex flex-col justify-start items-start md:w-[60%] gap-4">
          <p className="text-white text-4xl font-bold">Dashboard</p>
          <p className="text-white">
            Get a quick overview of myLawyer AI app usage
          </p>
          <Chart />
        </div>
        <div className="flex flex-col justify-start items-start md:w-[40%] md:py-24 ">
          <SentinalAnalysis />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
