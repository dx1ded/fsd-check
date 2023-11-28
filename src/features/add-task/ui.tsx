import { Button } from "shared/ui/Button"
import { useTasks } from "entities/task"

export function AddTask() {
  const { dispatch, addTask } = useTasks()

  return (
    <Button onClick={() => dispatch(addTask("New Task"))}>Add task</Button>
  )
}
