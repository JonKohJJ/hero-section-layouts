import React from 'react'
import Layout10SCSS from './Layout10.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout10() {
  return (
    <div className={Layout10SCSS["section"]}>
        <div className={Layout10SCSS["container"]}>

            <div className={Layout10SCSS["grid"]}>
                <div class={Layout10SCSS["div1"]}><img src={heroImage}></img></div>

                <div class={Layout10SCSS["div2"]}>
                    <p className='h1'>Lorem ipsum</p>
                </div>

                <div class={Layout10SCSS["div3"]}>
                    <p className='h1'>Lorem ipsum odor ipsum</p>
                </div>

                <div class={Layout10SCSS["div4"]}><img src={heroImage}></img></div>

            </div>

            <div className={Layout10SCSS["below-grid"]}>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>

        </div>
    </div>
  )
}
