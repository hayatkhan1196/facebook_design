import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

function Posts() {
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Hayat khan safi"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          // image="/static/images/cards/paella.jpg"
          src="data:image/jpeg;base64,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"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Posts;
