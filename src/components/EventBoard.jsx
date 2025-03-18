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
    <div className="bg-transparent text-white p-6 relative w-full max-w-screen h-[500px] max-md:max-h-[1800px] max-md:h-full mx-auto  overflow-hidden mt-[90px] max-md:mt-[55px]">

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
                        href={eventData.backgroundImage.url}
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
          <div className="absolute left-10 top-[-15px] text-4xl font-bold bg-red-800 px-4 py-2 inline-block border-2 border-red-600 rounded-lg max-md:mx-auto shadow-[0_0_10px_3px_white] transition-shadow duration-300 hover:shadow-[0_0_20px_6px_white]">
            {eventData.name}
          </div>

          {/* Event Details Section */}
          <div className="flex justify-between items-start mt-[50px] h-full max-md:w-full max-md:pt-[350px] max-md:pb-[160px] max-md:mt-[80px] pl-3">
            <div className="w-[80%] h-full max-md:w-full">
            <div className="grid grid-cols-2 text-sm max-md:grid-cols-1 max-md:mt-4 gap-2">

              {/* Left Side */}
              <div>
                <span >
                  <img src="/location.gif" className="w-4 h-4 inline-block mr-2" /> {eventData.venue}
                </span>
              </div>
              <div></div>

              {/* {left side} */}
              <div>
                <span>
                  <img src="/prize.gif" className="w-4 h-4 inline-block mr-2" /> Prize Pool : ₹{eventData.prizePool}
                </span>
              </div>

              {/* right  Side */}
              <div className="text-left">
                 <span>
                  <img src="/payment.gif" className="w-5 h-5 inline-block mr-2" /> {eventData.registrationAmount===0? "No Registration fee":`Registration Fee (only for Non-IIESTians) : ₹${eventData.registrationAmount}`}
                </span>
              </div>


              {/* Second Row */}
              <div>
                <span>
                  <img src="/team1.gif" className="w-5 h-5 inline-block mr-2" /> Event Type :
                  {eventData.type === "Team" ? "Team" : "Individual"}
                </span>
              </div>

              <div className="text-left">
                {eventData.type === "Team" &&
                  (eventData.teamSize.max === eventData.teamSize.min ? (
                    <span>
                      <img src="/team1.gif" className="w-5 h-5 inline-block mr-2" />
                      Team Size : Strictly {eventData.teamSize.min} members
                    </span>
                  ) : (
                    <span>
                      <img src="/team1.gif" className="w-5 h-5 inline-block mr-2" />
                      Team Size : {eventData.teamSize.min}-{eventData.teamSize.max} members
                    </span>
                  ))}
              </div>

              {/* Third Row */}
              <div>
                <span>
                  <img src="/stopwatch.gif" className="w-4 h-4 inline-block mr-2" /> Start Time :
                  {formatDateTime(eventData.startTime)}
                </span>
              </div>

              <div className="text-left">
                <span>
                  <img src="/stopwatch.gif" className="w-4 h-4 inline-block mr-2" /> End Time :
                  {formatDateTime(eventData.endTime)}
                </span>
              </div>

              </div>
              <p className="mt-4 text-gray-300 text-left w-[85%]">{eventData.description}</p>

              {/* Dashboard Button */}
              <div className="absolute top-[65px] right-0 max-md:left-[100px]">
                <Link to={dashlink}>
                  <DashboardButton link={dashlink} content="Dashboard" />
                </Link>
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
              imageUrl={eventData.posterImage.url}
              dayText={eventData.day}
            />
          </div>
      {/* <EventRules /> */}
        </div>
      </div>
    </div>
  );
};

export default EventBoard;
