import {
  aggregate2Service,
  aggregate3Service,
  aggregate4Service,
  aggregate5Service,
  CreateBookService,
  CreateMultiBookService,
  DeleteBooksByYearService,
  findBookByTitleService,
  findBooksBetweenTwoDatesService,
  getBooksByGenerService,
  getBooksWithSkipLimitService,
  sortBookService,
  updateBookService,
} from "../services/book.service.js";

export const CreateBook = async (req, res, next) => {
  const data = await CreateBookService(req.body);
  res.status(201).json({
    message: "Book Created successfuly",
    data,
  });
};

export const CreateMultiBook = async (req, res, next) => {
  const result = await CreateMultiBookService(req.body);
  res
    .status(result ? 201 : 400)
    .json({ result } || { message: "please provide some books to insert" });
};

export const updateBook = async (req, res, next) => {
  const result = await updateBookService(req);
  res.status(200).json({
    message: "book Updated Successfuly",
    result,
  });
};

export const findBookByTitle = async (req, res, next) => {
  const result = await findBookByTitleService(req.query.title);
  res
    .status(result ? 200 : 404)
    .json(result ? { result } : { message: "book not found" });
};

export const findBooksBetweenTwoDates = async (req, res) => {
  const result = await findBooksBetweenTwoDatesService(req.query);
  res
    .status(result ? 200 : 404)
    .json(result ? { result } : { message: "book not found" });
};

export const getBooksByGener = async (req, res) => {
  const { gener } = req.query;
  if (!gener) {
    return res.status(400).json({
      message: "gener is required",
    });
  }
  const result = await getBooksByGenerService(gener);
  res.status(200).json({
    result,
  });
};

export const getBooksWithSkipLimit = async (req, res) => {
  const result = await getBooksWithSkipLimitService();
  res.status(200).json({ result });
};

export const DeleteBooksByYear = async (req, res) => {
  const result = await DeleteBooksByYearService(req.query);
  if (!result) {
    return res.status(400).json({
      message: "Year is required",
    });
  }

  res.status(200).json({
    message: "Books Deleted successfuly",
    result,
  });
};

export const SortBooks = async (req, res) => {
  const result = await sortBookService();
  console.log(result);

  if (result.length === 0) {
    return res.status(404).json({
      message: "No Books found ",
    });
  }
  res.status(200).json({
    result,
  });
};

export const aggregate2 = async (req, res) => {
  const result = await aggregate2Service();
  if (result.length == 0) {
    return res.status(404).json({
      message: "No Book Found",
    });
  }
  res.status(200).json({
    result,
  });
};

export const aggregate3 = async (req, res) => {
  const result = await aggregate3Service();
  if (!result || result.length === 0) {
    return res.status(404).json({
      message: "No Book is Found",
    });
  }
  res.status(200).json({ result });
};
export const aggregate4 = async (req, res) => {
  const result = await aggregate4Service();
  if (!result || result.length < 1) {
    return res.status(404).json({
      message: "No Book Found",
    });
  }
  res.status(200).json({
    result,
  });
};

export const aggregate5 = async (req, res) => {
  const result = await aggregate5Service();
  if (!result || result.length < 1) {
    return res.status(404).json({
      message: "No Book found",
    });
  }
  res.status(200).json({
    result,
  });
};
