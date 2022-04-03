// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

//Создает переменную и помещает в нее express сервер
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});