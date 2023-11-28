import { useContext, useReducer } from "react"
import { StateType, tasksReducer } from "./reducer"
import { addTask, toggleTask } from "./reducer/actions"
import { TasksContext } from "./context"

export function useTasksContext(initialState: StateType = []) {
  const [state, dispatch] = useReducer(
    tasksReducer,
    initialState
  )

  return { state, dispatch }
}

export function useTasks() {
  const { state, dispatch } = useContext(TasksContext)

  return {
    state,
    dispatch,
    addTask,
    toggleTask
  }
}
