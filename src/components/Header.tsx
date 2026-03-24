import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-colliers-border">
      <div className="max-w-[1126px] mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Colliers Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/colliers-logo.svg"
            alt="Colliers"
            width={140}
            height={40}
            priority
          />
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
