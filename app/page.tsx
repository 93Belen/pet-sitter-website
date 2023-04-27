import Image from "next/image"
import ContactButton from "./components/ContactButton"

export default function Home() {
  return (
    <main className='grid grid-cols-2 grid-rows-3 pt-28'>
     <div>
      <Image alt='' width={1000} height={1000} src={require('../public/pic1.png')} />
     </div>
     <div>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
       deserunt mollit anim id est laborum.
       </p>
       <ContactButton />
     </div>
     <div>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
       deserunt mollit anim id est laborum.
       </p>
     </div>
     <div>
     <Image alt='' width={2000} height={2000} src={require('../public/pic2.png')} />
     </div>
     <div className='col-span-2'>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
       deserunt mollit anim id est laborum.
       </p>
     </div>
    </main>
  )
}
