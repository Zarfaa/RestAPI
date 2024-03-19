
import mongoose, { Schema } from "mongoose"

const booksSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 3
    },
    ISBN: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
        max: 50000,
        min: 300
    },
    avaliabilty: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const books = mongoose.model("Books", booksSchema)

export default books
