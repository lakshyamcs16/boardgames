import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const { game } = useParams();
  const handleCreateRoom = (path: string) => {
    return navigate(path);
  };

  return (
    <header className="App-header">
      <button onClick={() => handleCreateRoom(`/games/${game}/create`)}>Create a room</button>
      <button onClick={() => handleCreateRoom(`/games/${game}/join`)}>Join a room</button>
    </header>
  );
}
