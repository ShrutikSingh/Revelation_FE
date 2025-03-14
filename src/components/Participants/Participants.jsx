import React from "react";
import Element from "./Element";

const Participants = () => {
  return (
    <div
      className="relative w-full h-[260px] flex justify-center items-center gap-[80px]  bg-black mt-16"
    >
      <Element number="25" label="TEAM MEMBERS" />
      <Element number="12" label="EVENTS" />
      <Element number="500" label="PARTICIPANTS" />
      <Element number="3" label="DAYS" />
    </div>
  );
};

export default Participants;
