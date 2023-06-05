import { useState } from "react";

export default function Form() {
  const [formvalues, setFormvalues] = useState({ time: "", rating: "" });
  return (
    <div>
      <label>Duration(in min)</label>
      <input
        type="text"
        name="time"
        value={formvalues.time}
        onChange={(e) => setFormvalues({...formvalues, [e.target.name] : e.target.value})}
      ></input>
      <label>Rating of questions(with separated commas like(800,900,1000))</label>
      <input
        type="text"
        name="rating"
        value={formvalues.rating}
        onChange={(e) => setFormvalues({...formvalues, [e.target.name]: e.target.value})}
      ></input>
      <h1>Starting in 2 mins</h1>
    </div>
  );
}
