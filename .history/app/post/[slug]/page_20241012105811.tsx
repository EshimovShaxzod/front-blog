import React from 'react'

const PostPage = ({params}: {params: {_id: string}}) => {

  console.log(params._id);
  

  return (
    <div className='w-full max-w-[1240px] mx-auto'>PostPage</div>
  )
}

export default PostPage