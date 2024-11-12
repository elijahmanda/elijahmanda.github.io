import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faJs, faNodeJs, faRust } from "@fortawesome/free-brands-svg-icons";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons"; // for C and C++
import { motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';

const skills = [
  { name: "React", icon: faReact, progress: 65 },
  { name: "Python", icon: faPython, progress: 95 },
  { name: "JavaScript", icon: faJs, progress: 70 },
  { name: "C", icon: faCuttlefish, progress: 75 },
  { name: "C++", icon: faCuttlefish, progress: 70},
  { name: "Rust", icon: faRust, progress: 60 },
  { name: "Node.js", icon: faNodeJs, progress: 70 },
];


function Skills() {
    return (
      <section id="skills" className="d-flex justify-content-center align-items-center text-center">
      <div className="container mb-4">
      <h2 className="mb-4 display-4">Skills</h2>
      <div className="row">
        { skills.map((item) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="col-md-4"
            >
              <div className="card mb-4">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="3x"
                    style={{ marginBottom: '10px', color: '#007acc' }}
                  />
                 <h5 className="card-title">{item.name}</h5>
                 <ProgressBar now={item.progress} label={`${item.progress}%`} />
                </div>
              </div>
            </motion.div>
            ))
         }
      </div>
      </div>
      </section>
   );
}

export default Skills;
