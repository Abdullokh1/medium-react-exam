import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import Publish from './components/Publish/Publish';
import Stories from './components/Publish/Stories/Stories';
import InnerInfo from './components/SavedPart/InnerInfo/InnerInfo';
import SavedPart from './components/SavedPart/SavedPart';
import SignUp from './SignUp/SignUp';
import InnerSection from './components/Home/InnerSection/InnerSection'
import Offcanvas from './components/Offcanvas/Offcanvas';
import ProfilePart from './components/Home/ProfilePart/ProfilePart';

function App() {
  let [isSaved, setSaved] = useState([])
  let [changeName, setChange] = useState('')
  let [count, setCount] = useState(0)
  let [storyText, setStoryText] = useState([{
    text: 'Publish text'
  }])

  let [emptyStory, setEmptyStory] = useState('')
  let [homePublish, setHomePublish] = useState([])
  let [isClicked, setClick] = useState(false)

  let [userName, setUserName] = useState('')
  let [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('')


  const addHandler = (e) =>{
    setCount(e.target.value.length)
    setChange(e.target.value)
  }

  const addCardHandler = () =>{
    setSaved([...isSaved, {changeName: changeName}])
    setClick(!isClicked)
  }

  useEffect(() =>{
    setSaved([{
      changeName: 'Reading list',
    }])
  }, [])


  return (
    <>
    
    <Routes>
      <Route path={'/'} element={<SignUp
      setUserName={setUserName}
      setLastName={setLastName}
      setEmail={setEmail}

      />}/>

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
      isClicked={isClicked}
      setClick={setClick}
      userName={userName}
      lastName={lastName}
      email={email}
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
      isClicked={isClicked}
      setClick={setClick}
      />}/>

      <Route path={'InnerSection/:id'} element={<InnerSection 
      isSaved={isSaved} 
      homePublish={homePublish}
      userName={userName}
      lastName={lastName}
      />}/>

      <Route path='*' element={<NoPage/>}/>
      <Route path='/ProfilePart' element={<ProfilePart
       userName={userName}
       lastName={lastName}
      />}/>

      <Route path='/Offcanvas' element={<Offcanvas
       userName={userName}
       lastName={lastName}
      />}/>


      <Route path='/Publish' element={<Publish 
      storyText={storyText} 
      setStoryText={setStoryText}
      emptyStory={emptyStory}
      setEmptyStory={setEmptyStory}
      setHomePublish={setHomePublish}
      homePublish={homePublish}
      userName={userName}
      lastName={lastName}
      />}/>

      <Route path='/InnerInfo/:id' element={<InnerInfo
      homePublish={homePublish}
      userName={userName}
      lastName={lastName}
      isSaved={isSaved}

      />}/>

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
