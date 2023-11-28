import { createElement } from "react"
import { ChildrenProp } from "shared/types"
import "./index.scss"

interface HeadingProps extends ChildrenProp {
  tag: string
}

export function Heading({ children, tag }: HeadingProps) {
  return createElement(
    tag,
    { className: "heading" },
    children
  )
}
