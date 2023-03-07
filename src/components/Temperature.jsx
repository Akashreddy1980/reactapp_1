import React from "react";

const ScaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}
class TempInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTempChange(e.target.value);
    }
    render(){
        return(
            <fieldset>
                <legend>Enter the temperature in {ScaleNames[this.props.scale]} </legend>
                <input value={this.props.temperature} onChange = {this.handleChange}></input>
            </fieldset>
        );
    }
} 

export default TempInput;

