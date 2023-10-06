import React, { useState, useEffect } from "react";
import "./Validate.css";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import { useFilteredPosts, useFilteredPostsUpdate, usePostApprove, usePostDecline } from "../PostContext";


const Validate = () => {

  const filteredPosts = useFilteredPosts();
  const handleFilter = useFilteredPostsUpdate();
  const handleApprove = usePostApprove();
  const handleDecline = usePostDecline();

  const filteredPostsUnapproved = filteredPosts.filter((post) => post.approved === false);

  console.log(filteredPostsUnapproved);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


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
      <div>
        {filteredPostsUnapproved.length !== 0 ? (
          <div className="cardsContainer">
            {filteredPostsUnapproved.map((post, idx) => (
              <div data-aos="flip-left" key={idx}>
                <Card key={idx} sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    sx={{ height: 140 }}
                    image={post.image}
                    alt={post.title}
                    title="Image Title"
                    className="image"
                  />
                  <div className="gradientBreak"></div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" className="title">
                      {post.title}
                    </Typography>
                    <Typography
                      align="justify"
                      variant="body2"
                      color="text.secondary"
                      className="description"
                    >
                      {post.body}
                    </Typography>
                    <Typography variant="subtitle2" className="tags">
                      Tags:{" "}
                      {post.tags?.map((tag, idx) => (
                        <span key={idx}>#{tag.name} </span>
                      ))}
                    </Typography>
                    <Typography></Typography>
                  </CardContent>
                  <CardActions className="actionButtons">
                    <Button
                      size="small"
                      onClick={() => {
                        handleFilter(post.id);
                        handleApprove(post.id, post.titleURL);
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        handleDecline(post.id, post.titleURL);
                        handleFilter(post.id);
                      }}
                    >
                      Decline
                    </Button>
                    <Link
                      to={`/posts/${post.titleURL}/${post.id}`}
                      state={{ from: post }}
                    >
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="noPostsAvailable">
            <img
              src="https://i.postimg.cc/BQgVFgqJ/sleeping-panda.png"
              alt="Sleeping Panda"
            />
            No posts available to approve. Try again later.
          </div>
        )}
      </div>
    </div>
  );

};

export default Validate;