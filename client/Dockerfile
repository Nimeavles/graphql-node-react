FROM node:19-alpine

RUN mkdir /app

RUN corepack enable

WORKDIR /app

COPY package*.json ./

RUN ["pnpm", "install"]

COPY . .

EXPOSE 4000

CMD ["pnpm", "dev"]