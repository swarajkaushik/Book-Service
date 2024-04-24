const express = require("express");
const bookControllerIns = require("../constrollers/index");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/book/create", auth, async (req, res) => {
  const result = await bookControllerIns.postBook(req, res);
  return result;
});

router.get("/book/getAll", auth, async (req, res) => {
  const result = await bookControllerIns.getAllBooks(req, res);
  return result;
});

router.put("/book/update/:bookId", auth, async (req, res) => {
  const result = await bookControllerIns.updateBook(req, res);
  return result;
});

router.delete("/book/delete/:bookId", auth, async (req, res) => {
  const result = await bookControllerIns.deleteBook(req, res);
  return result;
});

module.exports = router;
