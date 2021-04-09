import { NavLink } from 'react-router-dom'

import './../../assets/styles/components/NavLinkItem.css'

const NavLinkItem = ({ to, label, styles }) => {
  return (
    <div className={styles}>
      <NavLink exact to={to} className="navLinkItem" activeClassName="activeNavLinkItem">
        <span>{label}</span>
      </NavLink>
    </div>
  )
}

export default NavLinkItem
