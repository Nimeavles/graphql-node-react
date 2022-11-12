FROM node:19-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN corepack enable

RUN ["pnpm", "install"]

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]

