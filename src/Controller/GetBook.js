import  Books  from "../Modal/BookSchema.js";

const getBookByID = async (req, res) => {
  const { id } = req.params;
  try {
    const Book = await Books.findById(id);

    if (!Book) {
      return res.status(404).json({
        message: "Book not found"
      })
    }

    return res.json({
      message: "Book retreived successfully",
      data: Book
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default getBookByID