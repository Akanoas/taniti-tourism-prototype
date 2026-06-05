import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { useLocation } from "wouter";

function useQueryParams() {
  const [location] = useLocation();
  return useMemo(() => {
    const q = location.includes("?") ? location.split("?")[1] : "";
    return new URLSearchParams(q);
  }, [location]);
}

export default function Contact() {
  const params = useQueryParams();
  const lodgingPrefill = params.get("lodging") ?? "";
  const activityPrefill = params.get("activity") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [interests, setInterests] = useState(activityPrefill ? activityPrefill : "");
  const [notes, setNotes] = useState(lodgingPrefill ? `Interested in: ${lodgingPrefill}` : "");

  const canSubmit = name.trim() && email.trim() && dates.trim();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Inquiry submitted (simulated)", {
      description:
        "Thanks! In a real site, this would send your request to the booking team and email a confirmation.",
    });
  }

  return (
    <PageShell>
      <h1 className="text-3xl font-extrabold tracking-tight">Contact / Booking</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        Submit an inquiry with your travel dates, party size, and interests. This form simulates
        submission for usability testing.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <Card className="rounded-3xl lg:col-span-7">
          <CardHeader>
            <CardTitle className="text-xl">Inquiry form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="h-10 rounded-xl"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-10 rounded-xl"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="dates">Dates</Label>
                <Input
                  id="dates"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="e.g., Aug 12–18"
                  className="h-10 rounded-xl"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="party">Party size</Label>
                <Input
                  id="party"
                  inputMode="numeric"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="h-10 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="interests">Interests</Label>
                <Input
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="Volcano tour, snorkeling, family activities…"
                  className="h-10 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional notes</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Lodging preference, transport needs, dietary needs…"
                  className="min-h-28 rounded-xl"
                />
              </div>

              <div className="pt-2">
                <Button className="w-full rounded-xl" disabled={!canSubmit} type="submit">
                  Submit inquiry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <aside className="lg:col-span-5">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Prefilled from your journey</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              If you click “Book Now” on a lodging page or “Request booking” on an activity, this form
              auto-fills a note so usability testers can verify the flow.
              {lodgingPrefill ? (
                <div className="mt-4 rounded-2xl border bg-secondary p-4 text-secondary-foreground/80">
                  Lodging selected: <span className="font-semibold">{lodgingPrefill}</span>
                </div>
              ) : null}
              {activityPrefill ? (
                <div className="mt-3 rounded-2xl border bg-secondary p-4 text-secondary-foreground/80">
                  Activity selected: <span className="font-semibold">{activityPrefill}</span>
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="mt-4 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Usability testing task</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              “Submit a contact/booking inquiry form.” → Fill Name, Email, Dates, and press Submit.
            </CardContent>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
