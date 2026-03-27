import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "+251", label: "Proyectos" },
  { icon: Calendar, value: "+10", label: "Años de experiencia" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
            Nuestra Experiencia
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto font-body">
            Desde 2014 hemos desarrollado más de 251 proyectos, siempre enfocados en ofrecer
            los más altos estándares de calidad y eficiencia.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="flex flex-col items-center bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl px-12 py-8"
            >
              <s.icon size={32} className="text-primary mb-3" />
              <span className="font-heading text-5xl font-extrabold text-primary">{s.value}</span>
              <span className="mt-2 text-secondary-foreground/70 text-sm font-medium uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
