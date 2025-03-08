"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Onboard Automator",
    description: "Automate Azure identity and governance, including RBAC, access policies, and compliance tracking.",
    image: "/images/projects/coming-soon.png",
    tag: ["All", "Cloud", "Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ShareSafely - File Share Web App",
    description: "Securely manage file storage and sharing with Azure Storage, encryption, and access controls.",
    image: "/images/projects/coming-soon.png",
    tag: ["All", "Cloud", "Security"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "VM Fleet Commander",
    description: "Automate deployment and management of Azure Virtual Machines using Terraform and ARM templates.",
    image: "/images/projects/coming-soon.png",
    tag: ["All", "Cloud", "DevOps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "NetMaze Explorer",
    description: "Set up and manage virtual networks, subnets, NSGs, and VPN gateways in Azure.",
    image: "/images/projects/coming-soon.png",
    tag: ["All", "Networking", "Cloud"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "InsightScape",
    description: "Implement real-time monitoring, logging, and backup solutions using Azure Monitor and Log Analytics.",
    image: "/images/projects/coming-soon.png",
    tag: ["All", "Cloud", "Monitoring"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Security" isSelected={tag === "Security"} />
        <ProjectTag onClick={handleTagChange} name="DevOps" isSelected={tag === "DevOps"} />
        <ProjectTag onClick={handleTagChange} name="Networking" isSelected={tag === "Networking"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
