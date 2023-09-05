import { NavLink } from 'react-router-dom'
import IconBack from '../../images/Icon-Arrow-Left.png'

export function LinkBackPage(): JSX.Element {
  return (
    <NavLink to="#" onClick={() => window.history.back()} className="link-back text-dark link-underline-light">
      <img src={IconBack} alt="back" />
    </NavLink>
  )
}
