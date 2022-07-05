import { Task } from "../types";
import { Trash } from "./Trash";

interface CardTaskProps {
  task: Task;
  onTaskClick: (task: Task) => void;
}

export function CardTask({ task, onTaskClick }: CardTaskProps) {
  function handleCheckTask() {
    onTaskClick(task);
  }
  const taskIsComplete = task.completed;

  return (
    <div className="h-[4.5rem] w-full bg-gray-500 rounded-lg border border-gray-400 flex justify-between items-start px-4 py-4">
      <div className="flex items-start justify-start gap-3">
        <input
          onChange={handleCheckTask}
          id={task.id?.toString()}
          type="checkbox"
          className="flex-shrink-0 bg-transparent rounded-full border-2 accent border-blue w-[17.45px] h-[17.45px] cursor-pointer checked:border-0 checked:bg-purpleDark  focus:outline-none focus:ring-transparent  focus:ring-offset-1 focus:ring-offset-blueDark transition  duration-200 bg-no-repeat bg-center bg-contain float-left "
        ></input>
        <label
          htmlFor={task.id?.toString()}
          className={`font-normal text-xs cursor-pointer leading-1 ${
            taskIsComplete ? "line-through text-gray-300" : ""
          }`}
        >
          {task.description}
        </label>
      </div>
      <Trash />
    </div>
  );
}
