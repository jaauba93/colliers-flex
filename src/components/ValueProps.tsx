import { SlidersHorizontal, BarChart3, Handshake } from "lucide-react";

const props = [
  {
    icon: SlidersHorizontal,
    title: "Dopasowanie\nmodelu",
    subtitle: "Nie tylko \u201Eznalezienie biura\u201D, ale wybór właściwego formatu zajęcia",
  },
  {
    icon: BarChart3,
    title: "Porównanie\nlike-for-like",
    subtitle: "Analiza ofert poza samą stawką za stanowisko",
  },
  {
    icon: Handshake,
    title: "Wsparcie\ndecyzyjne",
    subtitle: "Od briefu po shortlistę i negocjacje",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-4">
          Nie każda firma potrzebuje tego samego biura
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Biuro flex nie jest jednym produktem. To kilka modeli zajęcia
          przestrzeni — od stanowisk w&nbsp;coworkingu po w pełni wydzielone,
          brandowane moduły. Dla jednych będzie to rozwiązanie przejściowe, dla
          innych docelowe. Kluczowe jest dobre dopasowanie: liczby osób, stylu
          pracy, oczekiwanej prywatności, horyzontu czasowego i lokalizacji.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="bg-colliers-light rounded-lg p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-colliers-navy/10 flex items-center justify-center mx-auto mb-5">
                <prop.icon className="w-6 h-6 text-colliers-navy" />
              </div>
              <h3 className="text-lg font-bold text-colliers-dark mb-3 whitespace-pre-line">
                {prop.title}
              </h3>
              <p className="text-sm text-colliers-gray leading-relaxed">
                {prop.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
