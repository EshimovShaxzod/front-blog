import { useRouter } from 'next/router';

const PostPage = ({params}: {params: {_id: string}}) => {

  

  console.log(params._id, 'salom');
  

  return (
    <div className='w-full max-w-[1240px] mx-auto'>PostPage</div>
  )
}

export default PostPage