"use client";

import { useEffect, useState } from "react";
import {
  Monitor,
  DoorOpen,
  Building2,
  Scale,
  HelpCircle,
} from "lucide-react";
import type { Recommendation, RecommendationType } from "./scoring";

const ICONS: Record<RecommendationType, React.ComponentType<{ className?: string }>> = {
  hotdesk: Monitor,
  private: DoorOpen,
  dedicated: Building2,
  compare: Scale,
  unknown: HelpCircle,
};

const TYPE_LABELS: Record<RecommendationType, string> = {
  hotdesk: "Hot desk / Cowork",
  private: "Prywatny gabinet",
  dedicated: "Dedykowany moduł",
  compare: "Rozważ tradycyjny najem",
  unknown: "",
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
    topRec.confidence - secondRec.confidence < 15 &&
    hasEnoughData;

  const targetText = !hasEnoughData
    ? answeredSteps === 0
      ? "Odpowiedz na pierwsze pytanie, aby zobaczyć rekomendację."
      : "Potrzebuję jeszcze kilku informacji, aby wskazać najlepszy model."
    : showTwo
      ? `${topRec.label}\n${topRec.confidence}% dopasowania\n\n${secondRec.label}\n${secondRec.confidence}% dopasowania\n\nOdpowiedz na kolejne pytania, aby zawęzić wynik.`
      : `${topRec!.label}\n${topRec!.confidence}% dopasowania\n\n${topRec!.description}`;

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
    }, 18);
    return () => clearInterval(interval);
  }, [targetText]);

  const currentType: RecommendationType =
    hasEnoughData && topRec ? topRec.type : "unknown";
  const Icon = ICONS[currentType];

  return (
    <div className="brief-terminal p-6 md:p-8 min-h-[320px] flex flex-col">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
          Brief Engine
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className={`w-1.5 h-1.5 rounded-full ${hasEnoughData ? 'bg-colliers-blue' : 'bg-white/20'}`} />
        </div>
      </div>

      {/* Icon */}
      <div className="relative z-10 flex justify-center mb-5">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          hasEnoughData ? 'bg-white/10' : 'bg-white/5'
        }`}>
          <Icon className={`w-8 h-8 ${hasEnoughData ? 'text-white' : 'text-white/30'}`} />
        </div>
      </div>

      {/* Status label */}
      {hasEnoughData && topRec && (
        <div className="relative z-10 text-center mb-1">
          <span className="text-[10px] uppercase tracking-[0.15em] text-colliers-blue font-semibold">
            Rekomendacja
          </span>
        </div>
      )}

      {/* Terminal output */}
      <div className="relative z-10 flex-1 text-center">
        <p className="terminal-text text-sm leading-relaxed whitespace-pre-wrap">
          {displayedText}
          {isTyping && <span className="terminal-cursor" />}
        </p>
      </div>

      {/* Confidence bars */}
      {hasEnoughData && recommendations.length > 0 && (
        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 space-y-2">
          {recommendations.slice(0, 4).map((rec) => {
            const RecIcon = ICONS[rec.type];
            return (
              <div key={rec.type} className="flex items-center gap-3">
                <RecIcon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                <span className="text-[10px] text-white/40 w-28 truncate">
                  {TYPE_LABELS[rec.type]}
                </span>
                <div className="flex-1 h-1 bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-colliers-blue"
                    style={{ width: `${rec.confidence}%` }}
                  />
                </div>
                <span className="text-[10px] text-white/50 w-7 text-right font-medium">
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
