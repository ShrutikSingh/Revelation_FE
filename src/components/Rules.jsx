import { useState, useEffect } from "react";

const Rules = () => {
  // Hardcoded demo data
  const demoData = {
    rules: [
      "Provide your G-suite ID/ Gmail ID.",
      "Registration fee 150 INR for participation.",
      "Matches will adhere to specified time controls.",
      "Players must follow the official FIDE rules and regulations.",
      "Participants must record moves using algebraic notation."
    ],
    coordinators: [
      { name: "John Doe", phone: "+91 9876543210" },
      { name: "Jane Smith", phone: "+91 8765432109" }
    ]
  };

  const [eventData, setEventData] = useState({ rules: [], coordinators: [] });

  useEffect(() => {
    setTimeout(() => {
      setEventData(demoData);
    }, 1000);
  }, []);

  return (
    <div id="ruless" className="bg-black  text-white p-6 rounded-lg border border-[#8D8D8D]-500 max-w-2xl mx-auto mt-20 max-md:mt-[30px]  text-center max-md:w-[360px] max-sm:w-[320px] max-md:text-sm">

      <div className="border border-red-500 p-2 inline-block text-sm uppercase font-semibold mb-4 ">
        Event Rules :
      </div>
      {/* Rules List */}
      <ul className="list-decimal list-inside text-gray-300 text-left">
        {eventData.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>

      {/* Coordinators Title */}
      <div className="border border-red-500 p-2 inline-block text-sm uppercase font-semibold mt-6 mb-2">
        Coordinators :
      </div>

      <div className="text-gray-300 text-center">
        {eventData.coordinators.map((coordinator, index) => (
          <div key={index} className="flex flex-row items-center gap-2 justify-center">
          <span className="font-medium">{coordinator.name}</span>
      <div className="flex items-center gap-1">
        <img src="phone.svg" alt="Call Icon" className="w-5 h-5 mt-1 ml-5" />
        <span className="text-gray-400">{coordinator.phone}</span>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
