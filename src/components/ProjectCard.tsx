import { motion } from 'framer-motion';

interface ProjectProps {
    title: string;
    description: string;
    github: string
}

function ProjectCard({project, id}: {project: ProjectProps, id: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="card text-bg-dark border-light"
      key={id}
    >
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <br />
        <a href={project.github} className="btn btn-secondary">Github</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
