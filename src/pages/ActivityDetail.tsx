import PageShell from "@/components/PageShell";
import { activities } from "@/lib/taniti-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Compass, Flame, Leaf, Music, Ticket } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

import heroImg from "@/assets/photos/hero-beach.jpg";
import lagoonImg from "@/assets/photos/beach-lagoon.jpg";
import rainforestImg from "@/assets/photos/rainforest-trail.jpg";
import volcanoImg from "@/assets/photos/volcano.jpg";

const photoMap = {
  hero: heroImg,
  lagoon: lagoonImg,
  rainforest: rainforestImg,
  volcano: volcanoImg,
} as const;

const icons = {
  Nature: Leaf,
  Culture: Compass,
  Adventure: Flame,
  Nightlife: Music,
  Family: Compass,
} as const;

export default function ActivityDetail({ id }: { id: string }) {
  const item = activities.find((a) => a.id === id);

  if (!item) {
    return (
      <PageShell>
        <h1 className="text-2xl font-extrabold">Activity not found</h1>
        <div className="mt-4">
          <Link href="/activities" className="inline-flex">
            <Button variant="secondary" className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to activities
            </Button>
          </Link>
        </div>
      </PageShell>
    );
  }

  const Icon = icons[item.category] ?? Compass;

  return (
    <PageShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/activities" className="inline-flex">
            <Button variant="ghost" className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to activities
            </Button>
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{item.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className="rounded-full bg-primary text-primary-foreground">{item.category}</Badge>
            <Badge variant="secondary" className="rounded-full">
              {item.duration}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href={`/contact?activity=${encodeURIComponent(item.name)}`} className="inline-flex">
            <Button className="rounded-xl">Request booking</Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => toast.success("Added to itinerary", { description: item.name })}
          >
            <Ticket className="mr-2 h-4 w-4" aria-hidden="true" />
            Add to itinerary
          </Button>
        </div>
      </div>

      <Card className="mt-6 overflow-hidden rounded-3xl">
        <img
          src={photoMap[item.hero]}
          alt={`Scenic photo for ${item.name}`}
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            Details
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-4 text-sm text-muted-foreground">
            {item.details}
          </div>
          <div className="rounded-2xl border bg-card p-4 text-sm text-muted-foreground">
            <div className="font-bold text-foreground">Planning notes</div>
            <ul className="mt-2 list-inside list-disc">
              <li>Wear comfortable shoes and bring water.</li>
              <li>For reef trips, use reef-safe sunscreen.</li>
              <li>Ask about accessibility options when booking.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 rounded-3xl border bg-secondary p-5">
        <div className="text-sm font-bold">Next step in UX flow</div>
        <div className="mt-1 text-sm text-secondary-foreground/80">
          You’re on the Details step. Continue to Booking by requesting this activity.
        </div>
        <div className="mt-4">
          <Link href={`/contact?activity=${encodeURIComponent(item.name)}`} className="inline-flex">
            <Button variant="secondary" className="rounded-xl">
              Go to contact / booking
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
