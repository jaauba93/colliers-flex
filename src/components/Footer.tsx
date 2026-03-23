export default function Footer() {
  return (
    <footer className="bg-colliers-navy text-white/70 py-10">
      <div className="max-w-[1126px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2026 Colliers International. Demo podstrony usługowej.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
            <a href="#" className="hover:text-white">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
