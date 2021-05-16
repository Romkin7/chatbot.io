import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:8080';

function Chat() {
	const [response, setResponse] = useState('');

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT, {
			withCredentials: true,
			extraHeaders: {
				'my-custom-header': 'abcd',
			},
		});
		socket.on('FromAPI', (data) => {
			setResponse(data);
		});
	}, []);

	return (
		<p>
			It's <time dateTime={response}>{response}</time>
		</p>
	);
}

export default Chat;
