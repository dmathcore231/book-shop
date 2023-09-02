import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/index"
import { fetchSearch } from "../../redux/searchSlice"


export function Search(): JSX.Element {
  const { searchQuery } = useParams()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.search)

  useEffect(() => {
    dispatch(fetchSearch(searchQuery as string))
  }, [dispatch, searchQuery])

  //  need fix response data (type of data swap with MainBook)
  console.log(data)
  return (
    <div>
      <h1>Search: {searchQuery}</h1>
    </div>
  )
}
