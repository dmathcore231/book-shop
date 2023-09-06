import { MainBook } from "../interfaces/book"

export interface CardBookProps {
  bookData: MainBook
  cardSize: 'm' | 'xl'
  onClick?: {
    cancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    decrement?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    increment?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  }
}
