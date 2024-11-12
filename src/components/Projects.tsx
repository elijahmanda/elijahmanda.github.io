import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';


const getProjects = () => {
  return [
    { 
      title: 'Symbolic Engine', 
      description: 'An advanced computational engine that supports math, science, and other domains, designed to work with a custom programming language, Symbolic.',
      github: "https://github.com/elijahmanda/symbolic"
    }
  ];
};


function Projects() {
  const projects = getProjects();
  return (
    <section id="projects" className="d-flex justify-content-center align-items-center text-center text-white">
      <div className="container mb-4">
      <h2 className="mb-4 display-4">Projects</h2>
      <div className="row">
        {projects.map((project: any, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              key={index}
              className="col-md-6 mb-4"
            >
              <ProjectCard project={project} id={index} />
            </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;
