const bookServiceIns = require("../services/index");

class BookController {
  async postBook(req, res) {
    try {
      const response = await bookServiceIns.postBook(req?.body);
      return res.status(201).json({
        data: response,
        success: true,
        error: {},
        message: "Successfully created the book",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        err: error,
        message: "Cannot create the book",
      });
    }
  }

  async getAllBooks(req, res) {
    try {
      const response = await bookServiceIns.getAllBooks(req?.query);
      return res.status(200).json({
        data: response,
        success: true,
        error: {},
        message: "Books fetched successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        err: error,
        message: "Cannot fetch books",
      });
    }
  }

  async updateBook(req, res) {
    try {
      const updatedBook = await bookServiceIns.updateBook(
        req?.params?.bookId,
        req?.body
      );

      return res.status(200).json({
        data: updatedBook,
        success: true,
        error: {},
        message: "Book updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        error: error.message,
        message: "Cannot update the book",
      });
    }
  }

  async deleteBook(req, res) {
    try {
      const response = await bookServiceIns.deleteBook(req?.params?.bookId);

      return res.status(200).json({
        data: response,
        success: true,
        error: {},
        message: "Book deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        error: error.message,
        message: "Cannot delete the book",
      });
    }
  }
}

module.exports = BookController;
