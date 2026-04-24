import type { HTMLAttributes } from "react"

const STATUS_MAP = {
  inProgress: "В работе",
  new: "Новый",
  closed: "Завершено",
  canceled: "Отменено",
} as const
export type StatusKey = keyof typeof STATUS_MAP

export type StatusLabel = (typeof STATUS_MAP)[StatusKey]

export interface IBadge extends HTMLAttributes<HTMLDivElement> {
  status: StatusKey
}

export { STATUS_MAP }
