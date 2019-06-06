import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Button from '../components/Button'
import images from '../assets/images'

const Header = () => (<header id="header">
  <div className="content header-wrap">
 <section>
      <Link to="/home" id="header__branding">
        <img src={images.logo} alt="header logo" />
        <span className="brand-text">CRUD</span>
      </Link>
    </section>
    <nav>
      <NavLink
        to={'/users'}
        className="nav-link"
        activeClassName="nav-link--active">
            Users
      </NavLink>
      <NavLink
        to={'/projects'}
        className="nav-link"
        activeClassName="nav-link--active">
          Projects
      </NavLink>
    </nav>
    <section>
      <Button
        type="button"
        icon="user-circle"
        iconSize="3x"
        iconButton
      />
    </section>
  </div>
</header>)

export default Header
