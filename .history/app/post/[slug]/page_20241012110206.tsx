'use client'
import { useRouter } from "next/nav";

const PostPage = () => {
  const router = useRouter();

  const { id } = router.query; 

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {id}</div>;
};

export default PostPage;
