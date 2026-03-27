import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Leaf, Wrench, Zap, Building2, RefreshCw, Waves
} from "lucide-react";

const services = [
  { icon: Leaf, title: "Jardinería" },
  { icon: Wrench, title: "Fontanería" },
  { icon: Zap, title: "Electricidad" },
  { icon: Building2, title: "Construcción" },
  { icon: RefreshCw, title: "Remodelación" },
  { icon: Waves, title: "Limpieza de albercas" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Services = () => {
  const ref = useRef(null);

  return (
    <section id="servicios" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Servicios
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon size={28} />
              </div>
              <h3 className="font-heading text-sm font-semibold text-card-foreground">
                {s.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
