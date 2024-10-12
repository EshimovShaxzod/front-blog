import React, { useEffect, useState } from 'react'

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
       const getPosts = async () => {
        const res = await fetch("/api/posts")
        const data = await res.json()
       }
    }, [])

  return (
    <div>
        <h1 className='  '>Blog</h1>
    </div>
  )
}

export default Blog