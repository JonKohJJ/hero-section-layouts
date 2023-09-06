import React from 'react'
import './Layout06.scss'

// Images
import heroImage from './Images/heroImage.jpg'


export default function Layout06() {
  return (
    <div className='layout06-div'>

        <div className='container'>

            <div className='inner-container'>
                <p className='h1'>Lorem ipsum odor amet, consectetuer</p>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor. Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>
            
            <img src={heroImage}></img>
        </div>

    </div>
  )
}
