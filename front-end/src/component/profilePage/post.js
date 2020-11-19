import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../profilePage/postImg";
import Postinformation from './postInformation';
import Postdesc from "./postDesc";
const Post = (props) => {
  const posts = ()=>{
    axios
         .get("posts")
         .then((response)=>{
           console.log("Response",response);
         })
         .catch((err)=>{
           console.log("Error",err);
         });
  };
  return (
    <div className="post" onSubmit={posts}>
      <Image />
      <Postinformation/>
      <Postdesc/>
      
    </div>
  );
};
export default Post;
