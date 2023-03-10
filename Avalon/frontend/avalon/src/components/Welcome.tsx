import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSocket } from "../providers/sockets/SocketProvider";

export default function Welcome() {
  const [socket] = useSocket();
  const { state } = useLocation();
  const { message, id } = state;
  const [users, setUsers] =
    useState<Array<{ username: string; socketid: string }>>(message);

  socket.on("message", (data) => {
    setUsers(data);
  });

  return (
    <div>
      {id}
      <div></div>
      <div><ol>{users && users?.map((user) => <li>{user.username}</li>)}</ol></div>
    </div>
  );
}
