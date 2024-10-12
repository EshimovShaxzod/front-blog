"use client";
import { useParams } from "next/navigation";

const PostPage = () => {
  const params = useParams();

  const { slug } = params;

 
  

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {slug}</div>;
};

export default PostPage;
