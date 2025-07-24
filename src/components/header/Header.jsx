import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className="row">
                <nav>
                    <ul className="row">
                        <NavLink to={"/"}>home</NavLink>
                        <NavLink to={"/create"}>Create</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header