import { prisma } from "components/prisma/seed";



export async function GET() {
    const responseFromPrisma = await prisma.availability.findMany({
        where: {
            status: 'Day and Night'
        }
    });

    const serializedResponse = responseFromPrisma.map(avail => ({
        date: avail.date.toString(),
        status: avail.status
    }));

    return new Response(JSON.stringify(serializedResponse));
}
