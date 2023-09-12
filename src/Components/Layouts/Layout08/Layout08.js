import React from 'react'
import Layout08SCSS from './Layout08.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout08() {
  return (
    <div className={Layout08SCSS["section"]}>
        <div className={Layout08SCSS["container"]}>
            <div class={Layout08SCSS["grid"]}>
                <div class={Layout08SCSS["div1"]}>
                    <p className='h1'>Lorem ipsum odor amet, consectetuer</p>
                </div>
                <div class={Layout08SCSS["div2"]}><img src={heroImage}></img></div>
                <div class={Layout08SCSS["div3"]}> 
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor, Non etiam tempor id arcu magna ante eget.</p>
                    <a className='button'>Lorem</a>
                </div>
                <div class={Layout08SCSS["div4"]}><img src={heroImage}></img></div>
                <div class={Layout08SCSS["div5"]}><img src={heroImage}></img></div>
                <div class={Layout08SCSS["div6"]}><img src={heroImage}></img></div>
                

            </div>
        </div>
    </div>
  )
}
