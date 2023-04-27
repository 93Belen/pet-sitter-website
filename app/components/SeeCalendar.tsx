"use client"
import {IoClose} from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'


export default function SeeCalendar() {
    const [show, setShow] = useState(false)
    const hideForm = () => {
        setShow(false)
      }
    
    return(
        <div>
            <AnimatePresence>
                {show && (
                    <motion.form
                    layout
                    initial={{right: -250, opacity: 0}}
                    animate={{right: 0, opacity: 1}}
                    exit={{right: -250, opacity: 0}}
                    transition={{ease: "linear", duration: 0.4}}
                    className={`absolute bg-mygray md:w-3/6 w-[90vw] h-screen top-0 right-[-200px] flex flex-col justify-around p-10`}>
                    <IoClose className='text-3xl' onClick={hideForm} />
                </motion.form>
                )}       
         </AnimatePresence>
      <button onClick={() => {
          setShow(true)
      }} className='bg-myred text-white py-3 px-6 rounded-full w-fit my-10'>See Availability</button>
        </div>
        
        )
}