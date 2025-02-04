import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // URL do servidor

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
        console.log('Conectado ao servidor');
      });
    // Escutando mensagens enviadas pelo servidor
    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Limpeza ao sair
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', message);
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Live Chat</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite uma mensagem"
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
      <div>
        <h2>Mensagens</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chat;