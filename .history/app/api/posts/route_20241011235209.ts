import { IncomingForm } from "formidable";
import formitable 
import fs from "fs";
const fileService = require("./file.service");
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


export const POST = async (req) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return new Response("Error parsing the files", { status: 500 });
    }

    await connectToDB();

    try {
      const filePath = await saveFile(files.image); // Faylni saqlash
      const newPost = new Post({
        username: fields.username,
        body: fields.body,
        image: filePath,
      }); // Postga tasvirni qo'shish

      await newPost.save(); // Postni saqlash

      return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
      return new Response(`Faylni yuklashda xato: ${error.message}`, {
        status: 500,
      });
    }
  });
};
