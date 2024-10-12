import post from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (req: Request,{ params }: { params: { slug: string } }) => {
  const { slug } = params;
  await connectToDB();

  try {
    const user = await post.findOne({ slug });
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};
