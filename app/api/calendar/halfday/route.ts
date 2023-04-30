import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const responseFromPrisma = await prisma.availability.findMany({
        where: {
            status: 'Half Day'
        }
    });

    const serializedResponse = responseFromPrisma.map(avail => ({
        date: avail.date.toString(),
        status: avail.status
    }));

    return new Response(JSON.stringify(serializedResponse));
}
