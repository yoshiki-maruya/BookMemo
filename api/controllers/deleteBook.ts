import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

export const deleteBook = async (req: express.Request, res: express.Response) => {
  try {
    const bookInfo = await prisma.book.delete({
      where: {
        id: req.params.id
      }
    });
    res.status(201).json(bookInfo);
    res.status
  } catch (error: any) {
    res.status(400).json({msg: error.message});
  }
}
