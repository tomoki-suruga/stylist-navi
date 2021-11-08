# stylist-navi

ranking site for stylist

# docker(DB)の起動

docker-compose --file ./src/docker/docker-compose.yml up --build -d

# docker(DB)の停止

docker-compose --file ./docker-compose.yml down

# docker(DB)の削除

docker-compose --file ./docker-compose.yml down --rmi all --volumes

# ログイン

mysql -h 127.0.0.1 -u mysqladmin -ppassword

# サーバー起動コマンド

npm start

# npm のキャッシュ削除

npm cache clean --force
rm -rf node_modules
rm -rf ~/.npm

# ライブラリ入れ直す

npm i
