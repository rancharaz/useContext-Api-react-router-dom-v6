import React from 'react'
import { Link
 } from 'react-router-dom'
const Navbar = () => {
  return (
        <>
                <nav className="navbar">
                    <div className="navbar-content flex">
                    <div className="logo text-white text-3xl p-5">
                           <Link to="/">Logo</Link>  
                         </div>
                         <ul className='flex text-white p-6'>
                                <Link to="/"> Homepage </Link>      
                                <Link to="/aboutus" > About us </Link>
                                <Link to="/contactus" > Contact us </Link>
                         </ul>
                    </div>

                       
                </nav>
        </>
  )
}

export default Navbar