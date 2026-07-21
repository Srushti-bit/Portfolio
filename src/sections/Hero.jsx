import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/PASSPORT_SIZE_PHOTO_SRUSHTI.jpeg";

const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "6+",
    label: "Certifications",
  },
  {
    value: "8.34",
    label: "Current CGPA",
  },
];


export default function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >

      <div className="container grid lg:grid-cols-2 gap-16 items-center">


        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold mb-5">
            Welcome To My Portfolio
          </p>


          <h1 className="text-5xl lg:text-7xl font-black leading-tight">

            Hi,

            <br />

            I'm

            <span className="gradient-text">
              {" "}Srushti
            </span>

          </h1>


          <h2 className="text-2xl lg:text-3xl mt-8 text-gray-300 font-semibold">

            Software Developer

            <span className="text-cyan-400">
              {" "}•{" "}
            </span>

            MCA (AI & ML)

          </h2>


          <div className="flex items-center gap-3 text-gray-400 mt-6">

            <FaMapMarkerAlt />

            {personalInfo.location}

          </div>


          <p className="text-gray-400 leading-8 mt-8 text-lg max-w-xl">

            Passionate Software Developer specializing in
            Artificial Intelligence, Machine Learning,
            Python, Java, Django and Cloud Computing.

            I love building intelligent applications,
            scalable backend systems and modern web
            experiences.

          </p>


          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects

              <FaArrowRight />

            </a>


            <a
              href={personalInfo.resume}
              className="btn-outline"
            >

              <FaDownload />

              Resume

            </a>

          </div>


          <div className="flex gap-6 mt-10 text-3xl">


            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >

              <FaGithub />

            </a>


            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >

              <FaLinkedin />

            </a>


          </div>


        </motion.div>




        {/* RIGHT */}


        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >


          <div className="glass-card p-10 w-full max-w-md glow">


            {/* PROFILE IMAGE */}

            <div className="
              w-40
              h-40
              rounded-full
              mx-auto
              mb-8
              overflow-hidden
              border-4
              border-cyan-400
            ">

              <img
                src={profileImage}
                alt="Srushti Lohakare"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>



            <h3 className="text-3xl font-bold text-center">

              Srushti Lohakare

            </h3>


            <p className="text-center text-gray-400 mt-4">

              AI / ML Developer

            </p>



            <div className="grid grid-cols-3 gap-4 mt-10">


              {stats.map((item) => (

                <div
                  key={item.label}
                  className="text-center"
                >

                  <h3 className="text-3xl font-black gradient-text">

                    {item.value}

                  </h3>


                  <p className="text-gray-400 text-sm mt-2">

                    {item.label}

                  </p>


                </div>

              ))}


            </div>


            <div className="mt-10">


              <div className="flex justify-between mb-2">

                <span>Python</span>

                <span>95%</span>

              </div>


              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                <div className="h-full w-[95%] bg-cyan-400 rounded-full"></div>

              </div>



              <div className="flex justify-between mt-6 mb-2">

                <span>AI / ML</span>

                <span>90%</span>

              </div>


              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                <div className="h-full w-[90%] bg-purple-500 rounded-full"></div>

              </div>



              <div className="flex justify-between mt-6 mb-2">

                <span>React</span>

                <span>85%</span>

              </div>


              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>

              </div>


            </div>


          </div>


        </motion.div>


      </div>

    </section>
  );
}