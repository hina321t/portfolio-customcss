import React from 'react'
import Card from './Card';
import Heading from './Heading';
import "../app/style/project.css"


    const data = [
        {
          id: 0,
          title: "To DO List",
          desc: "A React & Typescript based app for managing and organizing",
          img: "/todo.png",
          tags: ["React", "Node", "CSS", "typescript"],
        },
        {
          id: 1,
          title: "Count Down Timer",
          desc: "A Next.js and typescript powered website to track time",
          img: "/counttimer.jpeg",
          tags: ["Nextjs", "Node", "CSS", "typescript"],
        },
        {
          id: 2,
          title: "Weather Widget",
          desc: "A Next.js and typescript-based tool for fetching and displaying weather",
          img: "/weather.jpeg",
          tags: ["Nextjs", "Node", "CSS", "typescript"],
        },
        {
          id: 3,
          title: "Currency Converter Project",
          desc: "A simple HTML and typescript-powered tool for converting currency",
          img: "/cu.jpeg",
          tags: ["HTML", "Node", "CSS", "typescript"],
        },
        {
          id: 4,
          title: "Static Interactive Resume",
          desc: "A Next.js and typescript-powered static resume website",
          img: "/resume1.jpeg",
          tags: ["HTML", "Node", "CSS", "typescript"],
        },
        {
          id: 5,
          title: "Simple Calculator Project",
          desc: "A basic HTML, CSS, and typescript-based calculator",
          img: "/calculater.png",
          tags: ["HTML", "Node", "CSS", "typescript"],
        },
      ];
      
      const Project = () => {
        return (
          <div id="Projects" className="project-container">
            <Heading title="My Projects" />
            <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 project-center">
              {data.map((el) => (
                <Card
                  key={el.id}
                  title={el.title}
                  desc={el.desc}
                  img={el.img}
                  tags={el.tags}
                />
              ))}
            </div>
          </div>
        );
      };
      
      export default Project;

