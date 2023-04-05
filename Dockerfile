FROM node:12-alpine3.12

ENV PATH /work/node_modules/.bin:$PATH

WORKDIR /work

COPY package.json .

RUN ["yarn", "install", "--silent", "--frozen-lockfile"]

RUN ["yarn", "global", "add", "react-scripts@3.4.1", "--silent"]

CMD ["yarn", "start"]
