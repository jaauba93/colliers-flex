import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-colliers-navy text-white overflow-hidden">
      {/* Background image placeholder with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-colliers-navy/90 to-colliers-navy/70" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-[1126px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/70 mb-4">
              Usługi &gt; Flex Office
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Biura serwisowane
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
              Biuro serwisowane, które pasuje do sposobu pracy Twojej firmy
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-white/85">
              Doradzamy w wyborze biur serwisowanych i rozwiązań flex — od
              hot-desków i prywatnych gabinetów po dedykowane moduły dla
              większych zespołów. Pomagamy porównać dostępne opcje, ograniczyć
              ryzyko i wybrać model, który ma sens operacyjnie i kosztowo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="#brief"
                className="bg-white text-colliers-navy px-6 py-3.5 text-sm font-semibold text-center hover:bg-gray-100"
              >
                Dobierz rozwiązanie
              </Link>
              <Link
                href="#kontakt"
                className="border border-white/40 text-white px-6 py-3.5 text-sm font-semibold text-center hover:bg-white/10"
              >
                Porozmawiaj z doradcą
              </Link>
            </div>

            <p className="text-sm text-white/60 mt-2">
              Szybki brief zajmuje około{" "}
              <span className="text-white/90 font-medium">2 minut</span>.
              Możesz też od razu zostawić kontakt i wrócimy z rekomendacją.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
