import Books from "../Modal/BookSchema.js";

const UpdateOneItem = async (req, res) => {
  const { id } = req.params;
  const {name , ISBN , price , avaliablity} = req.body;
  const newBook = {
    name ,
    ISBN,
    price , 
    avaliablity
}
try {

const UpdatedItem = await Books.findByIdAndUpdate(id, {$set :newBook },{new : true})
if (!UpdatedItem ) {
return res.status(404).json({
  message: "Item not found"
})
}

console.log(UpdatedItem);

return res.json({
message : "Item Updated successfully",
data : UpdatedItem
})
}
catch (error) {
return res.status(500).json(error);
}
} 

export default UpdateOneItem;