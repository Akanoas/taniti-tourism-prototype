import { Link, useLocation } from "wouter";
import {
  BedDouble,
  Bus,
  Compass,
  Info,
  Map,
  Phone,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home", icon: Waves },
  { href: "/lodging", label: "Lodging", icon: BedDouble },
  { href: "/dining", label: "Dining", icon: UtensilsCrossed },
  { href: "/activities", label: "Activities", icon: Compass },
  { href: "/transportation", label: "Transportation", icon: Bus },
  { href: "/travel-tips", label: "Travel Tips", icon: Map },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact / Booking", icon: Phone },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-xl bg-background px-4 py-2 text-sm font-bold shadow"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition group-hover:shadow-md">
              <Waves className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">Taniti</div>
              <div className="text-xs text-muted-foreground">Tourism Guide</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = isActive(location, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition",
                    "hover:bg-secondary hover:text-secondary-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    active && "bg-secondary text-secondary-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/persona" className="hidden sm:inline-flex">
              <Button variant="outline" className="rounded-xl">
                Suggested Itinerary
              </Button>
            </Link>
            <Link href="/contact" className="inline-flex">
              <Button className="rounded-xl">Start a Booking</Button>
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className="-mx-2 flex gap-2 overflow-x-auto pb-3 md:hidden" aria-label="Primary mobile">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = isActive(location, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition",
                  "hover:bg-secondary hover:text-secondary-foreground",
                  active && "bg-secondary text-secondary-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
