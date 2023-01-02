import express, { Router } from "express";
import { createBook } from "../controllers/createBook";
import { deleteBook } from "../controllers/deleteBook";
import { getBooks } from "../controllers/getBooks";

const router: Router = express.Router();

router.post('/createbook', createBook);
router.get('/getbooks', getBooks);
router.delete('/deletebook', deleteBook);

export default router;
