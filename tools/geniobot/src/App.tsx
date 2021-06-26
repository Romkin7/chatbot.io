import React, { FC } from 'react';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import './App.scss';

const App: FC = () => {
	return (
		<>
			<Header
				headerText="geniobot.io"
				logoSrc="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg"
				logoAlt="geniobot.io logo"
			/>
			<Chat />
		</>
	);
};

export default App;
