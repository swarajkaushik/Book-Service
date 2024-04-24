const bodyParse = require("body-parser");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const BookRoutes = require("./routes/book-routes");
const UserRoutes = require("./routes/user-routes");
const connect = require("./config/database-config");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParse.json());
  app.use(bodyParse.urlencoded({ extended: true }));
  app.use("/api", BookRoutes);
  app.use(UserRoutes);
  app.listen(port, async () => {
    console.log(`Server started at port: ${port}`);
    await connect();
    console.log("Mongodb connected.");
  });
};

setupAndStartServer();
