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

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: any) => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
};

export const POST = async (req: any) => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.log(err);
        reject(new Response("Error uploading file", { status: 500 }));
        return;
      }

      const { username, body } = fields;
      const imageFile = files.image; // Faylni olamiz

      try {
        await connectToDB();

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

        resolve(new Response(JSON.stringify(newPost), { status: 201 }));
      } catch (error) {
        console.log(error);
        reject(new Response("Failed to create post", { status: 500 }));
      }
    });
  });
};
