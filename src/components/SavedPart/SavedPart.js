import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EndPart from '../Home/EndPart/EndPart'
import Navbar from '../Home/Navbar/Navbar'
import ModalAdd from '../ModalAdd/ModalAdd'
import './SavedPart.scss'

export default function SavedPart({setSaved, isSaved, count,setCount,changeName,setChange, addHandler,addCardHandler,isClicked,setClick}) {



  return (
     <div className='d-flex justify-content-between'>
      <div>
        <nav className='navbar'>
          <Navbar/>
        </nav>
      </div>

      <div className='container p-5'>
        <div className='d-flex align-items-center mb-5 saved-part justify-content-between'>
          <h2 className='list-title'>Your lists</h2>
             <button onClick={() => setClick(!isClicked)} className='new-list-btn'>New list</button>
           <ModalAdd   
            isSaved={isSaved}
            setSaved={setSaved }
            isClicked={isClicked} 
            setClick={setClick}
            count={count}
            setCount={setCount}
            changeName={changeName}
            setChange={setChange}
            addHandler={addHandler}
            addCardHandler={addCardHandler}
            />
        </div>
        <div className='d-flex save-list-wrapper'>
          <button className='bg-transparent active-btn me-3'>Saved</button>
          <button className='bg-transparent list-btns'>Highlights</button>
        </div>  

        <div className='save-card'>
          <div className='save-card-img'>
             <svg width="283" height="174" viewBox="0 0 283 174" fill="none"><circle opacity="0.15" cx="141.5" cy="87.5" r="141.5" fill="#E8F3E8"></circle><circle cx="141.5" cy="87.5" r="29.5" fill="#fff"></circle><path fillRule="evenodd" clipRule="evenodd" d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z"  fill="#0F730C"></path></svg>
          </div>
           <h3 className='save-card-text'>Create a list to easily organize and share stories</h3>
          <button className='new-list-btn add-save-btn bg-dark mt-3'>Start a list</button>
        <button className='exit-btn'>X</button>
        </div>
        
        {isSaved.map((item, index) =>{
          return (
            <Link className='text-decoration-none' to={`/InnerInfo/${index}`}>
              <div className='save__box d-flex mt-4'>
                <div className='save__box-left'>
                  <h2 className='save__box-title'>{item.changeName}</h2>
                  <div className='save__box-btn-box'>
                    <div className='save__box-btn-real-box'>
                      <button className='save__box-btn'>
                        View list
                      </button>
                    </div>
                  </div>
                </div>
                <div className='save__box-right d-flex'>
                  <div className='save__box-one save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                  <div className='save__box-two save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                  <div className='save__box-three save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}

      </div>

      <div>
       <EndPart/>
      </div>
    </div>
    
  )
}
