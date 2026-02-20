import { Router } from "express";
import {
  createAuthorsCollection,
  CreateBookCollection,
  CreateBooksIndex,
  createLogsCollection,
} from "../controller/collection.controller.js";

const CollectionRouter = Router();

CollectionRouter.post("/books", CreateBookCollection);
CollectionRouter.post("/authors", createAuthorsCollection);
CollectionRouter.post("/logs", createLogsCollection);
CollectionRouter.post("/books/index", CreateBooksIndex);
export default CollectionRouter;
