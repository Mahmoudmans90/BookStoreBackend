import { Router } from "express";
import {
  aggregate2,
  aggregate3,
  aggregate4,
  aggregate5,
  CreateBook,
  CreateMultiBook,
  DeleteBooksByYear,
  findBookByTitle,
  findBooksBetweenTwoDates,
  getBooksByGener,
  getBooksWithSkipLimit,
  SortBooks,
  updateBook,
} from "../controller/book.controller.js";

const BookRouter = Router();
BookRouter.post("/", CreateBook);
BookRouter.post("/batch", CreateMultiBook);
BookRouter.patch("/:title", updateBook);
BookRouter.get("/title", findBookByTitle);
BookRouter.get("/year", findBooksBetweenTwoDates);
BookRouter.get("/gener", getBooksByGener);
BookRouter.get("/skip-limit", getBooksWithSkipLimit);
BookRouter.delete("/", DeleteBooksByYear);
BookRouter.get("/aggregiate", SortBooks);
BookRouter.get("/aggregiate2", aggregate2);
BookRouter.get("/aggregiate3", aggregate3);
BookRouter.get("/aggregiate4", aggregate4);
BookRouter.get("aggregiate5", aggregate5);
export default BookRouter;
