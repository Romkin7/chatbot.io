import React, { FC } from 'react';
import Chat from './components/Chat/Chat';
import './App.scss';

const App: FC = () => {
	return (
		<>
			<h1>Chatbot.io</h1>
			<Chat />
		</>
	);
};

export default App;
