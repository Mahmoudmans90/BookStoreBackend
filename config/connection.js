import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/book_Stroe_db");
    console.log("DB Connectes successfuly");
  } catch (error) {
    console.log(error);
  }
};
