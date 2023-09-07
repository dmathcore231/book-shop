import { MainBook } from "./Book"

export interface CardBookProps {
  bookData: MainBook
  cardType: 'mainCard' | 'cardInCart' | 'cardInFavorites'
  onClick?: {
    cancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    decrement?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    increment?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    favorite?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  }
}
