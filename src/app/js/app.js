"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || "3000";
const users = [
    { id: "01", name: "hoge1" },
    { id: "02", name: "fuga2" },
    { id: "03", name: "piyo3" },
];
class Main {
    constructor() {
        app.get("/", (req, res) => {
            res.send("Simple REST API");
        });
        app.get("/api/users", (req, res) => {
            res.send(users);
        });
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map