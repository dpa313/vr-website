// import './App.css'
import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Experience from './components/Experience/Experience'
import Explore from './components/Explore/Explore'
import Header from './components/Header/Header'
import NavMobile from './components/Header/NavMobile'
import Headsets from './components/Headsets/Headsets'
import Testimonial from './components/Testimonial/Testimonial'
import Video from './components/Video/Video'
// import NavMobile from './components/Header/NavMobile'

function App() {
  const [navMobile,setNavMobile] = useState(true)
  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:absolute before:-top-16 before:left-[400px] before:no-repeat before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile}/>
      <Banner/>
      <div className={`${navMobile? 'right-0': '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience/>
      <Video/>
      <Headsets/>
      <Testimonial/>
      <Explore/>
    </div>
  )
}

export default App
