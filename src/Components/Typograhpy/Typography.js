import React from 'react'
import './Typography.scss'
import { useNavigate } from 'react-router-dom'

export default function Typography() {

  const navigate = useNavigate();

  return (
    <section className="typography">
        <div className="container">
            {/* <p className='caption' onClick={() => {
              navigate("/")
            }}>back to Home</p> */}
            <p className="h1">Massive Headline h1</p>
            <p className="h3">Bigger Headline h3</p>
            <p className="h5">Sub Headline h5</p>
            <p className="base-text">
              This is some base text at 18px. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facilis eveniet repellat consequuntur ipsam porro maiores nesciunt distinctio nisi? Cupiditate officiis maiores qui officia maxime numquam. Impedit unde quaerat doloremque?
            </p>
            <p className='caption'>These are some captions, smaller than the default text</p>
        </div>
    </section>
  )
}
