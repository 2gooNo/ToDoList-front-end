"use client";

import AddTodoAndList from "./_components/AddTodoAndList";
import { ModeToggle } from "./_components/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row-reverse">
        <ModeToggle />
      </div>
      <AddTodoAndList />
    </main>
  );
}
