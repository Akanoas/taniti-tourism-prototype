import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { restaurants } from "@/lib/taniti-data";
import { useMemo, useState } from "react";
import { MapPin, Search, UtensilsCrossed } from "lucide-react";
import diningImg from "@/assets/photos/beach-lagoon.jpg";

const cuisineFilters = ["All", "Local fish & rice", "American-style", "Pan-Asian"] as const;

export default function Dining() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<(typeof cuisineFilters)[number]>("All");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return restaurants
      .filter((r) => (filter === "All" ? true : r.cuisine === filter))
      .filter((r) =>
        query
          ? [r.name, r.location, r.signature, r.cuisine].some((s) =>
              s.toLowerCase().includes(query)
            )
          : true
      );
  }, [q, filter]);

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-extrabold tracking-tight">Dining</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Ten restaurants across the island: 5 local fish & rice, 3 American-style, and 2 Pan-Asian.
            Filter and open cards to review hours, cuisine type, and location.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search restaurants, locations, dishes…"
                className="h-10 rounded-xl pl-9"
                aria-label="Search dining"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {cuisineFilters.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-3 py-2 text-sm font-semibold transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    filter === c ? "bg-secondary" : "bg-card"
                  }`}
                  aria-pressed={filter === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {list.map((r) => (
              <Card key={r.id} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-3 text-lg">
                    <span>{r.name}</span>
                    <Badge className="rounded-full bg-primary text-primary-foreground">{r.cuisine}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-foreground">Signature:</span>
                    <span>{r.signature}</span>
                  </div>
                  <div className="mt-2">Hours: {r.hours}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                    Location: {r.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border bg-secondary p-5">
            <div className="text-sm font-bold">Usability testing task</div>
            <div className="mt-1 text-sm text-secondary-foreground/80">
              “Locate dining options and restaurant details.” → Use filters and open a card.
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <Card className="overflow-hidden rounded-3xl">
            <img
              src={diningImg}
              alt="A tropical lagoon scene used as a dining page photo"
              className="h-52 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg">Dining notes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              If you have dietary needs, include them on the Contact / Booking inquiry. Many kitchens
              can accommodate gluten-free or vegetarian requests with a heads up.
            </CardContent>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
