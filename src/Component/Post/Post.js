import React from "react";
import { useLocation } from "react-router-dom";
import './Post.css';
import { readingTime, formatDate } from "../../index";
import { useNavigate } from "react-router-dom";

import { useFilteredPosts, useFilteredPostsUpdate, usePostApprove, usePostDecline } from "../PostContext";

const Post = () => {
    const location = useLocation();
    const post = location.state?.from;
    console.log(post);
    var readingDuration = readingTime(post.body);
    var date = formatDate(post.date);
    const navigate = useNavigate();



    const handleFilter = useFilteredPostsUpdate();
    const handleApprove = usePostApprove();
    const handleDecline = usePostDecline();


    return (
        <div className="postContainer">
            <div className="titleWrapper">
                {post.title}
                <div className="readingDuration">{readingDuration}  </div>
            </div>
            <img className="imageWrapper" src={post.image} alt="Post Image" />
            <div className="authorWrapper">
                <img className="authorImage" src={post.author.avatar} alt={`user photo ${post.author.name}`} />
                <div className="authorInfo">
                    <div className="authorName">{post.author.name}</div>
                    <div className="publishDate">{date}</div>
                </div>
            </div>
            <div className="contentWrapper">
                {post.body}
            </div>
            <div className="tagsWrapper">
                Tags: {post.tags?.map((tag, idx) => (
                    <span key={idx}>#{tag.name} </span>
                ))}
            </div>
            <div className="authorizationWrapper">
                <div className="approve" onClick={() => {
                    handleApprove(post.id, post.titleURL);
                    handleFilter(post.id);
                    navigate('/validate');
                }}>Approve</div>
                <div className="decline" onClick={() => {
                    handleFilter(post.id);
                    handleDecline(post.id, post.titleURL);
                    navigate('/validate');
                }}>Decline</div>
            </div>
        </div>
    );
};

export default Post;
