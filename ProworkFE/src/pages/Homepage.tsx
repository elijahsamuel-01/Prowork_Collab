import React from 'react'
import vid from "../assets/video.webm"
const Homepage = () => {
    return (
        <div>

            <div className="w-[100%]
    ">
                <div className="flex items-center justify-center flex-col gap-4">
                    <div className="text-[70px] font-bold text-center">
                        organize your work <br />and life, finally.
                    </div>
                    <div className=" text-center font-bold text-bold text-[25px]
        text-gray-400
        ">
                        Become focused, organized, and calm
                        with Todoist. The world’s #1 <br />task manager
                        and to-do list app.
                    </div>
                    <button className="h-[40px] w-[130px] bg-red-600 rounded-[10px]
        text-white
        ">
                        Start for free
                    </button>
                </div>

                <div className="pt-[100px] h-[600px] w-[100$] bg-fixed">
                    <video src={vid} autoPlay playsInline className="
        h-[100%] w-[100%] object-cover
        ">

                    </video>
                </div>

            </div>
        </div>
    )
}

export default Homepage