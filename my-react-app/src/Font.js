import React from "react";
import SimpleSelect from "./CustomFontPicker.jsx";
import BodyComponent from "./Body.jsx";
import { FontProvider } from "./FontContext";
import Suggestions from "./Suggestions";
import FontLoader from "./FontLoader";
import SubTitleComponent from './Subtitle.jsx';
import ExampleComponent from './Example'
import Paper from '@material-ui/core/Paper';

function Font() {
  const bodyStyle = {
    display: "flex",
    margin: "10px",
    
    padding: "5px",
    flexDirection: "column"
  };

  return (
    <FontProvider>
      <Paper style={bodyStyle} elevation={3}>
        <FontLoader />
        <Suggestions></Suggestions>
        <SimpleSelect/>
        <SubTitleComponent/>
        <BodyComponent/>
        <ExampleComponent/>
      </Paper>
    </FontProvider>
  );
}

export default Font;
