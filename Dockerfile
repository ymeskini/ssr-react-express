FROM node:12.13.0-alpine

ENV WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
