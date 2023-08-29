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
  error: string
  total: string
  books: NewBooks[]
}
