import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { lodging } from "@/lib/taniti-data";
import { BedDouble, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "wouter";
import lagoonImg from "@/assets/photos/beach-lagoon.jpg";
import heroImg from "@/assets/photos/hero-beach.jpg";
import rainforestImg from "@/assets/photos/rainforest-trail.jpg";

const photoMap = {
  lagoon: lagoonImg,
  hero: heroImg,
  rainforest: rainforestImg,
} as const;

export default function Lodging() {
  return (
    <PageShell>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Island Lodging</h1>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            From budget-friendly hostels in Taniti City to a 4-star oceanfront resort. All types of
            lodging are <b>strictly regulated and regularly inspected</b> by the Tanitian government.
          </p>
        </div>
        <div className="inline-flex shrink-0 items-center gap-3 rounded-2xl border bg-primary/5 px-5 py-4 text-sm shadow-sm">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          <div className="leading-tight">
            <div className="font-bold text-foreground">Government Inspected</div>
            <div className="text-muted-foreground">Certified Safe & Clean</div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {lodging.map((l) => (
          <Card key={l.id} className="group overflow-hidden rounded-[2rem] border-none bg-card shadow-lg transition-all hover:shadow-xl">
            <div className="flex flex-col h-full">
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={photoMap[l.photo]}
                  alt={`${l.name} exterior`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm px-3 py-1 rounded-lg font-bold border-none">
                    {l.kind}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-xl font-extrabold text-sm shadow-lg border-none">
                    {l.priceRange}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                    {l.name}
                  </CardTitle>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary/70" />
                    <span>Taniti Island Destination</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4 flex-1 p-0">
                  <ul className="space-y-2.5">
                    {l.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="mt-8 flex gap-3">
                  <Link href={`/lodging/${l.id}`} className="flex-1">
                    <Button variant="secondary" className="w-full rounded-xl font-bold">
                      Details
                    </Button>
                  </Link>
                  <Link href={`/contact?lodging=${encodeURIComponent(l.name)}`} className="flex-1">
                    <Button className="w-full rounded-xl font-bold shadow-lg shadow-primary/20">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center max-w-2xl mx-auto">
        <BedDouble className="h-8 w-8 text-primary mx-auto mb-3" />
        <h2 className="text-xl font-bold">Usability testing support</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          “Find lodging options and book a room.” → You can browse the options above, click <b>Details</b>
          to view specific info, or use the <b>Book Now</b> button to jump to the simulated booking flow.
        </p>
      </div>
    </PageShell>
  );
}
