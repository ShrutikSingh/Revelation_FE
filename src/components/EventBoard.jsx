import React from "react";
import { Link } from "react-router-dom"; // Import React Router
import DashboardButton from "./DashboardButton.jsx";
import EventCard from "./EventCard.jsx";
import { HashLink } from "react-router-hash-link";

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/config';
import { format ,isValid, parseISO} from 'date-fns';

const EventBoard = () => {

  const { id } = useParams();
  const [eventData, setEvent] = useState({});

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/events/${id}`);
      setEvent(response.data.body);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if(!eventData||Object.keys(eventData).length===0){
    return <div>Loading...</div>
  }

  console.log(eventData)

  const getOrdinalSuffix = (day) => {
    const j = day % 10;
    const k = day % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };

  const formatDateTime = (date) => {
    if (!date) return 'Invalid date';
    const dateObj = typeof date === 'string' ? parseISO(date) : new Date(date);
    if (!isValid(dateObj)) {
      console.error('Invalid date value:', date);
      return 'Invalid date';
    }
    const day = dateObj.getDate();
    const suffix = getOrdinalSuffix(day);
    const timeStr = format(dateObj, "hh:mm a");
    const restOfDate = format(dateObj, "MMMM, yyyy");
    return `${timeStr}, ${day}${suffix} ${restOfDate}`;
  };

  const getTeamSizeDisplay = () => {
    if (eventData.type === 'Single') return null;
    if (eventData.type === 'Combined') return 'Individual + Team';
    if (eventData.teamSize.min === eventData.teamSize.max) {
      return `Team Size: ${eventData.teamSize.min}`;
    }
    return `Team Size: ${eventData.teamSize.min}-${eventData.teamSize.max}`;
  };

  const dashlink=`/dashboard/${eventData._id}`;

  return (
    <div className="bg-transparent text-white p-6 relative w-full max-w-screen h-[500px] max-md:max-h-[1800px] max-md:h-full mx-auto  overflow-hidden">

      <div className="relative w-full max-w-4xl xl:max-w-6xl  h-full mx-auto">
        <svg
          className="absolute top-5 w-full h-full z-0 max-md:left-[0px] max-md:w-full"
          viewBox="0 0 900 500"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 900,0 900,450 620,450 520,498 0,498"
            className="fill-black-600 max-md:w-[350px]"
            stroke="#8D8D8D"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute top-0 left-5 w-full h-full z-10 fill-black-600 max-md:w-full max-md:left-[5px]"
          viewBox="0 0 900 500"
          preserveAspectRatio="none"
        >
          <clipPath id="clipper">
            <polygon points="0,0 900,0 900,450 600,450 500,498 0,498" />
          </clipPath>
          <rect width="100%" height="100%" fill="black" clipPath="url(#clipper)" />
          <image
                        href={eventData.posterImage.url}
                        alt={eventData.name}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clipper)"
                        border="1 solid white"
                        opacity="10%"
                        stroke="#8D8D8D" strokeWidth="2"
                    />
          <polygon
            points="0,0 900,0 900,450 600,450 500,498 0,498"
            fill="none"
            stroke="#8D8D8D"
            strokeWidth="2"
          />
        </svg>


        <div className="relative z-10 p-6 h-full max-md:w-full">
          <div className="absolute left-10 top-[-15px] text-4xl font-bold bg-red-800 px-4 py-2 inline-block border-2 border-red-600 rounded-lg max-md:mx-auto ">
            {eventData.name}
          </div>

          {/* Event Details Section */}
          <div className="flex justify-between items-start mt-20 h-full max-md:w-full max-md:pt-[350px] max-md:pb-[160px]">
            <div className="w-2/3 h-full max-md:w-full">
              <div className="flex flex-col justify-between text-sm max-md:mt-4">
                <span>📍 {eventData.venue}</span>
                <span className="font-bold max-md:mt-2">Prize Pool:10,000</span>
              </div>
              <div className="flex flex-col justify-between mt-2 text-sm max-md:mt-4">
                <span>⏰ {formatDateTime(eventData.startTime)}</span>
                <span>⏰ {formatDateTime(eventData.endTime)}</span>
              </div>
              <p className="mt-4 text-gray-300 text-left">{eventData.description}Gear up withkjbf fbf khf h feuhrfuher h refuh ruh ruhe fiurh fruh rhieruh irheuheiruh rh r hriuh  your laptops and get ready for the second edition of Fresher’s Contest presented by CodeIIEST. Whether you conquered the first edition or are just stepping into CP, this contest is for YOU! Step into the limelight, capture the beauty of coding and most importantly have fun racking your brains!</p>

              {/* Dashboard Button */}
              <div className="absolute top-[65px] right-0 max-md:left-[100px]">
                <DashboardButton link={dashlink} content="Dashboard" />
              </div>

              {/* Register via Dashboard Button (Uses Link for Navigation) */}
              <div className="absolute bottom-10 mt-10 flex gap-20 max-md:flex-col max-md:gap-5 max-md:bottom-[60px]">

                <Link to={dashlink}>
                  <DashboardButton link={dashlink} content="Register via Dashboard" />
                </Link>
                <HashLink smooth to="#ruless">
                <DashboardButton link="#" content="Rules" /></HashLink>
              </div>
            </div>
          </div>

          {/* EventCard for Sidebar */}
          <div className="absolute right-[-20px] bottom-[-0px] max-md:left-[-15px] max-md:top-40">
            <EventCard
              title={eventData.name}
              description="The Competitive Coding Contest"
              imageUrl={eventData.posterImage.url}
              dayText="Day 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBoard;
