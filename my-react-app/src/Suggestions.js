import React, { useState, useContext } from 'react';
import { FontContext } from './FontContext';
import Button from "@material-ui/core/Button";

export default function Suggestions() {
  
  const { title }= useContext(FontContext)
  const [titleFont, setTitleFont] = title;
  const { titleV } = useContext(FontContext);
  const [titleVariant, setTitleVariant] = titleV;
  const { body }= useContext(FontContext)
  const [bodyFont, setBodyFont] = body;
  const { bodyV } = useContext(FontContext)
  const [bodyVariant, setBodyVariant] = bodyV;
  const { subTitle } = useContext(FontContext);
  const [subTitleFont, setSubTitleFont] = subTitle;
  const { subV } = useContext(FontContext);
  const [subVariant, setSubVariant] = subV;

  const suggestionsArr = [
    {
      title: "Open Sans",
      titleVariant: "regular",
      subtitle: "Open Sans",
      subVariant: "regular",
      body: "Roboto",
      bodyVariant: "regular"
    },
    {
      title: "Playfair Display",
      titleVariant: "regular",
      subtitle: "Playfair Display",
      subVariant: "regular",
      body: "Montserrat",
      bodyVariant: "300"
    },
    {
      title: "Merriweather",
      titleVariant: "regular",
      subtitle: "Merriweather",
      subVariant: "300",
      body: "Lato",
      bodyVariant: "regular"
    },
    {
      title: "PT Sans Narrow",
      titleVariant: "700",
      subtitle: "PT Sans Narrow",
      subVariant: "700",
      body: "PT Sans",
      bodyVariant: "regular"
    },
    {
      title: "Lora",
      titleVariant: "regular",
      subtitle: "Lora",
      subVariant: "regular",
      body: "Lato",
      bodyVariant: "regular"
    },
    {
      title: "Fira Sans",
      titleVariant: "300",
      subtitle: "Fira Sans",
      subVariant: "300",
      body: "Merriweather",
      bodyVariant: "regular"
    }
  ];
  
  
  const [count, setCount] = useState(Math.floor(Math.random() * suggestionsArr.length));
  const handleChange = () => {
    setCount(Math.floor(Math.random() * suggestionsArr.length))
    setTitleFont(suggestionsArr[count].title)
    setTitleVariant(suggestionsArr[count].titleVariant)
    setBodyFont(suggestionsArr[count].body)
    setBodyVariant(suggestionsArr[count].bodyVariant)
    setSubTitleFont(suggestionsArr[count].subtitle)
    setSubVariant(suggestionsArr[count].subVariant)
  };
  return(
    <div>
       <h4> Would you like to start with a    
       <Button size="small" variant="contained" onClick={() => handleChange()}>
         Suggested Font Pairing?
      </Button></h4>
      {/* <h3 style={{fontFamily: `${titleFont}`}}>This is your title in {titleFont}, {titleVariant}</h3>
      <p style={{ fontFamily: `${bodyFont}` }}>
        This will be your body in {bodyFont}, {bodyVariant}!
      </p> */}
      </div>
  )
}