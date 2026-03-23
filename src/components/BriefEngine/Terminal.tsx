"use client";

import { useEffect, useState } from "react";
import {
  Monitor,
  DoorOpen,
  Building2,
  Layers,
  Scale,
  HelpCircle,
} from "lucide-react";
import type { Recommendation, RecommendationType } from "./scoring";

const ICONS: Record<RecommendationType, React.ComponentType<{ className?: string }>> = {
  hotdesk: Monitor,
  private: DoorOpen,
  dedicated: Building2,
  mixed: Layers,
  compare: Scale,
  unknown: HelpCircle,
};

interface TerminalProps {
  recommendations: Recommendation[];
  hasEnoughData: boolean;
  answeredSteps: number;
}

export default function Terminal({
  recommendations,
  hasEnoughData,
  answeredSteps,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const topRec = recommendations[0];
  const secondRec = recommendations[1];
  const showTwo =
    topRec &&
    secondRec &&
    topRec.confidence - secondRec.confidence < 10 &&
    hasEnoughData;

  // Determine what text to show
  const targetText = !hasEnoughData
    ? answeredSteps === 0
      ? "OCZEKUJĘ NA DANE...\n\nOdpowiedz na pierwsze pytanie,\naby zobaczyć rekomendację."
      : "ANALIZUJĘ...\n\nPotrzebuję jeszcze kilku\ninformacji, aby wskazać\nnajlepszy model."
    : showTwo
      ? `REKOMENDACJA:\n\n> ${topRec.label}\n  (${topRec.confidence}% dopasowania)\n\n> ${secondRec.label}\n  (${secondRec.confidence}% dopasowania)\n\nOdpowiedz na kolejne pytania,\naby zawęzić wynik.`
      : `REKOMENDACJA:\n\n> ${topRec!.label}\n  (${topRec!.confidence}% dopasowania)\n\n${topRec!.description}`;

  // Typewriter effect
  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < targetText.length) {
        setDisplayedText(targetText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [targetText]);

  const currentType: RecommendationType =
    hasEnoughData && topRec ? topRec.type : "unknown";
  const Icon = ICONS[currentType];

  return (
    <div className="crt-terminal p-6 md:p-8 min-h-[320px] flex flex-col">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-900/40">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <span className="crt-text-dim text-xs ml-2 uppercase tracking-widest">
          brief_engine v1.0
        </span>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-green-500/70" />
      </div>

      {/* Terminal output */}
      <div className="flex-1">
        <pre className="crt-text text-sm leading-relaxed whitespace-pre-wrap font-mono">
          {displayedText}
          {isTyping && <span className="crt-cursor" />}
        </pre>
      </div>

      {/* Confidence bars */}
      {hasEnoughData && recommendations.length > 0 && (
        <div className="mt-4 pt-3 border-t border-green-900/40 space-y-1.5">
          {recommendations.slice(0, 3).map((rec) => {
            const RecIcon = ICONS[rec.type];
            return (
              <div key={rec.type} className="flex items-center gap-2">
                <RecIcon className="w-3.5 h-3.5 text-green-500/50 shrink-0" />
                <div className="flex-1 h-1.5 bg-green-900/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500/60 rounded-full"
                    style={{ width: `${rec.confidence}%` }}
                  />
                </div>
                <span className="crt-text-dim text-[10px] w-8 text-right">
                  {rec.confidence}%
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
