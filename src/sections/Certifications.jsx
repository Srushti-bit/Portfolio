import { motion } from "framer-motion";
import {
  FaAws,
  FaGoogle,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";


const certifications = [
  {
    icon: <FaAws />,
    title: "AWS Academy Graduate",
    subtitle: "Cloud Foundations",
    description:
      "Completed AWS Academy Cloud Foundations covering cloud concepts, AWS services, security, architecture and pricing models.",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Cloud Computing",
    ],
    gradient:
      "from-orange-500 to-yellow-500",
  },


  {
    icon: <FaGoogle />,
    title: "Google Cloud Training",
    subtitle: "Cloud Computing Foundations",
    description:
      "Hands-on experience with Google Cloud services including Compute Engine, Cloud Storage, networking and AI related cloud workflows.",
    skills:[
      "GCP",
      "Compute Engine",
      "Cloud Storage",
      "Networking",
    ],
    gradient:
      "from-blue-500 to-cyan-500",
  },


  {
    icon: <FaTrophy />,
    title: "Capgemini Agentic AI Buildathon",
    subtitle: "AI Innovation Challenge",
    description:
      "Participated in an AI-focused buildathon developing intelligent solutions using modern AI technologies.",
    skills:[
      "Agentic AI",
      "LLMs",
      "NLP",
      "Machine Learning",
    ],
    gradient:
      "from-purple-500 to-pink-500",
  },


  {
    icon:<FaCertificate/>,
    title:"Technical Certifications",
    subtitle:"Continuous Learning",
    description:
      "Regularly improving skills through technical courses, programming practice and hands-on software projects.",
    skills:[
      "Python",
      "AI/ML",
      "Backend Development",
      "Cloud",
    ],
    gradient:
      "from-green-500 to-emerald-500",
  },

];


export default function Certifications(){

return(

<section id="certifications">

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
duration:0.8
}}

viewport={{
once:true
}}

className="text-center mb-20"

>


<p className="
text-cyan-400
uppercase
tracking-[4px]
font-semibold
">

Achievements

</p>



<h2 className="section-title">

Certifications &
<span className="gradient-text">
 Recognition
</span>

</h2>



<p className="section-subtitle mx-auto">

Professional certifications and achievements
showcasing my continuous learning journey.

</p>



</motion.div>



<div className="
grid
md:grid-cols-2
gap-8
">


{
certifications.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6,
delay:index*0.15
}}

viewport={{
once:true
}}

whileHover={{
y:-10,
rotateX:5,
rotateY:-5
}}

className="
glass-card
p-8
relative
overflow-hidden
"

>


<div className={`
absolute
top-0
left-0
right-0
h-1
bg-gradient-to-r
${item.gradient}
`}/>



<div className={`
w-16
h-16
rounded-xl
bg-gradient-to-r
${item.gradient}
flex
items-center
justify-center
text-3xl
mb-6
`}>

{item.icon}

</div>



<h3 className="
text-2xl
font-bold
mb-2
">

{item.title}

</h3>



<h4 className="
text-cyan-400
mb-5
font-semibold
">

{item.subtitle}

</h4>



<p className="
text-gray-400
leading-8
mb-6
">

{item.description}

</p>



<div className="
flex
flex-wrap
gap-3
">

{
item.skills.map(skill=>(

<span

key={skill}

className="
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-sm
hover:border-cyan-400
transition
"

>

{skill}

</span>


))
}


</div>



</motion.div>


))

}


</div>



</div>

</section>

)

}
