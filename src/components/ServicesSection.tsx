import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2, Hammer, Plug, PaintBucket, RefreshCw,
  Ruler, Eye, Wrench, Home, Cog, Building
} from "lucide-react";

const services = [
  { icon: Building2, title: "Proyectos llave en mano" },
  { icon: Hammer, title: "Obra civil" },
  { icon: Plug, title: "Instalaciones" },
  { icon: PaintBucket, title: "Acabados" },
  { icon: RefreshCw, title: "Remodelación" },
  { icon: Ruler, title: "Diseño arquitectónico" },
  { icon: Eye, title: "Supervisión de obra" },
  { icon: Wrench, title: "Mantenimiento" },
  { icon: Home, title: "Construcción de vivienda" },
  { icon: Cog, title: "Ingenierías" },
  { icon: Building, title: "Inmobiliaria" },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Servicios
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
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
        </div>
      </div>
    </section>
  );
};

export default Services;
