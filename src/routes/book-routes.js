const express = require("express");
const bookControllerIns = require("../constrollers/index");

const router = express.Router();
router.post("/book/create", async (req, res) => {
  const result = await bookControllerIns.postBook(req, res);
  return result;
});

router.get("/book/getAll", async (req, res) => {
  const result = await bookControllerIns.getAllBooks(req, res);
  return result;
});

router.put("/book/update/:bookId", async (req, res) => {
  const result = await bookControllerIns.updateBook(req, res);
  return result;
});

router.delete("/book/delete/:bookId", async (req, res) => {
  const result = await bookControllerIns.deleteBook(req, res);
  return result;
});

module.exports = router;
