import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: props.bodyFont,
      categories: "",
    };
  }

  

  render() {
    return (
      <div>
        <FontPicker
          apiKey="AIzaSyCtrYe5NA6nnIxkKEO61XM2oS-USy-BMUQ"
          pickerId="body"
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
        <p className="apply-font-body">
          Your body will look like this in {this.state.activeFontFamily}.
        </p>
      </div>
    );
  }
}
