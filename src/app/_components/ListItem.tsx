"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AddTodoAndList from "./AddTodoAndList";
import { useDeleteTodoMutation, useGetAllTodoQuery } from "@/generated/pages";

export default function ListItem(oneTodo: {
  oneTodo: {
    status: boolean;
    title: string;
    team: string;
    _id: String;
  };
}) {
  const { refetch } = useGetAllTodoQuery();

  const [deleteTodoMutation, { data, loading, error }] =
    useDeleteTodoMutation();

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
          disabled={oneTodo.oneTodo.status}
          // onClick={() => markAsDone()}
        >
          Mark as done
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Trash2 onClick={() => handleDelete(oneTodo.oneTodo._id as string)} />
        </Button>
      </TableCell>
    </TableRow>
  );
}
