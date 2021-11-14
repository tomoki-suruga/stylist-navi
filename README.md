#### stylist-navi

ranking site for stylist

#### DB

##### docker(DB)の起動

```
docker-compose up --build -d
# ログイン確認
mysql -h 127.0.0.1 -umysqladmin -ppassword stylistnavi_local
```

##### docker(DB)の停止

```
docker-compose down
```

##### docker(DB)の削除

```
docker-compose down --rmi all --volumes
```

#### WEB APP

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

##### 初期化

- 環境変数をローカルに設定(開発は`development`, 本番は`production`が入る想定)

```
export NODE_ENV=local
```

- テーブル作成

```
# テーブル定義のテンプレート作成(Usersテーブルの場合)
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
# テーブル作成の実行
npx sequelize db:migrate
```

- シードデータ投入

```
# シードデータのテンプレート作成(もうある場合は省略可)
npx sequelize seed:generate --name seed-user
# insertの実行
npx sequelize db:seed:all
```
