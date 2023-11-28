import { TaskRow, useTasks } from "entities/task"
import { ToggleTask } from "features/toggle-task"
import { AddTask } from "features/add-task"
import "./index.scss"

export function TasksList() {
  const { state } = useTasks()

  return (
    <div className="tasks-list">
      {state.map((task) => (
        <TaskRow
          key={task.id}
          id={task.id}
          name={task.name}
          toggle={<ToggleTask id={task.id} />}
        />
      ))}
      <AddTask />
    </div>
  )
}
