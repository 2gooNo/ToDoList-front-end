"use client";

import AddTodo from "./_components/AddTodo";
import { ModeToggle } from "./_components/theme-toggle";
import { TodoList } from "./_components/TodoList";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row-reverse">
        <ModeToggle />
      </div>
      <AddTodo />
      <TodoList />
    </main>
  );
}
