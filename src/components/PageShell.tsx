import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
