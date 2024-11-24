import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import { createConnection } from "./database/connection.js";
import routes from "./routes/index.js";

const port = process.env.PORT || "8080";
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

// routes
app.use("/api/auth", routes.userRouter);

// creating sevver
const server = createServer(app);
server.listen(port);

// listening for incoming request
server.on("listening", async () => {
  const { connection } = await createConnection(MONGO_URI);
  console.log(`DB connection successfull: Port:${connection.port}`);
  console.log(`server is started on http://locahost:${port}`);
});
server.on("error", () => console.log(`server is not listening`));
