export interface NewBooks {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface NewBooksResponse {
  books: NewBooks[]
}

export interface NewBooksState {
  error: boolean
  loading: boolean
  books: MainBook[]
  searchQuery: string
  limit: number
}

// isbn13

export interface BookByIsbn13 {
  error: string
  title: string
  subtitle: string
  authors: string
  publisher: string
  language: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc: string
  price: string
  image: string
  url: string
  pdf: object
}

export interface BookByIsbn13State {
  error: boolean
  loading: boolean
  book: MainBook
}

// --main book (full data)

export interface MainBook extends BookByIsbn13 {
  isFavorite: boolean
  inCart: boolean
  counterValue: number
}

export interface StateChangeCounter {
  book: MainBook
  value: string
}
