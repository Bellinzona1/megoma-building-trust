import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const team = [
  { role: "Director General", level: 0 },
  { role: "Gerente de Nuevos Proyectos", level: 1 },
  { role: "Gerente de Construcción", level: 1 },
  { role: "Gerente de Mantenimiento", level: 1 },
  { role: "Coordinación de Proyectos", level: 2 },
  { role: "Coordinación Administrativa", level: 2 },
  { role: "Compras y Almacén", level: 2 },
  { role: "Desarrollo Comercial", level: 2 },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const level0 = team.filter((t) => t.level === 0);
  const level1 = team.filter((t) => t.level === 1);
  const level2 = team.filter((t) => t.level === 2);

  const renderCard = (t: typeof team[0], i: number, delay: number) => (
    <motion.div
      key={t.role}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: delay + i * 0.1 }}
      className="flex flex-col items-center bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
        <User size={28} />
      </div>
      <h3 className="font-heading text-sm font-semibold text-card-foreground text-center">{t.role}</h3>
    </motion.div>
  );

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Organización
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Level 0 */}
        <div className="flex justify-center mb-8">
          {level0.map((t, i) => renderCard(t, i, 0))}
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-8">
          <div className="w-0.5 h-8 bg-primary/30" />
        </div>

        {/* Level 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {level1.map((t, i) => renderCard(t, i, 0.2))}
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-0.5 h-8 bg-primary/30" />
        </div>

        {/* Level 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {level2.map((t, i) => renderCard(t, i, 0.4))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
