import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/Newtask";
import { Todo } from "../components/Todo";
import { Task } from "../types";

const TASKS_LIST: Task[] = [
  {
    id: 1,
    description: "aaaaaaaaaaaa",
    completed: false,
    dateAdded: new Date(),
  },
  {
    id: 2,
    description: "bbbbbbbbbbbbbbb",
    completed: false,
    dateAdded: new Date(),
  },
  {
    id: 3,
    description: "ccccccccccccc",
    completed: false,
    dateAdded: new Date(),
  },
];

export function Home() {
  const [tasks, setTasks] = useState<Task[]>(TASKS_LIST);

  function onNewTaskCreated(task: Task) {
    setTasks([...tasks, task]);
  }

  function onTaskClick(clickedTask: Task) {
    const allTasks = [...tasks];

    allTasks.forEach((task) => {
      if (task.id === clickedTask.id) {
        task.completed = !clickedTask.completed;
      }
    });

    setTasks([...allTasks]);
  }

  return (
    <>
      <Header />
      <main className="w-2/3 max-w-[736px] my-0 mx-auto">
        <NewTask onNewTaskCreated={onNewTaskCreated} />
        <Todo tasksList={tasks} onTaskClick={onTaskClick} />
      </main>
    </>
  );
}
