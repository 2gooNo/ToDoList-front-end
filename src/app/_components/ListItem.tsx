import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoList } from "./TodoList";

export default function ListItem(oneTodo: TodoType) {
  const [todoData, setTodoData] = useState();
  // async function deleteTodo() {
  //   const response = await axios.delete(
  //     `http://localhost:8080/todoMethods/todoFunctions?id=${todo._id}`
  //   );
  //   console.log(response.data.allTodo);
  //   setTodoData(response.data.allTodo);
  // }

  // async function markAsDone() {
  //   const response = await axios.post(
  //     "http://localhost:8080/todoMethods/UPDATE",
  //     {
  //       id: todo._id,
  //     }
  //   );
  //   console.log(response.data.allTodo);
  //   setTodoData(response.data.allTodo);
  // }

  // function deleteTodo() {
  //   const newTodo = todos.filter((toDo: TodoType) => toDo.id !== todo.id);
  //   console.log(newTodo);
  //   setTodos(newTodo);
  // }

  // console.log(todos);
  return (
    <TableRow
      className={`${oneTodo.status ? "line-through bg-secondary" : ""}`}
    >
      <TableCell className="font-medium">{oneTodo.title}</TableCell>
      <TableCell>{oneTodo.status ? "DONE" : "PENDING"}</TableCell>
      <TableCell>{oneTodo.team}</TableCell>
      <TableCell className="flex gap-2 flex-row-reverse">
        <Button
          variant={"outline"}
          disabled={oneTodo.status}
          // onClick={() => markAsDone()}
        >
          Mark as done
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
}
