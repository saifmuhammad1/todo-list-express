import Todo from "../models/todo.models";
import { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  try {
    console.log("req.body:", req.body);
    const todo = await Todo.create(req.body);
    return res.status(201).json({ message: "Todo created ", todo });
  } catch (error) {
    console.log("th error is ", error);
    res.status(500).json({ error });
  }
};

export const getTodoList = async (req: Request, res: Response) => {
  try {
    // const page = req.query.page || 1;
    // const limit = req.query.limit || 10;

    // const startIndex = (Number(page) - 1) * Number(limit);

    const todo = await Todo.find();
    // .skip(startIndex).limit(Number(limit));
    return res.status(200).json({ result: [...todo] });
  } catch (error) {
    console.log("th error is ", error);
    res.status(500).json({ error });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    if (!id) return res.status(400).json({ error: "ID not found" });
    console.log(id);
    const todo = await Todo.findById(id);
    return res.status(201).json({ todo });
  } catch (error) {
    console.log("th error is ", error);
    res.status(500).json({ error });
  }
};

export const updateTodoData = async (req: Request, res: Response) => {
  try {
    // const id = req.query.id as string;
    // if (!id) return res.status(400).json({ error: "ID not found" });
    // console.log(id);
    const todo = await Todo.findByIdAndUpdate(req.body.ID, req.body, {
      new: true,
    });
    return res.status(201).json({ message: "Todo Updated", todo });
  } catch (error) {
    console.log("th error is ", error);
    res.status(500).json({ error });
  }
};

export const deleteTodoData = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    if (!id) return res.status(400).json({ error: "ID not found" });
    console.log(id);
    const todo = await Todo.findByIdAndDelete(id);
    return res.status(201).json({ message: "Deleted", todo });
  } catch (error) {
    console.log("th error is ", error);
    res.status(500).json({ error });
  }
};
