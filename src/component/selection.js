import React from 'react';

const ScaleSelection = (props) => {

 console.log(props)

 const handleChange = (e) => {
  console.log(e.target.value)
   props.onChangeScale(e.target.value)
 }


 return (
  <div>
    <label htmlFor="scale-select">Choose a scale:</label>
    <br/>
    <select onChange = {handleChange} id="scale-select" value={props.scale}>
      <option value="">--Please choose an option--</option>
      <option value="c">Celsius</option>
      <option value="f">Farenheit</option>
    </select>
 </div>
 )
}

export default ScaleSelection