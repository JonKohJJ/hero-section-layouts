import React from 'react'
import './Layout04.scss'

// Images
import heroImage from './Images/heroImage2.jpg'

export default function Layout04() {
  return (
    <div className='layout04-div'>
        <div className='container'>

          <img src={heroImage}></img>

          <div className='bottom'>
            <p className='h1'>Lorem ipsum odor amet, consectetuer</p>

            <div>
              <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
              orci suscipit. Leo maecenas in</p>

              <p className='caption'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
            </div>
            
          </div>

        </div>
    </div>
  )
}
