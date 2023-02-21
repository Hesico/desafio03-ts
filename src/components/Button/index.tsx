import { MouseEventHandler } from "react"
import { Btn } from "./style"

interface Ibutton {
  onClickEvent: MouseEventHandler,
  text: string
}

export default function Button({onClickEvent,text} : Ibutton) {
  return (
    <Btn onClick={onClickEvent}>{text}</Btn>
  )
}
