export default function Report() {
  return (
    <section className="relative bg-colliers-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-colliers-navy to-colliers-blue/80" />

      <div className="relative max-w-[1126px] mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-3">
              Raport
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Dowiedz się więcej z naszego raportu
            </h2>
            <p className="text-white/75 leading-relaxed">
              Zbieramy kluczowe informacje o rynku biur serwisowanych w Polsce —
              modele, koszty, trendy i praktyczne wskazówki dla firm szukających
              elastycznego biura.
            </p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="#"
              className="inline-block bg-white text-colliers-navy px-8 py-3.5 text-sm font-bold hover:bg-gray-100"
            >
              Flex Guide 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
