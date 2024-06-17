// "use client";

// import { TodoType } from "@/lib/types";
// import React, {
//   ReactNode,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type Props = {
//   children: ReactNode;
// };
// type TodoContextType = {
//   todos: TodoType[];
//   setTodos: (todos: TodoType[]) => void;
// };
// const TodoContext = createContext({} as TodoContextType);

// export const useTodo = () => {
//   return useContext(TodoContext);
// };

// const TodoProvider = (props: Props) => {
//   const [todos, setTodos] = useState<TodoType[]>([]);
//   const { children } = props;

//   useEffect(() => {
//     const getTodos = async () => {
//       const res = await fetch("/todo/api");
//       const data = await res.json();
//       setTodos(data.todos);
//     };
//     getTodos();
//   }, []);

//   return (
//     <TodoContext.Provider value={{ todos, setTodos }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export default TodoProvider;
