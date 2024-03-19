import { Router } from 'express';

import CreateBookController from "../Controller/CreateBook.js"
import DeleteBookConroller from "../Controller/DeleteBook.js"
import GetAllBookController from "../Controller/GetAllBooks.js"
import GetOneBookController from "../Controller/GetBook.js"
import UpdateBookController from "../Controller/UpdateBook.js"

const BooksRouter = Router();

BooksRouter.get("/" , GetAllBookController);
BooksRouter.delete("/deletebook/:id" , DeleteBookConroller);
BooksRouter.put("/updatebook/:id" , UpdateBookController);
BooksRouter.get("/:id" , GetOneBookController);
BooksRouter.post("/createbook" , CreateBookController);

export default BooksRouter;
