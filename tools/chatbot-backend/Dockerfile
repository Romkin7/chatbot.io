FROM node:alpine
WORKDIR /server
COPY ./build/server /
RUN npm install -g npm
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]
