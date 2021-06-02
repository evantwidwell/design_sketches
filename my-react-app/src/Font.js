import React, { useState, useContext } from "react";
import SimpleSelect from './CustomFontPicker.jsx'
import { FontProvider} from './FontContext';
import { FontContext } from './FontContext'
import Suggestions from './Suggestions'

function Font(){

  
  const bodyStyle = {
    disaply: "flex",
    marginLeft: "10px",
    marginTop: "5px",
    
  };
  const buttonStyle = {
    margin: "3px",
    borderRadius: "5px",
  };
  const cardStyle = {
    width: "400px",
    margin: "3px",
    border: "1px solid gray",
    borderRadius: "5px",
  };

  return (
    <FontProvider>
    <div style={bodyStyle}>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Limelight&family=Source+Sans+Pro&display=swap');
</style>
      <Suggestions></Suggestions>
      {/* <h4> Would you like to 
      <button onClick={() => handleChange()} style={buttonStyle}>Start with a suggested pairing?</button></h4> */}
      <SimpleSelect />
      {/* <TitleComponent buttonStyle={buttonStyle} titleSuggestion={suggestion.title}/> */}
      {/* <SubTitleComponent buttonStyle={buttonStyle} subtitleFont={suggestion.subtitle}/>
      <BodyComponent buttonStyle={buttonStyle} bodyFont={suggestion.body}/> */}
      <div style={cardStyle}>
      <p style={{fontfamily: 'Limelight, cursive'}}>This is your title in Lato</p>
      <p style={{fontfamily: 'Source Sans Pro'}}>This is your title in Limelight</p>
        <h3 className="apply-font-main">
          This is your title, it is very exciting
        </h3>
        <p className="apply-font-subtitle">Your subtitles and captions will look like this</p>
        <p className="apply-font-body">
          Bacon ipsum dolor amet landjaeger frankfurter swine, fatback sausage
          short ribs pork belly beef alcatra capicola meatball turducken pig.
          Landjaeger capicola alcatra drumstick shank shoulder pastrami pig
          venison rump boudin pork loin spare ribs. Leberkas ball tip jerky
          bresaola rump filet mignon, tongue pork belly doner corned beef. Ball
          tip tri-tip shank beef ribs landjaeger. Buffalo turducken meatball,
          fatback ground round sausage andouille corned beef biltong doner
          pastrami short ribs. Pig tongue ground round flank.
        </p>
      </div>
      <button style={buttonStyle}>Like this pairing?</button>
      <button style={buttonStyle}>Hate this pairing?</button>
    </div>
    </FontProvider>
  );
}

export default Font;
