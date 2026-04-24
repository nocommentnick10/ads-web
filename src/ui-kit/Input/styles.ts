export const defaultStyles = `
border
  font-normal
  text-sm
  leading-[18]
  tracking-normal
  p-3
  pr-2
  border-0

  has-[[data-slot=input-group-control]:focus-visible]:border
  has-[[data-slot=input-group-control]:focus-visible]:ring-0
  


`
export const textColors = {
  default: "text-[#CCCCCC]",
  black: "text-black",
  blue: "text-[#24A6BE]",
  white: "text-white",
  red: "text-[#E61641] ",
}
export const borderView = {
  underline: `rounded-none
  border-x-0
  border-t-0
  border-b
  has-[[data-slot=input-group-control]:focus-visible]:border-x-0
  has-[[data-slot=input-group-control]:focus-visible]:border-t-0
  has-[[data-slot=input-group-control]:focus-visible]:border-b
  `,
  rounded: `border-1
  rounded-lg
  has-[[data-slot=input-group-control]:focus-visible]:rounded-lg

  `,
}

export const borderColors = {
  default:
    "border-[#CCCCCC] has-[[data-slot=input-group-control]:focus-visible]:border-[#CCCCCC]",
  blue: "border-[#24A6BE]  has-[[data-slot=input-group-control]:focus-visible]:border-[#24A6BE]",
  white:
    "border-white has-[[data-slot=input-group-control]:focus-visible]:border-white",
  red: "border-[#E61641] has-[[data-slot=input-group-control]:focus-visible]:border-[#E61641]",
}
