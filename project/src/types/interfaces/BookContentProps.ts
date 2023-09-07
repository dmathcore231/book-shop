import { MainBook } from "./Book"

export interface BookContentProps {
  onClickFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  data: MainBook
}
