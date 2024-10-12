import post from "@/models/post";
import { connectToDB } from "@/utils/database"

export const GET  = async ({params}) => {
    await connectToDB();

    try {
        const user  = await post.findOne
    } catch () {
        
    }
}