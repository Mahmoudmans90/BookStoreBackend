import { Router } from "express";
import { insertLog } from "../controller/logs.controller.js";
const LogsRouter = Router();
LogsRouter.post("/", insertLog);
export default LogsRouter;
