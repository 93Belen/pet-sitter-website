import './globals.css'
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Nav from './components/Nav';
import { Montserrat } from 'next/font/google'
import Hydrate from './components/Hydrate';
import { Suspense } from 'react';
import Loading from './reviews/loading';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-mont'
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);


  return (
    <html lang="en" className={`${montserrat.variable} md:p-10 p-2 overflow-x-hidden`}>
         <body className='p-10'>
           <Hydrate>
            <Nav user={session?.user} expires={session?.expires as string} />
            {children}
            <footer className='bg-mytheme hidden md:flex text-white w-screen h-[200px] md:ml-[-5rem] md:mb-[-5rem] ml-[-4rem] mb-[-3rem] pt-10 gap-5 justify-evenly'>
              <div className='flex flex-col gap-5'>
                <p>Overland Park</p>
                <p>Leawood</p>
                <p>Olathe</p>
              </div>
              <div>Phone number</div>
              <div>Email</div>
            </footer>
            </Hydrate>
           </body>
    </html>
  )
}
