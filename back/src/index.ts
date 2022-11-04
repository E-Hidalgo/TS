import dotenv from "dotenv"
dotenv.config()

import app from "./app";
import "./db/connect"


function init() {
  // PORT
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
}
init();
