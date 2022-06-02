import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/Imgs/main-logo.png'
import './Publish.scss'
import { v4 as uuidv4 } from "uuid";

let countId = 300

export default function Publish({storyText, setHomePublish,homePublish, setStoryText,emptyStory,setEmptyStory, userName, lastName}) {

  

  const textAreaHandle = (e) =>{
    setEmptyStory(e.target.value)
  }

  const publishHandler = () =>{
    setStoryText([
      ...storyText, {
        text: emptyStory
      }
    ])
    setEmptyStory('')
    
    
    setHomePublish([
      ...homePublish, {
        userName: userName + lastName,
        userImg:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU',
        date: 'June 1',
        title: 'Frontend development',
        text: emptyStory, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pxxgWFt7gjLnC9BqgEIFPPjUxeb8T3EmIg&usqp=CAU',
        type: 'Frontend',
        id: countId,
      }
    ])
    countId++
  }



  return (
    <header className='p-3 ps-5 publish'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <Link to={'/Home'}>
              <img src={logo} alt="main-logo" width='40'/>
            </Link>
            <p className='m-0 ms-2 publish__logo-text'>Draft</p>
          </div>
          <div>
            <Link to={'/Home'}>
            <button onClick={publishHandler} className='publish__btn me-3'>Publish</button>
            
            </Link>
            <button className='public__menu-btn'>
              <svg className="svgIcon-use publish__icons me-3" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fillRule="evenodd"></path></svg>
            </button>
  
            <button className='public__menu-btn'>
               <svg className="svgIcon-use publish__icons  me-2" width="25" height="25" viewBox="-293 409 25 25"><path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path></svg>
            </button>
            <button className='user-btn'>A</button>
          </div>
        </div>

        <div className='p-5 d-flex align-items-start'>
          <button className='publish__add-btn'>
            <svg className="svgIcon-use" width="25" height="25"><path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fillRule="evenodd"></path></svg>
          </button>
          <textarea 
          onChange={textAreaHandle}
          className='publish__input'
          cols="30" 
          placeholder='Tell your story...' 
          rows="10"
          value={emptyStory}
           >

           </textarea>
        </div>

      </div>
    </header>
  )
}