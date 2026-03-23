import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-colliers-border">
      <div className="max-w-[1126px] mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Colliers Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Colliers"
          >
            <rect x="0" y="0" width="120" height="28" rx="2" fill="var(--colliers-navy)" />
            <text
              x="60"
              y="19"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              Colliers
            </text>
            <rect x="0" y="28" width="120" height="3" fill="#E31837" />
            <rect x="0" y="31" width="120" height="3" fill="#FFB81C" />
            <rect x="0" y="34" width="120" height="3" fill="#00A94F" />
            <rect x="0" y="37" width="120" height="3" fill="#0057B8" />
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-colliers-dark">
          <Link href="#rozwiazania" className="hover:text-colliers-blue">
            Rozwiązania
          </Link>
          <Link href="#kiedy-flex" className="hover:text-colliers-blue">
            Kiedy flex?
          </Link>
          <Link href="#porownanie" className="hover:text-colliers-blue">
            Porównanie
          </Link>
          <Link href="#wspolpraca" className="hover:text-colliers-blue">
            Współpraca
          </Link>
          <Link
            href="#brief"
            className="bg-colliers-navy text-white px-5 py-2.5 text-sm font-medium hover:bg-colliers-blue"
          >
            Dobierz rozwiązanie
          </Link>
        </nav>
      </div>
    </header>
  );
}
