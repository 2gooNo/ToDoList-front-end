"use client";

import AddTodo from "./_components/AddTodo";
import { ModeToggle } from "./_components/theme-toggle";
import { TodoList } from "./_components/TodoList";
import { useState } from "react";
export default function Home() {
  const [todoData, setTodoData] = useState();
  return (
    <main className="">
      <div className="flex flex-row-reverse">
        <ModeToggle />
      </div>
      <AddTodo setTodoData={setTodoData} todoData={todoData} />
      <TodoList setTodoData={setTodoData} todoData={todoData} />
    </main>
  );
}
