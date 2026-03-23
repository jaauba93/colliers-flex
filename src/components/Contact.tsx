import Link from "next/link";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-colliers-dark mb-4">
          Skontaktuj się z nami
        </h2>
        <p className="text-colliers-gray max-w-xl mx-auto mb-8 leading-relaxed">
          Chcesz porozmawiać o biurze serwisowanym? Zostaw kontakt lub wypełnij
          krótki brief — wrócimy z rekomendacją.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#brief"
            className="bg-colliers-navy text-white px-8 py-3.5 text-sm font-semibold hover:bg-colliers-blue"
          >
            Dobierz rozwiązanie
          </Link>
          <a
            href="mailto:jakub.bawol@icloud.com"
            className="border border-colliers-navy text-colliers-navy px-8 py-3.5 text-sm font-semibold hover:bg-colliers-navy hover:text-white"
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}
