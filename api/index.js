const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // db.json es tu archivo JSON con los datos
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
