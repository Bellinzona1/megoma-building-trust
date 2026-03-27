import { motion } from "framer-motion";
import heroImg from "@/assets/hero-construction.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Image with subtle scale-in */}
    <motion.img
      src={heroImg}
      alt="Obra de construcción moderna"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.6, ease: EASE }}
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto"
      >
        Construcción y mantenimiento con{" "}
        <span className="text-primary">calidad</span> y compromiso
      </motion.h1>

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        className="w-20 h-1 bg-primary mx-auto rounded-full mt-6 origin-left"
      />

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
        className="mt-5 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body"
      >
        Más de 10 años desarrollando proyectos en todo el país
      </motion.p>

      <motion.a
        href="#contacto"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
        className="inline-block mt-10 rounded-md bg-primary px-8 py-4 text-lg font-bold text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
      >
        Solicitar presupuesto
      </motion.a>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
