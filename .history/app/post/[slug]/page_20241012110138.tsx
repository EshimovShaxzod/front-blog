import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();

  const { id } = router.query; 

  return <div className="w-full max-w-[1240px] mx-auto">PostPage</div>;
};

export default PostPage;
