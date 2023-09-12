import React, { useState, useEffect }from 'react'
import './Typography.scss'

export default function Typography() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className="section">
        <div className="container">
            {/* <p>Width: {windowSize}</p> */}
            <div>
              <p className="h1">Heading h1</p>
              {windowSize >= 960 ? 
                <p className="typography-info-text">(h3*1.618) ∙ Poppins ∙ Medium 500</p> :
                <p className="typography-info-text">(h5*1.618) ∙ Poppins ∙ SemiBold 600</p>
              }
            </div>


            <div>
              <p className="h3">Heading h3</p>
              <p className="typography-info-text">(h5*1.618) ∙ Poppins ∙ Regular 400</p>
            </div>
            

            <div>
              <p className="h5">Heading h5</p>
              <p className="typography-info-text">(body text*1.618) ∙ Poppins ∙ Regular 400</p>
            </div>
            

            <div>
              <p className="base-text">Body text</p>
              <p className="typography-info-text">17px / 19px ∙ Poppins ∙ Regular 400</p>
            </div>
            
            <div>
              <p className="base-text bold">Bold text</p>
              <p className="typography-info-text">17px / 19px ∙ Poppins ∙ Medium 500</p>
            </div>

            {/* <div>
              <p className="base-text light">Body text</p>
              <p className='typography-info-text'>19px ∙ Poppins ∙ Light 300</p>
            </div> */}

            <div>
              <p className="caption">Caption text</p>
              <p className="typography-info-text">(body text/1.618) ∙ Poppins ∙ Regular 400</p>
            </div>
          
        </div>
    </section>
  )
}
