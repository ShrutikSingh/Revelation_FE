import React from "react";
import FAQItem from "./FAQItem"; // Import the FAQItem component

const faqData = [
  {
    question: "How do I log in?",
    answer:
      "Click 'Login' in the top right corner. It's Google Auth-based, so you only need to sign in with your email. Use your GSuite email if you're an IIESTian or your personal email if you're not.",
  },
  {
    question: "How do I register for an event?",
    answer:
      "Select an event, go to your dashboard, and click 'CREATE A TEAM' for team events or register solo. To join a team, click 'JOIN A TEAM' and request to be added.",
  },
  {
    question: "What is the dashboard?",
    answer:
      "The dashboard is where you register for events, manage teams, and view team participants.",
  },
  {
    question: "How do I create a team?",
    answer:
      "In the dashboard, click 'CREATE A TEAM' while registering. Only team leaders can create teams, send invites, and accept or reject requests.",
  },
  {
    question: "How do I add team members?",
    answer:
      "Only the team leader can add members. In the dashboard, click 'ADD TEAM MEMBER' to invite others. The requested members can accept or decline the leader's invitation.",
  },
  {
    question: "How do I join a team?",
    answer:
      "Go to an event, then the dashboard, and click 'JOIN A TEAM.' The team leader will approve or reject your request.",
  },
  {
    question: "Where can I see team join requests?",
    answer:
      "Go to your profile page under 'Join Requests' to see requests you've received to join a team or requests you've sent to others to join your team.",
  },
];

const Faqs = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-4xl  text-white rounded-lg shadow-lg py-10 px-6 sm:px-10">
        <h1
          className="font-playfair text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-[700] mb-10 -mt-20
   bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text text-center"
        >
          FAQs
        </h1>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
