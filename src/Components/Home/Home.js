import React from 'react'
import HomeSCSS from './Home.module.scss'
import { Link } from 'react-router-dom'

// Images
import heroImage from './Images/heroImage.jpg'
import L1 from './Images/L1.png';
import L2 from './Images/L2.png';
import L3 from './Images/L3.png';
import L4 from './Images/L4.png';
import L5 from './Images/L5.png';
import L6 from './Images/L6.png';
import L7 from './Images/L7.png';
import L8 from './Images/L8.png';
import L9 from './Images/L9.png';
import L10 from './Images/L10.png';
import L11 from './Images/L11.png';
import L12 from './Images/L12.png';

export default function Home() {
  return (
    <div className={HomeSCSS["section"]}>
      <div className={HomeSCSS["container"]}>
        <p className='h5'>Hero Layouts Examples</p>
        <p className='caption'>*psst! source code coming soon!</p>

        <div className={HomeSCSS["grid"]}>
          <Link to="/layout01"><div class="div1"><img src={L1}></img><p className='base-text'></p></div></Link>
          <Link to="/layout02"><div class="div2"><img src={L2}></img><p className='base-text'></p></div></Link>
          <Link to="/layout03"><div class="div3"><img src={L3}></img><p className='base-text'></p></div></Link>
          <Link to="/layout04"><div class="div4"><img src={L4}></img><p className='base-text'></p></div></Link>
          <Link to="/layout05"><div class="div5"><img src={L5}></img><p className='base-text'></p></div></Link>
          <Link to="/layout06"><div class="div6"><img src={L6}></img><p className='base-text'></p></div></Link>
          <Link to="/layout07"><div class="div7"><img src={L7}></img><p className='base-text'></p></div></Link>
          <Link to="/layout08"><div class="div8"><img src={L8}></img><p className='base-text'></p></div></Link>
          <Link to="/layout09"><div class="div9"><img src={L9}></img><p className='base-text'></p></div></Link>
          <Link to="/layout10"><div class="div10"><img src={L10}></img><p className='base-text'></p></div></Link>
          <Link to="/layout11"><div class="div11"><img src={L11}></img><p className='base-text'></p></div></Link>
          <Link to="/layout12"><div class="div12"><img src={L12}></img><p className='base-text'></p></div></Link>
        </div>
      </div>
      
    </div>
  )
}
