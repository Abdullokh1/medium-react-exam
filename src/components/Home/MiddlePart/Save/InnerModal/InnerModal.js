import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox } from '@mui/material'
import React, { useState } from 'react'

export default function InnerModal({isSelected,setSelected, checkSelect, setSelectCheck}) {
  let [countInput, setCountInput] = useState(0)


  const inputCountHandle = (e) =>{
    setCountInput(e.target.value.length)
  }

  const addinfoHandle = () =>{
    setSelectCheck(!checkSelect)
  }


  return (
    <div className={`backdrop ${checkSelect ? 'd-block' : 'd-none'}`}>
      <div className='modal-part text-center'>
        <div className='modal-part__inner'>
          <h3 className='modal-part__title'>Create new list</h3>
          <input onChange={inputCountHandle} className='modal-part__input' type="text" placeholder='Give it a name' />
          <div className='d-flex justify-content-end'>
            <span>{countInput}/60</span>
          </div>

          <div className='text-left mt-4'>
            <button className='text-success bg-transparent mb-3'>Add description</button><br/>
            <div className='d-flex align-items-center'>
              <Checkbox id={'ModalCheck'} color="success" />
              <label htmlFor='ModalCheck'>Make it private</label>
            </div>
          </div>

          <div className='d-flex modal-part__buttons'>
            <button onClick={() => setSelectCheck(!checkSelect)} className='modal-part__btn bg-white text-dark me-2'>Cancel</button>
            <button onClick={addinfoHandle} className={`modal-part__btn ${countInput <= 0 ? 'disabled-btn' : ''} `}>Create</button>
          </div>

          <button className='close-modal bg-transparent' onClick={() => setSelectCheck(!checkSelect)}> 
           <FontAwesomeIcon className='close-icon' icon={faClose}/>
           </button>
        </div>
      </div>
    </div>
  )
}
