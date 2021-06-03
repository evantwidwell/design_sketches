import React, { useState, createContext } from "react";

export const FontContext = createContext();

export function FontProvider(props) {
  const [titleFont, setTitleFont] = useState("Roboto");
  const [titleVariant, setTitleVariant] = useState("regular");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const [bodyVariant, setBodyVariant] = useState("regular");
  const [subTitleFont, setSubTitleFont] = useState("Roboto");
  const [subVariant, setSubVariant] = useState("regular");

  return (
    <FontContext.Provider
      value={{
        title: [titleFont, setTitleFont],
        titleV: [titleVariant, setTitleVariant],
        body: [bodyFont, setBodyFont],
        bodyV: [bodyVariant, setBodyVariant],
        subTitle: [subTitleFont, setSubTitleFont],
        subV: [subVariant, setSubVariant],
      }}
    >
      {props.children}
    </FontContext.Provider>
  );
}
