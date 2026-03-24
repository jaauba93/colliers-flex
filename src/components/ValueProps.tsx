import { SlidersHorizontal, BarChart3, Handshake } from "lucide-react";

const props = [
  {
    icon: SlidersHorizontal,
    title: "Dopasowanie\nmodelu",
    subtitle: "Nie tylko \u201Eznalezienie biura\u201D, ale wyb\u00F3r w\u0142a\u015Bciwego formatu zaj\u0119cia",
  },
  {
    icon: BarChart3,
    title: "Porównanie\nlike-for-like",
    subtitle: "Analiza ofert poza samą stawką za stanowisko",
  },
  {
    icon: Handshake,
    title: "Wsparcie\ndecyzyjny",
    subtitle: "Od briefu po shortlistę i negocjacje",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-center text-colliers-dark mb-4">
          Nie każda firma potrzebuje tego samego biura
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed text-sm">
          Biuro flex nie jest jednym produktem. To kilka modeli zajęcia
          przestrzeni — od stanowisk w&nbsp;coworkingu po w pełni wydzielone,
          brandowane moduły. Dla jednych będzie to rozwiązanie przejściowe, dla
          innych docelowe. Kluczowe jest dobre dopasowanie: liczby osób, stylu
          pracy, oczekiwanej prywatności, horyzontu czasowego i lokalizacji.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop) => (
            <div key={prop.title} className="flex flex-col">
              {/* Title above the card */}
              <div className="flex items-center gap-3 mb-0 px-1">
                <div className="flex-1 h-px bg-colliers-navy/20" />
                <h3 className="text-sm font-bold text-colliers-navy text-center whitespace-pre-line leading-tight">
                  {prop.title}
                </h3>
                <div className="flex-1 h-px bg-colliers-navy/20" />
              </div>
              {/* Card */}
              <div className="border border-colliers-navy/20 p-8 flex flex-col items-center flex-1">
                <div className="flex-1 flex items-center justify-center py-6">
                  <prop.icon className="w-14 h-14 text-colliers-navy/80" strokeWidth={1} />
                </div>
                <p className="text-sm text-colliers-gray leading-relaxed text-center">
                  {prop.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
