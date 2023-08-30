
export function SearchInput(): JSX.Element {
  return (
    <form className="search-input d-flex gap-2 align-items-center w-50">
      <input type="text" className="form-control" placeholder="Search" />
      <img className="search-input__img" src="/src/images/Icon-Search.png" alt="" />
    </form>
  )
}
