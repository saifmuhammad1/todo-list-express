import { Router } from "express";
import {
  createTodo,
  deleteTodoData,
  getTodoById,
  getTodoList,
  updateTodoData,
} from "../controller/todo.controller";

const router = Router();

router.post("/create", createTodo);
router.get("/", getTodoList);
router.get("/getTodoByid", getTodoById);
router.put("/updateTodo", updateTodoData);
router.delete("/deleteTodoData", deleteTodoData);

export default router;
