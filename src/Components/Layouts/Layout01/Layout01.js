import React from 'react'
import './Layout01.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout01() {
  return (

    <div className='layout01-div'>
      <div className='container'>

        <div className='left'>
          <p className='h3'>Lorem ipsum odor amet, consectetuer</p>
          <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
          orci suscipit. Leo maecenas in tristique</p>
          <a className='button'>Lorem</a>
        </div>

        <div className='right'>
          <img src={heroImage} />
        </div>

      </div>
    </div>

  )
}
