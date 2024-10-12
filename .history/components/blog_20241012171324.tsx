"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import FrontImage from "@/assets/images/developer.jpg";
import DesignImage from "@/assets/images/design.jpg";
import BackendImage from "@/assets/images/backend.jpg";
import Image from "next/image";

export type postsType = {
  username: string;
  body: string;
  _id: string;
  slug: string;
  category: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<postsType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();

    const controller = new AbortController();
    const signal = controller.signal;

    return () => {
      controller.abort();
    };
  }, []);

  console.log(blogs);

  return (
    <div className="mt-6">
      <h1 className=" font-bold text-3xl ">All blog posts</h1>
      <div className="w-full py-6 grid grid-cols-1  gap-4 md:grid-cols-3 gap-y-4 relative ">
        {blogs.map((blog) => (
          <div key={blog.slug} className="w-full">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={
                  blog.category === "web"
                    ? FrontImage
                    : blog.category === "backend"
                    ? BackendImage
                    : DesignImage
                }
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                alt="image"
                width={100}
                height={100}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {blog.category.toLowerCase()}
                </h1>
                <p className="leading-relaxed mb-6">{blog.body}</p>
                <div className=" flex items-center gap-x-5 flex-wrap absolute bottom-10">
                  <Link
                    href={`/post/${blog.slug}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
