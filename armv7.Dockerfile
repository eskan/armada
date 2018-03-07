FROM arm32v7/node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install --production

COPY index.js /usr/src/app/index.js

EXPOSE 3000
 
CMD [ "node", "index.js" ]