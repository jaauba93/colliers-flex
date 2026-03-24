"use client";

import { useState } from "react";

export default function QuickContact({
  onBack,
}: {
  onBack: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    teamSize: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API endpoint
    console.log("Quick contact submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-colliers-navy/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-colliers-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-colliers-dark mb-2">Dziękujemy!</h3>
        <p className="text-colliers-gray">
          Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się wkrótce.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="text-sm text-colliers-blue mb-6 hover:underline"
      >
        &larr; Wróć do wyboru ścieżki
      </button>

      <h3 className="text-lg font-bold text-colliers-dark mb-2">
        Opisz krótko, czego szukasz
      </h3>
      <p className="text-sm text-colliers-gray mb-6">
        Skontaktujemy się i podpowiemy, jaki model biura warto rozważyć.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="Imię i nazwisko *"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Firma"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="email"
            required
            placeholder="E-mail *"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Miasto"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <input
            type="number"
            placeholder="Liczba osób"
            className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy"
            value={form.teamSize}
            onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
          />
        </div>

        <textarea
          rows={4}
          placeholder="Np. Warszawa, 12 osób, potrzebujemy własnej przestrzeni od Q3, zależy nam na krótszej umowie i 2 parkingach."
          className="w-full px-4 py-3 border border-colliers-border text-sm focus:outline-none focus:border-colliers-navy resize-none"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <label className="flex items-start gap-3 text-xs text-colliers-gray cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            className="mt-0.5 accent-colliers-navy"
          />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            udzielenia odpowiedzi na moje zapytanie oraz kontakt marketingowy
            ze strony Colliers. *
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-colliers-navy text-white py-3.5 text-sm font-semibold hover:bg-colliers-blue"
        >
          Wyślij brief
        </button>
      </form>
    </div>
  );
}
