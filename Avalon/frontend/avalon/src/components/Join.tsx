import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { useSocket } from "../providers/sockets/SocketProvider";

export default function Join({ id }: { id: string }) {
  const [socket] = useSocket();
  const { game } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [users, setUsers] = useState<
    Array<{ username: string; socketid: string }> | null
  >(null);

  useEffect(() => {
    socket.on("connect", () => {});
  }, []);

  useEffect(() => {
    if (users) {
      navigate(`/games/${game}/welcome`, {
        state: {
          message: users
        }
      });
    }
  }, [users]);

  const handleJoinRoom = async () => {
    socket.emit(
      "join",
      { username: name, roomid: id, gameName: game },
      (error: Error) => {
        if (error) return error;
      }
    );
  };

  socket.on("message", (message) => {
    setUsers(message);
  });

  console.log(users);

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
