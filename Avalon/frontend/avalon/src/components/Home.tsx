import React from "react";
import { games } from "../constants/games";
import List from "./cards/List";

export default function Home() {
  return (
    <header className="App-header">
      <List data={games} />
    </header>
  );
}
