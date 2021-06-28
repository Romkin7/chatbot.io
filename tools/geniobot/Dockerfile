FROM node:alpine
WORKDIR /geniobot
COPY ./package.json ./
RUN npm install -g npm
RUN yarn
COPY ./ ./
CMD ["yarn", "start"]