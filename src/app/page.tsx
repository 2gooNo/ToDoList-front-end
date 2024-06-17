"use client";

import AddTodo from "./_components/AddTodo";
import { ModeToggle } from "./_components/theme-toggle";
import { TodoList } from "./_components/TodoList";
import { useGetAllTodoQuery } from "@/generated/pages/index";
export default function Home() {
  const { data, loading, error } = useGetAllTodoQuery();
  console.log(data);
  if (loading) {
    return <div>This is loading</div>;
  }

  if (!loading) {
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
}
