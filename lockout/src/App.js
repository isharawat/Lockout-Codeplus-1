
import { useState } from 'react';
import './App.css';
import Questions from './componenets/Questions';
import Form from './componenets/Form';
function App() {
  const [p, setP] = useState('');
  const handleSubmit = (()=>{
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r);
    setP(r);
  })
  const [name, setName] = useState("");
  const [stat, setStat] = useState("");
  const handleClick = ((e)=>{
    e.preventDefault();
    console.log(name);
    if(p === name) {
      setStat("true");
    }

  })
  return (
    <>
    <div>HIIIIIIIIIII</div>
    <div className="App">
      {stat === "" && p === "" ?
      <div>
      <Form/> 
      <button onClick={handleSubmit}>Create contest</button></div>:
      <div>
        <label> Provide code</label>
        <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleClick}>Join contest</button>
      </div>
      }
      {stat === "true"? 
       <Questions/> :<span></span>
      }
       
    </div>
    </>
  );
}

export default App;
