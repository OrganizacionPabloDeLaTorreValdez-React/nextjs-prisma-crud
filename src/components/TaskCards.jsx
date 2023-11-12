"use client";
import { useEffect, useState } from "react";
import { deleteTask, getTasks } from "@/data/tasks";
import TaskCard from "./TaskCard";
import Link from "next/link";

function TaskCards() {
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fechData = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
      setLoad(false);
    };
    fechData();
  }, []);

  const deleteTaskAction = async (id) => {
    const taskRemoved = await deleteTask(id);
    if(Object.keys(taskRemoved).length) {
      const newTasks = tasks.filter(t => t.id !== id);
      setTasks(newTasks);
    }
  };

  return (
    <div className="flex flex-col justify-start gap-y-4">
      <Link 
        href={"/task/new"}
        className="text-center bg-yellow-600 hover:bg-yellow-600/50 rounded-md transition ease-out"
      >
        Agregar tarea
      </Link>
      <div
        className="grid grid-cols-3 auto-rows-fr gap-3"
      >
        {
          load ? 
            "Loading..." :
            (tasks?.length === 0 && "There is no tasks")
        }

        {
          tasks?.length > 0 &&
          tasks?.map(task => (
            <TaskCard 
              key={task?.id}
              task={task}
              deleteTaskAction={deleteTaskAction}
            />
          ))
        }
      </div>
    </div>
  );
}

export default TaskCards;