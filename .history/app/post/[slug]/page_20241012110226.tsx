'use client'
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const PostPage = () => {
  const router = useRouter();

  const { id } = Router; 

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {id}</div>;
};

export default PostPage;
