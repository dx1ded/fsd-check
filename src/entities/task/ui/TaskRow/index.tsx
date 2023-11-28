import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { Task } from "../../types"
import "./index.scss"

interface TaskRowProps extends Omit<Task, "checked"> {
  toggle: ReactElement
}

export function TaskRow({ id, name, toggle }: TaskRowProps) {
  return (
    <div className="task-row">
      {toggle}
      <Link to={`/task/${id}`}>{name}</Link>
    </div>
  )
}
