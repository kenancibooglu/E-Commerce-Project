import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './global/TopBar/TopBar'
import Home from './components/Home'



function App() {
  return (
    <div className='App'>
   <TopBar />
   <Routes>
    <Route path='/' element={<Home />} />
   </Routes>
   
    </div>
  )
}

export default App
