import multer from "multer";
import { IncomingForm } from "formidable";
import fs from "fs";
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: any) => {
  try {
    await connectToDB();

    const form = new IncomingForm();

    // Fayllar va boshqa form ma'lumotlarini yuklash
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.log(err);
        return new Response("Error uploading file", { status: 500 });
      }

      const { username, body } = fields;
      const imageFile = files.image; // Faylni olamiz

      // Faylni yuklash
      const imagePath = imageFile
        ? `/uploads/${imageFile.originalFilename}`
        : null;
      fs.renameSync(
        imageFile.filepath,
        `./public/uploads/${imageFile.originalFilename}`
      ); // Faylni saqlash

      // Post yaratish
      const newPost = new Post({
        username,
        body,
        image: imagePath, // Fayl yo'li saqlanadi
      });

      await newPost.save();

      return new Response(JSON.stringify(newPost), { status: 201 });
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create post", { status: 500 });
  }
};
