import { Link } from "react-router-dom"
import { TabsProps } from "../../types/interfaces/TabsProps"
import { useState } from "react"

export function Tabs({ data }: TabsProps): JSX.Element {
  const [selectBookInfo, setSelectBookInfo] = useState('description')

  function handleClickSelectOption(option: string) {
    setSelectBookInfo(option)
  }

  const getDataBookInfo = (): string => {
    switch (selectBookInfo) {
      case 'description':
        return data.desc
      case 'authors':
        return data.authors
      case 'reviews':
        return 'Unfortunately there are no reviews yet!'
      default:
        return ''
    }
  }

  return (
    <>
      <nav className="nav-bar-book">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <Link
              to="#"
              onClick={() => handleClickSelectOption('description')}
              className={`nav-link text-dark ${selectBookInfo === 'description' ? 'active' : ''}`}
            >
              Description
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              onClick={() => handleClickSelectOption('authors')}
              className={`nav-link text-dark ${selectBookInfo === 'authors' ? 'active' : ''}`}
            >
              Authors
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              onClick={() => handleClickSelectOption('reviews')}
              className={`nav-link text-dark ${selectBookInfo === 'reviews' ? 'active' : ''}`}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <div className="book-info">
        <p className="book-info__text">{getDataBookInfo()}</p>
      </div>
    </>
  )
}
