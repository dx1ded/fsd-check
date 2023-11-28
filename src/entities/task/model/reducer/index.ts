import { v4 as uuidv4 } from "uuid"
import { Task } from "entities/task"
import { TaskAction } from "./actions"

export type StateType = Task[]

const initialState: StateType = []

export const tasksReducer = (state = initialState, action: TaskAction): StateType => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: uuidv4(), name: action.name, checked: false }]
    case "TOGGLE_TASK":
      return state.map((task) => task.id === action.id
        ? { ...task, checked: !task.checked }
        : task
      )
    default: return state
  }
}
