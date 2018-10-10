import React from 'react';

const scaleNames = {
 c: 'Celsius',
 f: 'Farenheit'
}

const TemperatureInput = (props) => {
 const handleInput = (e) => {
   console.log(e.target.value)
   props.onInputTemperature(e.target.value)
 }

 return (
  <div>
  <label htmlFor = {props.scale} >Coloca los grados {scaleNames[props.scale]}</label>
  <br/>
  <input 
   id = {props.scale}
   placeholder = {scaleNames[props.scale] ? `grados ${scaleNames[props.scale]}`: 'ingrese'  }
   onChange = {handleInput}
   value = {props.temperature}
  />
 </div>
 )
} 

export default TemperatureInput
