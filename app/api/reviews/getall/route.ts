import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

export async function GET() {
    const responseFromPrisma = await prisma.review.findMany();

    return new Response(JSON.stringify(responseFromPrisma));
}
