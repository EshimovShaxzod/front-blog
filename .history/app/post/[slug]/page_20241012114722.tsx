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
      <div className="w-full mx-auto">
        <div className="w-full max-w-[400px] mx-auto  flex flex-col justify-center items-center border-2 shadow-md rounded-md">
          <User className="w-[100px] h-[100px] rounded-full" />
          <h3>{user?.username}</h3>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
