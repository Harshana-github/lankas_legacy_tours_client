/** Calm placeholder shown instantly while a tour page loads. */
export default function TourLoading() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading tour"
      className="container-page grid animate-pulse items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
    >
      <div className="space-y-5">
        <div className="h-4 w-40 rounded-full bg-sand" />
        <div className="h-14 w-4/5 rounded-2xl bg-sand" />
        <div className="h-14 w-3/5 rounded-2xl bg-sand" />
        <div className="h-5 w-full rounded-full bg-sand" />
        <div className="h-5 w-2/3 rounded-full bg-sand" />
      </div>
      <div className="aspect-4/3 rounded-4xl bg-sand sm:aspect-4/5" />
    </section>
  );
}
