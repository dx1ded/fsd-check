import { Task } from "entities/task"

type TaskName = Task["name"]
type TaskId = Task["id"]

export type TaskAction =
  | { type: "ADD_TASK", name: TaskName }
  | { type: "TOGGLE_TASK", id: TaskId }

export function addTask(name: TaskName): TaskAction {
  return { type: "ADD_TASK", name }
}

export function toggleTask(id: TaskId): TaskAction {
  return { type: "TOGGLE_TASK", id }
}
