import React from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardComponent = ({ title, descp }) => {
  return (
    <div className="Card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=<ViewCarouselIcon />
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Here you can change the Carousal Image on Landing Page */}
              {descp}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComponent;
