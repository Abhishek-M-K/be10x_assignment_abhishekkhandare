"use client";
import React from "react";
import { useGlobalState } from "../context/global-provider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { incompleteTasks } = useGlobalState();
  return <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default page;
