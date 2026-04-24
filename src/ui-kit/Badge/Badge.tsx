import type { FC } from "react"
import { STATUS_MAP, type IBadge } from "./Badge.type"
import { createStatusClassName } from "./styles"

export const Badge: FC<IBadge> = ({ status, ...props }: IBadge) => {
  const statusText = STATUS_MAP[status]
  return (
    <div className={createStatusClassName(status)} {...props}>
      <span>{statusText}</span>
    </div>
  )
}
