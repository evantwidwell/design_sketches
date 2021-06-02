import React, {useState, createContext} from 'react';
export const FontContext = createContext();

export function FontProvider(props){
const [ titleFont, setTitleFont] = useState('');
const [ titleVariant, setTitleVariant] = useState('regular')
const [ bodyFont, setBodyFont ] = useState({});
const [ subTitleFont, setSubTitleFont] = useState({});


return(
<FontContext.Provider value={{ title: [ titleFont, setTitleFont], titleV: [titleVariant, setTitleVariant], body: [bodyFont, setBodyFont], subTitle: [subTitleFont, setSubTitleFont] }}>
  {props.children}
</FontContext.Provider>
);
};