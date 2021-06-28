FROM node:alpine
WORKDIR /backend
COPY ./build /
RUN npm install -g npm
COPY ./ ./
CMD ["node", "backend/build/server/server.js"]
