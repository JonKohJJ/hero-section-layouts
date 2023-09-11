import React from 'react'
import Layout06SCSS from './Layout06.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'


export default function Layout06() {
  return (
    <div className={Layout06SCSS["section"]}>

        <div className={Layout06SCSS["container"]}>

            <div className={Layout06SCSS["inner-container"]}>
                <p className='h1'>Lorem ipsum odor amet, consectetuer</p>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor. Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>
            
            <div className={Layout06SCSS["image-div"]}>
              <img src={heroImage}></img>
            </div>
            
        </div>

    </div>
  )
}
