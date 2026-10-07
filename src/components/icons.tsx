import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Stroke({ size = 20, strokeWidth = 2, children, ...rest }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

export const IconArrow = (p: P) => <Stroke size={18} strokeWidth={2.2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Stroke>;
export const IconBack = (p: P) => <Stroke size={18} strokeWidth={2.2} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></Stroke>;
export const IconUpload = (p: P) => <Stroke size={18} {...p}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></Stroke>;
export const IconCheck = (p: P) => <Stroke size={18} strokeWidth={2.2} {...p}><path d="M20 6 9 17l-5-5" /></Stroke>;
export const IconPlus = (p: P) => <Stroke size={20} {...p}><path d="M12 5v14M5 12h14" /></Stroke>;
export const IconMenu = (p: P) => <Stroke size={22} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Stroke>;
export const IconClose = (p: P) => <Stroke size={22} {...p}><path d="M6 6l12 12M18 6 6 18" /></Stroke>;
export const IconSearch = (p: P) => <Stroke size={20} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Stroke>;
export const IconPin = (p: P) => <Stroke size={20} {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></Stroke>;
export const IconBuilding = (p: P) => <Stroke size={22} strokeWidth={1.9} {...p}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1M14 9h1M9 13h1M14 13h1M10 21v-4h4v4" /></Stroke>;
export const IconUser = (p: P) => <Stroke size={18} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></Stroke>;
export const IconSend = (p: P) => <Stroke size={20} strokeWidth={2.2} {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" /></Stroke>;
export const IconChat = (p: P) => <Stroke size={22} {...p}><path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z" /></Stroke>;
export const IconMail = (p: P) => <Stroke size={22} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Stroke>;
export const IconImage = (p: P) => <Stroke size={40} strokeWidth={1.6} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-8 8" /></Stroke>;
export const IconInstagram = (p: P) => <Stroke size={20} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></Stroke>;
export const IconFacebook = (p: P) => <Stroke size={20} {...p}><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></Stroke>;
export const IconLinkedin = (p: P) => <Stroke size={20} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" /></Stroke>;

export function IconWhatsApp({ size = 24, ...rest }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
    </svg>
  );
}

// Íconos de servicios (path único)
export function IconPath({ d, size = 24 }: { d: string; size?: number }) {
  return <Stroke size={size} strokeWidth={1.9}><path d={d} /></Stroke>;
}
