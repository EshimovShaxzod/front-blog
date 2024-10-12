"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const PostPage = () => {
  const params = useParams();

  const { slug } = params;

 useEffect(() => {
   const fetchUser = async () => {
    if(slug){
      const res = fetch(`/api/post/${slug}`)
    }
   }
 })
  

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {slug}</div>;
};

export default PostPage;
