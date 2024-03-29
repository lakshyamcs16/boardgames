import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

export const SocketContext = React.createContext({
    socket: socket
});

export const UserContext = React.createContext({
    getUserDetails: () => {},
    setUserDetails: (userDetails: any) => {}
});