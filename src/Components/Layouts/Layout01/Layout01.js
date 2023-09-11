import React from 'react'
import Layout01SCSS from './Layout01.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout01() {
  return (

    <div className={Layout01SCSS["section"]}>
      <div className={Layout01SCSS["container"]}>

        <div className={Layout01SCSS["left"]}>
          <p className='h3'>Lorem ipsum odor amet, consectetuer</p>
          <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
          orci suscipit. Leo maecenas in tristique</p>
          <a className={Layout01SCSS["button"]}>Lorem</a>
        </div>

        <div className={Layout01SCSS["right"]}>
          <img src={heroImage} />
        </div>

      </div>
    </div>

  )
}
