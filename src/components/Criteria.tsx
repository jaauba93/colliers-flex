const criteria = [
  "zakres usług i opłat dodatkowych",
  "prywatność i sąsiedztwo innych firm",
  "możliwość wzrostu lub redukcji stanowisk",
  "sale spotkań i dostępność przestrzeni wspólnych",
  "standard mebli, ergonomia, komfort pracy",
  "parkingi, dostępność komunikacyjna, adres",
  "branding i poziom personalizacji",
  "warunki kontraktowe i operacyjne",
];

export default function Criteria() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-colliers-dark mb-10">
          Dobra decyzja to coś więcej niż cena za stanowisko
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: text */}
          <div className="space-y-4 text-sm text-colliers-dark leading-relaxed">
            <p>
              Oferty biur serwisowanych warto porównywać like-for-like.
              Nominalna stawka to tylko punkt wyjścia.
            </p>
            <p>
              W praktyce znaczenie mają także: zakres usług w cenie,
              prywatność, standard i ergonomia przestrzeni, dostęp do sal
              spotkań, warunki ekspansji, polityka parkingowa, możliwości
              brandingu, rozwiązania IT i realny komfort pracy.
            </p>
            <p>
              Raport zwraca uwagę zarówno na korzyści flexu, jak i na obszary,
              które trzeba sprawdzić przed wyborem.
            </p>
          </div>

          {/* Right: list */}
          <div className="space-y-0">
            {criteria.map((c) => (
              <div
                key={c}
                className="py-3 border-b border-colliers-navy/20 text-sm text-colliers-dark"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
