##### サーバー起動コマンド(local)

```
npm start
```

##### npm のキャッシュ削除

```
npm cache clean --force
rm -rf node_modules
rm -rf ~/.npm
```

##### ライブラリ入れ直す

```
npm i
```

##### サーバー起動コマンド(docker)

```
docker-compose up -d --build
```

##### サーバー停止コマンド(docker)

```
docker-compose down
```
