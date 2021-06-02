import React, {useState, createContext} from 'react';
export const FontContext = createContext();

export function FontProvider(props){
const [ titleFont, setTitleFont] = useState('');
const [ bodyFont, setBodyFont ] = useState({});
const [ subTitleFont, setSubTitleFont] = useState({});


return(
<FontContext.Provider value={{ title: [ titleFont, setTitleFont], body: [bodyFont, setBodyFont], subTitle: [subTitleFont, setSubTitleFont] }}>
  {props.children}
</FontContext.Provider>
);
};