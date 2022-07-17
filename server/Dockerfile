FROM node:14
WORKDIR /usr/src/server
COPY package.json ./
RUN yarn install --network-timeout 100000
COPY . .
CMD ["yarn", "start"]
