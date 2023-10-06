import React, { useEffect } from "react";
import "./Nav.css";
import CardComponent from "../Card/CardComponent";
import { useNavigate } from "react-router-dom";
import { useFilteredPosts, useFilteredPostsUpdate } from "../PostContext";

function Nav() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/soon", { replace: true });
  };
   const handleValidate= () => {
    Navigate("/validate", { replace: true });
  };

  const filteredPosts=useFilteredPosts();
  console.log(filteredPosts);


  return (
    <div className="main-container">
      <div className="hero">
        <p className="title" style={{ color: "white" }}>
          Welcome to TVC EDUCATE Admin Panel
        </p>
        <p style={{ color: "gray" }}>
          One Stop destination to Handle TVC EDUCATE Web Application
        </p>
      </div>
      <div className="card-conatiner">
        <div onClick={handleClick}>
          <CardComponent
            title="Change Carousal"
            descp="Here you can change the Carousal Image on Landing Page."
          />
        </div>
        <div onClick={handleClick}>
          <CardComponent
            title="Trending article"
            descp="Here you can change the trending article as per your choice."
          />
        </div>
      </div>
      <div className="card-conatiner second-coloum">
        <div onClick={handleClick}>
          <CardComponent
            title="Landing Page Quiz"
            descp="Here you can change the Quiz Questions as per your choice."
          />
        </div>
        <div onClick={handleValidate}>
          <CardComponent
            title="Validate Article"
            descp="Verify article aligns with guidelines prior to granting publication approval."
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
