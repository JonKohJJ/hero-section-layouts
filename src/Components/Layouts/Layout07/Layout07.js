import React from 'react'
import Layout07SCSS from './Layout07.module.scss'

// Images
import heroImage from './Images/heroImage.jpg'

export default function Layout07() {
  return (
    <div className={Layout07SCSS["section"]}>

        <div className={Layout07SCSS["container"]}>

            <div className={Layout07SCSS["left"]}>
                <p className='h3'>Lorem ipsum odor amet, consectetuer non etiam</p>
                <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor, posuere cubilia cras porttitor</p>
                <a className='button'>Lorem</a>
            </div>

            <div className={Layout07SCSS["middle"]}>
                <img src={heroImage}></img>
            </div>

            <div className={Layout07SCSS["right"]}>
                <div>
                    <p className='h5 bold'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
                <div>
                    <p className='h5 bold'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
                <div>
                    <p className='h5 bold'>Lorem ipsum odor</p>
                    <p className='base-text'>Non etiam tempor id arcu magna ante eget. Nec per posuere</p>
                </div>
            </div>

        </div>

    </div>
  )
}
