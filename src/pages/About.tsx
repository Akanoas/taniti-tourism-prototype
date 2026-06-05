import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  History,
  Leaf,
  Users,
} from "lucide-react";
import volcanoImg from "@/assets/photos/volcano.jpg";

export default function About() {
  return (
    <PageShell>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold tracking-tight">About the Island</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Taniti is a small, tropical island in the Pacific spanning less than 500 square miles.
            Home to about 20,000 residents, the island blends indigenous heritage with a growing
            tourism economy, transitioning from its roots in fishing and agriculture.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-none bg-card/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Compass className="h-5 w-5 text-primary" />
                  Geography
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Varied terrain including white sandy and rocky beaches, a safe harbor at Yellow Leaf
                Bay, lush rainforests, and a mountainous interior with an active volcano.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none bg-card/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <History className="h-5 w-5 text-primary" />
                  Economy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Historically dominated by fishing and agriculture. Recent growth in tourism has brought
                modern amenities like Merriton Landing while preserving indigenous customs.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none bg-card/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Users className="h-5 w-5 text-primary" />
                  Culture
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                A community of 20,000 residents. Indigenous heritage is reflected in the native
                architecture of Taniti City and the vibrant local festivals observed year-round.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none bg-card/50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Leaf className="h-5 w-5 text-primary" />
                  Nature
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Tropical rainforests and pristine reefs. Most visitors come to explore the mountainous
                trails or enjoy the calm lagoons that encircle Yellow Leaf Bay.
              </CardContent>
            </Card>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <Card className="overflow-hidden rounded-3xl border-none shadow-lg">
              <img
                src={volcanoImg}
                alt="Taniti's active volcano landscape"
                className="h-72 w-full object-cover"
              />
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-lg font-bold">Merriton Landing</CardTitle>
              </CardHeader>
              <CardContent className="bg-primary/95 pt-4 text-sm text-primary-foreground/90">
                A rapidly developing area on the north side of Yellow Leaf Bay. It’s the island’s hub
                for new entertainment, flat walking paths, and island exploration.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-primary/20 bg-primary/5">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-extrabold text-primary">20k</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Indigenous Residents
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
