import React from 'react'

const PostPage = ({params}: {params: {id: string}}) => {

  console.log(params.slug);
  

  return (
    <div className='w-full max-w-[1240px] mx-auto'>PostPage</div>
  )
}

export default PostPage