import {
  createAuthorsCollectionService,
  CreateBookColService,
  CreateBooksIndexService,
  createLogsCollectionService,
} from "../services/collection.srevice.js";

export const createAuthorsCollection = async (req, res, next) => {
  const data = await createAuthorsCollectionService(req.body);

  if (!data) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
  return res.status(201).json({
    acknowledged: data.acknowledged,
    insertedId: data.insertedId,
  });
};

export const CreateBookCollection = async (req, res, next) => {
  if (await CreateBookColService()) {
    res.status(201).json({
      message: "Collection Created Successfuly",
    });
  }
};

export const createLogsCollection = async (req, res, next) => {
  await createLogsCollectionService();
  res.status(201).json({
    message: "Logs Collection created successfuy",
  });
};

export const CreateBooksIndex = async (req, res, next) => {
  await CreateBooksIndexService();
  res.status(201).json({
    ok: true,
  });
};
