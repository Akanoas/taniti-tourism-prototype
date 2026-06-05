import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { activities, lodging } from "@/lib/taniti-data";
import { ArrowRight, Calendar, Compass, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Persona() {
  const familyLodging = lodging.find((l) => l.kind === "Private Condo") ?? lodging[0];
  const volcano = activities.find((a) => a.id === "volcano-tour") ?? activities[0];
  const snorkel = activities.find((a) => a.id === "snorkeling") ?? activities[0];
  const familyFun = activities.find((a) => a.id === "family-fun") ?? activities[0];

  return (
    <PageShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Persona Page: Family Traveler</h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Tailored for a family of 4 visiting for 5 days—mixing calm water activities, short adventures,
            and easy evenings.
          </p>
        </div>
        <Link href={`/contact?lodging=${encodeURIComponent(familyLodging.name)}&activity=${encodeURIComponent("Family itinerary")}`} className="inline-flex">
          <Button className="rounded-xl">
            Start this plan
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <Card className="rounded-3xl lg:col-span-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
              Recommended lodging
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-foreground">{familyLodging.name}</span>
              <Badge className="rounded-full bg-primary text-primary-foreground">{familyLodging.priceRange}</Badge>
            </div>
            <ul className="mt-3 list-inside list-disc">
              {familyLodging.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href={`/lodging/${familyLodging.id}`} className="inline-flex">
                <Button variant="secondary" className="rounded-xl">
                  View lodging details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl lg:col-span-7">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Compass className="h-5 w-5 text-primary" aria-hidden="true" />
              5-day itinerary
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              {
                day: "Day 1",
                icon: Calendar,
                title: "Arrival + beach sunset",
                details: "Arrive, check in, easy dinner, and a short sunset walk.",
              },
              {
                day: "Day 2",
                icon: Sparkles,
                title: snorkel.name,
                details: "Morning reef tour, afternoon rest, early night.",
                href: `/activities/${snorkel.id}`,
              },
              {
                day: "Day 3",
                icon: Sparkles,
                title: volcano.name,
                details: "Half-day guided volcano tour, then harbor desserts.",
                href: `/activities/${volcano.id}`,
              },
              {
                day: "Day 4",
                icon: Sparkles,
                title: familyFun.name,
                details: "Arcade + bowling (great rainy-day backup).",
                href: `/activities/${familyFun.id}`,
              },
              {
                day: "Day 5",
                icon: Calendar,
                title: "Souvenirs + departure",
                details: "Market browsing and easy transport to the airport.",
              },
            ].map((d) => {
              const Icon = d.icon;
              const content = (
                <div className="rounded-2xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        {d.day}
                      </div>
                      <div className="mt-1 text-base font-extrabold tracking-tight">{d.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{d.details}</div>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                </div>
              );

              return d.href ? (
                <Link key={d.day} href={d.href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={d.day}>{content}</div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 rounded-3xl border bg-secondary p-5">
        <div className="text-sm font-bold">Why this persona page exists</div>
        <div className="mt-1 text-sm text-secondary-foreground/80">
          It helps usability testers verify that the site supports different visitor goals (family-friendly
          planning) while maintaining the same navigation and booking flow.
        </div>
      </div>
    </PageShell>
  );
}
