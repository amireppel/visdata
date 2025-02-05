import { useState } from 'react'
import './home.css'
import { useNavigate, Outlet } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
  <div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">

  <circle cx="100" cy="100" r="60" fill="red" stroke="black" stroke-width="2"/>


  <ellipse cx="70" cy="40" rx="20" ry="30" fill="green" />


  <rect x="95" y="30" width="10" height="30" fill="saddlebrown" />

  <circle cx="120" cy="50" r="10" fill="white" opacity="0.6"/>
</svg>
    <div onClick={()=>navigate('dashboard')}>
      Go to dasboard
    </div>
    <div onClick={()=>navigate('map')}>
      Go to map
    </div>
  </div>
  )
}

export default Home;
