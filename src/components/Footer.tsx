import logoMegoma from "@/assets/Logo.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <img src={logoMegoma} alt="MEGOMA" className="h-16 w-16 rounded" />
          <div>
            <span className="font-heading text-lg font-bold text-secondary-foreground">
              MEG<span className="text-primary">OMA</span>
            </span>
            <p className="text-secondary-foreground/60 text-xs mt-1">
              Construcción y mantenimiento profesional
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
            <Phone size={16} className="text-primary shrink-0" />
            <span>+99 995035</span>
          </div>
          <div className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
            <Mail size={16} className="text-primary shrink-0" />
            <span>comercial@megoma.com.mx</span>
          </div>
        </div>

        <div className="text-secondary-foreground/50 text-sm md:text-right">
          <p>© {new Date().getFullYear()} MEGOMA</p>
          <p className="mt-1">Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
