import React from 'react'
import { useLocation } from 'react-router-dom'
import EndPart from '../../Home/EndPart/EndPart'
import Navbar from '../../Home/Navbar/Navbar'
import './InnerInfo.scss'

export default function InnerInfo({userName,lastName, isSaved}) {
  let SocialIcons = [
    'bx social-icons bxl-twitter',
    'bx social-icons bxl-facebook-circle', 
    'bx social-icons bxl-linkedin-square',
    'bx social-icons bx-copy', 
    'bx social-icons bxs-bookmark',
    'bx social-icons bx-dots-horizontal-rounded'
  ]

  let locationId = useLocation()
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
            <button className='user-btn fs-3 me-3 p-4 d-flex align-items-center justify-content-center'> 
              <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU" 
              alt="user-img" width={50} height={50} />
            </button>
            <div>
              <h3 className='m-0 mb-1 inner-info'>{userName} {lastName}</h3>
              <p className='inner-info m-0'>May 31 . 17 Stories </p>
            </div>
          </div>
          <ul className='m-0  p-0 d-flex'>
            {SocialIcons.map((item, i) => {
              return (
                <li key={i} className='me-2'>
                  <div className=' social-media-btn-wrap'>
                    <button  className='bg-transparent'>
                      <i className={item}></i>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {isSaved.map((item, index) =>{
          if(index === Number(locationId.pathname.split('/').at(-1))){
            return (
              <div className='innerInfo-section mt-5'>
                <h4 className='mb-4'>{item.changeName}</h4>
                <img 
                src="https://picsum.photos/id/3/692/374" 
                alt="avatar-img" width={692} height={374} />
              </div>
            )
          }
        })}

      </div>

      <div>
        <EndPart/>
      </div>
      
    </div>
  )
}
