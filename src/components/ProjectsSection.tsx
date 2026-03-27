import { motion } from "framer-motion";
import { useRef } from "react";
import p1 from "@/assets/Proyecto.imagenes/Proyecto1.png";
import p2 from "@/assets/Proyecto.imagenes/Proyecto2.png";
import p3 from "@/assets/Proyecto.imagenes/Proyecto3.png";
import p4 from "@/assets/Proyecto.imagenes/Proyecto4.png";
import p5 from "@/assets/Proyecto.imagenes/Proyecto5.png";
import p6 from "@/assets/Proyecto.imagenes/Proyecto6.png";

const projects = [
  { img: p1, title: "Complejo residencial" },
  { img: p2, title: "Acceso residencial" },
  { img: p3, title: "Canchas de pádel" },
  { img: p4, title: "Áreas verdes" },
  { img: p5, title: "Áreas deportivas" },
  { img: p6, title: "Zona de descanso" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="proyectos" className="py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nuestro Trabajo
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-1 bg-primary mx-auto rounded-full origin-left"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <h3 className="font-heading text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-400">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
