import { MainBook } from "./Book"

export interface BookContentProps {
  onClick: {
    ClickFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    ClickCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  }
  data: MainBook
}
