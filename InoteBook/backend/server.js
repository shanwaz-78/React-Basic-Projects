import "dotenv/config";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection } from "./database/connection.js";
import routes from "./routes/index.js";

const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT || "8080";
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", routes.userRoute);
app.use("/api/notes", routes.notesRoute);

const server = createServer(app);
server.listen(port);

server.on("listening", async () => {
  const { connection } = await createConnection(MONGO_URI);
  console.log(`MongoDB connected at port ${connection.port}`);
  console.log(`Server is listening at port http://localhost:${port}`);
});
server.on("error", () => console.log(`Server is not listening`));
