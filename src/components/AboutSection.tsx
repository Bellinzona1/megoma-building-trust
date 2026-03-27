import { motion } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

const About = () => {
  const ref = useRef(null);

  return (
    <section id="nosotros" className="py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            Nosotros
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full origin-left"
          />
          <motion.p
            variants={fadeUp}
            custom={0.25}
            className="text-muted-foreground text-lg leading-relaxed font-body"
          >
            MEGOMA es una empresa fundada en 2014 con el objetivo de brindar servicios de construcción
            y mantenimiento a nivel nacional, destacándose por su calidad, compromiso y eficiencia en costos.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center"
        >
          <div className="bg-secondary rounded-2xl px-14 py-10 text-center shadow-2xl">
            <span className="block font-heading text-6xl font-extrabold text-primary">+251</span>
            <span className="block mt-2 text-secondary-foreground/80 font-medium text-sm uppercase tracking-widest">
              Proyectos realizados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
