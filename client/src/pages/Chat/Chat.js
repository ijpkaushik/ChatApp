import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './chat.css';

import InfoBar from '../../components/InfoBar/InfoBar';
import Input from '../../components/Input/Input';
import Messages from '../../components/Messages/Messages';
import TextContainer from '../../components/TextContainer/TextContainer';

let socket;
const ENDPONT = 'http://localhost:5001/';

const Chat = ({ name, room }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');

  useEffect(() => {
    console.log(name, room);
    socket = io(ENDPONT,
      { transports: ["websocket"] },
      { secure: true, reconnection: true, rejectUnauthorized: false }
    );
    // console.log(socket);
    socket.on("connect_error", (err) => {
      console.log(err.message);
    });
    if (name !== "" && room !== "") {
      socket.emit('joinRoom', { name, room }, (err) => {
        if (err) {
          alert(err);
        }
      });
    }
  }, [ENDPONT]);

  useEffect(() => {
    socket.on('message', (msgData) => {
      setMessages(messages => [...messages, msgData]);
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      const msgData = {
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes()
      }

      socket.emit('sendMessage', msgData, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return (
    <div className='container'>
      <div className='left'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <div className='right'>
        <TextContainer users={users} />
      </div>
    </div>
  );
};

export default Chat;
