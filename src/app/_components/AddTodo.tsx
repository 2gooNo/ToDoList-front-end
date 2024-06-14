// AddTodo.js
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
import axios from "axios";
import Home from "../page";

const AddTodo = ({ setTodoData, todoData }) => {
  const [inputVal, setInputVal] = useState("");
  const [groupVal, setGroupVal] = useState("");
  const [inputAppear, setInputAppear] = useState(false);

  // console.log(inputVal, groupVal);

  async function addTodo() {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/todoMethods/todoFunctions",
        {
          title: inputVal,
          status: false,
          team: groupVal,
        }
      );
      // console.log(data);
      setTodoData([data.allTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <div className="flex gap-2 max-w-[800px] m-auto mb-[40px]">
      <Input
        type="text"
        placeholder="Todo Title"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button variant={"outline"} onClick={addTodo}>
        Add
      </Button>
      <div>
        <Select onValueChange={(e) => setGroupVal(e)}>
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
      {inputAppear && <Input type="text" placeholder="Enter team name" />}
    </div>
  );
};

export default AddTodo;
