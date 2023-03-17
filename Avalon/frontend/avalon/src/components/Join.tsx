import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSocket } from "../providers/SocketProvider";
import { useUserDetails } from "../providers/UserProvider";

export default function Join({ id, isMaster = false }: { id: string, isMaster?: boolean }) {
  const [socket] = useSocket();
  const { game } = useParams();
  const navigate = useNavigate();
  const [_, setUserDetails] = useUserDetails();
  const [name, setName] = useState<string>("");
  const [users, setUsers] = useState<
    Array<{ username: string; socketid: string }> | null
  >(null);

  useEffect(() => {
    socket.on("connect", () => {});
  }, [socket]);

  useEffect(() => {
    if (users) {
      setUserDetails({
        game,
        id: socket.id,
        name,
        isMaster,
        roomid: id
      });
      navigate(`/games/${game}/welcome`, {
        state: {
          message: users,
          id
        }
      });
    }
  }, [users, socket.id, game, id, isMaster, name, setUserDetails, navigate]);

  const handleJoinRoom = async () => {
    socket.emit(
      "join",
      { username: name, roomid: id, gameName: game, isMaster },
      (error: Error) => {
        if (error) return error;
      }
    );
  };

  socket.on("message", (message) => {
    setUsers(message.players);
  });

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
