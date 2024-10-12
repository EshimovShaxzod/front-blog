import Blog from '@/components/blog'
import Hero from '@/components/hero'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto px-4'>
      <Hero />
      <Blog />
    </div>
  )
}

export default Page