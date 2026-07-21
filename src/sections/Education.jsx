import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";


export default function Education(){


const education = [

{
icon:<FaUniversity />,
degree:"Master of Computer Applications (MCA)",
institute:"Analytical MCA",
duration:"2025 - Present",
description:
"Specializing in Artificial Intelligence and Machine Learning with focus on software engineering, cloud computing and intelligent systems.",
skills:[
"Artificial Intelligence",
"Machine Learning",
"Software Engineering",
"Cloud Computing"
]
},


{
icon:<FaGraduationCap />,
degree:"Bachelor of Science (B.Sc.)",
institute:"Computer Science & Mathematics",
duration:"Completed",
description:
"Built strong foundations in computer science, mathematics, programming, algorithms and database systems.",
skills:[
"Programming",
"Mathematics",
"Algorithms",
"Database Systems"
]
},


{
icon:<FaBookOpen />,
degree:"Continuous Learning",
institute:"Technical Certifications & Projects",
duration:"Ongoing",
description:
"Learning through cloud certifications, AI projects, competitive programming and hands-on software development.",
skills:[
"AWS",
"Google Cloud",
"AI/ML",
"Backend Development"
]
}

];



return(

<section
id="education"
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

Education

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

Academic journey, technical learning and continuous growth
towards building advanced software and AI solutions.

</p>


</motion.div>





<div

className="
grid
lg:grid-cols-3
gap-12
"

>


{
education.map((item,index)=>(


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
min-h-[380px]
flex
flex-col
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
mb-8
"

>

{item.icon}

</div>





<h3

className="
text-2xl
font-semibold
mb-3
"

>

{item.degree}

</h3>




<h4

className="
text-cyan-400
text-lg
mb-5
"

>

{item.institute}

</h4>




<p

className="
text-gray-400
leading-relaxed
mb-8
"

>

{item.description}

</p>





<div

className="
flex
flex-wrap
gap-3
mt-auto
"

>


{
item.skills.map((skill,i)=>(


<span

key={i}

className="
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-gray-300
text-sm
hover:text-cyan-400
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
