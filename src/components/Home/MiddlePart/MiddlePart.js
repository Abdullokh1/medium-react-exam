import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalAdd from '../../ModalAdd/ModalAdd'
import Save from '../MiddlePart/Save/Save.scss'

import './MiddlePart.scss'



export default function MiddlePart({
  dataInfo, 
  isSaved, 
  filterItem, 
  type,
  count,
  setCount,
  changeName,
  setChange, 
  addHandler,
  addCardHandler,
  setSaved, 
  homePublish
  }) {


  let [isSelected, setSelected] = useState(false)
  let [isClicked, setClick] = useState(false)


  const isTargetted = () =>{
    setClick(!isClicked)
  }
 
  return (
    
    <section className='middle p-5'>
      <div className='mb-5 filter-btn-wrapper'>
        {type.map((item, i) =>{
          return (
            <button onClick={() => filterItem(item)} key={item} className='filter-btns'>{item}</button>
          )
        })}
      </div>

      <ModalAdd
      isSaved={isSaved}
      isSelected={isSelected}
      setSaved={setSaved }
      isClicked={isClicked} 
      setClick={setClick}
      count={count}
      setCount={setCount}
      changeName={changeName}
      setChange={setChange}
      addHandler={addHandler}
      addCardHandler={addCardHandler}
      isTargetted={isTargetted}
      />

      <ul className='m-0 main-home-list p-0'>
        {dataInfo.map(item =>{
          return (
            <li key={item.id} className='mb-4 user-items'>
              <div className='d-flex align-items-center mb-3'>
                <img className='user-img me-2' src={item.userImg} alt="userImg" />
                 <p className='m-0 me-1'>{item.userName} .</p>
                 <p className='m-0 date'>{item.date}</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='user-info'>
                  <Link className='td-none text-dark' to={`/InnerSection/${item.id}`}>
                    <h2 className='user-title'>{item.title}</h2>
                    <p className='mb-4'>{item.text}</p>
                  </Link>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
              <div className='d-flex align-items-center user-save-part'>
                <button className='user-career-btn'>{item.type}</button>
                <p className='m-0 ms-3 user-selected'>Selected for you</p>
                <div className='save-btn-wrap'>
                  <button onClick={() => isSelected !== item.id ? setSelected(item.id) : setSelected('')} className='bg-transparent save-btns'>
                    <i className='bx saved-icons bx-bookmark'></i>
                  </button>

                   <div style={{display: isSelected === item.id ? 'block' : 'none'}} className='save-part'>
                      <div className='d-flex flex-column save-wrapper justify-content-start'>
                        {isSaved.map((el, i) =>{
                          return (
                            <div key={i} className='d-flex check-box-part align-items-center'>
                              <Checkbox defaultChecked color="success" />
                              <label className='m-0'>{el.changeName}</label>
                            </div>
                          )
                        })}
                      </div>
                      <button onClick={isTargetted} className='bg-transparent text-success mt-2 ps-4 pb-3'>Create new list</button>
                    </div>
                </div>
                
                <button className='bg-transparent'>
                  <i className='bx saved-icons bx-dots-horizontal-rounded'></i>
                </button>
              </div>
            </li>
          )
        })}

        {homePublish.map(item =>{
          return (
            <li key={item.id} className='mb-4 user-items'>
            <div className='d-flex align-items-center mb-3'>
              <img className='user-img me-2' src={item.userImg} alt="userImg" width='25' height='25' />
               <p className='m-0 me-1'>{item.userName} .</p>
               <p className='m-0 date'>{item.date}</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='user-info'>
                <Link className='td-none text-dark' to={`/InnerSection/${item.id}`}>
                  <h2 className='user-title'>{item.title}</h2>
                  <p className='mb-4'>{item.text}</p>
                </Link>
              </div>
              <img className='publish-user-img' src={item.img} alt={item.title} width='112' height='112' />
            </div>
            <div className='d-flex align-items-center user-save-part'>
              <button className='user-career-btn'>{item.type}</button>
              <p className='m-0 ms-3 user-selected'>Selected for you</p>
              <div className='save-btn-wrap'>
                <button onClick={() => isSelected !== item.id ? setSelected(item.id) : setSelected('')} className='bg-transparent save-btns'>
                  <i className='bx saved-icons bx-bookmark'></i>
                </button>

                 <div style={{display: isSelected === item.id ? 'block' : 'none'}} className='save-part'>
                    <div className='d-flex flex-column save-wrapper justify-content-start'>
                      {isSaved.map((el, i) =>{
                        return (
                          <div key={i} className='d-flex check-box-part align-items-center'>
                            <Checkbox defaultChecked color="success" />
                            <label className='m-0'>{el.changeName}</label>
                          </div>
                        )
                      })}
                    </div>
                    <button onClick={isTargetted} className='bg-transparent text-success mt-2 ps-4 pb-3'>Create new list</button>
                  </div>
              </div>
              
              <button className='bg-transparent'>
                <i className='bx saved-icons bx-dots-horizontal-rounded'></i>
              </button>
            </div>
          </li>

          )
        })}
      </ul>
      

    </section>
  )
}
