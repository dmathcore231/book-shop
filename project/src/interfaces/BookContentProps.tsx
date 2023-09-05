import { MainBook } from "../interfaces/book"

export interface BookContentProps {
  onClickFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  data: MainBook
}
