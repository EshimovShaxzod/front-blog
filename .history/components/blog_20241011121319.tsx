import React, { useEffect, useState } from 'react'

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
       const getPosts = async () => {
        const data = await fetch("/api/posts")

       }
    }, [])

  return (
    <div>
        <h1 className='  '>Blog</h1>
    </div>
  )
}

export default Blog