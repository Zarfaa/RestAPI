import Books from "../Modal/BookSchema.js";

const DeleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const DeleteItem = await Books.findOneAndDelete(id)
    if (!DeleteItem) {
      return res.status(404).json({
        message: "Item not found"
      })
    }
    return res.json({
      message: "Item deleted successfully",
      data: DeleteItem
    })
  }
  catch (error) {
    return res.status(500).json(error);
  }
}
export default DeleteBook