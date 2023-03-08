import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../providers/sockets/SocketProvider";

export default function Join({ id }: { id: string }) {
  const [socket] = useSocket();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected!");
    });
  }, []);

  const handleJoinRoom = async () => {
    socket.emit("join", { username: name, roomid: id }, (error: Error) => {
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
