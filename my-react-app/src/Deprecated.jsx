import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./menuStyles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import TextField from '@material-ui/core/TextField';
import SimpleSelect from './CustomFontPicker'


export default function CustomFont() {
  const [fonts, setFonts] = useState([]);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    let arr = [];
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCtrYe5NA6nnIxkKEO61XM2oS-USy-BMUQ&sort=popularity"
      );
        for(let x=0; x<50; x++){
          arr.push(result.data.items[x])
        }
      setFonts(arr);
      console.log(arr);
    };

    fetchData();
    console.log(fonts);
  }, []);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>List of Fonts</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            {fonts.map((font) => (
              <li key={font.family}>{font.family}</li>
            ))}
          </ul>
        </nav>
      </div>
      <SimpleSelect />
    </div>
  );
}
