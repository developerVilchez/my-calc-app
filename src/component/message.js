import React from 'react'


const farenheitToCelsius = (temperature) => {
 console.log(typeof temperature)
 const input = parseFloat(temperature)
 if(Number.isNaN(input)){
  return ''
 }
 const output = (temperature - 32) * 5 / 9;
 const rounded = Math.round(output * 1000) / 1000;
 return rounded.toString();
}

const Message = (props) => {
const celsius = props.scale === 'c' ? props.temperature : farenheitToCelsius(props.temperature);

 return (
    <div>
    <h3>{celsius >= 100 ? 'El agua hervirá' : 'El agua no hervirá'}</h3>
    </div>
   )
}

export default Message