import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  const [active, setActive] = useState(false);

  return (
    <div className='navigation-div'>

      {active === false ? 
        <>
          <FontAwesomeIcon className='icons' onClick={() => setActive(true)} icon={faBars} />
          <p className='h5'>Hero Layouts</p>
        </>
        :
        <>
          <div className='nav-links'>
            <FontAwesomeIcon className='icons' onClick={() => setActive(false)} icon={faXmark} />
            <Link to="/" onClick={() => setActive(false)}>Home</Link>
            <Link to="/layout01" onClick={() => setActive(false)}>Layout 01</Link>
            <Link to="/layout02" onClick={() => setActive(false)}>Layout 02</Link>
            <Link to="/layout03" onClick={() => setActive(false)}>Layout 03</Link>
            <Link to="/layout04" onClick={() => setActive(false)}>Layout 04</Link>
            <Link to="/typography" onClick={() => setActive(false)}>Typography</Link>
          </div>
        </>
      }

    </div>  

  )
}
