import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navContainer '>
            <Link to='/'>Logo</Link>
            <ul>
                <li>
                    <Link to='/user'>
                        user
                    </Link>
                </li>

                <li>
                    <Link to='/preferiti'>
                        preferiti
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar