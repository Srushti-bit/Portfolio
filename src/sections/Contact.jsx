import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";


const contacts = [
  {
    icon:<FaGithub />,
    title:"GitHub",
    value:"Srushti-bit",
    link:"https://github.com/Srushti-bit",
  },

  {
    icon:<FaLinkedin />,
    title:"LinkedIn",
    value:"Connect with me",
    link:"#",
  },

  {
    icon:<FaEnvelope />,
    title:"Email",
    value:"Let's collaborate",
    link:"mailto:your-email@example.com",
  },

];


export default function Contact(){

return(

<section id="contact">

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

Contact

</p>



<h2 className="section-title">

Let's Build
<span className="gradient-text">
 Something Amazing
</span>

</h2>



<p className="section-subtitle mx-auto">

Open to software engineering internships,
AI projects and opportunities to build
impactful technology.

</p>



</motion.div>




<div className="
grid
lg:grid-cols-3
gap-8
mb-16
">


{
contacts.map((item,index)=>(


<motion.a

href={item.link}

target="_blank"

rel="noreferrer"

key={item.title}

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
delay:index*0.15
}}

viewport={{
once:true
}}

whileHover={{
y:-8,
scale:1.03
}}

className="
glass-card
p-8
text-center
"

>


<div className="
text-5xl
text-cyan-400
flex
justify-center
mb-5
">

{item.icon}

</div>



<h3 className="
text-xl
font-bold
mb-2
">

{item.title}

</h3>



<p className="
text-gray-400
">

{item.value}

</p>



</motion.a>


))

}


</div>




<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="
glass-card
p-10
text-center
"

>


<h3 className="
text-3xl
font-bold
mb-5
">

Interested in working together?

</h3>



<p className="
text-gray-400
max-w-2xl
mx-auto
leading-8
mb-8
">

I enjoy building AI-powered applications,
backend systems and scalable software solutions.
Feel free to reach out for collaborations,
internships or technical discussions.

</p>



<a

href="/resume.pdf"

download

className="
btn-primary
inline-flex
items-center
gap-3
"

>

<FaFileDownload />

Download Resume

</a>



</motion.div>



</div>


</section>

)

}
