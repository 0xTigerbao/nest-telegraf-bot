

FROM node:20-alpine
WORKDIR /user/src/app

RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./

COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]