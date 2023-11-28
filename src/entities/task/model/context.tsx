import { createContext } from "react"
import { ChildrenProp } from "shared/types"
import { useTasksContext } from "./hooks"

type TasksContextType = ReturnType<typeof useTasksContext>

const defaultState: TasksContextType = { state: [], dispatch() {} }

export const TasksContext = createContext<TasksContextType>(defaultState)

export function TasksProvider({ children }: ChildrenProp) {
  return (
    <TasksContext.Provider value={useTasksContext()}>
      {children}
    </TasksContext.Provider>
  )
}
