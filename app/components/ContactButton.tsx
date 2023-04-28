"use client"

import {IoClose} from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react';

export default function ContactButton() {
    const [show, setShow] = useState(false);
    const hideForm = () => {
        setShow(false)
      }
    return(
        <div>
            <AnimatePresence>
          {show && (
            <motion.div
            layout
            initial={{right: -250, opacity: 0}}
            animate={{right: 0, opacity: 1}}
            exit={{right: -250, opacity: 0}}
            transition={{ease: "linear", duration: 0.4}}
            className={`z-10 fixed bg-mytheme text-white md:w-2/6 w-[80vw] h-[200px] top-[40vh] left-12 md:left-[30vw] flex flex-col justify-around rounded-md p-4`}>
            <IoClose className='text-3xl' onClick={hideForm} />
            <p className='m-auto text-2xl'>phone</p>
            <p className='m-auto text-2xl'>email</p>
          </motion.div>
          )}       
        </AnimatePresence>
            <button onClick={() => {setShow(true)}} className='bg-mytheme py-3 px-6 rounded-full w-fit my-10 hover:bg-mylighttheme duration-1000 animate-contactbutton'>Contact me!</button>
        </div>
        )
}