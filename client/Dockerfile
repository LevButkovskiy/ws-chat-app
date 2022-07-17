FROM node:14
RUN apt-get update
WORKDIR /usr/src/client
COPY package.json ./
COPY package-lock.json ./
RUN npm install --network-timeout 100000
COPY . .
RUN npm run build
CMD ["npm", "start"]
