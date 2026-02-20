import mongoose from "mongoose";

export const insertLogService = async (body) => {
  try {
    const db = mongoose.connection.db;
    const { book_id, action } = body;
    return await db.collection("logs").insertOne({ book_id, action });
  } catch (error) {
    console.log(error);
  }
};
