
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Cards/>
      </BrowserRouter>
    </div>
  )
}

export default App
