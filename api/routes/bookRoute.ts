import express, { Router } from "express";
import {
    createBook
} from "../controllers/createBook";

const router: Router = express.Router();

router.post('/book', createBook);

export default router;
