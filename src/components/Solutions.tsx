import { Monitor, DoorOpen, Building2, Layers } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Monitor,
    tag: "HOT-DESK / COWORK",
    description:
      "Dla małych zespołów, pracy rotacyjnej i firm, które chcą szybko uruchomić środowisko pracy bez dużego zobowiązania.",
    best: "liczy się elastyczność, niski koszt wejścia i gotowość do startu od zaraz.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
  },
  {
    icon: DoorOpen,
    tag: "PRYWATNY GABINET",
    description:
      "Dla firm, które potrzebują własnej przestrzeni, ale nie chcą inwestować w pełny fit-out.",
    best: "ważna jest prywatność, przewidywalny koszt i możliwość skalowania.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
  {
    icon: Building2,
    tag: "DEDYKOWANY MODUŁ",
    description:
      "Dla większych zespołów i organizacji, które chcą większej kontroli nad aranżacją, standardem i wizerunkiem.",
    best: "potrzebna jest reprezentacyjność, wydzielenie i możliwość brandingu.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
  },
];

const mixed = {
  icon: Layers,
  tag: "MODEL MIESZANY",
  description:
    "Flex jako uzupełnienie najmu konwencjonalnego — np. biuro serwisowane dla części zespołu, satelitarne lokalizacje lub przestrzeń na czas przejściowy, podczas gdy główna siedziba działa w modelu tradycyjnym.",
  best: "firma ma stabilną siedzibę, ale potrzebuje elastyczności w wybranych lokalizacjach, dla konkretnych zespołów lub na określony czas.",
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
};

export default function Solutions() {
  return (
    <section id="rozwiazania" className="bg-colliers-light py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-4">
          Jakie rozwiązania wchodzą w grę?
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Rynek flex obejmuje kilka formatów zajęcia przestrzeni — od prostych
          stanowisk w coworkingu po wydzielone moduły z większym poziomem
          prywatności i personalizacji.
        </p>

        {/* Top 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {solutions.map((sol) => (
            <div
              key={sol.tag}
              className="bg-white overflow-hidden border border-colliers-border"
            >
              <div
                className="h-48 bg-colliers-navy/10"
                style={{
                  backgroundImage: `url('${sol.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <sol.icon className="w-5 h-5 text-colliers-navy" />
                  <span className="text-xs font-bold uppercase tracking-wider text-colliers-navy">
                    {sol.tag}
                  </span>
                </div>
                <p className="text-sm text-colliers-gray leading-relaxed mb-3">
                  {sol.description}
                </p>
                <p className="text-sm text-colliers-dark">
                  <span className="font-semibold">Najlepiej działa, gdy</span>:{" "}
                  {sol.best}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mixed model - full width */}
        <div className="bg-white overflow-hidden border border-colliers-border md:flex">
          <div
            className="h-48 md:h-auto md:w-80 bg-colliers-navy/10 shrink-0"
            style={{
              backgroundImage: `url('${mixed.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <mixed.icon className="w-5 h-5 text-colliers-navy" />
              <span className="text-xs font-bold uppercase tracking-wider text-colliers-navy">
                {mixed.tag}
              </span>
            </div>
            <p className="text-sm text-colliers-gray leading-relaxed mb-3">
              {mixed.description}
            </p>
            <p className="text-sm text-colliers-dark">
              <span className="font-semibold">Najlepiej działa, gdy</span>:{" "}
              {mixed.best}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="#brief"
            className="inline-block bg-colliers-navy text-white px-8 py-3.5 text-sm font-semibold hover:bg-colliers-blue"
            style={{ borderRadius: "50px" }}
          >
            Poproś o shortlistę opcji
          </Link>
        </div>
      </div>
    </section>
  );
}
