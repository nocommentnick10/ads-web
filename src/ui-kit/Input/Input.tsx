import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { IInput } from "./Input.type"

import { borderColors, borderView, defaultStyles, textColors } from "./styles"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const Input = ({
  colorScheme: color = "default",
  type = "text",

  id,
  readOnly,
  textLabel,
  error,
  border = "underline",

  placeholder,
  icon,
  ...props
}: IInput) => {
  const [typeInput, setTypeInput] = useState<string>(
    type === "password" ? "password" : type
  )
  const createClassNameInput = (): string => {
    const classes: string[] = [
      defaultStyles,

      borderView[border],

      //если ошибка => красный цвет, в ином случае выбирается по ключу
      error && error?.length
        ? textColors["red"]
        : color === "withBlackText"
          ? textColors["black"]
          : textColors[color],

      error && error?.length
        ? borderColors["red"]
        : color === "withBlackText"
          ? borderColors["default"]
          : borderColors[color],
    ]
    return cn(classes.join(" "))
  }

  const enterColorForEyeIcon = () => {
    switch (color) {
      case "withBlackText":
        return "black"

      case "blue":
        return "#24A6BE"

      case "white":
        return "white"

      case "default":
        return "#CCCCCC"

      default:
        return color
    }
  }

  const toggleTypeInput = () => {
    if (type !== "password") {
      return
    } else {
      if (typeInput === "password") {
        setTypeInput("text")
      } else {
        setTypeInput("password")
      }
    }
  }
  const colorLabel =
    color === "white" ? textColors["white"] : textColors["black"]

  return (
    <Field {...props}>
      {textLabel?.length && (
        <FieldLabel htmlFor={id} className={colorLabel}>
          {textLabel}
        </FieldLabel>
      )}
      <InputGroup className={createClassNameInput()}>
        <InputGroupInput
          id={id}
          placeholder={placeholder || ""}
          type={typeInput}
          readOnly={readOnly}
        />
        {type === "password" ? (
          <InputGroupAddon
            align="inline-end"
            className="cursor-pointer"
            onClick={toggleTypeInput}
          >
            {typeInput === "password" ? (
              <EyeOff size={18} color={enterColorForEyeIcon()} />
            ) : (
              <Eye size={18} color={enterColorForEyeIcon()} />
            )}
          </InputGroupAddon>
        ) : icon ? (
          <InputGroupAddon align="inline-end" className="cursor-pointer">
            {icon}
          </InputGroupAddon>
        ) : null}
      </InputGroup>
      {error?.length ? (
        <FieldDescription className="text-[#E61641]">{error}</FieldDescription>
      ) : null}
    </Field>
  )
}
