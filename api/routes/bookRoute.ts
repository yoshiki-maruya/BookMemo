import express, { Router } from "express";
import { createBook } from "../controllers/createBook";
import { getBooks } from "../controllers/getBooks";

const router: Router = express.Router();

router.post('/book', createBook);
router.get('/getbooks', getBooks);

export default router;
