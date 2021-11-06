//constantes
const express = require('express');
const app = require("express")();
const server = require("http").createServer(app);
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/Resources"));

//rotas
app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname
  });
});


server.listen(port, () => {
  console.log(`application is running at: http://localhost:${port}`);
});