FROM node:12-alpine
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install -g moleculer-cli
RUN npm install && npm cache clean --force --loglevel=error
COPY moleculer.config.js ./
COPY services ./services/
CMD ["npm","start"]