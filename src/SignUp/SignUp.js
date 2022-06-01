import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './_SignUp.scss'

export default function SignUp({}) {

  let [isValid, setValid] = useState(false)

  const addNameHandler = (e) =>{
    if(e.target.value.match(/[0-9]/)){
      setValid(isValid = false)
    }
    else{
      setValid(isValid = true)
    }
  }

  const addLastNameHandler = (e) =>{
    if(e.target.value.match(/[0-9]/)){
      setValid(isValid = false)
    }
    else{
      setValid(isValid = true)

    }
  }

  const addNumberHanlder = (e) =>{
    if(e.target.value.length < 10){
      setValid(isValid = false)
    }
    else{
      setValid(isValid = true)

    }
  }

  const addEmailHandler = (e) =>{
    if(!e.target.value.match(/[@]/)){
      setValid(isValid = false)
    }
    else{
      setValid(isValid = true)
    }
  }

  return (
    <>

    <div className='form-part'>
      <div className='d-flex '>
        <div>
          <img className='form-img' src='https://picsum.photos/id/2/600/600' alt="formImg" />
        </div>

        <div className='col-6 form-right-part'>

          <div className='left-text'>
            <h2 className='form-title'>Sign up</h2>
          </div>
          
          <form  className='d-flex form-group  flex-column'>
            <TextField
              onChange={addNameHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'} form-inputs-names`}
              id="demo-helper-text-aligned"
              label="First name"
              required
            />

            <TextField
              onChange={addLastNameHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-aligned-no-helper"
              label="Last name"
              required
            />
         
            <TextField
              onChange={addNumberHanlder}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-misaligned"
              label="Phone"
              type='number'
              required
            />

            <TextField
              onChange={addEmailHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-misaligned"
              label="Email"
              type='email'
              required
            />

            <Link to='/Home' className='td-none'>
              <Button type='submit' className='form-btn mt-3' variant="contained">Next step</Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}
