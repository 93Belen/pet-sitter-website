import { prisma } from "components/prisma/seed";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

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
  