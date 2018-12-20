FROM node:10-alpine AS builder
WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn

COPY src ./src
COPY public ./public
RUN yarn build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /work/build /usr/share/nginx/html