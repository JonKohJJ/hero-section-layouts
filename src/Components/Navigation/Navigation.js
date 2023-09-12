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
          {/* <Link to="/" onClick={() => setActive(false)}><p className='h5'>Hero Layouts</p></Link> */}
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
            <Link to="/layout05" onClick={() => setActive(false)}>Layout 05</Link>
            <Link to="/layout06" onClick={() => setActive(false)}>Layout 06</Link>
            <Link to="/layout07" onClick={() => setActive(false)}>Layout 07</Link>
            <Link to="/layout08" onClick={() => setActive(false)}>Layout 08</Link>
            <Link to="/layout09" onClick={() => setActive(false)}>Layout 09</Link>
            <Link to="/layout10" onClick={() => setActive(false)}>Layout 010</Link>
            <Link to="/layout11" onClick={() => setActive(false)}>Layout 011</Link>
            <Link to="/layout12" onClick={() => setActive(false)}>Layout 012</Link>
            <Link to="/typography" onClick={() => setActive(false)}>Typography</Link>
          </div>
        </>
      }

    </div>  

  )
}
