import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";


export default function Skills(){


const skillGroups = [

{
title:"Programming & Development",
icon:<FaCode />,
skills:[
"Python",
"Java",
"SQL",
"React.js",
"Django",
"REST APIs"
]
},


{
title:"Artificial Intelligence",
icon:<FaBrain />,
skills:[
"Machine Learning",
"Natural Language Processing",
"BERT",
"LLMs",
"Agentic AI",
"AI Applications"
]
},


{
title:"Database & Analytics",
icon:<FaDatabase />,
skills:[
"MySQL",
"SQLite",
"Pandas",
"NumPy",
"Data Analytics",
"Power BI",
"Data Visualization"
]
},


{
title:"Cloud & Security",
icon:<FaCloud />,
skills:[
"AWS",
"Google Cloud",
"Linux",
"Bash",
"Cloud Deployment",
"Network Security",
"Threat Modeling",
"IAM"
]
}

];



return(

<section
id="skills"
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

Technical Skills

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

Technologies and tools I use to build intelligent,
scalable and modern software applications.

</p>


</motion.div>





<div

className="
grid
lg:grid-cols-2
gap-12
"

>


{
skillGroups.map((group,index)=>(


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
"

>


<div

className="
flex
items-center
gap-5
mb-10
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-cyan-400/10
flex
items-center
justify-center
text-3xl
text-cyan-400
"

>

{group.icon}

</div>



<h3

className="
text-2xl
font-semibold
"

>

{group.title}

</h3>


</div>




<div

className="
flex
flex-wrap
gap-4
"

>


{
group.skills.map((skill,i)=>(


<motion.span

key={i}


whileHover={{
scale:1.08
}}


className="
px-5
py-2.5
rounded-full
bg-white/5
border
border-white/10
text-gray-300
text-sm
transition
hover:text-cyan-400
hover:border-cyan-400
"

>

{skill}

</motion.span>


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
