import React, { useState, useEffect, useContext, createContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./Post/Post";


const FilteredPostContext=React.createContext();
const FilteredPostUpdateContext=React.createContext();
const PostApprove=createContext();
const PostDecline=createContext();


export function useFilteredPosts(){

    return useContext(FilteredPostContext);
}

export function useFilteredPostsUpdate(){
    return useContext(FilteredPostUpdateContext);
}

export function usePostApprove(){
  return useContext(PostApprove);
}

export function usePostDecline(){
  return useContext(PostDecline);
}

const PostContextProvider=({children})=>{

    const [filteredPosts, setFilteredPosts]=useState([]);

    async function getPosts() {
    axios.get(`https://tvc-educate.onrender.com/api/posts`).then((res) => {
    setFilteredPosts(res.data.posts); // Initialize filteredPosts with all posts
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

    const handleFilter=(idx)=>{
        const updatedFilteredPosts = filteredPosts.filter((post) => post.id !== idx);
        setFilteredPosts(updatedFilteredPosts);
        // navigate('/validate');
    }

  const handleApprove = async (postId, titleURL) => {
    try {
      await axios.patch(`https://tvc-educate.onrender.com/api/posts/${titleURL}/${postId}/approve`);
      console.log('post approved');
    } catch (error) {
      console.error('Error approving post:', error);
    }
  };

  const handleDecline= async (postId, titleURL)=>{
    try {
    // Send a DELETE request to delete the post with the given postId
    await axios.delete(`https://tvc-educate.onrender.com/api/posts/${titleURL}/${postId}/delete`);
    console.log('Post deleted');
  } catch (error) {
    // Handle any errors here
    console.error('Error deleting post:', error);
  }
  }



    return(
        <>
        <PostDecline.Provider value={handleDecline}>
        <PostApprove.Provider value={handleApprove}>
        <FilteredPostContext.Provider value={filteredPosts}>
        <FilteredPostUpdateContext.Provider value={handleFilter}>
            {children}
        </FilteredPostUpdateContext.Provider>
        </FilteredPostContext.Provider>
        </PostApprove.Provider>
        </PostDecline.Provider>
        </>
    )


};


export default PostContextProvider;