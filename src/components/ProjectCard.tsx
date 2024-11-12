import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';


interface ProjectProps {
    title: string;
    description: string;
    github: string;
    imageUrl: string;
}

function ProjectCard({project, id}: {project: ProjectProps, id: number}) {
  return (
  <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  key={id}
>
  <Card
    className="text-bg-dark border-light"
    raised
  sx={{
    maxWidth: 580,
    padding: "0.0rem",
  }}
  >
    <CardMedia
      component="img"
      height="90"
      image={project.imageUrl}
      alt={project.title}
      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
    />
    <CardContent>
      <Typography variant="h5" component="div">
        {project.title}
      </Typography>
      <Typography variant="body2" color="string">
        {project.description}
      </Typography>
      <br />
      <Button 
        variant="contained" 
        color="secondary" 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View on GitHub
      </Button>
    </CardContent>
  </Card>
</motion.div>
    )
}

export default ProjectCard;
