export default function Report() {
  return (
    <section className="relative bg-colliers-navy text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-colliers-navy/80" />

      <div className="relative max-w-[1126px] mx-auto px-6 py-16 md:py-20 text-center">
        {/* Decorative lines */}
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="flex-1 max-w-[180px] h-px bg-white/30" />
          <h2 className="text-2xl md:text-3xl font-light text-white">
            Dowiedz się więcej z naszego raportu
          </h2>
          <div className="flex-1 max-w-[180px] h-px bg-white/30" />
        </div>

        <div className="border border-white/20 max-w-2xl mx-auto py-12 px-8 mb-8">
          <a
            href="#"
            className="inline-block bg-white text-colliers-navy px-10 py-3.5 text-sm font-semibold hover:bg-gray-100"
            style={{ borderRadius: "50px" }}
          >
            Flex Guide 2026
          </a>
        </div>
      </div>
    </section>
  );
}
