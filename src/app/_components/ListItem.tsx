import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoList } from "./TodoList";

type Props = {
  todo: TodoType;
  setTodoData: Dispatch<SetStateAction<undefined>>;
};

export default function ListItem({ todo, setTodoData }: Props) {
  // const [todoData, setTodoData] = useState();
  async function deleteTodo() {
    const response = await axios.delete(
      `http://localhost:8080/todoMethods/todoFunctions?id=${todo._id}`
    );
    console.log(response.data.allTodo);
    setTodoData(response.data.allTodo);
  }

  async function markAsDone() {
    const response = await axios.post(
      "http://localhost:8080/todoMethods/UPDATE",
      {
        id: todo._id,
      }
    );
    console.log(response.data.allTodo);
    setTodoData(response.data.allTodo);
  }

  // function deleteTodo() {
  //   const newTodo = todos.filter((toDo: TodoType) => toDo.id !== todo.id);
  //   console.log(newTodo);
  //   setTodos(newTodo);
  // }

  // console.log(todos);
  return (
    <TableRow className={`${todo.status ? "line-through bg-secondary" : ""}`}>
      <TableCell className="font-medium">{todo.title}</TableCell>
      <TableCell>{todo.status ? "DONE" : "PENDING"}</TableCell>
      <TableCell>{todo.team}</TableCell>
      <TableCell className="flex gap-2 flex-row-reverse">
        <Button
          variant={"outline"}
          disabled={todo.status}
          onClick={() => markAsDone()}
        >
          Mark as done
        </Button>
        <Button onClick={() => deleteTodo()} size={"sm"} variant={"ghost"}>
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
}
