'use client'
import { useRouter } from "next/navigation";

const PostPage = () => {
  const router = useRouter();

  const { id } = router; 

  return <div className="w-full max-w-[1240px] mx-auto">PostPage {id}</div>;
};

export default PostPage;
