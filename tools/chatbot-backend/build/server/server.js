'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = require('dotenv');
const express_1 = __importDefault(require('express'));
const socket_io_1 = __importDefault(require('socket.io'));
const http_1 = require('http');
const socket_io_endpoints_1 = require('./socket-io-endpoints');
const cors_1 = __importDefault(require('cors'));
dotenv_1.config();
class App {
	constructor(port) {
		this.port = port;
		const app = express_1.default();
		app.use(cors_1.default());
		this.server = new http_1.Server(app);
		const io = new socket_io_1.default.Server(this.server);
		socket_io_endpoints_1.startChat(io, app);
	}
	Start() {
		this.server.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}.`);
		});
	}
}
new App(Number(process.env.PORT)).Start();
//# sourceMappingURL=server.js.map
