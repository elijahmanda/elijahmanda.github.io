import { Row, Col } from 'react-bootstrap';
import { motion, useMotionTemplate } from 'framer-motion';
import Typewriter from 'typewriter-effect';


function Home({ color }: { color: any }) {
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <section id="home" className="d-flex justify-content-center align-items-center vh-100 text-center">
      <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
      >
        <Row>
          <Col>
            <motion.h1 
              initial={{ x: -100 }} 
              animate={{ x: 0 }} 
              transition={{ duration: 0.5 }} 
              className="display-4 home-header"
            >
              I'm a <Typewriter
                options={{
                  strings: ['Developer', 'Problem Solver'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </motion.h1>
            <p className="lead">
              I specialize in building intelligent systems like Symbolic, automation solutions, and AI assistants.
              With expertise in Python, C++, Rust, JavaScript, and web technologies, I create solutions that bridge math, science, and technology.
            </p>
            <motion.a 
              href="#projects" 
              className="btn btn-light mt-3" 
              whileHover={{ scale: 1.1 }}
              style={{
                  border,
                  boxShadow,
              }}
            >
              Explore My Work
            </motion.a>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
}

export default Home;
