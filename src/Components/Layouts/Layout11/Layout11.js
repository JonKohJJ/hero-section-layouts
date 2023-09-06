import React from 'react'
import './Layout11.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout11() {
  return (
    <div className='layout11-div'>
        <div className='container'>

            <div className='grid'>
                <div class="div1"><img src={heroImage}></img></div>
                <div class="div2"><img src={heroImage}></img></div>
                <div class="div3">
                    <p className='h1'>Lorem ipsum odor ipsum</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                    <a className='button'>Lorem</a>
                </div>
                <div class="div4"><img src={heroImage}></img></div>
                <div class="div5"><img src={heroImage}></img></div>
            </div>
            
        </div>
    </div>
  )
}
