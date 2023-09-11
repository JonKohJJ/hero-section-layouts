import React from 'react'
import Layout02SCSS from './Layout02.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout02() {
  return (
    <div className={Layout02SCSS["section"]}>
      <div className={Layout02SCSS["container"]}>

        <div className={Layout02SCSS["left"]}>
          <p className='h3'>Lorem ipsum odor amet, consectetuer</p>
          <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
          orci suscipit. Leo maecenas in tristique</p>
          <a className={Layout02SCSS["button"]}>Lorem</a>
        </div>

        <div className={Layout02SCSS["right"]}>
          <img src={heroImage} />
        </div>

      </div>
    </div>
  )
}
