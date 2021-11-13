#### stylist-navi

ranking site for stylist

##### [DB](./db/README.md)

##### [WEB APP](./webapp/README.md)

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
