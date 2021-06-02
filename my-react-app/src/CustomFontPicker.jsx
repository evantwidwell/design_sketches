import React, { useState, useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import Button from "@material-ui/core/Button";
import GoogleFontLoader from "react-google-font-loader";
import { FontContext } from "./FontContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const ref = useRef();
  const classes = useStyles();
  const [fonts, setFonts] = useState([]);
  const { title } = useContext(FontContext);
  const [titleFont, setTitleFont] = title;
  const { titleV } = useContext(FontContext);
  const [variant, setVariant] = titleV;
  const [variants, setVariants] = useState([]);
  

  useEffect(() => {
    let arr = [];
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCtrYe5NA6nnIxkKEO61XM2oS-USy-BMUQ&sort=popularity"
      );
      for (let x = 0; x < 50; x++) {
        arr.push(result.data.items[x]);
      }
      setFonts(arr);
    };

    fetchData();
  }, []);

  const randomize = () => {
    let num = Math.floor(Math.random() * fonts.length);
    let randomFont = fonts[num];
    setTitleFont(randomFont.family);
    setVariants(randomFont.variants);
    let vnum = Math.floor(Math.random() * randomFont.variants.length);
    console.log(randomFont.variants)
    setVariant(randomFont.variants[vnum])
  };

  const handleChange = (event) => {
    setTitleFont(event.target.value);
    setVariants(
      fonts.filter((font) => font.family === event.target.value)[0].variants
    );
    setVariant("regular");
  };
  const handleVariant = (event) => {
    setVariant(event.target.value);
  };

  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: `${titleFont}`,
            weights: [`${variant}`]
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Title Font</InputLabel>
        <Select value={titleFont} onChange={handleChange}>
          {fonts.map((font) => (
            <MenuItem key={font.family} value={font.family}>
              {font.family}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Variants</InputLabel>
        <Select value={variant} onChange={handleVariant}>
          {variants.map((variant) => (
            <MenuItem key={variant} value={variant}>
              {variant}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Button size="small" variant="contained" onClick={() => randomize()}>
        Random Title Font?
      </Button>
      <h2 style={{ fontFamily: `${titleFont}` }}>
        This will be your title in {titleFont}, {variant}!
      </h2>
    </div>
  );
}
