"use client";

import { useState } from "react";
import { ClipboardList, MessageSquare, ArrowRight, ArrowLeft, Monitor, DoorOpen, Building2, Scale } from "lucide-react";
import Terminal from "./Terminal";
import QuickContact from "./QuickContact";
import {
  calculateScores,
  hasEnoughData as checkEnoughData,
  getAnsweredSteps,
  type BriefAnswers,
  type Recommendation,
} from "./scoring";

type View = "entry" | "configurator" | "quick" | "result";

const CITIES = [
  "Warszawa",
  "Kraków",
  "Wrocław",
  "Trójmiasto",
  "Katowice",
  "Łódź",
  "Poznań",
];

const WARSAW_AREAS = [
  "Centrum / CBD",
  "Centrum zachodnie / Rondo Daszyńskiego",
  "Mokotów",
  "Żoliborz / Północ",
  "Praga",
  "Inna / do rozważenia",
];

const EXTRAS_OPTIONS = [
  { id: "meeting_rooms", label: "Sale spotkań na wyłączność" },
  { id: "branding", label: "Branding / oznaczenia firmy" },
  { id: "reception", label: "Własna recepcja lub strefa wejścia" },
  { id: "scaling", label: "Możliwość szybkiego zwiększenia liczby stanowisk" },
  { id: "it_privacy", label: "Ponadstandardowe rozwiązania IT / privacy" },
  { id: "representative", label: "Reprezentacyjny standard" },
];

const RESULT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  hotdesk: Monitor,
  private: DoorOpen,
  dedicated: Building2,
  compare: Scale,
};

