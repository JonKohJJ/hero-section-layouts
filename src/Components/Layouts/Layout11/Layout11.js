import React from 'react'
import Layout11SCSS from './Layout11.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout11() {
  return (
    <div className={Layout11SCSS["section"]}>
        <div className={Layout11SCSS["container"]}>

            <div className={Layout11SCSS["grid"]}>
                <div class={Layout11SCSS["div1"]}><img src={heroImage}></img></div>
                <div class={Layout11SCSS["div2"]}><img src={heroImage}></img></div>
                <div class={Layout11SCSS["div3"]}>
                    <p className='h1'>Lorem ipsum odor ipsum</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor</p>
                    <a className='button'>Lorem</a>
                </div>
                <div class={Layout11SCSS["div4"]}><img src={heroImage}></img></div>
                <div class={Layout11SCSS["div5"]}><img src={heroImage}></img></div>
            </div>
            
        </div>
    </div>
  )
}
