import express from "express";
import { dbConnection } from "./config/connection.js";
import CollectionRouter from "./routes/collection.route.js";
import BookRouter from "./routes/book.route.js";
import LogsRouter from "./routes/logs.route.js";
const app = express();

dbConnection();
app.use(express.json());
app.use("/collection", CollectionRouter);
app.use("/books", BookRouter);
app.use("/logs", LogsRouter);
export default app;
