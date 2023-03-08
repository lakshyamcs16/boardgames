import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreateRoom from "../components/CreateRoom";
import Home from "../components/Home";
import JoinRoom from "../components/JoinRoom";
import Main from "../components/Main";
import Welcome from "../components/Welcome";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:game" element={<Main />} />
        <Route path="/games/:game/create" element={<CreateRoom />} />
        <Route path="/games/:game/join" element={<JoinRoom />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
