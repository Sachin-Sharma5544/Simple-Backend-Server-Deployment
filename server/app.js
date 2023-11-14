const express = require("express");
const app = express();

const PORT = 3000;

app.get("/admin", (req, res, next) => {
    res.status(200).send({ msg: "admin route connected" });
});

app.get("/", (req, res, next) => {
    res.status(200).send({ msg: "Updated the message" });
});

app.get("/new-route", (req, res, next) => {
    res.status(200).send({ msg: "new route connected" });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
