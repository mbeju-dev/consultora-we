"use client";

import type { ReactNode } from "react";
import type { DropState } from "./useSiteForm";
import { IconUpload } from "../icons";

export function Err({ msg, className }: { msg?: string; className?: string }) {
  if (!msg) return null;
  return <p className={`err ${className ?? ""}`} role="alert">{msg}</p>;
}

export function Field({
  id, label, error, optional, span2, children,
}: { id: string; label: string; error?: string; optional?: boolean; span2?: boolean; children: ReactNode }) {
  return (
    <div className={`fld${span2 ? " span2" : ""}`}>
      <label className="lbl" htmlFor={id}>
        {label} {optional ? <span className="opt">(opcional)</span> : <span className="req">*</span>}
      </label>
      {children}
      <Err msg={error} />
    </div>
  );
}

export function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="span2 progress" aria-live="polite">
      <div className="progress-head"><span>{label}</span><span>{value}%</span></div>
      <div className="bar"><span style={{ width: `${value}%` }} /></div>
    </div>
  );
}

export function FileDrop({ id, drop, compact }: { id: string; drop: DropState; compact?: boolean }) {
  const cls = "drop" + (drop.drag ? " drop-on" : "") + (drop.error ? " drop-err" : "") + (compact ? " drop-compact" : "");
  return (
    <div className="fld span2">
      <span className="lbl" id={`${id}-l`}>Tu CV <span className="req">*</span></span>
      <label className={cls} htmlFor={id} onDragOver={drop.onDragOver} onDragLeave={drop.onDragLeave} onDrop={drop.onDrop}>
        <input className="sr" id={id} name="archivo" type="file" accept="application/pdf,.pdf" aria-labelledby={`${id}-l`} onChange={drop.onFile} />
        {drop.hasFile ? (
          <span className="file-row">
            <span className="file-badge">PDF</span>
            <span className="file-meta">
              <strong>{drop.fileName}</strong>
              <span className="hint">{drop.fileSize}{compact ? "" : " · listo para enviar"}</span>
            </span>
            <button type="button" className="chip chip-sm" onClick={drop.onRemove}>Quitar</button>
          </span>
        ) : compact ? (
          <>
            <IconUpload size={26} style={{ color: "var(--blue)" }} />
            <strong className="drop-title">Tocá para adjuntar tu CV</strong>
            <span className="hint">Solo PDF · máximo 5 MB</span>
          </>
        ) : (
          <>
            <span className="drop-icon"><IconUpload size={26} /></span>
            <strong className="drop-title">Tocá para elegir tu CV <span className="hide-sm drop-sub">o arrastralo acá</span></strong>
            <span className="hint">Solo PDF · máximo 5 MB</span>
          </>
        )}
      </label>
      <Err msg={drop.error} />
    </div>
  );
}

export function Consent({ id, error, children }: { id: string; error?: string; children: ReactNode }) {
  return (
    <div className="fld span2">
      <label className="check" htmlFor={id}>
        <input type="checkbox" id={id} name="consentimiento" />
        <span>{children}</span>
      </label>
      <Err msg={error} />
    </div>
  );
}

export function Success({
  title, text, tone = "green", size = "lg", children,
}: { title: string; text: string; tone?: "green" | "blue"; size?: "lg" | "md" | "sm"; children: ReactNode }) {
  return (
    <div role="status" className={`success success-${size}`}>
      <span className={`okmark okmark-${tone}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="success-actions">{children}</div>
    </div>
  );
}
