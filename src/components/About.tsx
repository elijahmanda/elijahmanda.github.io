import { motion } from 'framer-motion';
// import profileImage from '../assets/profile.jpg';



function About() {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center text-center bg-dark"
    >
      <div
          className="container mb-4"
      >
      <h2 className="mb-4 display-4">About Me</h2>
      
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lead"
      >
      Hi, I’m Elijah Manda—a dedicated developer with expertise in <strong>Python</strong>, <strong>Rust</strong>, <strong>C++</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>machine learning</strong>, <strong>NLP</strong>, and <strong>system automation</strong>. I’m passionate about building symbolic engines and tackling complex challenges with practical and innovative solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="row"
      >
        <p className="lead">
        Driven by a love for science and technology, I specialize in <strong>mathematics</strong>, <strong>physics</strong>, and <strong>computational engines</strong>. My current focus is an interpreted language tailored for mathematical and scientific applications.
        </p>
        <p className="lead">
        Beyond coding, I’m committed to refining my skills and delivering high-quality work. My portfolio reflects a commitment to meaningful projects that make a positive impact.
        </p>
      </motion.div>
    </div>
    </section>
  );
}

export default About;
