import React from "react";
import { socket, SocketContext } from "./Context";
import { useContext } from "react";

type Props = {
    children: JSX.Element;
}

class SocketProvider extends React.Component<Props> {


  render() {
    return (
      <SocketContext.Provider
        value={{socket}}
      >
        {this?.props?.children}
      </SocketContext.Provider>
    );
  }
}

SocketProvider.contextType = SocketContext;

export function useSocket() {
  const ctx = useContext(SocketContext);
  return [ctx.socket];
}

export default SocketProvider;
