import React, {useState, createContext} from 'react';
import GoogleFontLoader from "react-google-font-loader";
export const FontContext = createContext();

export function FontProvider(props){
const [ titleFont, setTitleFont] = useState('');
const [ bodyFont, setBodyFont ] = useState({});
const [ subTitleFont, setSubTitleFont] = useState({});

<GoogleFontLoader
  fonts={[
    {
      font: `${titleFont}`,
    },
    {
      font: 'Roboto Mono',
      weights: [400, 700],
    },
    {
      font: 'Anton',
      weights: [400, 700],
    },
  ]}
/>;
return(
<FontContext.Provider value={{ title: [ titleFont, setTitleFont], body: [bodyFont, setBodyFont], subTitle: [subTitleFont, setSubTitleFont] }}>
  {props.children}
</FontContext.Provider>
);
};