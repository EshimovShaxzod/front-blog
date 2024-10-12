import { connectToDB } from "@/utils/database";
import Post from "@/models/post"; // Post modelini import qilish

const posts = [
  {
    username: "user1",
    body: "Bu birinchi postning mazmuni. Ushbu postda blogda yozish tajribam haqida yozaman.",
  },
  {
    username: "user2",
    body: "Ikkinchi post. Men dasturlash tilida yangi boshlovchiman va birinchi loyiham ustida ishlayapman.",
  },
];

export const GET = async () => {
  try {
    await connectToDB();

    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};


export const POST = async (req: any) => {
  const { username, body } = await req.json(); // JSON formatida ma'lumot olish
  try {
    await connectToDB();

    // Yangi postni yaratish
    const newPost = new Post({ username, body });
    await newPost.save(); // Postni saqlash

    return new Response(JSON.stringify(newPost), { status: 201 }); // Yangi post qaytarish
  } catch (error) {
    console.log(error);
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};
