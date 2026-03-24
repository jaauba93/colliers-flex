const flexReasons = [
  "liczy się czas wejścia",
  "potrzeby zespołu mogą się zmieniać",
  "chcesz uniknąć fit-outu",
  "ważny jest przewidywalny miesięczny koszt",
  "szukasz rozwiązania przejściowego lub hybrydowego",
];

const leaseReasons = [
  "zespół jest duży i stabilny",
  "planujesz długi horyzont zajęcia",
  "potrzebujesz pełnej kontroli nad aranżacją",
  "branding i dedykowany layout są kluczowe",
  "akceptujesz dłuższy proces wejścia",
];

export default function Comparison() {
  return (
    <section id="porownanie" className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-center text-colliers-dark mb-4">
          <span className="font-bold text-colliers-navy">Flex</span>{" "}
          czy{" "}
          <span className="font-bold">tradycyjne biuro</span>
          ? To zależy od celu, nie od mody
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed text-sm">
          Flex nie jest automatycznie lepszy od najmu konwencjonalnego. Jest
          lepszy w określonych sytuacjach: gdy potrzebujesz szybko wejść do
          biura, ograniczyć CAPEX, skrócić zobowiązanie albo zostawić sobie
          przestrzeń do skalowania. Z kolei tradycyjny najem częściej wygrywa
          wtedy, gdy zespół jest duży, stabilny i planuje długoterminowe zajęcie
          w modelu wymagającym pełnej kontroli nad powierzchnią.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Flex */}
          <div className="bg-white shadow-md overflow-hidden">
            <div className="h-2 bg-colliers-navy" />
            <div className="p-8">
              <h3 className="text-base font-light text-colliers-dark mb-6 text-center">
                Flex wygrywa, gdy:
              </h3>
              <ul className="space-y-3">
                {flexReasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-colliers-dark">
                    <span className="text-colliers-navy mt-0.5">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Traditional */}
          <div className="bg-white shadow-md overflow-hidden">
            <div className="h-2 bg-colliers-navy" />
            <div className="p-8">
              <h3 className="text-base font-light text-colliers-dark mb-6 text-center">
                Najem tradycyjny warto porównać, gdy:
              </h3>
              <ul className="space-y-3">
                {leaseReasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-colliers-dark">
                    <span className="text-colliers-navy mt-0.5">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
