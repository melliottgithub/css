import React from "react";
import "./index.css";

interface Props {
  num: number,
  str: string,
  classx: string
}


const Section = ({ num, str, classx }: Props) => {
  return (
    <section className={`child-${num} sport ${classx}`}>
      <h2>{classx} {num}</h2>
      <p>{str}</p>
    </section>
  );
};

export default Section;
