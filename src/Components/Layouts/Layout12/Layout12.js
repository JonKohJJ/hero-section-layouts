import React from 'react'
import './Layout12.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout12() {
  return (
    <div className='layout12-div'>
        <div className='container'>

            <div className='main-images'>
                <img src={heroImage}></img>
                <img src={heroImage}></img>
                <img src={heroImage}></img>
            </div>

            <p className='h1'>Lorem ipsum odor</p>
            <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
            <a className='button'>Lorem</a>

        </div>
    </div>
  )
}
