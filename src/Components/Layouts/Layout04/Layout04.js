import React from 'react'
import Layout04SCSS from './Layout04.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout04() {
  return (
    <div className={Layout04SCSS["section"]}>
        <div className={Layout04SCSS["container"]}>

          <div className={Layout04SCSS["image-div"]}>
            <img src={heroImage}></img>
          </div>
          

          <div className={Layout04SCSS["bottom"]}>
            <p className='h1'>Lorem ipsum odor amet, consectetuer</p>

            <div>
              <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
              orci suscipit. Leo maecenas in</p>

              <p className='caption'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
            </div>
            
          </div>

        </div>
    </div>
  )
}
