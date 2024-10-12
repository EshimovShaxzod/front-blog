import multer from "multer";
import path from "path";
import { connectToDB } from "@/utils/database";
import Post from "@/models/post"; // Post modelini import qilish

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};

// Multer sozlamalari
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Fayllar saqlanadigan papka
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Fayl nomi
  },
});




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
