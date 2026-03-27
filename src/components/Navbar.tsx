import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMegoma from "@/assets/Logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-secondary shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoMegoma} alt="MEGOMA" className="h-24 w-24 rounded object-contain" />
          <span className="font-heading text-2xl font-bold text-white tracking-wide">
            MEG<span className="text-primary">OMA</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors pb-1 ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contacto"
              className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Cotizar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-white/10 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-white/80 hover:text-white"}`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
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
