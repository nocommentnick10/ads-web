import type { InputHTMLAttributes } from "react"
import type { colorCheckBox, sizeCheckBox } from "./styles"

export interface ICheckBox extends Omit<
  Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
  "size" | "color"
> {
  size?: keyof typeof sizeCheckBox | "default"
  color?: keyof typeof colorCheckBox | "default"
}
