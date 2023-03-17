import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSocket } from "../providers/SocketProvider";
import { useUserDetails } from "../providers/UserProvider";

export default function Welcome() {
  const [socket] = useSocket();
  const { state } = useLocation();
  const { message, id } = state;
  const [users, setUsers] =
    useState<Array<{ username: string; socketid: string }>>(message);
  const [begin, setBegin] = useState<boolean>(false);
  const [getUserDetails] = useUserDetails();

  socket.on("message", (data) => {
    if(data.toBegin) setBegin(true);
    setUsers(data.players);
  });

  const navigateToStartScreen = () => {
    console.log(getUserDetails());
    
  }

  return (
    <div>
      {id}
      <div></div>
      <div><ol>{users && users?.map((user) => <li>{user.username}</li>)}</ol></div>
      {begin && <div><button onClick={navigateToStartScreen}>Begin Game</button></div>}
    </div>
  );
}
