import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "../types";
import { PlusButton } from "./PlusButton";

interface NewTaskProps {
  onNewTaskCreated: (task: Task) => void;
}
export function NewTask({ onNewTaskCreated }: NewTaskProps) {
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  function handleNewTaskCreated(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      description: newTaskDescription,
      completed: false,
      dateAdded: new Date(),
    };
    onNewTaskCreated(newTask);
    setNewTaskDescription("");
  }

  function handleNewTaskDescriptionChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    event.target.setCustomValidity("");
    setNewTaskDescription(event.target.value);
  }

  function handleNewTaskDescriptionInvalid(
    event: InvalidEvent<HTMLInputElement>
  ) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  return (
    <form
      onSubmit={handleNewTaskCreated}
      className="w-full h-12 -mt-7 flex justify-center items-start "
    >
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskDescriptionChange}
        value={newTaskDescription}
        className="h-full w-full w-max-[736px] rounded-lg bg-gray-500 border-gray-700 border placeholder-gray-300 pl-4 px-4 mr-2"
        required
        onInvalid={handleNewTaskDescriptionInvalid}
      />
      <button
        type="submit"
        className="h-full w-full max-w-[90px] bg-blueDark rounded-lg font-bold text-sm flex justify-center items-center gap-2 border-2 border-gray-700"
      >
        <span>Criar</span>
        <span>
          <PlusButton />
        </span>
      </button>
    </form>
  );
}
