import'./mystyle.css'
import React from 'react';

const percentToDecimal=(decimal)=>{
    return (decimal.toFixed(2));
}

const calcScore = (total, goal) =>{
    return percentToDecimal(total/goal);
}



// Name,School,total,goal

const CalculateScore = (props) => {
  return (
    <>
        <div className='formatstyle'><h1>Student Details</h1></div>
        <h1 className='Name'>Name: {props.Name}</h1>
        <h2 className='School'>School: {props.School}</h2>
        <h2 className='Total' >Total: {props.total}</h2>
        <h2 className='Score'>Score: {calcScore(props.total, props.goal)}%</h2>
    </>
  )
}

export default CalculateScore
