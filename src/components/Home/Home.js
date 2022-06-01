import React, { useEffect, useState } from 'react'
import './Home.scss'
import Navbar from '../Home/Navbar/Navbar'
import EndPart from '../Home/EndPart/EndPart'
import MiddlePart from './MiddlePart/MiddlePart'
import { data } from '../../Data/Data'



export default function Home({
  count,
  setCount,
  changeName,
  setChange,
  isSaved,
  setSaved,
  addHandler,
  addCardHandler,
  homePublish,

}) {
  
  let FilterBtn = ['All', ...new Set(data.map(item => item.type))]
  let [dataInfo, setData] = useState(data)
  let [type, setCategory] = useState(FilterBtn)

 const filterItem = (type) =>{
  if(type === 'All'){
    setData(data)
    return
  }

  const newItems = data.filter(item =>{
    return item.type === type
  })

 setData(newItems)

}

  return (
    <div className='d-flex justify-content-between'>
      <div>
        <nav className='navbar'>
          <Navbar/>
        </nav>
      </div>

      <div className='container'>
        <MiddlePart 
        isSaved={isSaved}  
        filterItem={filterItem} 
        type={type} 
        dataInfo={dataInfo} 
        setData={setData}
        count={count}
        setCount={setCount}
        changeName={changeName}
        setChange={setChange}
        setSaved={setSaved}
        addHandler={addHandler}
        addCardHandler={addCardHandler}
        homePublish={homePublish}
        />
      </div>

      <div>
        <EndPart/>
      </div>
      
    </div>
  )
}
