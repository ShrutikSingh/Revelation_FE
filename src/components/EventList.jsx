import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import NormalDayLeft from "./NormalDayLeft";
import NormalDayRight from "./NormalDayRight";
import HighlightedDay from "./HighlightedDay";
import { useRef } from "react"; // Import useRef


const eventSchedule = [
    {
        day: "DAY-1",
        date: "March 21, 2025",
        events: [
            { name: "Inauguration", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
            { name: "Ganitam", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27'},
            { name: "Hackathon", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
        ]
    },
    {
        day: "DAY-2",
        date: "March 22, 2025",
        events: [
            { name: "Root Access", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
            { name: "BLOOD DONATION CAMP", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27'},
            { name: "BrainDead", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
        ]
    },
    {
        day: "DAY-3",
        date: "March 6, 2025",
        events: [
            { name: "BLOOD DONATION CAMP", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
            { name: "Murder Mystery", startTime: "00:00", endTime: "02:18", isLive: false, gif: "vite.svg",id:'67ca20445271f42d6a18da27' },
            { name: "Codestorm", startTime: "09:00", endTime: "11:00", isLive: false, gif: "vite.svg",id:'67d59ca882cf9619f8bf5122' },
        ]
    }
];

const EventList = () => {
    const leftRef = useRef(null);
    const centerRef = useRef(null);
    const rightRef = useRef(null);
    const headRef = useRef(null);
    const [highlighted, setHighlighted] = useState(eventSchedule[0]);
    const [normalDays, setNormalDays] = useState([eventSchedule[1], eventSchedule[2]]);
    const [isDayChanging, setIsDayChanging] = useState(false);
    const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth < 1045);
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        console.log("Updated highlighted:", highlighted);
        console.log("Updated normalDays:", normalDays);
    }, [highlighted, normalDays]);



    useEffect(() => {
        const handleResize = () => {
            setIsPhoneSize(window.innerWidth < 1045);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setShowHeader(true);
    }, []);



    useEffect(() => {

        if (!isPhoneSize) {
            const today = new Date();
            const formattedToday = today.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            const eventDay = eventSchedule.find(event => event.date === formattedToday);
            if (eventDay) {
                setHighlighted(eventDay);
                setNormalDays(eventSchedule.filter(event => event !== eventDay));
            } else {
                setHighlighted(eventSchedule[0]);
                setNormalDays([eventSchedule[1], eventSchedule[2]]);

            }

        } else {
            setNormalDays([...eventSchedule]);

        }

    }, [isPhoneSize]);

    const handleHighlighting = (selectedDay) => {
        setIsDayChanging(true);

        setTimeout(() => {
            setHighlighted(selectedDay);
            setNormalDays(eventSchedule.filter(d => d !== selectedDay));
            setIsDayChanging(false);
        }, 300);
    };

    return isPhoneSize ? (<div className="relative w-full min-h-screen bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto">

        <h2 className="text-[#E7E7E7] sm:text-[31.5px] text-[22px] font-bold tracking-wide uppercase text-center font-title mt-2">
            Explore the Marvellous
        </h2>
        <div>
        <h1 className="text-center text-[#EE0000] text-[74px] font-title">EVENTS</h1>
        </div>

        {/* Download Button & Live Announcement */}
        <div className="flex flex-col items-center">
            <button className="px-6 py-2 border-2 border-[#810000] text-white text-lg font-bold rounded-md transition">
                DOWNLOAD SCHEDULE
            </button>
            <div className="text-[#FF0000] text-sm font-bold px-4 py-2 rounded-md">
                LIVE <span className="text-white">Blood Donation Camp is live now!</span>
            </div>
        </div>



        <div className="grid grid-cols-1 gap-8 w-full max-w-[1300px] px-6 mx-auto mt-5 place-items-center">


            <div
                className="flex justify-center cursor-pointer"
            >
                <NormalDayLeft inday={normalDays[0]} />
            </div>




            <div

                className=" flex justify-center cursor-pointer "
            >
                <NormalDayRight inday={normalDays[1]} />
            </div>




            {normalDays.length === 3 && (
                <div className="flex justify-center cursor-pointer">
                    <NormalDayLeft inday={normalDays[2]} />
                </div>
            )}


        </div>

    </div>) : (

        <div ref={headRef} className="relative w-full min-h-screen bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto">
            {/* Title Section */}
            <motion.div variants={{
                hidden: { opacity: 0, y: 50, scale: 0.5 },
                visible: { opacity: 1, y: 0, scale: 1 },
            }}

                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
            >

                <h2 className="text-[#E7E7E7] sm:text-[31.5px] text-[22px] font-bold tracking-wide uppercase text-center font-title mt-2">
                    Explore the Marvellous
                </h2>
                <h1 className="text-[#EE0000] text-[74px] font-title text-center">EVENTS</h1>

                {/* Download Button & Live Announcement */}
                <div className="flex flex-col items-center">
                    <button className="px-6 py-2 border-2 border-[#810000] text-white text-lg font-bold rounded-md hover:bg-[#810000] transition">
                        DOWNLOAD SCHEDULE
                    </button>
                    <div className="text-[#FF0000] text-[12px] font-semibold px-4 py-2 rounded-md">
                        LIVE. <span className="text-white text-[12px]"> Revelation4.0 is live now!!!</span>
                    </div>
                </div>

            </motion.div>

            <motion.div variants={{
                hidden: { opacity: 0, z: 10, scale: 0.9 },
                visible: { opacity: 1, z: 0, scale: 1 },
            }}

                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }}>

                {/* Centered Event Cards Section */}
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 w-full max-w-[1300px] px-6 mx-auto mt-5 place-items-center">

                    {/* Left Normal Day */}
                    <CSSTransition
                        in={!isDayChanging}
                        timeout={300}
                        classNames="slide-right"
                        unmountOnExit
                        nodeRef={leftRef}
                    >
                        <div
                            ref={leftRef}
                            className="col-span-3 flex justify-center cursor-pointer xl:ml-40 lg:ml-20"
                            onClick={() => handleHighlighting(normalDays[0])}>
                            <NormalDayLeft inday={normalDays[0]} key={normalDays[0].day} />
                        </div>
                    </CSSTransition>

                    {/* Center Highlighted Day */}

                    <CSSTransition
                        in={!isDayChanging}
                        timeout={300}
                        classNames="slide-center"
                        unmountOnExit
                        nodeRef={centerRef}
                    >
                        <div
                            ref={centerRef}
                            className="col-span-6 relative flex justify-center items-center w-[355px] xl:w-[475px] lg:[370px] min-[1279px]:ml-[0px] max-[355px]:w-[325px] mb-[10px]"
                        >
                            <div className="absolute inset-0 bg-red-500 rounded-lg blur-xl"></div>
                            <HighlightedDay inday={highlighted} />
                        </div>
                    </CSSTransition>


                    {/* Right Normal Day */}
                    <CSSTransition
                        in={!isDayChanging}
                        timeout={300}
                        classNames="slide-left"
                        unmountOnExit
                        nodeRef={rightRef}
                    >
                        <div
                            ref={rightRef}
                            className="col-span-3 flex justify-center cursor-pointer xl:ml-0 lg:ml-[50px] lg:mr-[130px]"
                            onClick={() => handleHighlighting(normalDays[1])}>
                            <NormalDayRight inday={normalDays[1]} key={normalDays[1].day} />
                        </div>
                    </CSSTransition>

                </div>
            </motion.div>
        </div>
    );
};

export default EventList;