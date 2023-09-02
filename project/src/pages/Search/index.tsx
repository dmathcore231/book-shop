import { useParams } from "react-router-dom"

export function Search(): JSX.Element {
  const { searchQuery } = useParams()
  return (
    <div>
      <h1>Search: {searchQuery}</h1>
    </div>
  )
}
