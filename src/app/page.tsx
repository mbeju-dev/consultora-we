import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Caminos } from "@/components/home/Caminos";
import { Busquedas } from "@/components/home/Busquedas";
import { CargarCv } from "@/components/home/CargarCv";
import { Empresas } from "@/components/home/Empresas";
import { Sobre } from "@/components/home/Sobre";
import { Contacto } from "@/components/home/Contacto";
import { MobileBar } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Caminos />
      <Busquedas />
      <CargarCv />
      <Empresas />
      <Sobre />
      <Contacto />
      <MobileBar>
        <Link className="btn btn-blue mbar-btn" href="/#busquedas">Ver búsquedas</Link>
        <Link className="btn btn-line mbar-btn" href="/#cargar-cv">Cargá tu CV</Link>
      </MobileBar>
    </>
  );
}
