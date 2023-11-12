import TaskDetail from "@/components/TaskDetail";
import { getTask } from "@/data/tasks";
import Link from "next/link";

async function DetallePage({params}) {
  const task = await getTask(params.id);

  return (
    <section 
      className="flex flex-col h-full justify-center items-center"
    >
      <div
        className="space-y-5 w-2/4 lg:w-1/4"
      >
        <Link 
          href="/"
          className="px-5 py-2 bg-blue-800 rounded-lg"
        >
          back
        </Link>
        <TaskDetail 
          task={task}
        />
      </div>
    </section>
  );
}

export default DetallePage;