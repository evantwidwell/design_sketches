import React, { useState, useContext } from 'react';
import { FontContext} from './FontContext';
import Button from "@material-ui/core/Button";
import GoogleFontLoader from "react-google-font-loader";

export default function Suggestions() {
  const { title }= useContext(FontContext)
  const [titleFont, setTitleFont] = title;
  
  const suggestionsArr = [
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
      title: "Roboto",
      subtitle: "Taviraj",
      body: "Enriqueta"
    }
  ];
  
  
  const [count, setCount] = useState(Math.floor(Math.random() * suggestionsArr.length));
  const handleChange = () => {
    setCount(Math.floor(Math.random() * suggestionsArr.length))
    setTitleFont(suggestionsArr[count].title)
  };
  return(
    <div>
       <h4> Would you like to start with a    
       <Button size="small" variant="contained" onClick={() => handleChange()}>
         Suggested Font Pairing?
      </Button></h4>
      <p style={{fontFamily: `${titleFont}`}}>This is your title in {titleFont}</p>
      <p style={{fontFamily: 'Anton'}}>This is your title in Anton</p>
      </div>
  )
}