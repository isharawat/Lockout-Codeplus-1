import React from 'react'
import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div>
         <NavLink to="/lockout-bot/create-contest">
         <button >Create contest</button>
         </NavLink>
             <NavLink>
             <button >Join contest</button>
             </NavLink>
    </div>
  )
}

export default Main