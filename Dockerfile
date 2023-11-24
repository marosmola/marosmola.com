FROM node:20.5.1-alpine3.18 as builder

WORKDIR /app

COPY . /app/

RUN npm i

RUN npm run generate


FROM nginx:alpine

COPY --from=builder /app/.output/