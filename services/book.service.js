import mongoose from "mongoose";

export const CreateBookService = async (body) => {
  try {
    const db = mongoose.connection.db;
    const result = await db.collection("books").insertOne(body);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const CreateMultiBookService = async ({ books }) => {
  try {
    const db = mongoose.connection.db;
    if (!books || !Array.isArray(books) || books.length < 3) {
      return false;
    }
    const result = await db.collection("books").insertMany(books);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateBookService = async ({ params, body }) => {
  try {
    const db = mongoose.connection.db;
    const { title } = params;
    const book = await db.collection("books").findOne({ title });
    const author = body.author ?? book.author;
    const year = body.year ?? book.year;
    const geners = body.geners ?? book.geners;
    const result = await db
      .collection("books")
      .updateOne({ title }, { $set: { author, year, geners } });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const findBookByTitleService = async (title) => {
  try {
    if (!title) {
      return;
    }
    const db = mongoose.connection.db;

    const result = await db.collection("books").findOne({ title });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const findBooksBetweenTwoDatesService = async (query) => {
  try {
    const db = mongoose.connection.db;
    let { from, to } = query;
    if (!from || !to) {
      return false;
    }
    from = Number(from);
    to = Number(to);
    const result = await db
      .collection("books")
      .find({
        year: {
          $gte: from,
          $lt: to,
        },
      })
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByGenerService = async (gener) => {
  try {
    const db = mongoose.connection.db;
    const books = await db
      .collection("books")
      .find({ geners: gener })
      .toArray();
    return books;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksWithSkipLimitService = async () => {
  try {
    const db = mongoose.connection.db;
    return await db
      .collection("books")
      .find({})
      .sort({ year: -1 })
      .skip(2)
      .limit(3)
      .toArray();
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBooksByYearService = async ({ year }) => {
  try {
    if (!year) {
      return false;
    }
    const db = mongoose.connection.db;
    const result = await db.collection("books").deleteMany({
      year: {
        $lt: Number(year),
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sortBookService = async () => {
  try {
    const db = mongoose.connection.db;
    const result = await db
      .collection("books")
      .aggregate([
        {
          $match: {
            year: { $gt: 2000 },
          },
        },
        {
          $sort: {
            year: -1,
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const aggregate2Service = async () => {
  try {
    const db = mongoose.connection.db;
    const result = await db
      .collection("books")
      .aggregate([
        {
          $match: {
            year: {
              $gt: 2000,
            },
          },
        },
        {
          $project: {
            _id: 0,
            title: 1,
            author: 1,
            year: 1,
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const aggregate3Service = async () => {
  try {
    const db = mongoose.connection.db;

    const result = await db
      .collection("books")
      .aggregate([
        {
          $lookup: {
            from: "logs",
            localField: "_id",
            foreignField: "book_id",
            as: "logsData",
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const aggregate4Service = async () => {
  try {
    const db = mongoose.connection.db;
    const result = await db
      .collection("books")
      .aggregate([
        { $unwind: "$geners" },
        {
          $project: {
            _id: 0,
            title: 1,
            author: 1,
            gener: "$geners",
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const aggregate5Service = async () => {
  try {
    const db = mongoose.connection.db;
    const result = await db
      .collection("books")
      .aggregate([
        {
          $lookup: {
            from: "logs",
            localField: "_id",
            foreignField: "book_id",
            as: "LogData",
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};
