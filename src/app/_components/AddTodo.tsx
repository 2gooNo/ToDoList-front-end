"use client";

import React, { useState, useEffect } from "react";
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
import AddTeam from "./AddTeam";

const AddTodo = () => {
  const [inputAppear, setInputAppear] = useState(false);
  const [addTodoData, setAddTodoData] = useState({ status: false });

  const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
    variables: {
      input: addTodoData,
    },
  });

  const handleAddTodo = () => {
    addTodoMutation;
  };
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>This is loading</div>;
  }

  if (!loading) {
    return (
      <div className="flex gap-2 max-w-[800px] m-auto mb-[40px]">
        <Input
          type="text"
          placeholder="Todo Title"
          onChange={(e) =>
            setAddTodoData((prev) => ({ ...prev, todoTitle: e.target.value }))
          }
        />
        <Button variant={"outline"} onClick={() => handleAddTodo()}>
          Add
        </Button>
        <div>
          <Select
            onValueChange={(e) =>
              setAddTodoData((prev) => ({ ...prev, groupVal: e }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="My-1">My-1</SelectItem>
              <SelectItem value="My-2">My-2</SelectItem>
              <SelectItem value="My-3">My-3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setInputAppear(!inputAppear)}>
          {inputAppear ? "Cancel" : "Add team"}
        </Button>
        {inputAppear && <AddTeam />}
      </div>
    );
  }
};

export default AddTodo;
