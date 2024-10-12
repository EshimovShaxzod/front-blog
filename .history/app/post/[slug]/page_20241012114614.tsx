"use client";
import { postsType } from "@/components/blog";
import { User } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = () => {
  const params = useParams();

  const [user, setUser] = useState<postsType | null>(null);

  const { slug } = params;

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`) // API ga so'rov yuborish
        .then((res) => {
          if (!res.ok) {
            // Agar muvaffaqiyatsiz bo'lsa, xato qaytaring
            throw new Error("Failed to fetch user data");
          }
          return res.json(); // JSON formatida qaytish
        })
        .then((data) => {
          setUser(data); // Foydalanuvchi ma'lumotlarini o'rnating
        })
        .catch((error) => {
          console.error(error); // Xatolarni konsolga chiqarish
        });
    }
  }, [slug]);

  console.log(user);

  return (
    <div className="w-full max-w-[1240px] mx-auto">
      <div className="w-full  flex flex-col justify-center items-center border-2">
        <User className="w-[100px] h-[100px]" />
        <h3>{user?.username}</h3>
      </div>
    </div>
  );
};

export default PostPage;
