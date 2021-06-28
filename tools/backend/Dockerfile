FROM node:alpine
WORKDIR /backend
COPY ./package.json /
RUN npm install -g npm
COPY ./ ./
CMD ["node", "build/server/server.js"]
