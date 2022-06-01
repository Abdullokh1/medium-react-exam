import React from 'react'
import EndPart from '../../Home/EndPart/EndPart'
import Navbar from '../../Home/Navbar/Navbar'
import './InnerInfo.scss'

export default function InnerInfo() {
  return (
    <div className='d-flex justify-content-between'>
      <div>
        <nav className='navbar'>
          <Navbar/>
        </nav>
      </div>

      <div className='container p-5'>
        <div className='d-flex mb-4 justify-content-between inner-info-main align-items-center'>
          <div className='d-flex'>
            <button className='user-btn fs-3 me-3 p-4 d-flex align-items-center justify-content-center'> A </button>
            <div>
              <h3 className='m-0 inner-info'>Giyasov Abdullo</h3>
              <p className='inner-info m-0'>May 31 . 17 Stories </p>
            </div>
          </div>
          <button className='inner-info-user'>
            <i class='bx bx-dots-horizontal-rounded'></i>
          </button>
        </div>
        <div className='innerInfo-section'>
          <h2 className='inner-info-title'>Reading list</h2>
        </div>
      </div>

      <div>
        <EndPart/>
      </div>
      
    </div>
  )
}
