import Link from "next/link";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-colliers-dark mb-4">
          Skontaktuj się z nami
        </h2>
        <p className="text-colliers-gray max-w-xl mx-auto mb-10 leading-relaxed text-sm">
          Chcesz porozmawiać o biurze serwisowanym? Zostaw kontakt lub wypełnij
          krótki brief — wrócimy z rekomendacją.
        </p>

        {/* Advisor card */}
        <div className="inline-flex items-center gap-5 border border-colliers-border p-5 mb-10 text-left">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fit=crop&crop=faces"
            alt="Doradca"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-bold text-colliers-dark">Paweł Skalba</p>
            <p className="text-xs text-colliers-gray">Senior Partner | Director of Flex Office</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#brief"
            className="bg-colliers-navy text-white px-8 py-3.5 text-sm font-semibold hover:bg-colliers-blue"
            style={{ borderRadius: "50px" }}
          >
            Dobierz rozwiązanie
          </Link>
          <a
            href="mailto:jakub.bawol@icloud.com"
            className="border border-colliers-navy text-colliers-navy px-8 py-3.5 text-sm font-semibold hover:bg-colliers-navy hover:text-white"
            style={{ borderRadius: "50px" }}
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}
