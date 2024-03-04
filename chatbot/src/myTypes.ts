import React from "react";

export interface User {
    firstname: string;
    lastname: string;
    email:string;
    accounttype:string,
    isAdmin: boolean;
  }

  export interface ChartDataItem {
    name: string;
    "Reported Cases ": number;
    "Users ": number;
    "Messages ": number;
  }
  export interface CardProps {
    percentage: number;
    total: number;
    messages: number;
    name: string;
    color: string;
  }
  export interface SideBarItem {
    /** The text to display inside the button */
    id: number;
    title: string;
    icon: any;
    link: string;
    /** Whether the button can be interacted with */
  }
 export type Message = {
 
    message:string,
    sender:string,
    chatId:string,
  }
  export interface TableProps {
    name: string;
  }
 export  interface ComponentProps {
  /** The text to display inside the button */
  item: { id: number; link: string; icon: any; title: string };

  /** Whether the button can be interacted with */
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export type Messages ={

    sender: string;
    message: string;
};
