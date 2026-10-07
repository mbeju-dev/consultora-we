"use client";

import { useEffect, useRef, useState, type DragEvent, type FormEvent, type ChangeEvent } from "react";
import { enviar, MSG, tam, validar, validarArchivo, type Errors, type FormName } from "@/lib/forms";

type Status = "idle" | "sending" | "done";

function omit(e: Errors, ...keys: string[]): Errors {
  const r = { ...e };
  for (const k of keys) delete r[k];
  return r;
}

export function useSiteForm(name: FormName, extra?: Record<string, string>) {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const abort = useRef<AbortController | null>(null);

  useEffect(() => () => abort.current?.abort(), []);

  function elegirArchivo(f?: File | null) {
    if (!f) return;
    const err = validarArchivo(f);
    setErrors((prev) => (err ? { ...prev, archivo: err } : omit(prev, "archivo")));
    if (!err) setFile(f);
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === "sending") return;
    const formEl = ev.currentTarget;
    const fd = new FormData(formEl);
    const errs = validar(name, fd, !!file);
    const keys = Object.keys(errs);
    if (keys.length) {
      setErrors(errs);
      formEl.querySelector<HTMLElement>(`[name="${keys[0]}"]`)?.focus();
      return;
    }
    fd.delete("archivo");
    if (file) fd.set("cv", file);
    for (const [k, v] of Object.entries(extra ?? {})) fd.set(k, v);

    setErrors({});
    setStatus("sending");
    setProgress(0);
    abort.current = new AbortController();
    enviar(name, fd, (p) => setProgress(Math.min(100, p)), abort.current.signal)
      .then(() => {
        setStatus("done");
        setProgress(100);
      })
      .catch(() => {
        setStatus("idle");
        setProgress(0);
        setErrors({ general: MSG.general });
      });
  }

  function onInput(ev: FormEvent<HTMLFormElement>) {
    const n = (ev.target as HTMLInputElement).name;
    if (n && errors[n]) {
      setErrors((prev) => omit(prev, n, "general"));
    }
  }

  function reset() {
    abort.current?.abort();
    setStatus("idle");
    setProgress(0);
    setErrors({});
    setDrag(false);
    setFile(null);
  }

  return {
    status,
    sending: status === "sending",
    done: status === "done",
    progress: Math.round(progress),
    errors,
    reset,
    formProps: { onSubmit, onInput, noValidate: true },
    drop: {
      drag,
      error: errors.archivo,
      fileName: file?.name ?? "",
      fileSize: file ? tam(file.size) : "",
      hasFile: !!file,
      onFile: (ev: ChangeEvent<HTMLInputElement>) => {
        elegirArchivo(ev.target.files?.[0]);
        ev.target.value = "";
      },
      onDrop: (ev: DragEvent) => {
        ev.preventDefault();
        setDrag(false);
        elegirArchivo(ev.dataTransfer?.files[0]);
      },
      onDragOver: (ev: DragEvent) => {
        ev.preventDefault();
        if (!drag) setDrag(true);
      },
      onDragLeave: () => setDrag(false),
      onRemove: (ev: { preventDefault(): void; stopPropagation(): void }) => {
        ev.preventDefault();
        ev.stopPropagation();
        setFile(null);
      },
    },
  };
}

export type DropState = ReturnType<typeof useSiteForm>["drop"];
