"use client";
import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  { metric: "Projects", value: 30, postfix: "+" },
  { prefix: "~", metric: "Users", value: 100 },
  { metric: "Awards", value: 3 },
  { metric: "Years", value: 3 },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <CountUp
                start={0}
                end={achievement.value}
                duration={10}  // Animation duration in seconds
                separator=","
                className="text-white text-4xl font-bold"
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
