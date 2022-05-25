import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (

<nav className={`${styles.navbar} navbar bg-light py-3 `}>
      <div className="container">
      
        <Link to ="/" className={`${styles.brand} navbar-brand`}>Deezer App</Link>
       
        <form className="d-flex " role="search">
        <Link to="/search" className="navbar-brand">
        <FontAwesomeIcon icon={faSearch} className={styles.icon}/>      
        </Link>
        </form>
      </div>
</nav>

    )
}

export default Navbar