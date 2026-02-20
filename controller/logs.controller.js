import { insertLogService } from "../services/logs.service.js";

export const insertLog = async (req, res, next) => {
  const result = await insertLogService(req.body);
  res.status(201).json({
    result,
  });
};
