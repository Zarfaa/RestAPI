import Books from "../Modal/BookSchema.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find()
    return res.json({
      message: "All items retreived succesffuly",
      data: books
    })
  }
  catch (error) {
    return res.status(500).json(error)
  }
};

export default getAllBooks;
