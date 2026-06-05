export default function SiteFooter() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold tracking-tight">Taniti Tourism</div>
            <p className="mt-2 text-sm text-muted-foreground">
              A student-friendly prototype that helps visitors explore lodging, dining, activities, and
              travel planning.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-bold">Quick links</div>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Home → Explore → Details → Booking</li>
              <li>Use “Book Now” buttons to simulate booking</li>
              <li>Forms show a confirmation toast</li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-bold">Accessibility notes</div>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>High contrast color tokens</li>
              <li>Keyboard focus rings</li>
              <li>Alt text on imagery</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Taniti Tourism Prototype</div>
          <div>Made for usability testing • Not an official tourism site</div>
        </div>
      </div>
    </footer>
  );
}
