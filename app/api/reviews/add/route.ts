import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
const prisma = new PrismaClient()

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    const { myReview } = await req.json();  
    const responseFromPrisma = await prisma.review.create({
        data: {
            text: myReview,
            user: session?.user?.name?.toString() as string
        }
    })
  
    return new Response(JSON.stringify(responseFromPrisma));
  }
  