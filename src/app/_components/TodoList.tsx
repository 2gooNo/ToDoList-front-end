"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import ListItem from "./ListItem";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import Home from "../page";
import { TodoType } from "@/lib/types";
import { useGetAllTodoQuery } from "@/generated/pages/index";

export function TodoList() {
  const { data, loading, error } = useGetAllTodoQuery();

  if (loading) {
    return <div>This is loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!loading) {
    return (
      <Card className="w-[700px] m-auto">
        <Table>
          <TableCaption>A list of todos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              ? data?.getAllTodo?.map((todo, index) => (
                  <ListItem key={index} oneTodo={todo} />
                ))
              : ""}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                {data?.getAllTodo?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    );
  }
}
