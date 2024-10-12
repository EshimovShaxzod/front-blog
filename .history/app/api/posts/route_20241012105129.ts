import { connectToDB } from "@/utils/database";
import Post from "@/models/post";

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(`failed to fetch: ${error}`, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await connectToDB();

    const { username, body, sl } = await req.json();

    const newPost = new Post({
      username,
      body,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch" + error);
  }
};
