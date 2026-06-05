import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <PageShell>
      <h1 className="text-3xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        This prototype uses clickable navigation. Try returning to the home page.
      </p>
      <div className="mt-5">
        <Link href="/" className="inline-flex">
          <Button className="rounded-xl">Back to Home</Button>
        </Link>
      </div>
    </PageShell>
  );
}
