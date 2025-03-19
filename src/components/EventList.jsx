import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import NormalDayLeft from "./NormalDayLeft";
import NormalDayRight from "./NormalDayRight";
import HighlightedDay from "./HighlightedDay";
import { useRef } from "react"; 
import axios from "axios";
import { API_URL } from '../config/config';

const eventSchedule = [
    {
        day: "DAY-1",
        date: "March 21, 2025",
        events: [
            { name: "Blood Donation Camp", startTime: "11:00 AM ", endTime: " 3:00 PM", isLive: false, gif: "vite.svg", id: '67dabbd1c4b1123c4c064648' },
            { name: "Inauguration", startTime: "5:00 PM ", endTime: " 7:00 PM", isLive: false, gif: "vite.svg", id: '67d8365d1fac73aa4df88cb1', flag: true },
            { name: "Root Access", startTime: "6:00 PM ", endTime: "-----", isLive: false, gif: "vite.svg", id: '67dabd1bc4b1123c4c064663' },
            { name: "Brain Dead", startTime: "6:00 PM", endTime: "------", isLive: false, gif: "vite.svg", id: '67dabe0fc4b1123c4c0646d9' },
            { name: "Ganitam", startTime: "7:00 PM ", endTime: " 9:00 PM", isLive: false, gif: "vite.svg", id: '67dac16ac4b1123c4c064a15' },
        ]
    },
    {
        day: "DAY-2",
        date: "March 22, 2025",
        events: [

            { name: "Ludo", startTime: "2:00 PM ", endTime: " 10:00 PM", isLive: false, gif: "vite.svg",id:'67dacfb5c4b1123c4c065989'},
            { name: "Codestorm", startTime: "3:00 PM ", endTime: " 5:00 PM", isLive: false, gif: "vite.svg",id:'67dab7f3c4b1123c4c064560' },
            { name: "Techno Quiz", startTime: "5:00 PM ", endTime: " 8:00 PM", isLive: false, gif: "vite.svg",id:'67dabb39c4b1123c4c064638' },
            { name: "FIFA", startTime: "8:00 PM ", endTime: " 10:00 PM", isLive: false, gif: "vite.svg",id:'67daba91c4b1123c4c064629' },
            { name: "BGMI", startTime: "11:00 PM ", endTime: " 2:00 PM", isLive: false, gif: "vite.svg",id:'67dabfa6c4b1123c4c0648c6' },

        ]
    },
    {
        day: "DAY-3",
        date: "March 23, 2025",
        events: [

            { name: "HackQuest", startTime: "9:00 AM", endTime: "", isLive: false, gif: "vite.svg",id:'67dac264c4b1123c4c064b3f' },
            { name: "Valorant", startTime: "10:00 AM ", endTime: " 2:00 PM", isLive: false, gif: "vite.svg",id:'67dac30fc4b1123c4c064b5b' },
            { name: "Murder Mystery", startTime: "2:00 PM ", endTime: " 5:30 PM", isLive: false, gif: "vite.svg",id:'67dac075c4b1123c4c0648f6' },
            { name: "Cultural Events", startTime: "6:00 PM ", endTime: "-----", isLive: false, gif: "vite.svg",id:'67d6a6134d8c2fab9eabc65a' ,  flag: true },
            { name: "Closing Ceremony", startTime: "6:00 PM ", endTime: "------", isLive: false, gif: "vite.svg",id:'67d6a6134d8c2fab9eabc65a',  flag: true },

        ]
    }
];

