import React from "react"
import { Greet } from "../greet"

// Extracting a component prop types from another componet
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}