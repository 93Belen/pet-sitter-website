import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ContactButton from "../components/ContactButton";
import SeeCalendar from "../components/SeeCalendar";


export default async function Layout({children}: {
    children: React.ReactNode
  }){

    const session = await getServerSession(authOptions);

    return (
        <main className='pt-28'>
            <div className='flex gap-4'>
                <ContactButton />
                {session?.user && (
                    <SeeCalendar />
                )}
            </div>
            {children}
        </main>
    )

}