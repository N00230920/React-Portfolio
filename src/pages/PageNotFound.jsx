import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-2xl font-semibold">404 — Page not found</h2>
      <p className="mt-2 text-muted-foreground">
        Sorry, the page <span className="font-mono">{location.pathname}</span> was not found.
      </p>
    </div>
  );
}
