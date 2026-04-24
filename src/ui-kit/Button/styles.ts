import type { ButtonProps } from "./Button.type"

const baseStyles =
  "max-w-3xs flex items-center font-medium disabled:text-[#CCCCCC] disabled:bg-[#EBEBEB]"

const withTextStyles = "gap-2 text-sm pt-2 pr-4 pb-2 pl-3"
const iconOnlyStyles = "p-1"

export const colorVariants = {
  green: `bg-[#319E4B]
  text-white
  hover:bg-[#067220]
  active:bg-[#067220]
  transition-colors
  duration-300`,

  blue: `bg-[#24A6BE]
  text-white
  hover:bg-[#00748C]
  transition-colors
  duration-300`,

  neutral: `bg-[#EBEBEB]
  text-[#858585]
  hover:bg-[#E0E0E0]
  active:bg-[#E0E0E0]`,

  transparent: "bg-transparent hover:bg-[#E0E0E0] active:bg-[#E0E0E0]",
}

export const borderVariants = {
  none: "",
  true: "rounded-lg border border-[#CCCCCC]",
}

export const outlineVariant = {
  none: "",
  true: "rounded-xl outline-2 outline-black",
}

export const textTransformVariant = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
}

export const colorTextVariants = {
  white: "text-white disabled:text-[#E0E0E0]",
  gray: "text-[#858585] hover:text-[#5C5C5C] active:text-[#5C5C5C] disabled:text-[#E0E0E0]",
  blue: "text-[#24A6BE]",
}

export const borderColorVariants = {
  white: "border-white disabled:border-[#E0E0E0]",
  gray: "border-[#858585] hover:border-[#5C5C5C] active:border-[#5C5C5C] disabled:border-[#E0E0E0]",
  blue: "border-[#24A6BE]",
}

const sizeVariants = {
  xs: "min-w-[80px]",
  sm: "min-w-[100px]",
  md: "min-w-[120px]",
  lg: "min-w-[140px]",
}

export function createClassName(button: ButtonProps): string {
  const {
    text,
    color = "transparent",
    colorText = "gray",
    size = "md",
    border = "none",
    borderColor = "white",
    outline = "none",
    textDecoration = "capitalize",
    disabled,
  } = button

  const isWithText = Boolean(text && text.length)

  const classes = [
    baseStyles,
    isWithText ? withTextStyles : iconOnlyStyles,

    sizeVariants[size],

    colorVariants[color],

    color === "transparent" && colorText === "white"
      ? colorTextVariants.gray
      : colorTextVariants[colorText],

    textTransformVariant[textDecoration],

    disabled ? borderVariants.true : borderVariants[border],
    borderColorVariants[borderColor],

    outlineVariant[outline],
  ]

  return classes.filter(Boolean).join(" ")
}
