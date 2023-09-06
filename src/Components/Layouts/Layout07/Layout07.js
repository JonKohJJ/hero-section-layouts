import React from 'react'
import './Layout07.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout07() {
  return (
    <div className='layout07-div'>

        <div className='container'>

            <div className='left'>
                <p className='h3'>Lorem ipsum odor amet, consectetuer non etiam</p>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor, posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>

            <div className='middle'>
                <img src={heroImage}></img>
            </div>

            <div className='right'>
                <div>
                    <p className='h5'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
                <div>
                    <p className='h5'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
                <div>
                    <p className='h5'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
            </div>

        </div>

    </div>
  )
}