export default function BriefEngine() {
  const [view, setView] = useState<View>("entry");
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<BriefAnswers>({});
  const [contactForm, setContactForm] = useState({
    email: "",
    phone: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const recommendations = calculateScores(answers);
  const enoughData = checkEnoughData(answers);
  const answeredSteps = getAnsweredSteps(answers);
  const totalSteps = 5;

  const update = (partial: Partial<BriefAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...partial }));
  };

  const handleSendBrief = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Brief submitted:", { answers, contactForm, recommendation: recommendations[0] });
    setSubmitted(true);
  };

  // ----- ENTRY SCREEN -----
  if (view === "entry") {
    return (
      <section id="brief" className="bg-colliers-light py-16 md:py-20">
        <div className="max-w-[1126px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-colliers-dark mb-2">
            Jak chcesz zacząć?
          </h2>
          <p className="text-colliers-gray text-center max-w-xl mx-auto mb-10">
            Wybierz ścieżkę, która najlepiej pasuje do etapu Twoich poszukiwań.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => setView("configurator")}
              className="bg-colliers-navy text-white p-8  text-left hover:bg-colliers-blue group cursor-pointer"
            >
              <ClipboardList className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="text-lg font-bold mb-2">Dobierz rozwiązanie</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Odpowiedz na kilka pytań i zobacz, jaki model biura może
                najlepiej pasować do Twojej firmy.
              </p>
              <ArrowRight className="w-5 h-5 mt-4 opacity-60 group-hover:opacity-100" />
            </button>

            <button
              onClick={() => setView("quick")}
              className="bg-white text-colliers-dark p-8  text-left border border-colliers-border hover:border-colliers-navy group cursor-pointer"
            >
              <MessageSquare className="w-8 h-8 mb-4 text-colliers-navy opacity-80" />
              <h3 className="text-lg font-bold mb-2">Szybki kontakt</h3>
              <p className="text-sm text-colliers-gray leading-relaxed">
                Zostaw kontakt i krótki opis potrzeb. Wrócimy z propozycją
                dalszych kroków.
              </p>
              <ArrowRight className="w-5 h-5 mt-4 text-colliers-navy opacity-60 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ----- QUICK CONTACT -----
  if (view === "quick") {
    return (
      <section id="brief" className="bg-colliers-light py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <QuickContact onBack={() => setView("entry")} />
        </div>
      </section>
    );
  }

  // ----- RESULT SCREEN -----
  if (view === "result") {
    const top = recommendations[0];
    const TopIcon = top ? RESULT_ICONS[top.type] || Monitor : Monitor;

    if (submitted) {
      return (
        <section id="brief" className="bg-colliers-light py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-colliers-navy/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-colliers-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-colliers-dark mb-2">Dziękujemy!</h3>
            <p className="text-colliers-gray">
              Twój brief został wysłany. Doradca skontaktuje się z Tobą wkrótce
              z rekomendacją dopasowaną do Twoich potrzeb.
            </p>
          </div>
        </section>
      );
    }

    return (
      <section id="brief" className="bg-colliers-light py-16 md:py-20">
        <div className="max-w-[1126px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Result card */}
            <div>
              <button
                onClick={() => { setView("configurator"); setStep(totalSteps); }}
                className="text-sm text-colliers-blue mb-6 hover:underline cursor-pointer"
              >
                &larr; Wróć do briefu
              </button>

              {top && (
                <div className="bg-white  p-8 border border-colliers-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-colliers-navy/10 flex items-center justify-center">
                      <TopIcon className="w-6 h-6 text-colliers-navy" />
                    </div>
                    <div>
                      <p className="text-xs text-colliers-gray uppercase tracking-wider">
                        Najbardziej pasuje
                      </p>
                      <h3 className="text-lg font-bold text-colliers-dark">
                        {top.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-colliers-gray leading-relaxed mb-4">
                    {top.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {top.advantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-colliers-dark">
                        <span className="text-colliers-navy mt-1">+</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact form */}
              <form onSubmit={handleSendBrief} className="mt-6 bg-white  p-8 border border-colliers-border">
                <h4 className="text-base font-bold text-colliers-dark mb-4">
                  Wyślij brief do doradcy
                </h4>
                <div className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    className="w-full px-4 py-3 border border-colliers-border rounded text-sm focus:outline-none focus:border-colliers-navy"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Telefon (opcjonalnie)"
                    className="w-full px-4 py-3 border border-colliers-border rounded text-sm focus:outline-none focus:border-colliers-navy"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                  />
                  <label className="flex items-start gap-3 text-xs text-colliers-gray cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={contactForm.consent}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          consent: e.target.checked,
                        })
                      }
                      className="mt-0.5 accent-colliers-navy"
                    />
                    <span>
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                      udzielenia odpowiedzi na moje zapytanie oraz kontakt
                      marketingowy ze strony Colliers. *
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full bg-colliers-navy text-white py-3.5 text-sm font-semibold hover:bg-colliers-blue cursor-pointer"
                  >
                    Wyślij brief do doradcy
                  </button>
                </div>
              </form>
            </div>

            {/* Terminal */}
            <div className="md:sticky md:top-24 self-start">
              <Terminal
                recommendations={recommendations}
                hasEnoughData={enoughData}
                answeredSteps={answeredSteps}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ----- CONFIGURATOR -----
  return (
    <section id="brief" className="bg-colliers-light py-16 md:py-20">
      <div className="max-w-[1126px] mx-auto px-6">
        <button
          onClick={() => setView("entry")}
          className="text-sm text-colliers-blue mb-6 hover:underline cursor-pointer"
        >
          &larr; Wróć do wyboru ścieżki
        </button>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form area - 3 columns */}
          <div className="md:col-span-3">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <button
                    onClick={() => setStep(i + 1)}
                    className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center cursor-pointer ${
                      i + 1 === step
                        ? "bg-colliers-navy text-white"
                        : i + 1 < step
                          ? "bg-colliers-navy/20 text-colliers-navy"
                          : "bg-colliers-border text-colliers-gray"
                    }`}
                  >
                    {i + 1}
                  </button>
                  {i < totalSteps - 1 && (
                    <div
                      className={`w-8 h-0.5 ${
                        i + 1 < step ? "bg-colliers-navy/30" : "bg-colliers-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white  p-8 border border-colliers-border min-h-[400px]">
              {/* Step 1: Team */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-colliers-dark mb-6">
                    Zespół
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-1">
                        Ile osób będzie korzystać z biura?
                      </label>
                      <p className="text-xs text-colliers-gray mb-3">
                        Uwzględnij wszystkie osoby z dostępem — także pracujące rotacyjnie.
                      </p>
                      <input
                        type="number"
                        min={1}
                        placeholder="Np. 15"
                        className="w-full max-w-xs px-4 py-3 border border-colliers-border rounded text-sm focus:outline-none focus:border-colliers-navy"
                        value={answers.teamSize ?? ""}
                        onChange={(e) =>
                          update({
                            teamSize: e.target.value ? Number(e.target.value) : undefined,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-1">
                        Ile stanowisk potrzebujesz do stałej, codziennej pracy?
                      </label>
                      <p className="text-xs text-colliers-gray mb-3">
                        Jeśli zespół pracuje hybrydowo, liczba biurek może być niższa
                        niż liczba osób z dostępem.
                      </p>
                      <input
                        type="number"
                        min={1}
                        placeholder="Np. 10"
                        className="w-full max-w-xs px-4 py-3 border border-colliers-border rounded text-sm focus:outline-none focus:border-colliers-navy"
                        value={answers.desksNeeded ?? ""}
                        onChange={(e) =>
                          update({
                            desksNeeded: e.target.value
                              ? Number(e.target.value)
                              : undefined,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Work Model */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-colliers-dark mb-6">
                    Model pracy
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-3">
                        Jak pracuje Twój zespół?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {(
                          [
                            ["stationary", "Głównie stacjonarnie"],
                            ["hybrid", "Hybrydowo"],
                            ["rotational", "Rotacyjnie / projektowo"],
                            ["undecided", "Jeszcze to ustalamy"],
                          ] as const
                        ).map(([value, label]) => (
                          <button
                            key={value}
                            onClick={() => update({ workModel: value })}
                            className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                              answers.workModel === value
                                ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                                : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-3">
                        Jak ważna jest prywatność?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {(
                          [
                            ["low", "Niska — otwarte środowisko pracy jest OK"],
                            [
                              "medium",
                              "Średnia — chcemy własną przestrzeń, ale bez pełnej separacji",
                            ],
                            [
                              "high",
                              "Wysoka — prowadzimy poufne rozmowy / potrzebujemy wydzielenia",
                            ],
                          ] as const
                        ).map(([value, label]) => (
                          <button
                            key={value}
                            onClick={() => update({ privacy: value })}
                            className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                              answers.privacy === value
                                ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                                : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Time Horizon */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-colliers-dark mb-6">
                    Horyzont czasowy
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-colliers-dark mb-1">
                      Na jak długo szukasz rozwiązania?
                    </label>
                    <p className="text-xs text-colliers-gray mb-4">
                      Krótszy horyzont zwykle wzmacnia przewagę rozwiązań flex.
                      Dłuższy może oznaczać, że warto porównać kilka modeli.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {(
                        [
                          ["temporary", "Bardzo krótko / tymczasowo"],
                          ["months", "Kilka miesięcy"],
                          ["year", "Około 12 miesięcy"],
                          ["1-3years", "12–36 miesięcy"],
                          ["3plus", "Powyżej 3 lat"],
                        ] as const
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          onClick={() => update({ timeHorizon: value })}
                          className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                            answers.timeHorizon === value
                              ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                              : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div>
                  <h3 className="text-lg font-bold text-colliers-dark mb-6">
                    Lokalizacja
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-3">
                        W jakim mieście szukasz biura?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CITIES.map((city) => (
                          <button
                            key={city}
                            onClick={() =>
                              update({
                                city,
                                warsawArea:
                                  city !== "Warszawa"
                                    ? undefined
                                    : answers.warsawArea,
                              })
                            }
                            className={`px-4 py-2 border rounded-full text-sm cursor-pointer ${
                              answers.city === city
                                ? "border-colliers-navy bg-colliers-navy text-white"
                                : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                        <button
                          onClick={() => update({ city: "inne" })}
                          className={`px-4 py-2 border rounded-full text-sm cursor-pointer ${
                            answers.city === "inne"
                              ? "border-colliers-navy bg-colliers-navy text-white"
                              : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                          }`}
                        >
                          Inne
                        </button>
                      </div>
                    </div>

                    {answers.city === "Warszawa" && (
                      <div>
                        <label className="block text-sm font-medium text-colliers-dark mb-3">
                          Która część miasta jest preferowana?
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {WARSAW_AREAS.map((area) => (
                            <button
                              key={area}
                              onClick={() => update({ warsawArea: area })}
                              className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                                answers.warsawArea === area
                                  ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                                  : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                              }`}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-3">
                        Co jest ważniejsze?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {(
                          [
                            ["center", "Ścisłe centrum"],
                            ["access", "Wygodny dojazd"],
                            ["cost", "Koszt"],
                            ["prestige", "Prestiż adresu"],
                          ] as const
                        ).map(([value, label]) => (
                          <button
                            key={value}
                            onClick={() => update({ locationPriority: value })}
                            className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                              answers.locationPriority === value
                                ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                                : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Additional */}
              {step === 5 && (
                <div>
                  <h3 className="text-lg font-bold text-colliers-dark mb-6">
                    Dodatkowe wymagania
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-1">
                        Ile miejsc parkingowych jest minimalnie potrzebnych?
                      </label>
                      <input
                        type="number"
                        min={0}
                        placeholder="Np. 3"
                        className="w-full max-w-xs px-4 py-3 border border-colliers-border rounded text-sm focus:outline-none focus:border-colliers-navy"
                        value={answers.parking ?? ""}
                        onChange={(e) =>
                          update({
                            parking: e.target.value
                              ? Number(e.target.value)
                              : undefined,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-colliers-dark mb-3">
                        Czy potrzebujesz któregoś z poniższych elementów?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {EXTRAS_OPTIONS.map((opt) => {
                          const selected =
                            answers.extras?.includes(opt.id) ?? false;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => {
                                const current = answers.extras ?? [];
                                update({
                                  extras: selected
                                    ? current.filter((e) => e !== opt.id)
                                    : [...current, opt.id],
                                });
                              }}
                              className={`px-4 py-3 border rounded text-sm text-left cursor-pointer ${
                                selected
                                  ? "border-colliers-navy bg-colliers-navy/5 text-colliers-navy font-medium"
                                  : "border-colliers-border text-colliers-dark hover:border-colliers-navy/30"
                              }`}
                            >
                              {selected ? "✓ " : ""}
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-colliers-border">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded cursor-pointer ${
                    step === 1
                      ? "text-colliers-gray/40 cursor-not-allowed"
                      : "text-colliers-navy hover:bg-colliers-navy/5"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> Wstecz
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                    className="flex items-center gap-2 bg-colliers-navy text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-colliers-blue cursor-pointer"
                  >
                    Dalej <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setView("result")}
                    className="flex items-center gap-2 bg-colliers-navy text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-colliers-blue cursor-pointer"
                  >
                    Zobacz wynik <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Terminal - 2 columns, sticky */}
          <div className="md:col-span-2 md:sticky md:top-24 self-start">
            <Terminal
              recommendations={recommendations}
              hasEnoughData={enoughData}
              answeredSteps={answeredSteps}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
