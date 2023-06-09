
import { useState } from 'react';
import './App.css';
import Questions from './componenets/Questions';
import Form from './componenets/Form';
import Main from './componenets/main'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import JoinContest from './componenets/JoinContest';
import Submission from './componenets/Submission';

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
    
      }
    
       
    </div> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}/>
      <Route path="/lockout-bot/create-contest" element={<Form/>}/>
      <Route path="/lockout-bot/questions" element={<Questions/>}/>
      <Route path="/lockout-bot/join-contest" element={<JoinContest/>}/>
      <Route path="/userinfo" element={<Submission/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
