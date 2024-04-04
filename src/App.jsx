import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { About, Article, Resume, Home, SideBar, Contact, Blog } from './components'


//commands rafce
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar></SideBar>
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Article />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
