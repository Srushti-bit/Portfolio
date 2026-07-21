import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaCloud,
  FaRocket,
} from "react-icons/fa";


export default function About(){

const highlights = [
  {
    icon:<FaCode />,
    title:"Software Engineering",
    description:
    "Building scalable applications using modern programming languages, backend systems and clean software architecture."
  },

  {
    icon:<FaBrain />,
    title:"Artificial Intelligence",
    description:
    "Developing intelligent solutions using Machine Learning, NLP, LLMs and Agentic AI workflows."
  },

  {
    icon:<FaCloud />,
    title:"Cloud Technologies",
    description:
    "Exploring cloud platforms, deployment workflows and secure infrastructure for reliable applications."
  },

  {
    icon:<FaRocket />,
    title:"Problem Solving",
    description:
    "Strong foundation in algorithms, mathematics and data structures with focus on efficient solutions."
  }
];


return(

<section 
id="about"
className="scroll-mt-20"
>


<div className="container">


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="
text-center
mb-20
"

>


<h2
className="
text-4xl
md:text-5xl
font-bold
tracking-tight
"
>

About Me

</h2>



<p

className="
text-gray-400
max-w-3xl
mx-auto
mt-6
text-lg
leading-relaxed
"

>

I am Srushti Lohakare, an MCA student passionate about 
technology, problem-solving, and building meaningful projects.
 I enjoy exploring new concepts, improving my skills, and 
 turning ideas into practical solutions. Currently,
  I am working on AI-based applications and software projects
   while continuously learning and growing as a developer.

</p>


</motion.div>





<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-12
"


>


{
highlights.map((item,index)=>(


<motion.div

key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.12
}}


viewport={{
once:true
}}


whileHover={{
y:-12,
scale:1.03,
rotateX:2
}}


className="
glass-card
p-10
min-h-[300px]
flex
flex-col
items-center
text-center
justify-center
"

>


<div

className="
w-16
h-16
rounded-2xl
bg-cyan-400/10
flex
items-center
justify-center
text-3xl
text-cyan-400
mb-7
"

>

{item.icon}

</div>




<h3

className="
text-xl
font-semibold
mb-4
"

>

{item.title}

</h3>




<p

className="
text-gray-400
leading-relaxed
"

>

{item.description}

</p>


</motion.div>


))

}


</div>


</div>


</section>


)


}
