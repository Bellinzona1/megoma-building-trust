import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nosotros
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            MEGOMA es una empresa fundada en 2014 con el objetivo de brindar servicios de construcción
            y mantenimiento a nivel nacional, destacándose por su calidad, compromiso y eficiencia en costos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-secondary rounded-xl px-10 py-8 text-center shadow-xl">
            <span className="block font-heading text-5xl font-extrabold text-primary">+251</span>
            <span className="block mt-2 text-secondary-foreground/80 font-medium text-sm uppercase tracking-wider">
              Proyectos realizados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
