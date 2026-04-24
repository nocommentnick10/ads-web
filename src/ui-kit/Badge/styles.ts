import type { StatusKey } from "./Badge.type"

const defaultStyles = `inline-flex
 max-h-6
 items-center
 max-w-25
 pt-[7]
 pr-3
 pb-[7]
 pl-3
 rounded-[100px]
 font-medium
 text-sm
 text-white
 text-center
 align-middle
 leading-[18]
 tracking-normal
 capitalize
 shadow-xs

`
const statusColor = {
  inProgress: "bg-[#F9A811]",
  new: "bg-[#319E4B]",
  closed: "bg-[#E61641]",
  canceled: "bg-[#ADADAD]",
}
export const createStatusClassName = (status: StatusKey): string => {
  const colorStyles = statusColor[status]

  const classes = [defaultStyles, colorStyles]
  return classes.join(" ")
}
