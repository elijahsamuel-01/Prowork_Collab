import React from 'react'
import box from "../assets/Box.avif"
const About = () => {
    return (
        <div className='w-[100%] h-[400px] 
        flex items-center justify-center
        '>
            <div className='w-[90%] h-[100%]
            flex items-center justify-between
            '>


                <div className='flex flex-col gap-10'>
                    <div
                        className='font-bold
                        text-[40px]
                        '
                    >A task manager
                        you can trust for life</div>
                    <div
                        className='
                    font-bold text-[20px]
                    '
                    >
                        We’ve been building Todoist for 1
                        6 years and 307 days.
                        <br /> Rest assured that
                        we’ll never
                        sell out to the highest bidder.
                    </div>
                </div>


                <div className='w-[50%]
                h-[100%] flex items-center justify-center
                '>
                    <img src={box} />

                </div>

            </div>
        </div>
    )
}

export default About