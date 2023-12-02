import express, { Application } from "express";
import cors from "cors";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = 2277;

app.use(express.json());
app.use(cors());

mainApp(app);

const server = app.listen(port, () => {
  mainConnection();
});

process.on("uncaughtException", (error: Error) => {
  console.log("error: ", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("error: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
