import { Check } from "lucide-react";

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
    <section id="porownanie" className="bg-colliers-light py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-4">
          Flex <span className="text-colliers-gray font-normal">czy</span>{" "}
          tradycyjne biuro? To zależy od celu, nie od mody
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Flex nie jest automatycznie lepszy od najmu konwencjonalnego. Jest
          lepszy w określonych sytuacjach: gdy potrzebujesz szybko wejść do
          biura, ograniczyć CAPEX, skrócić zobowiązanie albo zostawić sobie
          przestrzeń do skalowania.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Flex */}
          <div className="bg-white p-8 border-2 border-colliers-navy">
            <h3 className="text-lg font-bold text-colliers-navy mb-6">
              Flex wygrywa, gdy:
            </h3>
            <ul className="space-y-3">
              {flexReasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-colliers-navy shrink-0 mt-0.5" />
                  <span className="text-sm text-colliers-dark">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traditional */}
          <div className="bg-white p-8 border border-colliers-border">
            <h3 className="text-lg font-bold text-colliers-dark mb-6">
              Najem tradycyjny warto porównać, gdy:
            </h3>
            <ul className="space-y-3">
              {leaseReasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-colliers-gray shrink-0 mt-0.5" />
                  <span className="text-sm text-colliers-dark">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
