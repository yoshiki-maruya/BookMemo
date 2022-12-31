import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

export const getBooks = async (req: express.Request, res: express.Response) => {
  try {
    const bookInfo = await prisma.book.findMany();
    res.status(201).json(bookInfo);
    res.status
  } catch (error: any) {
    res.status(400).json({msg: error.message});
  }
}
