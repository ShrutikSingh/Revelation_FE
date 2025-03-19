import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/config';

const Rules = () => {

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


  // Hardcoded demo data
  // const demoData = {
  //   rules: [
  //     "Provide your G-suite ID/ Gmail ID.",
  //     "Registration fee 150 INR for participation.",
  //     "Matches will adhere to specified time controls.",
  //     "Players must follow the official FIDE rules and regulations.",
  //     "Participants must record moves using algebraic notation."
  //   ],
  //   coordinators: [
  //     { name: "John Doe", phone: "+91 9876543210" },
  //     { name: "Jane Smith", phone: "+91 8765432109" }
  //   ]
  // };

  // const [eventData, setEventData] = useState({ rules: [], coordinators: [] });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setEventData(demoData);
  //   }, 1000);
  // }, []);

  return (
    <div id="ruless" className="bg-black mb-10  text-white p-6 rounded-lg border border-[#8D8D8D]-500 max-w-2xl mx-auto mt-20 max-md:mt-[30px]  text-center max-md:w-[360px] max-sm:w-[320px] max-md:text-sm">

      <div className="border border-red-500 p-2 inline-block text-sm uppercase font-semibold mb-4 ">
        Event Rules :
      </div>
      {/* Rules List */}
      <ul className="list-decimal list-inside text-gray-300 text-left">
      {eventData.rules.slice(0, -1).map((rule, index) => (
        <li key={index}>{rule}</li>
      ))}
        {/* {eventData.rules} */}
      </ul>

      {/* Coordinators Title */}
      <div className="border border-red-500 p-2 inline-block text-sm uppercase font-semibold mt-6 mb-2">
        Coordinators :
      </div>

      <div className="text-gray-300 text-left">
        <div className="gap-2">
          <span className="font-medium">{eventData.rules[eventData.rules.length - 1]}</span>
        </div>
      </div>

    </div>
  );
};

export default Rules;
