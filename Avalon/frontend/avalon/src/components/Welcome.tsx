import React from "react";
import { useLocation } from "react-router-dom";

export default function Welcome() {
  const location = useLocation();

  return <div>Welcome, {location.state.name}</div>;
}
