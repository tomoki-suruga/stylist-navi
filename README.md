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
