import React from 'react'
import Layout12SCSS from './Layout12.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout12() {
  return (
    <div className={Layout12SCSS["section"]}>
        <div className={Layout12SCSS["container"]}>

            <div className={Layout12SCSS["main-images"]}>
                <img src={heroImage}></img>
                <img src={heroImage}></img>
                <img src={heroImage}></img>
            </div>

            <p className='h1'>Lorem ipsum odor</p>
            <div>
              <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
              <a className='button'>Lorem</a>
            </div>
            

        </div>
    </div>
  )
}
