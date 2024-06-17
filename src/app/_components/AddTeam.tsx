"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useAddTeamMutation } from "@/generated/pages/index";

const Props = {
  newTeamVal: String,
};

export default function AddTeam() {
  const [newTeamVal, setNewTeamVal] = useState({});
  useEffect(() => {
    console.log("new team val", newTeamVal);
  }, [newTeamVal]);

  const [addTeamMutation, { data, loading, error }] = useAddTeamMutation({
    variables: {
      input: newTeamVal,
    },
  });
  const handleAddTeam = () => {
    addTeamMutation;
  };

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>This is loading</div>;
  }

  if (!loading) {
    return (
      <Input
        onChange={(e) =>
          setNewTeamVal((prev) => ({ ...prev, newTeam: e.target.value }))
        }
        type="text"
        placeholder="Enter team name"
      />
    );
  }
}
