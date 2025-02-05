import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

import './dashboard.css'

function Dashboard() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
  <div>
    Dashboard !!!

    <div onClick={()=>navigate('/')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">

  <ellipse cx="100" cy="120" rx="70" ry="50" fill="#808080" />


  <ellipse cx="100" cy="60" rx="50" ry="40" fill="#808080" />


  <path d="M 100 100 Q 90 120, 100 150 Q 110 180, 130 160 Q 140 150, 130 130" fill="green" stroke="red" stroke-width="10" />


  <ellipse cx="60" cy="60" rx="30" ry="40" fill="yellow" />
  <ellipse cx="140" cy="60" rx="30" ry="40" fill="yellow" />


  <rect x="55" y="160" width="15" height="40" fill="#808080" />
  <rect x="130" y="160" width="15" height="40" fill="#808080" />


  <circle cx="85" cy="50" r="5" fill="white" />
  <circle cx="115" cy="50" r="5" fill="white" />
  <circle cx="85" cy="50" r="2" fill="black" />
  <circle cx="115" cy="50" r="2" fill="black" />
</svg>
    </div>
  </div>
  )
}

export default Dashboard;
