import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Join({ id }: { id: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleJoinRoom = async () => {
    const res = await api.get(`/room/join/${id}/${name}`);
    if (res.data.name) {
      navigate("/welcome", {
        state: {
          name: res.data.name,
        },
      });
    }
  };

  return (
    <div>
      Name{" "}
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}
