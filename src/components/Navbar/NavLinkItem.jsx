import { NavLink } from 'react-router-dom'

const NavLinkItem = ({ to, label, styles }) => {
  return (
    <div className={`${styles}`}>
      <NavLink
        exact
        to={to}
        className={`${to === '/#' && 'readOnly'} navLinkItem`}
        activeClassName="activeNavLinkItem"
      >
        <span>{label}</span>
      </NavLink>
    </div>
  )
}

export default NavLinkItem
