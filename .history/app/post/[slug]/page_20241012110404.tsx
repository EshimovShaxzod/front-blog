'use client'
import { useParams } from "next/navigation";

const PostPage = () => {
  const router = useParams();

  const { id } = router.query; 

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {id}</div>;
};

export default PostPage;
