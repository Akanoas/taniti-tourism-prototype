import PageShell from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Banknote,
  Calendar,
  Clock,
  Globe,
  Hospital,
  Info,
  Plug,
  ShieldCheck,
} from "lucide-react";

const tips = [
  {
    title: "Currency",
    badge: "Payments",
    icon: Banknote,
    text: "Taniti uses U.S. dollars. Many businesses also accept Euros and Yen. Banks facilitate exchange, and major credit cards are widely accepted.",
  },
  {
    title: "Power outlets",
    badge: "Electric",
    icon: Plug,
    text: "Standard 120-volt outlets (same as the United States). Visitors from other regions may need an adapter.",
  },
  {
    title: "Drinking laws",
    badge: "Regulations",
    icon: Clock,
    text: "Alcohol service and sale are prohibited between midnight and 9:00 a.m. The drinking age is 18.",
  },
  {
    title: "Safety",
    badge: "Safety",
    icon: ShieldCheck,
    text: "Taniti is generally very safe with rare violent crime. As tourism grows, pickpocketing and petty crimes are more frequently reported.",
  },
  {
    title: "Medical",
    badge: "Health",
    icon: Hospital,
    text: "The island has one hospital and several clinics. The hospital employs many multilingual staff for international visitors.",
  },
  {
    title: "Language",
    badge: "Communication",
    icon: Globe,
    text: "Younger residents often speak fluent English. In rural areas and among older residents, little English is spoken.",
  },
  {
    title: "Holidays",
    badge: "Planning",
    icon: Calendar,
    text: "Taniti observes many national holidays. Attractions and restaurants often close on these days; please plan your dates carefully.",
  },
];

export default function TravelTips() {
  return (
    <PageShell>
      <h1 className="text-3xl font-extrabold tracking-tight">Travel Tips & FAQ</h1>
      <p className="mt-2 max-w-3xl text-muted-foreground">
        Essential information to help you prepare for your stay on Taniti—from currency and voltage
        to local laws and health resources.
      </p>

      <Alert className="mt-6 rounded-2xl border-accent/20 bg-accent/5">
        <Info className="h-4 w-4 text-accent" />
        <AlertTitle className="font-bold text-accent-foreground">Important: Petty Crime</AlertTitle>
        <AlertDescription className="text-accent-foreground/80">
          While violent crime is rare, pickpocketing is on the rise. Keep your valuables secure in
          crowded areas and use hotel safes when available.
        </AlertDescription>
      </Alert>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((t) => {
          const Icon = t.icon;
          return (
            <Card key={t.title} className="rounded-3xl transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3 text-lg">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {t.title}
                  </div>
                  <Badge variant="secondary" className="rounded-full font-medium">
                    {t.badge}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                {t.text}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageShell>
  );
}
