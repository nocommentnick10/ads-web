import type { ButtonProps } from "./Button.type.ts"
import { Button as ShadcnButton } from "@/components/ui/button"
import { createClassName } from "./styles.ts"

export const Button = (props: ButtonProps) => {
  const { text, icon, onClick: handleClick, ...rest } = props

  return (
    <ShadcnButton
      className={createClassName(props)}
      type={rest.type ?? "button"}
      disabled={rest.disabled ?? false}
      variant="none"
      onClick={handleClick}
    >
      {typeof icon === "string" ? (
        <img src={icon} className="h-6 w-6 border-none" />
      ) : (
        icon
      )}
      {text && <span className="m-0 w-fit p-0 text-center">{text}</span>}
    </ShadcnButton>
  )
}
