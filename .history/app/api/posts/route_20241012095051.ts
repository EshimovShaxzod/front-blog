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

export const POST = async (req, res) => {
  try {
    await connectToDB()

    const {username, body} = req.body

    const posts = 



  } catch (error) {
    
  }
}

