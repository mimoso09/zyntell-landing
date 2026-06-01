"use client";
import { Zap } from "lucide-react";
import { brand } from "@/config/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 16px rgba(59,130,246,0.3)",
                }}
              >
                <Zap size={16} className="text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-white text-lg">{brand.name}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Producto
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Soluciones", href: "#soluciones" },
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Precios", href: "#precios" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Casos de uso", href: "#casos-de-uso" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {brand.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.contact.whatsapp}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <span>
            © {year} {brand.name}. Todos los derechos reservados.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-slate-400 transition">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
