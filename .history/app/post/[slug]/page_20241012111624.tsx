"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = () => {
  const params = useParams();

  const [user, setUser] = useState(null);

  const { slug } = params;

 useEffect(() => {
   const fetchUser = async () => {
    if(slug){
      const response = await fetch(`/api/post/${slug}`).then((res) =>{
        res.json()

      }).catch((error) => {

      })

    }
   }
 })
  

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {slug}</div>;
};

export default PostPage;
