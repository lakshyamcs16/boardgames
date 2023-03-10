import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSocket } from "../providers/sockets/SocketProvider";

export default function Welcome() {
  const location = useLocation();
  const [socket] = useSocket();
  const { state } = useLocation();
  const [users, setUsers] = useState<
    Array<{ username: string; socketid: string }>
  >(state.message);

  socket.on("message", (data) => {
    setUsers(data);
  })

  return <div>{users && users?.map((user) => user.username).join(', ')} </div>;
}
