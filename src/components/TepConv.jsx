import React from "react";
import TempInput from "./Temperature";
function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}
function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}
function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
class TempConv extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {
			temperature: '',
			scale: 'c'
		}

	}
	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	  }
	
	handleFahrenheitChange(temperature) {
	this.setState({scale: 'f', temperature});
	}
	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<>
				<TempInput scale="c" temperature={celsius}
          onTempChange={this.handleCelsiusChange}/>
				<TempInput scale="f" temperature={fahrenheit}
          onTempChange={this.handleFahrenheitChange}/>
			</>
		);
	}

}

export default TempConv;
