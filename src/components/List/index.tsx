import React from "react";
import './index.css'

type Props = {
  content: string
}

const List = ({ content }: Props) => {
  return <li>{content}</li>;
};

export default List;
