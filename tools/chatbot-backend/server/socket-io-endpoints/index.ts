import { Express } from 'express';
export const startChat = (io: any, app: Express) => {
	io.on('connection', (socket: any) => {
		socket.emit('add-message', `${new Date().toLocaleDateString('ru')} ${new Date().toLocaleTimeString('ru')}`); // emit an event to the socket
		io.emit('broadcast' /* … */); // emit an event to all connected sockets
		socket.on('reply', () => {
			/* … */
		}); // listen to the event
	});
};
