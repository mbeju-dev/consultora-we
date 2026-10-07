import { cacheLife } from "next/cache";

// Año del copyright: se prerenderiza y se revalida a diario.
export async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
