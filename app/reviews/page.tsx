"use client"


import { useEffect, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'


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
    return jsonRes;
  }

useEffect(() => {
  getReviews().then((res) => setReviews(res))
},[reviews])


const deleteReview = async(idToDelete: string) => {
  const sure = window.confirm('Are you sure you want to delete this review')
  if(sure){
    const res = await fetch('api/reviews/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({idToDelete})
    })
    const jsonRes = await res.json()
    return jsonRes
  }
  
}

  const displayReviews = () => {
    const arr = [];
    reviews?.forEach(review => {
      arr.push(
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
       className='flex flex-col gap-10'>
       {displayReviews()}
      </motion.div>
      </AnimatePresence>
    )
  }
  