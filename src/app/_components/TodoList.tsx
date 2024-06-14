// "use client";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card } from "@/components/ui/card";
// import ListItem from "./ListItem";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Home from "../page";

// // type Props = {
// //   setTodoData: Dispatch<SetStateAction<undefined>>;
// // };

// export function TodoList({ setTodoData, todoData }) {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     const data = await axios.get(
//       "http://localhost:8080/todoMethods/todoFunctions"
//     );
//     // console.log(data.data.allTodo);
//   }

//   return (
//     <Card className="w-[700px] m-auto">
//       <Table>
//         <TableCaption>A list of todos</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Title</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Team</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {todoData
//             ? todoData.map((todo, index) => (
//                 <ListItem key={index} todo={todo} setTodoData={setTodoData} />
//               ))
//             : ""}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={3}>Total</TableCell>
//             {/* <TableCell className="text-right">{todos.length}</TableCell> */}
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </Card>
//   );
// }
