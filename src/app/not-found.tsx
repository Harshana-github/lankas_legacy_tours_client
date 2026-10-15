import { ButtonLink, WhatsAppButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 text-5xl md:text-6xl">This path leads nowhere</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        The page you are looking for has moved or no longer exists. Let us guide you back.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/tours">Explore tours</ButtonLink>
        <WhatsAppButton variant="outline" />
      </div>
    </section>
  );
}
