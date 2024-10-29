const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  UpdateBookData,
  delSingleBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

//post a book
router.post("/create", verifyAdminToken, postABook);

//get all books
router.get("/", getAllBooks);

//single book endpoint
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBookData);

//delete a book
router.delete("/del/:id", verifyAdminToken, delSingleBook);

module.exports = router;
