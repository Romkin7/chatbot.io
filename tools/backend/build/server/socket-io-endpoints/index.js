"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startChat = void 0;
const startChat = (io, app) => {
    io.on('connection', (socket) => {
        socket.emit('add-message', `Welcome to chatbot.io`);
        io.emit('broadcast');
        socket.on('reply', () => {
        });
        socket.on('new-message', (data) => {
            socket.emit('add-message', data.text);
            socket.broadcast.emit('broadcast', data.text);
            socket.on('reply', () => {
            });
        });
    });
};
exports.startChat = startChat;
//# sourceMappingURL=index.js.map