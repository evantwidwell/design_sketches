import React, { useContext } from "react";
import { FontContext } from "./FontContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ExampleComponent() {
  const { body } = useContext(FontContext);
  const [bodyFont] = body;
  const { title } = useContext(FontContext);
  const [titleFont] = title;
  const { subTitle } = useContext(FontContext);
  const [subTitleFont] = subTitle;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography
          style={{ fontFamily: `${titleFont}` }}
          variant="h3"
          gutterBottom
        >
          Titles Will Look Like This
        </Typography>

        <Typography
          style={{ fontFamily: `${subTitleFont}` }}
          color="textSecondary"
          variant="subtitle1"
        >
          Subtitles and captions will look like this
        </Typography>

        <Typography
          style={{ fontFamily: `${bodyFont}` }}
          variant="body2"
          component="p"
          
        >
          Body text will look like this. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas sit amet justo sapien. Maecenas vel blandit
          libero, ut fermentum quam. Nullam blandit metus rutrum ullamcorper
          ornare. Nullam suscipit, neque auctor lobortis posuere, tellus est
          sagittis mauris, ac condimentum sapien felis sed metus. Nunc
          pellentesque tristique interdum. Aliquam quis sapien iaculis massa
          rhoncus laoreet a vitae orci. Cras elementum velit sit amet lectus
          auctor ultricies. Sed nec porttitor enim, ut dignissim leo. Ut at
          pellentesque augue, at fringilla arcu.
        </Typography>
      </CardContent>
    </Card>
  );
}
