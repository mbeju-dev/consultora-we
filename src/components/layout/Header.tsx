"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE, WA } from "@/lib/site";
import { IconClose, IconMenu } from "../icons";
import { Logo } from "./Logo";

export function Header() {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/#inicio" onClick={close} aria-label={`${SITE.nombre} — Inicio`} className="header-logo">
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Navegación principal">
          {NAV.map((n) => (
            <Link key={n.href} className="navlink" href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="btn btn-blue nav-cta" href="/#busquedas">Ver búsquedas laborales</Link>
          <button
            className="iconbtn menu-btn"
            type="button"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      {menu && (
        <nav aria-label="Menú móvil" className="mobile-menu">
          <div className="wrap mobile-menu-inner">
            {NAV.map((n) => (
              <Link key={n.href} className="navlink" href={n.href} onClick={close}>{n.label}</Link>
            ))}
            <Link className="btn btn-blue" href="/#busquedas" onClick={close} style={{ marginTop: 8 }}>Ver búsquedas laborales</Link>
            <a className="btn btn-line" href={WA.general} target="_blank" rel="noopener">Escribinos por WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}
