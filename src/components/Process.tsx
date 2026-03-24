export default function Process() {
  return (
    <section id="wspolpraca" className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-center text-colliers-dark mb-14">
          Jak wygląda <strong>współpraca?</strong>
        </h2>

        {/* 2x2 flowchart */}
        <div className="max-w-3xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-colliers-navy mb-1 self-center">Krótki brief</span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-colliers-navy/30" />
                <div className="border border-colliers-navy/30 p-6 text-center bg-white w-[220px] shrink-0">
                  <p className="text-sm text-colliers-dark leading-relaxed">
                    Zbieramy najważniejsze informacje o zespole, modelu pracy,
                    lokalizacji i horyzoncie czasowym.
                  </p>
                </div>
                {/* Right arrow */}
                <div className="flex items-center shrink-0">
                  <div className="w-8 h-px bg-colliers-navy/40" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-colliers-navy/50" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-colliers-navy mb-1 self-center">Doprecyzowanie potrzeb</span>
              <div className="flex items-center w-full">
                <div className="border border-colliers-navy/30 p-6 text-center bg-white w-[220px] shrink-0 mx-auto">
                  <p className="text-sm text-colliers-dark leading-relaxed">
                    Weryfikujemy, czy lepszy będzie jeden model, czy kilka
                    scenariuszy do porównania.
                  </p>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>

          {/* Down arrow for step 2 */}
          <div className="flex justify-end pr-[110px] py-2">
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-colliers-navy/40" />
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-colliers-navy/50" />
            </div>
          </div>

          {/* Row 2 — reversed flow */}
          <div className="grid grid-cols-2 gap-0">
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-colliers-navy mb-1 self-center">Wsparcie w wyborze</span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-colliers-navy/30" />
                <div className="border border-colliers-navy/30 p-6 text-center bg-white w-[220px] shrink-0">
                  <p className="text-sm text-colliers-dark leading-relaxed">
                    Pomagamy przejść od krótkiej listy do decyzji i uzgodnienia
                    warunków.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-colliers-navy mb-1 self-center">Shortlista opcji</span>
              <div className="flex items-center w-full">
                {/* Left arrow */}
                <div className="flex items-center shrink-0">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-colliers-navy/50" />
                  <div className="w-8 h-px bg-colliers-navy/40" />
                </div>
                <div className="border border-colliers-navy/30 p-6 text-center bg-white w-[220px] shrink-0 mx-auto">
                  <p className="text-sm text-colliers-dark leading-relaxed">
                    Przygotowujemy rekomendowane rozwiązania i wskazujemy
                    różnice między nimi.
                  </p>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
