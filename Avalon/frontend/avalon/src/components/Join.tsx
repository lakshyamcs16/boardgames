import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import api from "../api";

const socket = io("http://localhost:3000");

export default function Join({ id }: { id: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const handleJoinRoom = async () => {
    socket.emit("join", { username: "lax", roomid: id }, (error: Error) => {
      if (error) return error;
    });
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
