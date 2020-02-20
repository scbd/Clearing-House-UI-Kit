FROM node:6.9

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc .npmrc ./

RUN npm install -q

ENV PORT 8000
EXPOSE 8000

ARG VERSION
ENV VERSION $VERSION

COPY . ./

CMD [ "node", "server" ]
