import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TasksList } from "pages/tasks-list"
import { TaskDetails } from "pages/task-details"
import { TasksProvider } from "entities/task"
import "./index.scss"

export function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/task:id" element={<TaskDetails />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  )
}
