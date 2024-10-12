import { connectToDB } from "@/utils/database";

const posts = 

export const  GET = async () => {
   try {
    await connectToDB();

    const blogs = await 

   } catch (error) {
    
   }
}