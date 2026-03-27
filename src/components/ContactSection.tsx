import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Globe } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const infoItems = [
  { icon: Mail, content: "comercial@megoma.com.mx", href: "mailto:comercial@megoma.com.mx" },
  { icon: Globe, content: "www.megoma.com.mx", href: "https://www.megoma.com.mx" },
];

const infoContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const infoItem = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const formContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const formItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contacto desde sitio web");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:comercial@megoma.com.mx?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contacto
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="w-16 h-1 bg-primary mx-auto rounded-full origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info column */}
          <motion.div
            variants={infoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {infoItems.map(({ icon: Icon, content, href }) => (
              <motion.div key={content} variants={infoItem} className="flex items-start gap-4">
                <Icon className="text-primary mt-1 shrink-0" size={22} />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-primary hover:underline font-body"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="text-muted-foreground font-body">{content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={handleSubmit}
            variants={formContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <motion.div variants={formItem}>
              <input
                type="text"
                required
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
              />
            </motion.div>
            <motion.div variants={formItem}>
              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
              />
            </motion.div>
            <motion.div variants={formItem}>
              <textarea
                required
                rows={5}
                placeholder="Mensaje"
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 font-body resize-none"
              />
            </motion.div>
            <motion.div variants={formItem}>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 font-heading font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Enviar mensaje
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
