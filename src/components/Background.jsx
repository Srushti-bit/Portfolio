import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-200px] left-[-200px] w-[650px] h-[650px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.4) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

    </div>
  );
}