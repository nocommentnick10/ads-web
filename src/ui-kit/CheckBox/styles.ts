import type { ICheckBox } from "./CheckBox.type"
const baseClass = `rounded-2
  border-2
  focus:ring-2
  focus:ring-offset-2
  focus:ring-offset-white
  focus:ring-transparent
  data-[state=checked]:border-transparent`
export const sizeCheckBox = {
  sm: "w-[18] h-[18]",
  md: "w-8 h-8",
  lg: "w-10 h-10",
}

export const colorCheckBox = {
  blue: " text-white data-checked:bg-[#24A6BE]",
  green: " text-white data-checked:bg-[#319E4B]",
  default: "bg-transparent text-white data-checked:bg-gray-300",
}

export const createClassNameCheckBox = ({
  size = "md",
  color = "default",
}: ICheckBox) => {
  const sizeClass = size ? sizeCheckBox[size] : sizeCheckBox.md
  const colorClass = color ? colorCheckBox[color] : colorCheckBox.default

  const classes = [baseClass, sizeClass, colorClass]
  return classes.join(" ")
}
