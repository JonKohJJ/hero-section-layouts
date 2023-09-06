import React from 'react'
import './Layout10.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout10() {
  return (
    <div className='layout10-div'>
        <div className='container'>

            <div className='grid'>
                <div class="div1"><img src={heroImage}></img></div>

                <div class="div2">
                    <p className='h1'>Lorem ipsum odor</p>
                </div>

                <div class="div3">
                    <p className='h1'>Lorem ipsum odor ipsum</p>
                </div>

                <div class="div4"><img src={heroImage}></img></div>

            </div>

            <div className='below-grid'>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>

        </div>
    </div>
  )
}
