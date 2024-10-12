import { connectToDB } from "@/utils/database";



const posts = [
    {
      "username": "user1",
      "body": "Bu birinchi postning mazmuni. Ushbu postda blogda yozish tajribam haqida yozaman."
    },
    {
      "username": "user2",
      "body": "Ikkinchi post. Men dasturlash tilida yangi boshlovchiman va birinchi loyiham ustida ishlayapman."
    }
  ]
  

export const  GET = async () => {
   try {
    await connectToDB();

    return new Response(JSON.stringify(posts))
   } catch (error) {
    return new Response(`failed to fetch: ${error}`, { status: 500 });
   }
}


export const POST = async (req, res) => {
    const {}
    try {
        await connectToDB();
    } catch (error) {
        return new Response(`failed to fetch: ${error}`, { status: 500 });
    }
}
