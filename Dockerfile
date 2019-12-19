FROM node:12.13.0-alpine

ENV WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .
RUN yarn build
EXPOSE 8080

CMD ["yarn", "start:prod"]
