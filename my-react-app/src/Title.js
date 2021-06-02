import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class TitleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: this.props.titleFont,
      categories: "",
    };
  }
  
  render() {
    return (
      <div>
        {/* <select name="selectList" id="selectList">
            <option value="option 1">Option 1</option> {" "}
          <option value="option 2">Option 2</option>
        </select> */}
        <FontPicker
          apiKey="AIzaSyCtrYe5NA6nnIxkKEO61XM2oS-USy-BMUQ"
          pickerId="main"
          activeFontFamily={this.state.activeFontFamily}
          categories={this.state.categories}
          onChange={(nextFont) =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        <button style={this.props.buttonStyle}>Random font?</button>
        <button style={this.props.buttonStyle}>Lock this font?</button>
        <p className="apply-font-main">
          Your title will look like this in {this.state.activeFontFamily}.
        </p>
      </div>
    );
  }
}
