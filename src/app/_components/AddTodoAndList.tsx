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
import { Todo, useAddTodoMutation } from "@/generated/pages/index";
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
import { ListItem } from "./ListItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddTeamMutation } from "@/generated/pages/index";
import { useGetAllTeamQuery } from "@/generated/pages/index";

const AddTodoAndList = () => {
  const [inputAppear, setInputAppear] = useState(false);
  const [addTodoAndTeamData, setAddTodoAndTeamData] = useState({
    status: false,
    team: "",
    title: "",
  });

  const {
    refetch: todoRefetch,
    data: todoData,
    loading: todoLoading,
  } = useGetAllTodoQuery();
  const {
    refetch: teamRefetch,
    data: teamData,
    loading: teamLoading,
  } = useGetAllTeamQuery();

  const [addTeamMutation, { error: teamError }] = useAddTeamMutation({
    variables: {
      input: { teamName: addTodoAndTeamData.team },
    },
  });

  async function handleAddTeam() {
    if (addTodoAndTeamData.team == undefined) {
      toast("Please check your input");
    } else {
      await addTeamMutation();
      await teamRefetch();
      setInputAppear(false);
    }
  }

  const [addTodoMutation, { error: todoError }] = useAddTodoMutation({
    variables: {
      input: addTodoAndTeamData,
    },
  });
  console.log(todoError);

  async function handleAddTodo() {
    if (addTodoAndTeamData?.title && addTodoAndTeamData?.team) {
      await addTodoMutation();
      await todoRefetch();
    } else {
      toast("Please check your input, selection and try again");
    }
  }
  return (
    <div>
      <div className="flex gap-2 max-w-[1000px] m-auto mb-10">
        <Input
          type="text"
          placeholder="Todo Title"
          onChange={(e) =>
            setAddTodoAndTeamData({
              ...addTodoAndTeamData,
              title: e.target.value,
            })
          }
        />
        <Button variant="outline" onClick={() => handleAddTodo()}>
          Add todo
        </Button>
        <ToastContainer />
        <Select
          onValueChange={(value) =>
            setAddTodoAndTeamData({ ...addTodoAndTeamData, team: value })
          }
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            {teamLoading
              ? ""
              : teamData?.getAllTeam?.map((team, index) => {
                  return (
                    <SelectItem key={index} value={team?.teamName || ""}>
                      {team?.teamName || "Unknown Team"}
                    </SelectItem>
                  );
                })}
          </SelectContent>
        </Select>
        <Button onClick={() => setInputAppear(!inputAppear)}>
          {inputAppear ? "Cancel" : "Add team"}
        </Button>
        {inputAppear && (
          <div className="flex gap-[20px] m-l-[20px]">
            <Input
              onChange={(e) =>
                setAddTodoAndTeamData({
                  ...addTodoAndTeamData,
                  team: e.target.value,
                })
              }
              className="w-[200px]"
              type="text"
              placeholder="Enter team name"
            />
            <Button onClick={() => handleAddTeam()} variant="outline">
              Add team
            </Button>
          </div>
        )}
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
            {todoLoading
              ? ""
              : todoData?.getAllTodo?.map((todo, index) => (
                  <ListItem key={index} oneTodo={todo as Todo} />
                ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                {todoData?.getAllTodo?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
};

export default AddTodoAndList;