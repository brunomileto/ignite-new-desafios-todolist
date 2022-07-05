import { Task } from "../types";
import { CardTask } from "./CardTask";

interface TodoProps {
  tasksList: Task[];
  onTaskClick: (task: Task) => void;
}

export function Todo({ tasksList, onTaskClick }: TodoProps) {
  const totalTasks = tasksList.length;
  const tasksDone = tasksList.filter((task) => task.completed === true).length;
  return (
    <>
      <header className="w-full flex justify-around items-center mt-16 mb-6">
        <div className="flex gap-2 justify-start items-center w-full">
          <span className="text-blue font-bold text-sm w-fit">
            Tarefas Criadas
          </span>
          <span className="w-fit rounded-full bg-gray-400 font-bold text-gray-200 text-xs px-2">
            {totalTasks}
          </span>
        </div>
        <div className="flex gap-2 justify-end items-center w-full">
          <span className="text-purple font-bold text-sm w-fit">
            Concluídas
          </span>
          <span className="w-fit rounded-full bg-gray-400 font-bold text-gray-200 text-xs px-2">
            {`${tasksDone} de ${totalTasks}`}
          </span>
        </div>
      </header>
      <main className="flex flex-col gap-3">
        {tasksList.map((task) => (
          <CardTask onTaskClick={onTaskClick} key={task.id!} task={task} />
        ))}
      </main>
    </>
  );
}
