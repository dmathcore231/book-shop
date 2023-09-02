import { MainBook } from "../interfaces/book"

export interface BookContentProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  data: MainBook
}
