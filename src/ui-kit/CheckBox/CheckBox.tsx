import type { ICheckBox } from "./CheckBox.type"
import { Checkbox as ShadCnCheckBox } from "@/components/ui/checkbox"

import { createClassNameCheckBox } from "./styles"

export const CheckBox = ({ ...otherProps }: ICheckBox) => {
  return (
    <ShadCnCheckBox
      className={createClassNameCheckBox({ ...otherProps })}
      {...otherProps}
    />
  )
}
