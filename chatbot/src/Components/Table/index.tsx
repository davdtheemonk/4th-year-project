import React from "react";
import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { FiMoreVertical } from "react-icons/fi";

interface TableProps {
  name: string;
}

const data = [
  {
    name: "Viola Amherd",
    Role: "Casual",
    departement:
      "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
    chatDuration: 78,
  },
  {
    name: "Anonymous",
    Role: "High Risk",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "inactive",
    chatDuration: 54,
  },
  {
    name: "Anonymous",
    Role: "Casual",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
    chatDuration: 32,
  },
  {
    name: "Ignazio Cassis",
    Role: "Moderate",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
    chatDuration: 16,
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Casual",
    departement: "The Federal Department of Finance (FDF)",
    status: "active",
    chatDuration: 44,
  },
  {
    name: "Anonymous",
    Role: "Moderate",
    departement:
      "The Federal Department of Economic Affairs, Education and Research (EAER)",
    status: "active",
    chatDuration: 60,
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "High Risk",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "inactive",
    chatDuration: 22,
  },
];

const Table: React.FC<TableProps> = ({ name }) => {
  return (
    <div className="relative  flex flex-col border border-white border-opacity-10  p-[15px] rounded-md  w-full md:h-[50vh]  h-auto ">
      <Title className="text-white">{name}</Title>
      <div className="absolute topline right-0 top-0 h-px w-[200px]"></div>

      <TableComponent className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Actions</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Sentimental Analysis</TableHeaderCell>

            <TableHeaderCell>Chat Duration</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>
                <FiMoreVertical />
              </TableCell>
              <TableCell className="text-white">{item.name}</TableCell>
              <TableCell>
                <Text className="text-white">{item.Role}</Text>
              </TableCell>

              <TableCell>
                <Text className="text-white">{item.chatDuration} min</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableComponent>
    </div>
  );
};

export default Table;
