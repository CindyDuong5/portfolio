"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Updated Tab Data
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>Microsoft Azure (VMs, Storage, App Services, Networking)</li>
        <li>SQL (PostgreSQL, MySQL, MongoDB, Oracle)</li>
        <li>JavaScript (React.js, Node.js, Express)</li>
        <li>Python (Flask, Django, Automation)</li>
        <li>C, C++, C# .NET Framework</li>
        <li>DevOps & Version Control (Git, GitHub, CI/CD Pipelines, JIRA)</li>
        <li>Software Testing & Agile Development</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>Advanced Diploma in Computer Programming & Analysis</li>
        <li>Seneca Polytechnic | Graduated Jan 2025 | GPA: 3.9</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
        <li>Azure Administrator Associate (AZ-104) (In Progress)</li>
        <li>The Complete Python Bootcamp - Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:px-16">
        {/* About Me Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="Cindy Duong - Cloud Administrator & Software Developer"
            className="rounded-lg"
          />
        </div>

        {/* About Me Content */}
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a <strong>Cloud Administrator and Software Developer</strong> passionate about <strong>cloud computing, IT infrastructure, and full-stack development</strong>.
            With expertise in <strong>Azure, SQL, JavaScript, and Python</strong>, I specialize in <strong>building scalable cloud solutions and developing web applications</strong>.
            I have hands-on experience in **cloud services, database management, DevOps tools, and software testing**, making me well-equipped to optimize IT operations and business processes.
          </p>
          <p>
            Currently, I am <strong>seeking opportunities in Cloud Administration, Software Development, and IT Project Coordination</strong>.
          </p>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mt-6">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
