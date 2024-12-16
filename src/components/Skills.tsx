import React from 'react'
import "../app/style/skills.css"

const Skills = () => {
  return (
    <div id= "skills" className="container">
    <div className='skills-grid'>

        {/* first column:heading and peragraph */}
      <div data-aos="zoom-in-up" className='skills-left'>
        <h2 className="skills-heading" data-aos="zoom-in-up">Technologies I work width</h2>
        <p className='skills-text'>i have sold funcation in web development ,spacializing in HTML,CSS andJavascript.My experiencce extends to using framework like React and Next.js  to create dynmic and user-friendly application .I'm also proficient in tailwind CSS for efficient styling and design, i stay updated on the latest technologies to enhance my skills set and comtribute effectively to project. </p>
      </div>

      {/* second column: skills */}

      <div className='skills-right'>
        <div className=" skills-icon-grid ">
          <div className=" skills-space">
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2>Next.js</h2>

          </div>
          <div className=" skills-space">
            <h2 data-aos="zoom-in-up">Tailwind</h2>
            <h2 data-aos="zoom-in-up">Css</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>

          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Skills
