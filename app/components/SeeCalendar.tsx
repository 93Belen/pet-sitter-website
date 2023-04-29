"use client"
import {IoClose} from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion'
import { useState, useEffect } from 'react'
import { DayPicker, DayClickEventHandler } from 'react-day-picker';

type Availability = {
    date: number,
    status: string
  }


const halfStyle = { border: '4px solid #C94B4B', borderRadius: '50%' };
const fullStyle = { border: '4px solid #4BC9AB', borderRadius: '50%'  };
const fullAndNightStyle = { background: '#4BC9AB', borderRadius: '50%'  };


export default function SeeCalendar() {
    const [show, setShow] = useState(false)
    const [halfDays, setHalfDays] = useState<Date[]>([]);
    const [fullDays, setFullDays]= useState<Date[]>([])
    const [dayAndNight, setdayAndnight] = useState<Date[]>([]);
    const hideForm = () => {
        setShow(false)
    }

      const getCalendar = async() => {
        // Half day
          const response = await fetch('api/calendar/halfday')
          const jsonResponse: Availability[] = await response.json();
          const arrOfDates: Date[] = jsonResponse.map(element => new Date(Number(element.date)));
          setHalfDays(arrOfDates)
    
        // Full Day
        const responseTwo = await fetch('api/calendar/fullday')
        const jsonResponseTwo: Availability[] = await responseTwo.json();
        const arrOfDatesTwo: Date[] = jsonResponseTwo.map(element => new Date(Number(element.date)));
        setFullDays(arrOfDatesTwo)
    
        // Day and night
        const responseThree = await fetch('api/calendar/dayandnight')
        const jsonResponseThree: Availability[] = await responseThree.json();
        const arrOfDatesThree: Date[] = jsonResponseThree.map(element => new Date(Number(element.date)));
        setdayAndnight(arrOfDatesThree)
      }
    
    useEffect(() => {
        getCalendar()
    },[])
    
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
                    className={`fixed bg-mygray md:w-2/6 w-[90vw] h-screen top-0 right-[-200px] flex flex-col justify-evenly p-10 opacity-70 backdrop-blur-lg`}>
                    <IoClose className='text-4xl' onClick={hideForm} />
                    <div className='m-auto gap-5 flex flex-col'>
                    <div className='flex gap-5'>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="10.5" stroke="#C94B4B" strokeWidth="4"/>
                        </svg>
                        <p> Half Day</p>
                    </div>
                    <div className='flex gap-5'>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="10.5" stroke="#4BC9AB" strokeWidth="4"/>
                        </svg>
                        <p> All Day</p>
                    </div>
                    <div className='flex gap-5'>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#4BC9AB"/>
                        </svg>
                        <p> All Day & Overnight</p>
                    </div>
                    </div>
                    <DayPicker
                        modifiers={{ half: halfDays, full: fullDays, night: dayAndNight}}
                        modifiersStyles={{ half: halfStyle, full: fullStyle, night: fullAndNightStyle }}
                        className='m-auto text-2xl text-center'
                    />
                </motion.div>
                )}       
         </AnimatePresence>
      <button onClick={() => {
          setShow(true)
      }} className='bg-myred text-white py-3 px-6 rounded-full w-fit my-10'>See Availability</button>
        </div>
        
        )
}