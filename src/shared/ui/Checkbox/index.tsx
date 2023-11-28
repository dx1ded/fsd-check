import "./index.scss"

interface CheckboxProps {
  label?: string
  checked?: boolean,
  onClick?: () => void
}

export function Checkbox({ label, checked = false, onClick = () => {} }: CheckboxProps) {
  return (
    <label className="checkbox visually-hidden">
      <input type="checkbox" className="checkbox__input" checked={checked} onClick={onClick} />
      <div className="checkbox__screen" />
      {label && <span className="checkbox__text">{label}</span>}
    </label>
  )
}
