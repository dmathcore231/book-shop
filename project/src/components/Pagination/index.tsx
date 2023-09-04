import { NavLink } from "react-router-dom"
import { PaginationProps } from "../../interfaces/PaginationProps"

export function Pagination({ pageUrl, pagesCounter }: PaginationProps): JSX.Element {
  const pagination = []
  let pageNumber = 1

  while (pageNumber <= pagesCounter) {
    pagination.push(
      <li key={pageNumber} className="page-item">
        <NavLink to={`/${pageUrl}/${pageNumber}`} className={({ isActive }) => isActive ? "page-link active" : "page-link"}>
          {pageNumber}
        </NavLink>
      </li>
    )
    pageNumber++
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <nav className="navbar">
      <ul className="pagination ">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pagination}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
