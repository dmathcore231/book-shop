import { MainBook } from "../interfaces/book"

export interface CardBookProps {
  bookData: MainBook
  cardSize: 'm' | 'xl'
  onClickCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
