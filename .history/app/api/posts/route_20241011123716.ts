import { connectToDB } from "@/utils/database";

export const  GET = async () => {
   try {
    await connectToDB();

    const blogs = await 

   } catch (error) {
    
   }
}