const EventList = ({ setToken }) => {
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

    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/events/get-all`);
            setEvents(response.data.body);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    console.log(events);

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

    return isPhoneSize ? (<div className="mt-10 relative w-full min-h-screen bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto">

        <motion.div variants={{
            hidden: { opacity: 0, y: 50, scale: 0.5 },
            visible: { opacity: 1, y: 0, scale: 1 },
        }}

            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
        >
            <h2 className="text-[#E7E7E7] sm:text-[31.5px] text-[22px] font-bold tracking-wide uppercase text-center font-title mt-[55px]">
                Explore the Marvellous
            </h2>
            <div>
                <h1 className="text-center text-[#EE0000] text-[74px] font-title">EVENTS</h1>
            </div>


        {/* Download Button & Live Announcement */}
        <div className="flex flex-col items-center">
            <a href="https://drive.google.com/file/d/1P0HodDoGuqDVjj7U7ob0fHXfR9qLbu8a/view?usp=sharing">
            <button className="px-6 py-2 border-2 border-[#810000] text-white text-lg font-bold rounded-md transition">
                VIEW SCHEDULE
            </button>
            </a>
            <div className="text-[#FF0000] text-sm font-bold px-4 py-2 rounded-md">
                LIVE <span className="text-white">Blood Donation Camp is live now!</span>

                </div>

            </div>

        </motion.div>


        <div className="grid grid-cols-1 gap-8 w-full max-w-[1300px] px-6 mx-auto mt-5 place-items-center">

            <motion.div variants={{
                hidden: { opacity: 0, z: 10, x: 100, scale: 0.8, rotateX: 30 },
            }}

                initial="hidden"
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotateX: 0,
                    x: 0,
                    transition: {
                        duration: 0.5, delay: 0.3, ease: "easeInOut"
                    },
                }}
                viewport={{
                    amount: 0.25,
                    once: false,
                }}
            >
                <div
                    className="flex justify-center cursor-pointer"
                >
                    <NormalDayLeft inday={normalDays[0]} />
                </div>


            </motion.div>
            <motion.div variants={{
                hidden: { opacity: 0, z: 10, x: -100, scale: 0.8, rotateX: 30 },
            }}

                initial="hidden"
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotateX: 0,
                    x: 0,
                    transition: {
                        duration: 0.5, delay: 0.3, ease: "easeInOut"
                    },
                }}
                viewport={{
                    amount: 0.25,
                    once: false,
                }}
            >
                <div

                    className=" flex justify-center cursor-pointer "
                >
                    <NormalDayRight inday={normalDays[1]} />
                </div>

            </motion.div>
            <motion.div variants={{
                hidden: { opacity: 0, z: 10, x: 100, scale: 0.8, rotateX: 30 },
            }}

                initial="hidden"
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotateX: 0,
                    x: 0,
                    transition: {
                        duration: 0.5, delay: 0.3, ease: "easeInOut"
                    },
                }}
                viewport={{
                    amount: 0.25,
                    once: false,
                }}
            >

                {normalDays.length === 3 && (
                    <div className="flex justify-center cursor-pointer">
                        <NormalDayLeft inday={normalDays[2]} />
                    </div>
                )}

            </motion.div>
        </div>

    </div>) : (

        <div ref={headRef} className="mt-[60px] relative w-full min-h-screen bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto">
            {/* Title Section */}
            <motion.div variants={{
                hidden: { opacity: 0, y: 50, scale: 0.5 },
                visible: { opacity: 1, y: 0, scale: 1 },
            }}

                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
            >

                <h2 className="text-[#E7E7E7] sm:text-[31.5px] text-[22px] font-bold tracking-wide uppercase text-center font-title mt-10">
                    Explore the Marvellous
                </h2>
                <h1 className="text-[#EE0000] text-[74px] font-title text-center">EVENTS</h1>

                {/* Download Button & Live Announcement */}
                <div className="flex flex-col items-center">

                    <a href="https://drive.google.com/file/d/1P0HodDoGuqDVjj7U7ob0fHXfR9qLbu8a/view?usp=sharing">
                    <button className="px-6 py-2 border-2 border-[#810000] text-white text-lg font-bold rounded-md hover:bg-[#810000] transition">
                        VIEW SCHEDULE
                    </button>

                    </a>
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
                            className="col-span-3 flex justify-center cursor-pointer lg:ml-20"
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
                            className="col-span-6 relative flex justify-center items-center w-[355px] xl:w-[475px] lg:w-[370px] min-[1279px]:ml-[0px] max-[355px]:w-[325px] mb-[10px]"
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
                            className="col-span-3 flex justify-center cursor-pointer lg:ml-[50px] lg:mr-[130px]"
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