import React from 'react'
import Layout03SCSS from './Layout03.module.scss'

// Images
import img1 from './Images/heroImage.jpg'

export default function Layout03() {
  return (
    <div className={Layout03SCSS["section"]}>
        <div className={Layout03SCSS["container"]}>

            <div className={Layout03SCSS["top"]}>
                <p className='h1'>Lorem ipsum odor amet, consectetuer</p>
                <div>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique</p>
                    <a className={Layout03SCSS["button"]}>Lorem</a>
                </div>
            </div>

            <div className={Layout03SCSS["bottom"]}>
                <img src={img1}></img>
            </div>


        </div>
    </div>
  )
}
