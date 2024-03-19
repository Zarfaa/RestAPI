import Books from "../Modal/BookSchema.js";
import dto from "../Validation/Validator.js";

const createBook = async (req, res) => {
  const { error} = dto.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const { name, ISBN, price, avaliablity } = req.body;

  try {
    const newBook = await Books.create({
      name,
      ISBN,
      price,
      avaliablity
    });
    return res.json({
      message: "Product created successfully",
      data: newBook
    });
  } catch (error) {
    return res.status(500).json(error)
  }


};

export default createBook;
