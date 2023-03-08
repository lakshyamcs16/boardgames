import React from "react";
import { useNavigate } from "react-router-dom";
import { Games } from "../interface/Games";

import './css/Card.css';

interface Props {
  item: Games;
}

export default function Card(props: Props) {
  const { tags, title, description, players = "", path } = props.item;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`games/${path}`)} className='card-wrapper'>
      <div>{title}</div>
      <div className="desc">{description}</div>
      <div className="tags">
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <div className="players">{players}</div>
    </div>
  );
}
