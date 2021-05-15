import { config } from 'dotenv';
import express from 'express';
import socketIO from 'socket.io';
import { Server } from 'http';
import { startChat } from './socket-io-endpoints';
import cors from 'cors';
config();
class App {
	private server: Server;
	private port: number;

	constructor(port: number) {
		this.port = port;

		const app = express();
		app.use(cors());

		this.server = new Server(app);
		const io = new socketIO.Server(this.server);
		startChat(io, app);
	}

	public Start() {
		this.server.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}.`);
		});
	}
}

new App(Number(process.env.PORT)).Start();
