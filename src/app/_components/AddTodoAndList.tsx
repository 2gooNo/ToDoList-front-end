"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddTodoMutation } from "@/generated/pages/index";
import { useGetAllTodoQuery } from "@/generated/pages/index";
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

const AddTodoAndList = () => {
  const [addTodoData, setAddTodoData] = useState({ status: false });
  const { refetch, data } = useGetAllTodoQuery();
  const [addTodoMutation, { loading, error }] = useAddTodoMutation({
    variables: {
      input: addTodoData,
    },
  });

  async function handleAddTodo() {
    await addTodoMutation();
    refetch();
  }

  return (
    <div>
      <div className="flex gap-2 max-w-[800px] m-auto mb-10">
        <Input
          type="text"
          placeholder="Todo Title"
          onChange={(e) =>
            setAddTodoData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Button variant="outline" onClick={() => handleAddTodo()}>
          Add todo
        </Button>
        <Select
          onValueChange={(value) =>
            setAddTodoData((prev) => ({ ...prev, team: value }))
          }
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="My-1">My-1</SelectItem>
            <SelectItem value="My-2">My-2</SelectItem>
            <SelectItem value="My-3">My-3</SelectItem>
          </SelectContent>
        </Select>
        {/* Uncomment and adjust if needed
      <Button onClick={() => setInputAppear(!inputAppear)}>
        {inputAppear ? "Cancel" : "Add team"}
      </Button>
      {inputAppear && <AddTeam />} */}
      </div>
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
    </div>
  );
};

export default AddTodoAndList;
