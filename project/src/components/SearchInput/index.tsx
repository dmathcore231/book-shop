
export function SearchInput(): JSX.Element {
  return (
    <form className="search-input d-flex gap-2">
      <input type="text" className="form-control" placeholder="Search" />
      <div className="search-input__icon pt-1">
        <img className="search-input__img" src="./src/images/Icon-Search.png" alt="" />
      </div>
    </form>
  )
}
