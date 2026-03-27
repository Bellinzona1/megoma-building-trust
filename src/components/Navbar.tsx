import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMegoma from "@/assets/logo-megoma.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoMegoma} alt="MEGOMA" className="h-10 w-10 rounded" />
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            MEGA<span className="text-primary">MA</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Cotizar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Cotizar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
