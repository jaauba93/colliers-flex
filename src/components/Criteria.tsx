import {
  ClipboardList,
  Eye,
  ArrowUpDown,
  DoorOpen,
  Armchair,
  Car,
  Palette,
  FileText,
} from "lucide-react";
import Link from "next/link";

const criteria = [
  { icon: ClipboardList, label: "zakres usług i opłat dodatkowych" },
  { icon: Eye, label: "prywatność i sąsiedztwo innych firm" },
  { icon: ArrowUpDown, label: "możliwość wzrostu lub redukcji stanowisk" },
  { icon: DoorOpen, label: "sale spotkań i dostępność przestrzeni wspólnych" },
  { icon: Armchair, label: "standard mebli, ergonomia, komfort pracy" },
  { icon: Car, label: "parkingi, dostępność komunikacyjna, adres" },
  { icon: Palette, label: "branding i poziom personalizacji" },
  { icon: FileText, label: "warunki kontraktowe i operacyjne" },
];

export default function Criteria() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-4">
          Dobra decyzja to coś więcej niż cena za stanowisko
        </h2>
        <p className="text-colliers-gray text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Oferty biur serwisowanych warto porównywać like-for-like. Nominalna
          stawka to tylko punkt wyjścia. W praktyce znaczenie mają także:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {criteria.map((c) => (
            <div
              key={c.label}
              className="bg-colliers-light rounded-lg p-5 flex flex-col items-center text-center gap-3"
            >
              <c.icon className="w-6 h-6 text-colliers-navy" />
              <span className="text-xs text-colliers-dark leading-relaxed">
                {c.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-colliers-gray text-center max-w-2xl mx-auto leading-relaxed">
          Raport zwraca uwagę zarówno na korzyści flexu, jak i na obszary,
          które trzeba sprawdzić przed wyborem.
        </p>
      </div>
    </section>
  );
}
