import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faJs, faNodeJs, faRust } from "@fortawesome/free-brands-svg-icons";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons"; // for C and C++
import { motion } from 'framer-motion';


const skills = [
  { name: "React", icon: faReact },
  { name: "Python", icon: faPython },
  { name: "JavaScript", icon: faJs },
  { name: "C", icon: faCuttlefish },
  { name: "C++", icon: faCuttlefish },
  { name: "Rust", icon: faRust },
  { name: "Node.js", icon: faNodeJs },
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
