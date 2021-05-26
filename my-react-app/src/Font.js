import React, { useState } from "react";
import TitleComponent from "./Title";
import BodyComponent from "./Body";
import SubTitleComponent from './Subtitle'
import CustomFont from './CustomFontPicker.jsx'


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

  // const suggestions = [
  //   {
  //     title: "Josefin Sans",
  //     subtitle: "Karma",
  //     body: "Palanquin"
  //   },
  //   {
  //     title: "Montserrat",
  //     subtitle: "Lorn",
  //     body: "Hind Madurai"
  //   },
  //   {
  //     title: "Catamaran",
  //     subtitle: "Taviraj",
  //     body: "Enriqueta"
  //   }
  // ];
  const [suggestions, setSuggestions] = useState(
    [
      {
        title: "Josefin Sans",
        subtitle: "Karma",
        body: "Palanquin"
      },
      {
        title: "Montserrat",
        subtitle: "Lorn",
        body: "Hind Madurai"
      },
      {
        title: "Catamaran",
        subtitle: "Taviraj",
        body: "Enriqueta"
      }
    ]
  )
  const [count, setCount] = useState(Math.floor(Math.random() * suggestions.length));
  
  return (
    <div style={bodyStyle}>
      <h4> Would you like to 
      <button onClick={() => setCount(Math.floor(Math.random() * suggestions.length))} style={buttonStyle}>Start with a suggested pairing?</button></h4>
      <CustomFont />
      <TitleComponent buttonStyle={buttonStyle} titleFont={suggestions[count].title}/>
      <SubTitleComponent buttonStyle={buttonStyle} subtitleFont={suggestions[count].subtitle}/>
      <BodyComponent buttonStyle={buttonStyle} bodyFont={suggestions[count].body}/>
      <div style={cardStyle}>
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
  );
}

export default Font;
