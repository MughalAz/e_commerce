import React from 'react';
import './topbar.css'

const TopBar = () => {
  return (
    <div className='py-2' style={{background: '#395747'}}>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-4 col-6">
                <span className='top-font'><i className="bi bi-truck"></i> Some day delivery</span>
            </div>
            <div className="col-md-8 col-6">
                <ul className='top-ul'>
                    <li className='show-desktop'><i className="bi bi-chat-dots"></i> Live Help</li>
                    <li className='show-desktop'>|</li>
                    <li><i className="bi bi-telephone"></i> 22200008</li>
                    <li className='show-desktop'>|</li>
                    <li className='show-desktop'>Eng</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
