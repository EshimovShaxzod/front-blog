import post from "@/models/post";
import { connectToDB } from "@/utils/database"

export const GET  = async ({params}) => {
    const { slug } = params;
    await connectToDB();

    try {
        const user  = await post.findOne({username: slug})
    } catch (error) {
        return new Response('Failed to fetch user', { status: 500 });
    }
}