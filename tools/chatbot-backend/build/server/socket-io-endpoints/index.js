'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.startChat = void 0;
const startChat = (io, app) => {
	io.on('connection', (socket) => {
		socket.emit('add-message', `${new Date().toLocaleDateString('ru')} ${new Date().toLocaleTimeString('ru')}`);
		io.emit('broadcast');
		socket.on('reply', () => {});
	});
};
exports.startChat = startChat;
//# sourceMappingURL=index.js.map
