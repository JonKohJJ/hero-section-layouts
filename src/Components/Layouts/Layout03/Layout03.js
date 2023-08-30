import React from 'react'
import './Layout03.scss'

// Images
import img1 from './Images/img1.jpg'

export default function Layout03() {
  return (
    <div className='layout03-div'>
        <div className='container'>

            <div className='top'>
                <p className='h3'>Lorem ipsum odor amet, consectetuer adipiscing elit</p>
                <div>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique</p>
                    <a className='button'>Lorem</a>
                </div>
            </div>

            <div className='bottom'>
                <img src={img1}></img>
            </div>


        </div>
    </div>
  )
}
