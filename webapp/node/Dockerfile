FROM node:16.13

# アプリケーションディレクトリを作成する
WORKDIR /usr/src

COPY ./app ./

RUN npm install -g nodemon && npm install -g npm@latest

EXPOSE 3000

CMD [ "npm", "start" ]