import type { InputHTMLAttributes, ReactNode } from "react"
import type { borderView } from "./styles"

export interface IInput extends Omit<
  Omit<InputHTMLAttributes<HTMLInputElement>, "label">,
  "type"
> {
  type?: "text" | "tel" | "email" | "password"
  colorScheme?: "default" | "withBlackText" | "blue" | "white"
  border?: keyof typeof borderView
  icon?: string | ReactNode
  textLabel?: string
  error?: string
}
