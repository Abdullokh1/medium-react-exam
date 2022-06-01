import React from 'react'
import EndPart from '../../Home/EndPart/EndPart'
import Navbar from '../../Home/Navbar/Navbar'
import StoryPublished from './StoryPublished/StoryPublished'


export default function Stories({storyText}) {
  return (
    <>

    <div className='d-flex justify-content-between'>
      <div>
        <nav className='navbar'>
          <Navbar/>
        </nav>
      </div>

      <div className='container'>
        <StoryPublished storyText={storyText}/>
      </div>

      <div>
        <EndPart/>
      </div>
      
    </div>
    
    </>
  )
}

