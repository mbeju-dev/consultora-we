"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { Busqueda } from "@/lib/busquedas";
import { ApplyModal } from "./ApplyModal";

const Ctx = createContext<() => void>(() => {});

export function ApplyProvider({ job, children }: { job: Busqueda; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      {open && <ApplyModal job={job} onClose={close} />}
    </Ctx.Provider>
  );
}

export function ApplyButton({ className, children }: { className: string; children: ReactNode }) {
  const open = useContext(Ctx);
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
