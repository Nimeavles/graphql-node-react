FROM node:19-alpine

RUN corepack enable

WORKDIR /client

COPY package*.json ./

RUN ["pnpm", "install"]

COPY . .

EXPOSE 4000

CMD ["pnpm", "dev"]