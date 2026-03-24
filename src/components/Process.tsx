import { ClipboardList, Search, List, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Krótki brief",
    description:
      "Zbieramy najważniejsze informacje o zespole, modelu pracy, lokalizacji i horyzoncie czasowym.",
  },
  {
    icon: Search,
    title: "Doprecyzowanie potrzeb",
    description:
      "Weryfikujemy, czy lepszy będzie jeden model, czy kilka scenariuszy do porównania.",
  },
  {
    icon: List,
    title: "Shortlista opcji",
    description:
      "Przygotowujemy rekomendowane rozwiązania i wskazujemy różnice między nimi.",
  },
  {
    icon: ThumbsUp,
    title: "Wsparcie w wyborze",
    description:
      "Pomagamy przejść od krótkiej listy do decyzji i uzgodnienia warunków.",
  },
];

export default function Process() {
  return (
    <section id="wspolpraca" className="bg-colliers-light py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-14">
          Jak wygląda{" "}
          <span className="text-colliers-navy">współpraca?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white p-6 text-center relative"
            >
              <div className="text-xs font-bold text-colliers-blue mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-full bg-colliers-navy/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5 text-colliers-navy" />
              </div>
              <h3 className="text-sm font-bold text-colliers-dark mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-colliers-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
