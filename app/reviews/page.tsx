"use client"


import { Suspense, useEffect, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import Loading from "./loading";


type review = {
  id: string,
  user: string
  text: string,
  answer: string | null
}

export default function Reviews() {
  const [reviews, setReviews] = useState<review[]>();



  const getReviews = async() => {
    const res = await fetch('api/reviews/getall')
    const jsonRes = await res.json()
    console.log(jsonRes)
    return jsonRes;
  }

useEffect(() => {
  getReviews().then((res) => {
    console.log(res)
    setReviews(res)})
},[])


  const displayReviews = () => {
    const arr = [];
    reviews?.forEach(review => {
      arr.unshift(
        <motion.div layout key={review.id} className='p-6 bg-mygray rounded-lg flex flex-col gap-5'>
         <h2>{review.user}</h2>
         <p>{review.text}</p>
         <motion.div
         layout>
         {review.answer && (
           <motion.div className='p-3 rounded-lg bg-mytheme text-white'>
              <p>Answer: {review.answer}</p>
           </motion.div>
          
         )}
         </motion.div>
       </motion.div>
      )
    })
    return arr;
  }



    return (
      <AnimatePresence>
      <motion.div
      layout
       className='flex flex-col gap-10 mb-28'>
         <Suspense fallback={<Loading />}>
       {displayReviews()}
        </Suspense>
      </motion.div>
      </AnimatePresence>
    )
  }
  