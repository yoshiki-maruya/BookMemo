import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

export const createBook = async (req: express.Request, res: express.Response) => {
  const {title, content} = req.body;
  try {
    const bookInfo = await prisma.book.create({
      data:{
        title: title,
        content: content,
        }
    });
    res.status(201).json(bookInfo);
    res.status
  } catch (error: any) {
    res.status(400).json({msg: error.message});
  }
}
