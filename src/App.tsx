import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Home from "@/pages/Home";
import Lodging from "@/pages/Lodging";
import LodgingDetail from "@/pages/LodgingDetail";
import Dining from "@/pages/Dining";
import Activities from "@/pages/Activities";
import ActivityDetail from "@/pages/ActivityDetail";
import Transportation from "@/pages/Transportation";
import TravelTips from "@/pages/TravelTips";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Persona from "@/pages/Persona";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/lodging" component={Lodging} />
        <Route path="/lodging/:id">{(params) => <LodgingDetail id={params.id} />}</Route>

        <Route path="/dining" component={Dining} />

        <Route path="/activities" component={Activities} />
        <Route path="/activities/:id">{(params) => <ActivityDetail id={params.id} />}</Route>

        <Route path="/transportation" component={Transportation} />
        <Route path="/travel-tips" component={TravelTips} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/persona" component={Persona} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
