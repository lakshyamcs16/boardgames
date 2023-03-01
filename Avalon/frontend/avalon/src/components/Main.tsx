import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();

  const handleCreateRoom = (path: string) => {
    return navigate(path);
  };

  return (
    <header className="App-header">
      <button onClick={() => handleCreateRoom("/create")}>Create a room</button>
      <button onClick={() => handleCreateRoom("/join")}>Join a room</button>
    </header>
  );
}
