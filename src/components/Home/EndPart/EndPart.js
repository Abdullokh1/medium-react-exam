import React from 'react'
import './EndPart.scss'

export default function EndPart() {
  return (
    <>
    <div className='end-part d-flex flex-column p-5 text-center'>
      <button className='bg-dark text-white end-part__btn mb-5'>Get unlimited access</button>
       <input className='end-part__input ps-4' type="text" placeholder='Search' />
    </div>
    
    </>
  )
}
