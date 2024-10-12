"use client";
import React, { useEffect, useState } from "react";

export type postsType = {
    username: string,
    body: string
}

const Blog = () => {
  const [blogs, setBlogs] = useState<postsType[]>([]);
  const [error, setError] = useState(""); // Xatoliklar uchun o'zgaruvchi

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          // Agar javob muvaffaqiyatsiz bo'lsa
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setBlogs(data); // Faqat data mavjud bo'lsa o'rnating
      } catch (error) {
        setError(error.message); // Xatoliklarni saqlash
      }
    };

    getPosts();

    // Ixtiyoriy: AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    return () => {
      controller.abort(); // Komponent o'chirilganda so'rovni bekor qilish
    };
  }, []);

  console.log(blogs);
  

  return (
    <div className="mt-6">
      <h1 className=" font-bold text-3xl ">All blog posts</h1>
      <div className="py-6">
        {}
      </div>
    </div>
  );
};

export default Blog;
