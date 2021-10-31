import express = require("express");
const app: express.Express = express();
const port: string = process.env.PORT || "3000";

type Users = {
  id: string;
  name: string;
};

const users = [
  { id: "01", name: "hoge1" },
  { id: "02", name: "fuga2" },
  { id: "03", name: "piyo3" },
];

class Main {
  constructor() {
    app.get("/", (req: express.Request, res: express.Response) => {
      res.send("Simple REST API");
    });
    app.get("/api/users", (req: express.Request, res: express.Response) => {
      res.send(users);
    });
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  }
}

const main = new Main();
