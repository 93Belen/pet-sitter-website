import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddReviewButton from "../components/AddReviewButton";
import ContactButton from "../components/ContactButton";


export default async function Layout({children}: {
    children: React.ReactNode
  }){

    const session = await getServerSession(authOptions);

    return (
        <main className='md:pt-28 pt-10'>
            <div className='flex gap-4'>
                <ContactButton />
                {session?.user && (
                <AddReviewButton />
            )}
            </div>
            {children}
        </main>
    )

}