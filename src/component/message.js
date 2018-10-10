import React from 'react'


const tryConvert = (temperature, convert) => {
 console.log(typeof temperature)
 const input = parseFloat(temperature)
 if(Number.isNaN(input)){
  return ''
 }
 const output = convert(input)
 const rounded = Math.round(output * 1000) / 1000;
 return rounded.toString();
}

const farenheitToCelsius = (farenheit) => (farenheit - 32) * 5 / 9;


const Message = (props) => {
const celsius = props.scale === 'c' ? props.temperature : tryConvert(props.temperature, farenheitToCelsius);

 return (
    <div>
    <h3>{celsius >= 100 ? 'El agua hervirá' : 'El agua no hervirá'}</h3>
    </div>
   )
}

export default Message