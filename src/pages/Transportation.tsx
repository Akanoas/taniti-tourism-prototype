import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Anchor,
  Bike,
  Bus,
  Car,
  ChevronRight,
  Footprints,
  Info,
  Plane,
  Ship,
  CarTaxiFront,
} from "lucide-react";

const options = [
  {
    title: "Arrival: Air travel",
    icon: Plane,
    summary: "Most visitors arrive by air at our small but functional airport.",
    details: [
      "Accommodates small jets and propeller planes.",
      "Expansion in progress for larger international jets in the coming years.",
      "Located near local rental agencies for quick departures.",
    ],
  },
  {
    title: "Arrival: Cruise ships",
    icon: Ship,
    summary: "One ship per week docks at Yellow Leaf Bay for an overnight stay.",
    details: [
      "Docks in the safe, small harbor at Yellow Leaf Bay.",
      "Perfect for short-stay sightseeing and boat tours.",
    ],
  },
  {
    title: "Ground: Public Buses",
    icon: Bus,
    summary: "The City bus system is reliable and operates daily.",
    details: [
      "Runs from 5:00 a.m. to 11:00 p.m. every day.",
      "Primary service for Taniti City routes.",
    ],
  },
  {
    title: "Ground: Private Buses",
    icon: Anchor,
    summary: "Connecting you to the rest of the island beyond the city limits.",
    details: [
      "Essential for reaching the north coast or mountainous interior.",
      "Check schedules at the Town Center transit hub.",
    ],
  },
  {
    title: "Ground: Taxis",
    icon: CarTaxiFront,
    summary: "Available within Taniti City for direct point-to-point travel.",
    details: [
      "Best for late-night returns or quick trips from the harbor.",
      "Fixed or estimated rates; confirm with the driver.",
    ],
  },
  {
    title: "Self-Drive: Rental Cars",
    icon: Car,
    summary: "Explore at your own pace with a local rental vehicle.",
    details: [
      "Rental agency located conveniently near the airport.",
      "Ideal for visiting rainforest trailheads independently.",
    ],
  },
  {
    title: "Active: Bikes & Walking",
    icon: Bike,
    summary: "Taniti City is flat, easy to explore, and very walkable.",
    details: [
      "Bikes and helmets (required by law) available from several vendors.",
      "Merriton Landing area is specifically designed for pedestrian exploration.",
    ],
  },
];

export default function Transportation() {
  return (
    <PageShell>
      <h1 className="text-3xl font-extrabold tracking-tight">Transportation</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        Getting to Taniti and moving around the island is easy. From scenic harbor docks to walkable
        city paths, explore your transit options below.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <Card key={o.title} className="rounded-3xl transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {o.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{o.summary}</p>
                <ul className="mt-3 space-y-2">
                  {o.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                {o.title.includes("Air travel") ? (
                  <div className="mt-5 rounded-2xl border bg-muted/50 p-4">
                    <div className="flex items-center gap-2 font-bold text-foreground">
                      <Info className="h-4 w-4 text-primary" />
                      Airport to Hotel Task
                    </div>
                    <p className="mt-1">Use a taxi or pre-arranged rental from the airport terminal.</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-3 w-full rounded-xl"
                      onClick={() =>
                        toast.success("Shuttle info displayed", {
                          description: "Taxi stand: Exit A. Rental desk: Terminal B.",
                        })
                      }
                    >
                      Show airport transit map
                    </Button>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-6">
        <h2 className="text-lg font-bold">Usability task checklist</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          “Find transportation options from airport to hotel.” → You can use <b>Rental Cars</b>,
          <b> Taxis</b>, or the <b>Air travel</b> helper button above.
        </p>
      </div>
    </PageShell>
  );
}
