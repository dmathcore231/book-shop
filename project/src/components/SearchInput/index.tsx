import { useState } from 'react'
import { useNavigate } from 'react-router'
import './styles.scss'

export function SearchInput(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
    if (searchQuery !== '') {
      event.preventDefault()
      setSearchQuery('')
      navigate(`/search/${searchQuery}`)
    }
  }

  return (
    <form className="search-input d-flex gap-2 align-items-center w-50" onSubmit={handleSubmitSearch}>
      <input type="text" className="form-control" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
      <button className='btn' type="submit">
        <img className="search-input__img" src="/src/images/Icon-Search.png" alt="" />
      </button>

    </form>
  )
}
