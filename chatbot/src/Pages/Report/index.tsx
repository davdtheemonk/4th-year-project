import React from "react";
import Table from "../../Components/Table";

const Report: React.FC = () => {
  return (
    <div className=" bg-primary flex  flex-col  py-10 ">
      <Table name="Reported Cases" />
    </div>
  );
};

export default Report;
