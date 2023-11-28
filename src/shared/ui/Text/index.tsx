import { ChildrenProp } from "shared/types"
import "./index.scss"

export function Text({ children }: ChildrenProp) {
  return <p className="text">{children}</p>
}
