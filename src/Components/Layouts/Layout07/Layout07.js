import React from 'react'
import './Layout07.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout07() {
  return (
    <div className='layout07-div'>

        <div className='container'>

            <div className='left'>
                left
            </div>

            <div className='middle'>
                <img src={heroImage}></img>
            </div>

            <div className='right'>
                right
            </div>

        </div>

    </div>
  )
}
