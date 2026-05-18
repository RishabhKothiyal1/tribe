import "./App.css";
import axios from "axios";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

import { useColorMode } from "@chakra-ui/react";

// axios defaults removed to enable proxying



function App() {
  const { colorMode } = useColorMode();
  return (
    <div className={`App ${colorMode}`}>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
