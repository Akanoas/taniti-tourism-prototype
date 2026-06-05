import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BedDouble, Bus, Compass, Map, UtensilsCrossed } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@/assets/photos/hero-beach.jpg";

const quick = [
  { href: "/lodging", title: "Lodging", icon: BedDouble, desc: "Hostels to four-star comfort." },
  { href: "/dining", title: "Dining", icon: UtensilsCrossed, desc: "Local fish & rice + global bites." },
  { href: "/activities", title: "Activities", icon: Compass, desc: "Volcano tours, snorkeling, nightlife." },
  { href: "/transportation", title: "Transportation", icon: Bus, desc: "Airport, buses, taxis, rentals." },
  { href: "/travel-tips", title: "Travel Tips", icon: Map, desc: "Currency, safety, laws, health." },
];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-3xl border bg-card">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Aerial view of a tropical beach and turquoise lagoon"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 taniti-hero-overlay" />
          <div className="absolute inset-0 taniti-noise mix-blend-overlay opacity-60" />
        </div>

        <div className="relative grid gap-10 px-6 py-14 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-xs font-semibold tracking-wide text-foreground shadow-sm">
              Modern • Mobile-friendly • Clickable prototype
            </p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-sm md:text-6xl">
              Discover Taniti
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-white/90 md:text-lg">
              A tropical island with calm lagoons, rainforest trails, and a dramatic volcanic ridge.
              Plan your trip with clear navigation, simple booking flows, and activity details.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/lodging" className="inline-flex">
                <Button className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore lodging
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/activities/volcano-tour" className="inline-flex">
                <Button variant="secondary" className="rounded-xl">
                  View volcano tour info
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-background/65 p-4 text-sm text-foreground shadow-sm">
                <div className="font-bold">UX flow</div>
                <div className="mt-1 text-muted-foreground">Home → Explore → Details → Booking</div>
              </div>
              <div className="rounded-2xl bg-background/65 p-4 text-sm text-foreground shadow-sm">
                <div className="font-bold">Usability tasks</div>
                <div className="mt-1 text-muted-foreground">
                  Book lodging • Find dining • Volcano tour • Transport • Submit inquiry
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-4">
            <Card className="rounded-3xl bg-background/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Compass className="h-5 w-5 text-primary" aria-hidden="true" />
                  Quick links
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {quick.map((q) => {
                  const Icon = q.icon;
                  return (
                    <Link key={q.href} href={q.href} className="group">
                      <div className="rounded-2xl border bg-card p-4 transition group-hover:-translate-y-0.5 group-hover:shadow-md">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 font-bold">
                              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                              {q.title}
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">{q.desc}</div>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition group-hover:text-foreground" aria-hidden="true" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="mt-4 rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Map className="h-5 w-5 text-primary" aria-hidden="true" />
                  Trip snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Most visitors stay 4–7 nights. For a smooth arrival, book airport transport and your
                first excursion (like the volcano tour) ahead of time.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-extrabold tracking-tight">Start exploring</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Use the buttons to navigate through details and simulate booking. All links are wired for a
          fully clickable prototype.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Find lodging and book</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Browse options, open a lodging detail page, then click “Book Now.”
              <div className="mt-4">
                <Link href="/lodging" className="inline-flex">
                  <Button variant="outline" className="rounded-xl">
                    Go to lodging
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Locate dining details</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Filter by cuisine type and open restaurant cards.
              <div className="mt-4">
                <Link href="/dining" className="inline-flex">
                  <Button variant="outline" className="rounded-xl">
                    Go to dining
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Transportation planning</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Compare airport shuttles, buses, taxis, and rentals.
              <div className="mt-4">
                <Link href="/transportation" className="inline-flex">
                  <Button variant="outline" className="rounded-xl">
                    Go to transportation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
