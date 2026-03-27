import { motion } from "framer-motion";
import { useRef } from "react";
import c1 from "@/assets/Clientes.logo/cliente1.png";
import c2 from "@/assets/Clientes.logo/cliente2.png";
import c3 from "@/assets/Clientes.logo/cliente3.png";
import c4 from "@/assets/Clientes.logo/cliente4.png";
import c5 from "@/assets/Clientes.logo/cliente5.png";
import c6 from "@/assets/Clientes.logo/cliente6.png";
import c7 from "@/assets/Clientes.logo/cliente7.png";
import c8 from "@/assets/Clientes.logo/cliente8.png";

const clients = [
  { img: c1, name: "Kärcher" },
  { img: c2, name: "Levic" },
  { img: c3, name: "Allen Laboratorios" },
  { img: c4, name: "Grupo Farmacéutico del Centro" },
  { img: c5, name: "Magnolia Residencial" },
  { img: c6, name: "Equilibrio Farmacéutico" },
  { img: c7, name: "Cliente 7" },
  { img: c8, name: "Isla Victoria" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.93 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ClientsSection = () => {
  const ref = useRef(null);

  return (
    <section id="clientes" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nuestros Clientes
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground max-w-xl mx-auto font-body"
          >
            Empresas e instituciones que han confiado en nuestro trabajo.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={item}
              className="flex items-center justify-center rounded-xl border border-border bg-card p-4 h-36 hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <img
                src={c.img}
                alt={c.name}
                className="max-h-24 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

