import { prisma } from "components/prisma/seed";


// use `prisma` in your application to read and write data in your DB

export async function GET() {
    const responseFromPrisma = await prisma.review.findMany();
    console.log(responseFromPrisma)
    return new Response(JSON.stringify(responseFromPrisma));
}
