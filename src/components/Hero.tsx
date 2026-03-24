import Link from "next/link";

export default function Hero() {
  return (
    <div>
      {/* Top banner — full width blue with photo */}
      <div className="relative bg-colliers-navy overflow-hidden h-[200px] md:h-[220px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-colliers-navy/75" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide text-center px-6">
            Biura serwisowane
          </h1>
        </div>
      </div>

      {/* Content area — white background, 3 columns */}
      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <div className="max-w-[1126px] mx-auto px-6">
          <div className="grid md:grid-cols-[2fr_2fr_1.5fr] gap-8 items-start">
            {/* Left: subtitle */}
            <div className="pt-2">
              <p className="text-2xl md:text-3xl font-light text-colliers-dark leading-snug">
                Biuro serwisowane,{" "}
                <span className="font-semibold">które pasuje do sposobu pracy Twojej firmy</span>
              </p>
            </div>

            {/* Center: description + buttons */}
            <div>
              <p className="text-sm leading-relaxed text-colliers-gray mb-6">
                Doradzamy w wyborze biur serwisowanych i rozwiązań flex — od
                hot-desków i prywatnych gabinetów po dedykowane moduły dla
                większych zespołów. Pomagamy porównać dostępne opcje, ograniczyć
                ryzyko i wybrać model, który ma sens operacyjnie i kosztowo.
              </p>

              <div className="flex flex-col gap-3 mb-5 items-start">
                <Link
                  href="#brief"
                  className="bg-colliers-navy text-white px-8 py-3 text-sm font-semibold text-center hover:bg-colliers-blue"
                  style={{ borderRadius: "50px", minWidth: "220px" }}
                >
                  Dobierz rozwiązanie
                </Link>
                <Link
                  href="#kontakt"
                  className="bg-colliers-navy text-white px-8 py-3 text-sm font-semibold text-center hover:bg-colliers-blue"
                  style={{ borderRadius: "50px", minWidth: "220px" }}
                >
                  Porozmawiaj z doradcą
                </Link>
              </div>

              <p className="text-xs text-colliers-gray italic leading-relaxed">
                Szybki brief zajmuje około{" "}
                <span className="font-bold not-italic text-colliers-dark">2 minut</span>
                . Możesz też od razu zostawić kontakt i wrócimy z rekomendacją.
              </p>
            </div>

            {/* Right: person photo */}
            <div className="hidden md:flex justify-center items-end h-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=faces"
                alt="Doradca Colliers"
                className="w-full max-w-[220px] object-cover object-top"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
