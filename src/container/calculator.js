import React from 'react';
import Header from '../component/header';
import ScaleSelection from '../component/selection';
import TemperatureInput from '../component/input';
import Message from '../component/message';

class AppCalculator extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   scale : 'ingrese escala',
   temperature : ''
  }
 }

 handleChangeScale = (newScale) => {
  this.setState({
   scale : newScale,
   temperature : ''
  })
 }

 handleInputTemperature = (newTemperature) => {
  this.setState({
   temperature : newTemperature
  })
 }


 render(){
  return (
   <div>
   <Header />
   <ScaleSelection scale={this.state.scale} onChangeScale = {this.handleChangeScale} />
   <TemperatureInput scale = {this.state.scale} onInputTemperature = {this.handleInputTemperature} temperature = {this.state.temperature}/>
   <Message scale={this.state.scale} temperature = {this.state.temperature} />
   </div>
  )
 }
}

export default AppCalculator