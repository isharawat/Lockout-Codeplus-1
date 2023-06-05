
import { useState } from 'react';
import './App.css';
import Questions from './componenets/Questions';
import Form from './componenets/Form';
import Main from './componenets/main'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"

function App() {
 
  // const [name, setName] = useState("");
  // const [stat, setStat] = useState("");
  // const handleClick = ((e)=>{
  //   e.preventDefault();
  //   console.log(name);
  //   if(p === name) {
  //     setStat("true");
  //   }

  // })
  return (
    <>
    {/* <div>HIIIIIIIIIII</div>
    <div className="App">
      {stat === "" && p === "" ?
     
     </div>:
      <div>
        <label> Provide code</label>
        <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
    
      </div>
      }
    
       
    </div> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}/>
      <Route path="/lockout-bot/create-contest" element={<Form/>}/>
      <Route path="/lockout-bot/questions" element={<Questions/>}/>
      <Route path="/lockout-bot/questions" element={<Questions/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
