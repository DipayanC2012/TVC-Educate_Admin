import React,{useState, useEffect} from "react";
import "./Carousal.css";
import Card from "@mui/material/Card";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from 'axios';


const Carousal=()=> {

   const [postsData, setPostsData] = useState([]);
   const [slideData,setSlideData]=useState([{
    postID: '',
    postTitle:'',
    postImage:'',
   }])

   async function getPosts() {
    axios.get(`http://localhost:5000/api/posts`).then((res) => {
      setPostsData(res.data.posts);
    });
  };


    useEffect(() => {
    getPosts();
  }, []);
  console.log(setPostsData);

  return (
    <div className="main-container">
      <div className="hero-element">
        <p className="title" style={{ color: "white", textAlign: "center" }}>
          Welcome to TVC EDUCATE Admin Panel
        </p>
        <p style={{ color: "gray", textAlign: "center" }}>
          One Stop destination to Handle TVC EDUCATE Web Application
        </p>
      </div>
      {/* <div className="slide1">
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea> */}
            {/* <CardMedia
              component="img"
              height="140"
                image=<ViewCarouselIcon />
              alt="green iguana"
            /> */}
            {/* <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ paddingBottom: "2rem" }}
              >
                SLIDE 1 DETAILS
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ paddingBottom: "2rem" }}
              > */}
                {/* Here you can change the Carousal Image on Landing Page */}
                {/* Select the image you want to display :
              </Typography>
              <Typography variant="body1" color="text.secondary"> */}
                {/* Here you can change the Carousal Image on Landing Page */}
                {/* Select the text you want to show : */}
              {/* </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div> */}
    </div>
  );
}

export default Carousal;
