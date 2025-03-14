import React from "react";
import { Link } from "react-router-dom"; // Import React Router
import DashboardButton from "./DashboardButton.jsx";
import EventCard from "./EventCard.jsx";
import { HashLink } from "react-router-hash-link";

const EventBoard = ({ eventData }) => {
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
                        href={eventData.bgUrl}
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
            {eventData.title}
          </div>

          {/* Event Details Section */}
          <div className="flex justify-between items-start mt-20 h-full max-md:w-full">
            <div className="w-2/3 h-full max-md:w-full">
              <div className="flex justify-between text-sm max-md:mt-4">
                <span>📍 {eventData.venue}</span>
                <span className="font-bold">Prize Pool: {eventData.prize}</span>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span>⏰ {eventData.time}</span>
                <span>📅 {eventData.date}</span>
              </div>
              <p className="mt-4 text-gray-300 text-left">{eventData.description}</p>

              {/* Dashboard Button */}
              <div className="absolute top-[45px] right-10">
              <Link to="/dashboard">
                <DashboardButton link="#" content="Dashboard" />
                </Link>
              </div>

              {/* Register via Dashboard Button (Uses Link for Navigation) */}
              <div className="absolute bottom-10 mt-10 flex gap-20 max-md:flex-col max-md:gap-10">
                <Link to="/dashboard">
                  <DashboardButton link="#" content="Register via Dashboard" />
                </Link>
                <HashLink smooth to="#ruless">
                <DashboardButton link="#" content="Rules" /></HashLink>
              </div>
            </div>
          </div>

          {/* EventCard for Sidebar */}
          <div className="absolute right-[-20px] bottom-[-0px] max-md:left-[30px] max-md:top-[-300px]">
            <EventCard
              title={eventData.title}
              description="The Competitive Coding Contest"
              imageUrl={eventData.imageUrl}
              dayText={eventData.dayText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBoard;
