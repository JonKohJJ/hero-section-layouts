import React from 'react'
import './Layout09.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout09() {
  return (
    <div className='layout09-div'>

      <div className='container'>

        <p className='h1'>Lorem ipsum odor non etiam </p>

        <div className='below-title'>
            <div>
              <img src={heroImage}></img>
              {/* <p className='h3'>Lorem ipsum odor non etiam </p> */}
            </div>

            <div>
              <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
              <a className='button'>Lorem</a>
            </div>
        </div> 

      </div>

    </div>
  )
}
