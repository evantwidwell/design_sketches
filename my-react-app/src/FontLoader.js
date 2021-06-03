import React, { useContext } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { FontContext } from "./FontContext";

export default function FontLoader(){
  const { body } = useContext(FontContext);
  const [bodyFont] = body;
  const { bodyV } = useContext(FontContext);
  const [bodyVariant] = bodyV;
  const { title } = useContext(FontContext);
  const [titleFont] = title;
  const { titleV } = useContext(FontContext);
  const [titleVariant] = titleV;
  const { subTitle } = useContext(FontContext);
  const [subTitleFont] = subTitle;
  const { subV } = useContext(FontContext);
  const [subVariant] = subV;

  return(
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: `${titleFont}`,
            weights: [`${titleVariant}`]
          },
          {
            font: `${bodyFont}`,
            weights: [`${bodyVariant}`]
          },
          {
            font: `${subTitleFont}`,
            weights: [`${subVariant}`]
          },

        ]}
        
      />
    </div>
  )
}