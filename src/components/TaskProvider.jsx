"use client";
import { createContext, useState } from "react";

export const AppContext = createContext(undefined);

function TaskProvider({children}) {
  const [editTask, setEditTask] = useState({});

  return (
    <AppContext.Provider value={
      {
        editTask,
        setEditTask,
      }
    }>
      {children}
    </AppContext.Provider>
  );
}

export default TaskProvider;