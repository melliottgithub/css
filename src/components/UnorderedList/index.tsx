import React from "react";
import List from "../List";
import "./index.css";

const list = [
  { id: 1, num: "1st child" },
  { id: 2, num: "2nd child" },
  { id: 3, num: "3rd child" },
  { id: 4, num: "4th child" },
  { id: 5, num: "5th child" },
  { id: 6, num: "6th child" },
  { id: 7, num: "7th child" },
  { id: 8, num: "8th child" },
  { id: 9, num: "9th child" },
  { id: 10, num: "10th child" },
];

const UnorderedList = () => {
  return (
    <ul>
      {list.map((el) => {
        const { id, num } = el;
        return <List key={id} content={num} />;
      })}
    </ul>
  );
};

export default UnorderedList;
