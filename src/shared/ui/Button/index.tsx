import { ChildrenProp } from "shared/types"
import "./index.scss"

interface ButtonProps extends ChildrenProp {
  [key: string]: any
}

export function Button({ children, ...props }: ButtonProps) {
  return <button className="button" {...props}>{children}</button>
}
