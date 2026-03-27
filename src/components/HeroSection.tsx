import { motion } from "framer-motion";
import heroImg from "@/assets/hero-construction.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Obra de construcción moderna"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto"
      >
        Construcción y mantenimiento con{" "}
        <span className="text-primary">calidad</span> y compromiso
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body"
      >
        Más de 10 años desarrollando proyectos en todo el país
      </motion.p>

      <motion.a
        href="#contacto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="inline-block mt-10 rounded-md bg-primary px-8 py-4 text-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
      >
        Solicitar presupuesto
      </motion.a>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-primary" />
      </div>
    </motion.div>
  </section>
);

export default Hero;
