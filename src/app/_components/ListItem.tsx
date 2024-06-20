"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  useDeleteTodoMutation,
  useGetAllTodoQuery,
  useMarkAsDoneMutation,
  Todo,
} from "@/generated/pages";
import { Trash2 } from "lucide-react";

export const ListItem = (oneTodo: { oneTodo: Todo }) => {
  const { refetch } = useGetAllTodoQuery();

  const [markAsDoneMutation] = useMarkAsDoneMutation({});

  const [deleteTodoMutation] = useDeleteTodoMutation();

  const handleDelete = async (id: string) => {
    await deleteTodoMutation({
      variables: { input: { id: id as string } },
    })
      .then(async () => {
        await refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeStatus = async (id: string) => {
    await markAsDoneMutation({
      variables: { input: { todoId: id as string } },
    })
      .then(async () => {
        await refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TableRow
      className={`${
        oneTodo?.oneTodo.status ? "line-through bg-secondary" : ""
      }`}
    >
      <TableCell className="font-medium">{oneTodo?.oneTodo.title}</TableCell>
      <TableCell>{oneTodo.oneTodo.status ? "DONE" : "PENDING"}</TableCell>
      <TableCell>{oneTodo.oneTodo.team}</TableCell>
      <TableCell className="flex gap-2 flex-row-reverse">
        <Button
          variant={"outline"}
          disabled={oneTodo?.oneTodo?.status || false}
          onClick={() => handleChangeStatus(oneTodo.oneTodo._id as string)}
        >
          Mark as done
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Trash2 onClick={() => handleDelete(oneTodo.oneTodo._id as string)} />
        </Button>
      </TableCell>
    </TableRow>
  );
};
