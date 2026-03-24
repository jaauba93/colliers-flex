import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-colliers-navy text-white overflow-hidden">
      <div className="max-w-[1126px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[520px]">
          {/* Left column — text */}
          <div className="py-16 md:py-24 pr-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
              Usługi &gt; Flex Office
            </p>
            <h1 className="text-4xl md:text-[44px] font-bold leading-[1.15] mb-6">
              Biura serwisowane
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/85 mb-6">
              Biuro serwisowane, które pasuje do sposobu pracy Twojej firmy
            </p>
            <p className="text-sm leading-relaxed text-white/65 mb-8 max-w-md">
              Doradzamy w wyborze biur serwisowanych i rozwiązań flex — od
              hot-desków i prywatnych gabinetów po dedykowane moduły dla
              większych zespołów. Pomagamy porównać dostępne opcje, ograniczyć
              ryzyko i wybrać model, który ma sens operacyjnie i kosztowo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Link
                href="#brief"
                className="bg-white text-colliers-navy px-7 py-3.5 text-sm font-semibold text-center hover:bg-gray-100"
              >
                Dobierz rozwiązanie
              </Link>
              <Link
                href="#kontakt"
                className="border border-white/30 text-white px-7 py-3.5 text-sm font-semibold text-center hover:bg-white/10"
              >
                Porozmawiaj z doradcą
              </Link>
            </div>

            <p className="text-xs text-white/45">
              Szybki brief zajmuje około{" "}
              <span className="text-white/70 font-medium">2 minut</span>.
              Możesz też od razu zostawić kontakt i wrócimy z rekomendacją.
            </p>
          </div>

          {/* Right column — photo */}
          <div className="hidden md:block relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gradient blend into navy on the left edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-colliers-navy via-transparent to-transparent w-1/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
