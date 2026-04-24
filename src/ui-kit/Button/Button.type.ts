import type { ButtonHTMLAttributes, ReactNode } from "react"
import type {
  borderColorVariants,
  borderVariants,
  colorTextVariants,
  colorVariants,
  outlineVariant,
  textTransformVariant,
} from "./styles"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | ReactNode

  text?: string
  colorText?: keyof typeof colorTextVariants | "gray"

  color?: keyof typeof colorVariants | "neutral"

  size?: "xs" | "sm" | "md" | "lg"
  border?: keyof typeof borderVariants | "none"
  borderColor?: keyof typeof borderColorVariants | "white"
  outline?: keyof typeof outlineVariant | "none"
  textDecoration?: keyof typeof textTransformVariant | "capitalize"
}
