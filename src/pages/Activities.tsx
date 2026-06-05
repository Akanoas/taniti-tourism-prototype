import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { activities } from "@/lib/taniti-data";
import { ArrowRight, Compass, Flame, Info, Leaf, Music, ShoppingBag, Users } from "lucide-react";
import { Link } from "wouter";

const icons = {
  Nature: Leaf,
  Culture: Users,
  Adventure: Flame,
  Nightlife: Music,
  Family: Compass,
} as const;

export default function Activities() {
  return (
    <PageShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Activities & Attractions</h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            From rainforest hikes to volcanic ridges, Taniti offers adventure for everyone.
            Many activities center around <b>Merriton Landing</b> and <b>Yellow Leaf Bay</b>.
          </p>
        </div>
        <Link href="/activities/volcano-tour" className="inline-flex">
          <Button className="rounded-xl shadow-lg shadow-primary/20">
            Active Volcano Details
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-3xl border-primary/10 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <ShoppingBag className="h-5 w-5 text-primary" />
              Grocery Stores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Taniti has 2 supermarkets, 2 grocery stores, and one 24-hour convenience store for
            travel essentials.
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-primary/10 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Info className="h-5 w-5 text-primary" />
              Merriton Landing
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            A rapidly developing area on the north side of Yellow Leaf Bay, home to many island
            activities and easy walking paths.
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {activities.map((a) => {
          const Icon = icons[a.category] ?? Compass;
          return (
            <Card key={a.id} className="group relative overflow-hidden rounded-3xl transition-all hover:shadow-xl hover:shadow-primary/5">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{a.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2 rounded-full font-medium">
                      {a.category}
                    </Badge>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px]">Duration:</span>
                  <span className="rounded bg-muted px-2 py-0.5 text-xs">{a.duration}</span>
                </div>
                <div className="mt-3">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px]">Best for:</span>
                  <p className="mt-0.5">{a.bestFor}</p>
                </div>
                <div className="mt-6">
                  <Link href={`/activities/${a.id}`} className="inline-flex w-full">
                    <Button variant="outline" className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      View details
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-accent/20 bg-accent/5 p-6">
        <h2 className="text-lg font-bold text-accent-foreground">Usability testing task</h2>
        <p className="mt-1 text-sm text-accent-foreground/70 leading-relaxed">
          “Navigate to activities and view volcano tour info.” → Click the <b>“Active Volcano Details”</b>
          button at the top of the page or select the <b>Active Volcano Tours</b> card above.
        </p>
      </div>
    </PageShell>
  );
}
