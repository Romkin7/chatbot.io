import { IIncomingMessage } from 'app-shared-types';
import { Express } from 'express';
import { Server, Socket } from 'socket.io';

export const startChat = (io: Server, app: Express) => {
	io.on('connection', (socket: Socket) => {
		socket.emit('add-message', `Welcome to chatbot.io`); // emit an event to the socket
		io.emit('broadcast' /* … */); // emit an event to all connected sockets
		socket.on('reply', () => {
			/* … */
		}); // listen to the event
		socket.on('new-message', (data: IIncomingMessage) => {
			socket.emit('add-message', data.text); // emit an event to the socket
			socket.broadcast.emit('broadcast', /* … */ data.text); // emit an event to all connected sockets, except sender
			socket.on('reply', () => {
				/* … */
			}); // listen to the event
		});
	});
};
