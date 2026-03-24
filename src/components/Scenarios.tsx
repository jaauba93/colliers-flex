import {
  Rocket,
  Globe,
  Wrench,
  FolderKanban,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const scenarios = [
  {
    icon: Rocket,
    text: "Gdy firma dopiero rusza i nie chce zamrażać kapitału w fit-oucie oraz długiej umowie.",
  },
  {
    icon: Globe,
    text: "Gdy organizacja wchodzi do nowego miasta lub kraju i chce uruchomić operacje bez wielomiesięcznego procesu najmu.",
  },
  {
    icon: Wrench,
    text: "Gdy siedziba jest w remoncie, reorganizacji albo firma potrzebuje swing space na czas zmiany lokalizacji.",
  },
  {
    icon: FolderKanban,
    text: "Gdy trzeba szybko uruchomić miejsce pracy dla konkretnego projektu bez obciążania głównej siedziby.",
  },
  {
    icon: Users,
    text: "Gdy organizacja chce stworzyć atrakcyjne środowisko pracy i przyciągnąć ludzi z home office.",
  },
  {
    icon: TrendingUp,
    text: "Gdy liczebność zespołu może się zmieniać i potrzebna jest większa elastyczność niż w klasycznym najmie.",
  },
];

export default function Scenarios() {
  return (
    <section id="kiedy-flex" style={{ backgroundColor: "#EAF0FB" }} className="py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light text-center text-colliers-dark mb-4">
          Kiedy flex ma najwięcej sensu?
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed text-sm">
          Firmy rzadko wybierają flex przypadkowo. Najczęściej robią to wtedy,
          gdy potrzebują szybko uruchomić biuro, ograniczyć ryzyko albo
          dopasować skalę przestrzeni do zmieniającego się zespołu.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-colliers-navy/20 p-8 flex flex-col items-center text-center"
            >
              <s.icon className="w-12 h-12 text-colliers-navy/70 mb-5" strokeWidth={1} />
              <p className="text-sm text-colliers-dark leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#brief"
            className="inline-block bg-colliers-navy text-white px-8 py-3.5 text-sm font-semibold hover:bg-colliers-blue"
            style={{ borderRadius: "50px" }}
          >
            Sprawdź, jaki model pasuje do Twojej firmy
          </Link>
        </div>
      </div>
    </section>
  );
}
