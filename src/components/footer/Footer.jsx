import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
    <div style={{backgroundColor: 'rgb(21, 32, 41)'}}>
        <div className="container pt-5 pb-4">
            <div className="row">
                <div className="col-md-3">
                    <img src="assets/images/footer-logo.png" style={{marginBottom: '20px'}} alt="" />
                    <p className='footer-para'>203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>
                    <ul className='footer-contact ps-0'>
                        <li><i className="bi bi-telephone me-1 theme-color1"></i> 123-456-789</li>
                        <li><i className="bi bi-envelope me-1 theme-color1"></i> contact@yourdomain.com</li>
                        <li><i className="bi bi-globe-americas me-1 theme-color1"></i> www.yourdomain.com</li>
                    </ul>
                    <div className='my-3'>
                        <ul className='d-flex list-unstyled ps-0'>
                            <li className='footer-social me-1'><i className="bi bi-google"></i></li>
                            <li className='footer-social mx-1'><i className="bi bi-facebook"></i></li>
                            <li className='footer-social mx-1'><i className="bi bi-twitter"></i></li>
                            <li className='footer-social mx-1'><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4 className='footer-title'>Useful Links</h4>
                    <ul className='footer-ul ps-0'>
                        <li className='footer-li'>About Us</li>
                        <li className='footer-li'>Our Service</li>
                        <li className='footer-li'>Pricing Table</li>
                        <li className='footer-li'>Project</li>
                        <li className='footer-li'>Shop</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='footer-title'>Useful Links</h4>
                    <ul className='footer-ul ps-0'>
                       <li className='footer-li'>About Us</li>
                       <li className='footer-li'>Our Service</li>
                       <li className='footer-li'>Pricing Table</li>
                       <li className='footer-li'>Project</li>
                       <li className='footer-li'>Shop</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h4 className='footer-title'>Subscribe Today!</h4>
                <form>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='email'/>
                </div>
                    <button type="submit" className="btn theme-bg-color1 w-100">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    <div className='copyright-bg'>
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='copyright'>Copyright ©2024 Pets Group Of Company. All rights reserved.</p>
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
    </>
  )
}

export default Footer
