FROM node:14
WORKDIR /usr/src/client
COPY package.json ./
RUN yarn install --network-timeout 100000
COPY . .
RUN yarn build
CMD ["yarn", "start"]
