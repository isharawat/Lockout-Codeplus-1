import React from 'react'
import useFetch from './useFetch'
import Componen from './Component';

const Questions = () => {
  const questions = useFetch("https://codeforces.com/api/problemset.problems?tags=implementation")
  const total = [];
  const x = {
    800: [], 
    900: [], 
    1000: [], 
    1100: [], 
    1200: [], 
    1300: [], 
    1400: [],  
    1500: [], 
    1600: [], 
    1700: [], 
    1800: [], 
    1900: [], 
    2000: [], 
    2100: [],  
    2200: [],  
    2300: [], 
    2400: [], 
    2500: [], 
    2600: [],  
    2700: [], 
    2800: [], 
    2900: [], 
    3000: [], 
    3100: [], 
    3200: [], 
    3300: [], 
    3400: [], 
    3500: [], 
  };
  for(let q in questions) {
    let p = questions[q].rating;
    total.push(questions[q]);
  
    let pstr = String(p);
    if(x[pstr]) {
      x[pstr].push(questions[q]);  
    }
    else {
      console.log(questions[q]);
    }
  }
  console.log(x);
  return (
    <>
      {
      total.map((obj) => ( 
       <> 
        <Componen key = {obj.contestId + obj.index} obj = {obj}/>
     </> 
     ))}
       
    </>

  )
}

export default Questions