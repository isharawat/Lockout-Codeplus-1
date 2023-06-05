import { useState } from "react";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const [formvalues, setFormvalues] = useState({ time: "", rating1: "", rating2: "" , rating3: "" , rating4: "" , rating5: ""  });
  const [p, setP] = useState('');
  
  const handleSubmit = ((e)=>{
    e.preventDefault();
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r);
    setP(r);
  

  })
  const handleChange =(e)=>{
    const {name,value}=e.target
    setFormvalues({ ...formvalues,[name]:value})
}
const arr=[formvalues.rating1,formvalues.rating2,formvalues.rating3,formvalues.rating4,formvalues.rating5]

  return (
    <div>
     {p==''?<form onSubmit={handleSubmit}>
     <label>Duration(in min)</label>
      <input
        type="text"
        name="time"
        value={formvalues.time}
        onChange={handleChange}
      ></input>
      <label>Rating of each question</label>
      <input
        type="text"
        name="rating1"
        value={formvalues.rating1}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="rating2"
        value={formvalues.rating2}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="rating3"
        value={formvalues.rating3}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="rating4"
        value={formvalues.rating4}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="rating5"
        value={formvalues.rating5}
        onChange={handleChange}
      ></input>
      <button>Create Contest</button>
      
     </form>:<Questions codes={p} rating={arr}/>}
     <h1>Starting in 2 mins</h1>
    </div>
  );
}
