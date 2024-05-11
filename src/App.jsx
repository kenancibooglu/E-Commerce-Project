import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './global/TopBar/TopBar'
import Home from './components/Home'
import Organic from './items/Organic'
import Fresh from './items/Fresh'
import Drinks from './items/Drinks'
import Frozen from './items/Frozen'
import Bee from './items/Bee'



function App() {
  return (
    <div className='App'>
   <TopBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/organic' element={<Organic />} />
    <Route path='/fresh' element= {<Fresh />} />
    <Route path='/drinks' element = {<Drinks />} />
    <Route path='/frozen' element= {<Frozen />} />
    <Route path='/bee' element= {<Bee />} />

   </Routes>
   
    </div>
  )
}

export default App
