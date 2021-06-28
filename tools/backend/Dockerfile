FROM node:alpine
WORKDIR /server
COPY ./ /
RUN npm install -g npm
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]
