export default function FlexMap() {
  return (
    <section className="relative bg-colliers-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-colliers-navy to-colliers-navy/80" />

      <div className="relative max-w-[1126px] mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Sprawdź dostępne projekty
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Przeglądaj biura serwisowane dostępne w największych miastach Polski.
        </p>
        <a
          href="https://flexmap.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-colliers-navy px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-gray-100"
        >
          FLEXMAP.PL
        </a>
      </div>
    </section>
  );
}
