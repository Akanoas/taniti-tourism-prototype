import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { lodging } from "@/lib/taniti-data";
import { ArrowLeft, CalendarDays, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import lagoonImg from "@/assets/photos/beach-lagoon.jpg";
import heroImg from "@/assets/photos/hero-beach.jpg";
import rainforestImg from "@/assets/photos/rainforest-trail.jpg";

const photoMap = {
  lagoon: lagoonImg,
  hero: heroImg,
  rainforest: rainforestImg,
} as const;

export default function LodgingDetail({ id }: { id: string }) {
  const item = lodging.find((l) => l.id === id);

  if (!item) {
    return (
      <PageShell>
        <h1 className="text-2xl font-extrabold">Lodging not found</h1>
        <p className="mt-2 text-muted-foreground">Try returning to the lodging list.</p>
        <div className="mt-4">
          <Link href="/lodging" className="inline-flex">
            <Button variant="secondary" className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to lodging
            </Button>
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/lodging" className="inline-flex">
            <Button variant="ghost" className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to lodging
            </Button>
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{item.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              {item.kind}
            </Badge>
            <Badge className="rounded-full bg-primary text-primary-foreground">{item.priceRange}</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href={`/contact?lodging=${encodeURIComponent(item.name)}`} className="inline-flex">
            <Button className="rounded-xl">Book Now</Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => toast.success("Saved to shortlist", { description: item.name })}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
            Save
          </Button>
        </div>
      </div>

      <Card className="mt-6 overflow-hidden rounded-3xl">
        <img
          src={photoMap[item.photo]}
          alt={`Scenic photo near ${item.name}`}
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle className="text-xl">What to expect</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-4">
            <div className="text-sm font-bold">Highlights</div>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-4">
            <div className="text-sm font-bold">Suggested booking details</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Select dates and party size on the Contact / Booking page. You can mention special
              requests (airport pickup, crib, late check-in).
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="font-semibold">Pro tip:</span>
              <span className="text-muted-foreground">Weeknights are usually calmer.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 rounded-3xl border bg-secondary p-5">
        <div className="text-sm font-bold">Usability testing task</div>
        <div className="mt-1 text-sm text-secondary-foreground/80">
          “Find lodging options and book a room.” → You’re on the Details step. Click “Book Now” to
          continue.
        </div>
      </div>
    </PageShell>
  );
}
