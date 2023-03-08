import React from "react";
import { Games } from "../interface/Games";
import Card from "./Card";

import './css/List.css';

interface Props {
  data: Array<Games>;
}

export default function List({ data }: Props) {
  return (
    <div className="list-wrapper">
      {data.map((item: Games) => (
        <Card item={item} />
      ))}
    </div>
  );
}
