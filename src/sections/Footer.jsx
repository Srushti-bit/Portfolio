import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";


export default function Footer(){

return(

<footer className="mt-20 border-t border-white/10">


<div className="container py-10">


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
"


>


<div>


<h3 className="
text-2xl
font-bold
">

Srushti Lohakare

</h3>


<p className="
text-gray-400
mt-2
">

AI • Software Engineering • Cloud

</p>


</div>




<div className="
flex
gap-5
">


<a

href="https://github.com/Srushti-bit"

target="_blank"

rel="noreferrer"

className="
w-12
h-12
rounded-full
glass-card
flex
items-center
justify-center
text-xl
text-gray-300
hover:text-cyan-400
transition
"

>

<FaGithub />

</a>



<a

href="#"

target="_blank"

rel="noreferrer"

className="
w-12
h-12
rounded-full
glass-card
flex
items-center
justify-center
text-xl
text-gray-300
hover:text-cyan-400
transition
"

>

<FaLinkedin />

</a>



</div>



</motion.div>




<div className="
text-center
text-gray-500
text-sm
mt-10
flex
justify-center
items-center
gap-2
">


© {new Date().getFullYear()} 
Built with

<FaHeart className="text-red-400"/>

using React & AI


</div>



</div>


</footer>


)

}
