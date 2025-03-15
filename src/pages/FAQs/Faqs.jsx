import React from "react";
import FAQItem from "./FAQItem"; // Import the FAQItem component

const faqData = [
  {
    question: "How to log-in to the website?",
    answer:
      "Click on the 'Register' button at the top right of the navbar and use your GSuite email ID if you are an IIESTian, or your personal email ID if you are a non-IIESTian.",
  },

  {
    question: "How to register for events?",
    answer: `Go to the Event, choose the event you want to participate in, then go to dashboard and select 'CREATE A TEAM' for a team event or register yourself for solo participation. If you want to join a team then select 'JOIN A TEAM' to request team leader to add.`,
  },

  {
    question: "What is dashboard?",
    answer:
      "All event registrations will be done via the dashboard. Here, you can register for events, join a team, add members to your team, and view other team participants.",
  },

  {
    question: "How to create a team?",
    answer:
      "While registering for an event, you can create a team by selecting 'CREATE A TEAM' in dashbord. Only team leader can create team and he/she can send the join request other member to join the team. If any member request to join the team then team leader can accept/add the member or can reject the request also.",
  },

  {
    question: "How to add team member for an event?",
    answer:
      "The team leader can add team members only. After registering for an event, you will see the 'ADD TEAM MEMBER' option on the dashboard. Click it to add member(s). If a member wants to join, they can accept the invitation, or they can choose to reject it.",
  },

  {
    question: "How to join a team?",
    answer:
      "Go to Event, select the events that you want to join then click on 'DASHBOARD' then select 'JOIN A TEAM'.Team leader can accept/add the request or reject the request also.",
  },

  {
    question: "Where can I see the request to join a team?",
    answer:
      "Go to your profile, where you will find the 'Join Requests' section. Click the 'JOIN' button to join the team.",
  },
];

const Faqs = () => {
  return (
    <div className="flex justify-center items-center  px-4">
  <div className="w-full max-w-4xl text-white rounded-lg shadow-lg py-10 px-6 sm:px-10">
    <h1 className="text-3xl  font-bold text-start mb-6">FAQs</h1>

    {/* Mapping over JSON data */}
    {faqData.map((faq, index) => (
      <FAQItem key={index} question={faq.question} answer={faq.answer} />
    ))}
  </div>
</div>

  );
};

export default Faqs;
