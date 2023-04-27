"use client"

import {IoClose} from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react';

export default function AddReviewButton() {
    const [show, setShow] = useState(false);
    const [myReview, setMyReview] = useState('')
    
    const addReview = async() => {
        const res = await fetch('api/reviews/add', {
            method: 'POST',
            body: JSON.stringify({myReview})
        })
        const jsonRes = await res.json()
        setShow(false)
        return jsonRes
    }

    const hideForm = () => {
        setShow(false)
      }
      const reviewOnChange = (event) => {
        setMyReview(event.target.value)
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
            className={`fixed bg-mygray md:w-3/6 w-[90vw] h-screen top-0 right-[-200px] flex flex-col justify-around p-10`}>
            <IoClose className='text-3xl' onClick={hideForm} />
            <textarea onChange={reviewOnChange} maxLength={150}  className='rounded-lg p-7' cols={10} rows={12} name="description" id="description" />
            <button onClick={addReview} className='bg-mytheme py-3 px-6 rounded-full w-fit'>Answer</button>
          </motion.div>
          )}       
        </AnimatePresence>
            <button onClick={() => {setShow(true)}} className='bg-myred text-white py-3 px-6 rounded-full w-fit my-10'>Add Review</button>
        </div>
        
        )
}