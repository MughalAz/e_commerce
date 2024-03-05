import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-bg'>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <h1 className='' style={{fontWeight: 'bold'}}>LOGO</h1>
                <p className='footer-para ps-2'>Our Mission Is To Make Life Easier For Website Developers And Their Customers. Fast And Reliable Website Development.</p>
                
            </div>
            <div className="col-md-3">
                <h5 style={{fontWeight: 'bold'}}>Quick Links</h5>
                <ul className='footer-ul'>
                    <li className='footer-li'>About Us</li>
                    <li className='footer-li'>Contact Us</li>
                    <li className='footer-li'>Return Policy</li>
                    <li className='footer-li'>Become a Partner</li>
                </ul>
            </div>
            <div className="col-md-3">
                <h5 style={{fontWeight: 'bold'}}>Quick Links</h5>
                <ul className='footer-ul'>
                    <li className='footer-li'>Privacy Policy</li>
                    <li className='footer-li'>Terms & Conditions</li>
                    <li className='footer-li'>Faqs</li>
                    <li className='footer-li'>Become a Partner</li>
                </ul>
            </div>
            <div className="col-md-3">
            <div className=''>
                    <h5 style={{fontWeight: 'bold'}}>Contact Us</h5>
                    <p className='footer-para mb-0 ps-2'><i className="bi bi-telephone"></i> +923000011222</p>
                    <p className='footer-para ps-2'><i className="bi bi-envelope"></i> Contact@gmail.com</p>
                </div>
                <div className='mb-3'>
                <h5 style={{fontWeight: 'bold'}}>Follow Us</h5>
                    <ul className='d-flex list-unstyled'>
                        <li className='footer-social mx-1'><i className="bi bi-google"></i></li>
                        <li className='footer-social mx-1'><i className="bi bi-facebook"></i></li>
                        <li className='footer-social mx-1'><i className="bi bi-twitter"></i></li>
                        <li className='footer-social mx-1'><i className="bi bi-linkedin"></i></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
        <div className='theme-bg-color py-3' style={{borderTop: '1px solid #fff'}}>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='copyright'>Copyright ©2024 Petsmarket. All rights reserved.</p>
                    </div>
                    <div>
                        <img src="assets/images/knet.png" className='mx-2' width={40} height={25} alt="" />
                        <img src="assets/images/cash.png" className='mx-2' width={40} height={25} alt="" />
                        <img src="assets/images/visa.png" className='mx-2' width={40} height={25} alt="" />
                        <img src="assets/images/mastercard.png" className='mx-2' width={40} height={25} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
