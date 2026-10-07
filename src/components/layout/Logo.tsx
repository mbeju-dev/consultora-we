/* eslint-disable @next/next/no-img-element */
import { SITE } from "@/lib/site";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  if (SITE.logoUrl) {
    return variant === "header" ? (
      <img src={SITE.logoUrl} alt={SITE.nombre} className="logo-img" />
    ) : (
      <span className="logo-footer-box"><img src={SITE.logoUrl} alt={SITE.nombre} className="logo-img logo-img-sm" /></span>
    );
  }
  return <span className={variant === "header" ? "logo-ph" : "logo-ph logo-ph-dark"}>[Logo]</span>;
}
