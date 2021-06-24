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
dotenv_1.config();
const app = express_1.default();
const httpServer = new http_1.Server(app);
const io = new socket_io_1.default.Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-company'],
		credentials: true,
	},
});
socket_io_endpoints_1.startChat(io, app);
app.set('trust proxy', true);
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '127.0.0.1');
app.get('/', (req, res) => {
	return res.send('Hello world');
});
httpServer.listen(app.get('port'), app.get('ip'), () => {
	console.log(`Server listening on port ${app.get('port')}.`);
});
//# sourceMappingURL=server.js.map
