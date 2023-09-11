import React from 'react'
import Layout05SCSS from './Layout05.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout05() {
  return (
    <div className={Layout05SCSS["section"]}>
        <div className={Layout05SCSS["container"]}>

            <div className={Layout05SCSS["inner-container"]}>
                <p className='h1'>Lorem ipsum odor amet, consectetuer non etiam tempor</p>
                <img src={heroImage}></img>
            </div>
            
            <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
        </div>
    </div>
  )
}
