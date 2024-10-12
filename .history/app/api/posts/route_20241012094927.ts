/// const fileService = require("./file.service");
import fileService from "@/service/file.service";
import { connectToDB } from "@/utils/database";
import Post from "@/models/post"; // Post modelini import qilish
import formitable from "formidable";

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};

