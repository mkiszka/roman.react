import React from "react";
import {arabicToRoman} from '../converters/arabicToRoman';

class RomanConverter extends React.Component {
    state = {
        roman: null
    }
   
    handleChange = (event) => {
        let roman = arabicToRoman(event.target.value);
        this.setState({ roman: roman });
    }
    render() {
        return (
            <>
                <label>Arabic: <input onChange={this.handleChange} type="number"></input></label>
                <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </>
        );
    }
}

export default RomanConverter;