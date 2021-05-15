'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const socket_io_1 = require('socket.io');
socket_io_1.io.on('connection', (socket) => {
	socket.emit('request');
	socket_io_1.io.emit('broadcast');
	socket.on('reply', () => {});
});
//# sourceMappingURL=index.js.map
