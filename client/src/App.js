import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chat from './pages/Chat/Chat';
import Join from './pages/Join/Join';

function App() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Join setName={setName} setRoom={setRoom} />} />
        <Route path="/chat" element={<Chat name={name} room={room} />} />
      </Routes>
    </Router>
  );
}

export default App;
