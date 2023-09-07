import { Link, NavLink } from 'react-router-dom'
import { PaginationProps } from '../../types/interfaces/PaginationProps'
import './styles.scss'

export function Pagination({ pageUrl, pagesCounter, page }: PaginationProps): JSX.Element {
  const pagination = []
  let pageNumber = 1
  const pageTypeNumber = Number(page)

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
          <Link to={`/${pageUrl}/${pageTypeNumber - 1 === 0 ? 1 : pageTypeNumber - 1}`} className="page-link"
            aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pagination}
        <li className="page-item">
          <Link to={`/${pageUrl}/${pageTypeNumber === pagesCounter ? pageTypeNumber : pageTypeNumber + 1}`}
            className="page-link"
            aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
