import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const responseFromPrisma = await prisma.pricing.findMany();

    return new Response(JSON.stringify(responseFromPrisma));
}
