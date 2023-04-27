"use client"

import React, { useState } from "react"



type dayInfo = {
  description: string,
  price: number
}


export default function Pricing() {
const [halfDayInfo, setHalfDayInfo] = useState<dayInfo>()
const [fullDayInfo, setFullDayInfo] = useState<dayInfo>()
const [dayAndNightInfo, setdayAndNightInfo] = useState<dayInfo>()



const getPricing = async() => {
  const res = await fetch('api/getPricing')
  const jsonRes = await res.json();
  return jsonRes;
}


const updatePricing = () => {
  getPricing().then(res => {
    setHalfDayInfo(res[0])
    setFullDayInfo(res[1])
    setdayAndNightInfo(res[2])
  })
}

updatePricing()


    return (
      <main className='flex md:flex-row flex-col gap-10 h-[40vh] mb-28'>
       <div className='p-6 bg-mygray rounded-lg flex flex-col gap-5'>
         <h2 className='font-bold text-xl'>Half Day</h2>
         <p>{halfDayInfo?.description}</p>
          <p className='font-extrabold text-3xl m-auto'>${halfDayInfo?.price}</p>
       </div>
       <div className='p-6 bg-mygray rounded-lg flex flex-col gap-5'>
         <h2 className='font-bold text-xl'>All Day</h2>
         <p>{fullDayInfo?.description}</p>
          <p className='font-extrabold text-3xl m-auto'>${fullDayInfo?.price}</p>
       </div>
       <div className='p-6 bg-mygray rounded-lg flex flex-col gap-5'>
         <h2 className='font-bold text-xl'>Day and Overnight</h2>
         <p>{dayAndNightInfo?.description}</p>
          <p className='font-extrabold text-3xl m-auto'>${dayAndNightInfo?.price}</p>
       </div>
      </main>
    )
  }
  