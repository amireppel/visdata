import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/home'
import Dashboard from './components/dashboard';
import WorldMap from './components/worldmap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div >
        <button onClick={() => setCount((count) => count + 3)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="dashboard" element={ <Dashboard />}/>
         <Route path="map" element={ <WorldMap />}/>
    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
