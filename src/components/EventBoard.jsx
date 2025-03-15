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

  return (
    <div className="bg-transparent text-white p-6 relative w-full max-w-[900px] h-[500px] max-md:h-[800px] max-md:mt-[400px] mx-auto max-md:ml-[-30px]">

      <div className="relative w-full max-w-4xl h-full mx-auto">
        <svg
          className="absolute top-5 left-0 w-full h-full z-0 max-md:w-[320px]"
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
          className="absolute top-0 left-5 w-full h-full z-10 fill-black-600 max-md:w-[320px]"
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
          <div className="absolute left-10 top-[-15px] text-4xl font-bold bg-red-800 px-4 py-2 inline-block border-2 border-red-600 rounded-lg max-md:mx-auto max-md:top-[-370px]">
            {eventData.name}
          </div>

          {/* Event Details Section */}
          <div className="flex justify-between items-start mt-20 h-full max-md:w-full">
            <div className="w-2/3 h-full max-md:w-full">
              <div className="flex justify-between text-sm max-md:mt-4">
                <span>📍 {eventData.venue}</span>
                <span className="font-bold">Prize Pool:10,000</span>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span>⏰ {formatDateTime(eventData.startTime)}</span>
                <span>⏰ {formatDateTime(eventData.endTime)}</span>
                {/* <span>📅 {eventData.date}</span> */}
              </div>
              <p className="mt-4 text-gray-300 text-left">{eventData.description}</p>

              {/* Dashboard Button */}
              <div className="absolute top-[45px] right-10">
                <DashboardButton link="/dashboard" content="Dashboard" />
              </div>

              {/* Register via Dashboard Button (Uses Link for Navigation) */}
              <div className="absolute bottom-10 mt-10 flex gap-20 max-md:flex-col max-md:gap-10">

                <Link to="/dashboard">
                  <DashboardButton link="/dashboard" content="Register via Dashboard" />
                </Link>
                <HashLink smooth to="#ruless">
                <DashboardButton link="#" content="Rules" /></HashLink>
              </div>
            </div>
          </div>

          {/* EventCard for Sidebar */}
          <div className="absolute right-[-20px] bottom-[-0px] max-md:left-[30px] max-md:top-[-300px]">
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
