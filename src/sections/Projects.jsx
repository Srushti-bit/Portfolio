import {
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

function Projects() {

  const projects = [


    {
      icon: <FaShieldAlt />,
      title: "TruthGuard",
      description:
        "AI-based misinformation detection system that evaluates information reliability using Natural Language Processing and Machine Learning techniques.",
      technologies: [
        "Python",
        "NLP",
        "Scikit-learn",
        "Machine Learning"
      ],
      github: "https://github.com/Srushti-bit"
    },

    {
      icon: <FaChartLine />,
      title: "Financial Sales Data Analysis",
      description:
        "Analyzed financial sales data to identify revenue trends, customer behavior, and business insights using data analysis and visualization techniques.",
      technologies: [
        "Excel",
        "Dashboard",
        "KPI",
        "Data Visualization"
      ],
      github: "https://github.com/Srushti-bit"
    },

    {
      icon: <FaRobot />,
      title: "AI NourishBot",
      description:
        "AI-powered nutrition assistant that analyzes food images, provides nutrition insights, and generates personalized recipe recommendations based on dietary preferences.",
      technologies: [
        "Python",
        "Gradio",
        "NLP",
        "Machine Learning",
        "SQLite"
      ],
      github: "https://github.com/Srushti-bit"
    },

    

    
  ];


  return (
    <section id="projects" className="section">

      <div className="container">

        <h2 className="section-title">
          Projects
        </h2>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <div 
              className="project-card" 
              key={index}
            >

              <div className="project-icon">
                {project.icon}
              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tech-stack">

                {project.technologies.map((tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
                ))}

              </div>


              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>


                <a href="#">
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;