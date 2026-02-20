import mongoose from "mongoose";

export const CreateBookColService = async () => {
  try {
    const db = mongoose.connection.db;
    await db.createCollection("books", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["title"],
          properties: {
            title: {
              bsonType: "string",
              minLength: 1,
            },
          },
        },
      },
      validationLevel: "strict",
      validationAction: "error",
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};
export const createAuthorsCollectionService = async (body) => {
  try {
    const { name, nationality } = body;
    const db = mongoose.connection.db;
    return await db.collection("authors").insertOne({
      name,
      nationality,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createLogsCollectionService = async () => {
  try {
    const db = mongoose.connection.db;
    await db.createCollection("logs", {
      capped: true,
      size: 1024 * 1024,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CreateBooksIndexService = async () => {
  try {
    const db = mongoose.connection.db;
    await db.collection("books").createIndex({ title: 1 });
  } catch (error) {
    console.log(error);
  }
};
