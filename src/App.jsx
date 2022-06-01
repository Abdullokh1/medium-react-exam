import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import InnerSection from './components/InnerSection/InnerSection';
import NoPage from './components/NoPage/NoPage';
import Publish from './components/Publish/Publish';
import Stories from './components/Publish/Stories/Stories';
import InnerInfo from './components/SavedPart/InnerInfo/InnerInfo';
import SavedPart from './components/SavedPart/SavedPart';
import SignUp from './SignUp/SignUp';

function App() {
  let [isSaved, setSaved] = useState([])
  let [changeName, setChange] = useState('')
  let [count, setCount] = useState(0)
  let [storyText, setStoryText] = useState([{
    text: 'Publish text'
  }])
  let [emptyStory, setEmptyStory] = useState('')

  let [homePublish, setHomePublish] = useState([])
  




  
  const addHandler = (e) =>{
    setCount(e.target.value.length)
    setChange(e.target.value)
  }

  const addCardHandler = () =>{
    setSaved([...isSaved, {changeName: changeName}])
  }


  useEffect(() =>{
    setSaved([{
      changeName: 'Reading list',
    }])
  }, [])






  return (
    <>
    
    <Routes>
      <Route path={'/'} element={<SignUp/>}/>
      <Route path={'/Home'} element={<Home
      count={count}
      setCount={setCount}
      changeName={changeName}
      setChange={setChange}
      isSaved={isSaved}
      setSaved={setSaved}
      addHandler={addHandler}
      addCardHandler={addCardHandler}
      homePublish={homePublish}
      />}/>


      <Route path='/SavedPart' element={<SavedPart
      count={count}
      setCount={setCount}
      changeName={changeName}
      setChange={setChange}
      isSaved={isSaved}
      setSaved={setSaved}
      addHandler={addHandler}
      addCardHandler={addCardHandler}
      />}/>

      <Route path={'InnerSection/:id'} element={<InnerSection
      isSaved={isSaved}
      />}/>

      <Route path='*' element={<NoPage/>}/>

      <Route path='/Publish' element={<Publish 
      storyText={storyText} 
      setStoryText={setStoryText}
      emptyStory={emptyStory}
      setEmptyStory={setEmptyStory}
      setHomePublish={setHomePublish}
      homePublish={homePublish}
      />}/>

      <Route path='/InnerInfo' element={<InnerInfo/>}/>

      <Route path='/Stories' element={<Stories
      storyText={storyText}
      setStoryText={setStoryText}
      emptyStory={emptyStory}
      setEmptyStory={setEmptyStory}
      />}/>

    </Routes>   
    
    
    </>
    
  )
}

export default App;
