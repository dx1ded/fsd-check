import { Task, useTasks } from "entities/task"
import { Checkbox } from "shared/ui/Checkbox"

interface ToggleTaskProp {
  id: Task["id"]
}

export function ToggleTask(props: ToggleTaskProp) {
  const { state, dispatch, toggleTask } = useTasks()

  return (
    <Checkbox
      checked={state.find(({ id }) => id === props.id)!.checked}
      onClick={() => dispatch(toggleTask(props.id))}
    />
  )
}
