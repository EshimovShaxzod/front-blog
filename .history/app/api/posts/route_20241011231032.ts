import multer from "multer";
import { IncomingForm } from 'formidable';
import fs from 'fs'
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

const upload = multer({ storage });

export const POST = async (req: any) => {
  try {
    await connectToDB();

    // Multer orqali fayl va boshqa ma'lumotlarni olish
    const uploadFile = upload.single("image");

    uploadFile(req, {}, async (err: any) => {
      if (err) {
        return new Response(`Failed to upload file: ${err.message}`, {
          status: 500,
        });
      }

      const { username, body } = req.body;
      const imagePath = req.file ? req.file.path : null;

      // Yangi postni yaratish
      const newPost = new Post({
        username,
        body,
        image: imagePath, // Fayl manzili saqlash
      });

      await newPost.save();

      return new Response(JSON.stringify(newPost), { status: 201 });
    });
  } catch (error) {
    console.log(error);
    return new Response(`Failed to create post: ${error}`, { status: 500 });
  }
};
