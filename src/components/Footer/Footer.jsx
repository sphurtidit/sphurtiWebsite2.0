import React from 'react'
import './Footer.css'

import imgleft from '../../assets/footer-logo-left.png'
import imgright from '../../assets/footer-logo-right.png'
import imgcenter from '../../assets/footer-logo-center.png'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <img src={imgleft} alt="" />
            </div>
            <div>
                <img src={imgcenter} alt="" />
            </div>
            <div>
                <img src={imgright} alt="" />
            </div>
        </div>
    )
}

export default Footer
