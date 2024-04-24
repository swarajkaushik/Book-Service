const mongoose = require("mongoose");
const Book = require("../mongo-schemas/Book");

class BookService {
  async postBook(payload) {
    try {
      const result = await Book.create(payload);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllBooks(searchQuery) {
    try {
      let query = {};
      if (searchQuery.search) {
        query = {
          $or: [
            { title: { $regex: searchQuery?.search, $options: "i" } },
            { author: { $regex: searchQuery?.search, $options: "i" } },
            { year: parseInt(searchQuery?.search) || null },
          ],
        };
      }
      const books = await Book.find(query);
      return books;
    } catch (error) {
      console.error(error);
    }
  }

  async updateBook(bookId, payload) {
    try {
      if (payload.owner) {
        delete payload.owner;
      }
      const result = await Book.findOneAndUpdate(
        {
          _id: bookId,
        },
        payload,
        {
          new: true,
        }
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteBook(bookId) {
    try {
      const result = await Book.findOneAndDelete({
        _id: bookId,
      });
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BookService;
