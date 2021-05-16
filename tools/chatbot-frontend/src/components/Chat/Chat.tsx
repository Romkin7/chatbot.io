import React, { useState, useEffect } from 'react';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:8080';

function Chat() {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState({ id: 0, text: '' });
	const [messages, setMessages] = useState([]);
	const [flag, setFlag] = useState(0);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT, {
			withCredentials: true,
			extraHeaders: {
				'my-company': 'halkoliiteri.com',
			},
		});
		socket.on('add-message', (data: string) => {
			setMessage({ id: 1, text: data });
		});
		socket.on('new-message', (data) => {
			setMessages(data);
		});
	}, []);

	return (
		<>
			<Message message={message} />
			<MessageForm />
		</>
	);
}

export default Chat;
