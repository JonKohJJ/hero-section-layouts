import React from 'react'
import './Layout08.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout08() {
  return (
    <div className='layout08-div'>
        <div className='container'>
            <div class="grid">
                <div class="div1"><img src={heroImage}></img></div>
                <div class="div2"><img src={heroImage}></img></div>
                <div class="div3"><img src={heroImage}></img></div>
                <div class="div4"><img src={heroImage}></img></div>
                <div class="div5">
                    <p className='h1'>Lorem ipsum odor amet, consectetuer non etiam tempor</p>
                </div>
                <div class="div6"> 
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor, Non etiam tempor id arcu magna ante eget.</p>
                    <a className='button'>Lorem</a>
                </div>
            </div>
        </div>
    </div>
  )
}
