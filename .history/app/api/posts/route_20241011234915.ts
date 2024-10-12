import { IncomingForm } from "formidable";
import fs from "fs";
import 
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
        return; // Xato bo'lganda return qilish
      }
      resolve({ fields, files });
    });
  });
};

export const POST = async (req: any) => {
  const { fields, files }: any = await parseForm(req);
  const { username, body } = fields; // Text ma'lumotlarini olish
  const imageFile = files.image; // Fayl ma'lumotlarini olish
  try {
    await connectToDB();

    const newPost = new Post({ username, body });
    await newPost.save();

    // Faylni yuklash
    if (imageFile) {
      const imagePath = `/uploads/${imageFile.originalFilename}`;
      fs.renameSync(imageFile.filepath, `./public${imagePath}`);
    }

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};
