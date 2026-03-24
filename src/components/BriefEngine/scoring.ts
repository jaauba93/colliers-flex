// Types for Brief Engine answers
export interface BriefAnswers {
  // Step 1 - Team
  teamSize?: number;
  desksNeeded?: number;
  // Step 2 - Work model
  workModel?: "stationary" | "hybrid" | "rotational" | "undecided";
  privacy?: "low" | "medium" | "high";
  // Step 3 - Time horizon
  timeHorizon?: "temporary" | "months" | "year" | "1-3years" | "3plus";
  // Step 4 - Location
  city?: string;
  warsawArea?: string;
  locationPriority?: "center" | "access" | "cost" | "prestige";
  // Step 5 - Additional
  parking?: number;
  extras?: string[];
}

export type RecommendationType =
  | "hotdesk"
  | "private"
  | "dedicated"
  | "compare"
  | "unknown";

export interface Recommendation {
  type: RecommendationType;
  label: string;
  confidence: number; // 0-100
  description: string;
  advantages: string[];
}

const RECOMMENDATIONS: Record<
  Exclude<RecommendationType, "unknown">,
  Omit<Recommendation, "confidence">
> = {
  hotdesk: {
    type: "hotdesk",
    label: "Hot desk / Cowork",
    description:
      "To rozwiązanie sprawdza się, gdy liczy się szybki start, niski próg wejścia i maksymalna swoboda.",
    advantages: [
      "najniższy koszt wejścia",
      "krótki okres zobowiązania",
      "gotowość do pracy od zaraz",
    ],
  },
  private: {
    type: "private",
    label: "Prywatny gabinet",
    description:
      "Dobry kompromis między prywatnością a elastycznością. Własna przestrzeń i przewidywalny koszt.",
    advantages: [
      "własna, wydzielona przestrzeń",
      "możliwość skalowania stanowisk",
      "ograniczony CAPEX",
    ],
  },
  dedicated: {
    type: "dedicated",
    label: "Dedykowany moduł",
    description:
      "Dla firm, które chcą połączyć elastyczność z kontrolą nad środowiskiem pracy.",
    advantages: [
      "pełniejsze wydzielenie",
      "większy wpływ na aranżację i branding",
      "przewidywalny model kosztowy",
    ],
  },
  compare: {
    type: "compare",
    label: "Rozważ tradycyjny najem",
    description:
      "Flex nadal może mieć sens, ale przy Twoich założeniach warto zestawić go z tradycyjnym najmem.",
    advantages: [
      "uczciwe podejście doradcze",
      "porównanie kilku ścieżek decyzji",
      "większa przejrzystość kosztowa",
    ],
  },
};

/**
 * Calculate scores for each recommendation type based on current answers.
 * Returns sorted recommendations with confidence scores.
 *
 * Scoring priorities:
 * 1. desksNeeded (highest weight) — with hard rules for >25 and >50
 * 2. privacy + timeHorizon (medium-high weight)
 * 3. workModel (low weight)
 * 4. teamSize (lowest weight — mostly means access cards)
 */
export function calculateScores(answers: BriefAnswers): Recommendation[] {
  const scores: Record<Exclude<RecommendationType, "unknown">, number> = {
    hotdesk: 0,
    private: 0,
    dedicated: 0,
    compare: 0,
  };

  // Track hard constraints
  let hotdeskExcluded = false;
  let forceCompare = false;
  let forceDedicated = false;

  let totalFactors = 0;

  // --- Desks needed (HIGH weight) ---
  if (answers.desksNeeded !== undefined) {
    totalFactors++;
    if (answers.desksNeeded <= 3) {
      scores.hotdesk += 5;
      scores.private += 2;
    } else if (answers.desksNeeded <= 10) {
      scores.hotdesk += 2;
      scores.private += 5;
    } else if (answers.desksNeeded <= 25) {
      scores.private += 4;
      scores.dedicated += 3;
    } else if (answers.desksNeeded <= 50) {
      // >25: always recommend dedicated as one option
      scores.dedicated += 5;
      scores.compare += 2;
      forceDedicated = true;
    } else {
      // >50: always recommend compare as one option
      scores.dedicated += 3;
      scores.compare += 5;
      forceCompare = true;
      forceDedicated = true;
    }
  }

  // --- Team size (LOW weight — mostly access cards) ---
  if (answers.teamSize !== undefined) {
    totalFactors++;
    if (answers.teamSize <= 5) {
      scores.hotdesk += 1;
      scores.private += 1;
    } else if (answers.teamSize <= 20) {
      scores.private += 1;
      scores.dedicated += 1;
    } else {
      scores.dedicated += 1;
      scores.compare += 1;
    }
  }

  // --- Privacy (MEDIUM-HIGH weight) ---
  if (answers.privacy) {
    totalFactors++;
    switch (answers.privacy) {
      case "low":
        scores.hotdesk += 3;
        break;
      case "medium":
        scores.private += 4;
        scores.dedicated += 2;
        hotdeskExcluded = true;
        break;
      case "high":
        scores.dedicated += 4;
        scores.compare += 2;
        hotdeskExcluded = true;
        break;
    }
  }

  // --- Time horizon (MEDIUM-HIGH weight) ---
  if (answers.timeHorizon) {
    totalFactors++;
    switch (answers.timeHorizon) {
      case "temporary":
        scores.hotdesk += 4;
        scores.private += 1;
        break;
      case "months":
        scores.hotdesk += 2;
        scores.private += 3;
        break;
      case "year":
        scores.private += 4;
        scores.dedicated += 2;
        break;
      case "1-3years":
        scores.dedicated += 4;
        scores.compare += 1;
        break;
      case "3plus":
        scores.dedicated += 2;
        scores.compare += 4;
        // >3 years + >50 desks = strong compare signal
        if (answers.desksNeeded !== undefined && answers.desksNeeded > 50) {
          scores.compare += 3;
          forceCompare = true;
        }
        break;
    }
  }

  // --- Work model (LOW weight) ---
  if (answers.workModel) {
    totalFactors++;
    switch (answers.workModel) {
      case "stationary":
        scores.private += 1;
        scores.dedicated += 1;
        break;
      case "hybrid":
        scores.private += 1;
        scores.hotdesk += 1;
        break;
      case "rotational":
        scores.hotdesk += 2;
        break;
      case "undecided":
        scores.hotdesk += 1;
        scores.private += 1;
        break;
    }
  }

  // --- Location priority (LOW weight) ---
  if (answers.locationPriority) {
    totalFactors++;
    switch (answers.locationPriority) {
      case "center":
        scores.private += 1;
        scores.dedicated += 1;
        break;
      case "access":
        scores.private += 1;
        break;
      case "cost":
        scores.hotdesk += 2;
        break;
      case "prestige":
        scores.dedicated += 2;
        scores.compare += 1;
        break;
    }
  }

  // --- Extras (LOW-MEDIUM weight) ---
  if (answers.extras && answers.extras.length > 0) {
    totalFactors++;
    const extrasScoring: Record<string, Partial<typeof scores>> = {
      meeting_rooms: { private: 1, dedicated: 2 },
      branding: { dedicated: 3, compare: 1 },
      reception: { dedicated: 3, compare: 1 },
      scaling: { private: 2, dedicated: 1 },
      it_privacy: { dedicated: 2, compare: 1 },
      representative: { dedicated: 3, compare: 1 },
    };
    for (const extra of answers.extras) {
      const s = extrasScoring[extra];
      if (s) {
        for (const [key, val] of Object.entries(s)) {
          scores[key as keyof typeof scores] += val;
        }
      }
    }
  }

  // --- Parking (LOW weight) ---
  if (answers.parking !== undefined && answers.parking > 0) {
    totalFactors++;
    if (answers.parking >= 5) {
      scores.dedicated += 1;
      scores.compare += 2;
    } else {
      scores.private += 1;
      scores.dedicated += 1;
    }
  }

  // If no factors provided yet, return empty
  if (totalFactors === 0) {
    return [];
  }

  // Apply hard constraints
  if (hotdeskExcluded) {
    scores.hotdesk = 0;
  }

  // Normalize scores to confidence (0-100)
  const maxScore = Math.max(...Object.values(scores), 1);
  const results: Recommendation[] = Object.entries(scores)
    .map(([type, score]) => ({
      ...RECOMMENDATIONS[type as Exclude<RecommendationType, "unknown">],
      confidence: Math.round((score / maxScore) * 100),
    }))
    .sort((a, b) => b.confidence - a.confidence);

  // Apply forced recommendations: ensure they appear in top 2
  if (forceCompare) {
    const compareIdx = results.findIndex((r) => r.type === "compare");
    if (compareIdx > 1) {
      const compare = results.splice(compareIdx, 1)[0];
      compare.confidence = Math.max(compare.confidence, results[1].confidence);
      results.splice(1, 0, compare);
    }
  }
  if (forceDedicated) {
    const dedIdx = results.findIndex((r) => r.type === "dedicated");
    if (dedIdx > 1) {
      const ded = results.splice(dedIdx, 1)[0];
      ded.confidence = Math.max(ded.confidence, results[1].confidence);
      results.splice(1, 0, ded);
    }
  }

  return results;
}

/**
 * Returns true when enough data to show a recommendation
 */
export function hasEnoughData(answers: BriefAnswers): boolean {
  let factors = 0;
  if (answers.desksNeeded !== undefined) factors++;
  if (answers.teamSize !== undefined) factors++;
  if (answers.workModel) factors++;
  if (answers.privacy) factors++;
  if (answers.timeHorizon) factors++;
  return factors >= 2;
}

/**
 * Count how many steps have been answered
 */
export function getAnsweredSteps(answers: BriefAnswers): number {
  let count = 0;
  if (answers.teamSize !== undefined || answers.desksNeeded !== undefined) count++;
  if (answers.workModel || answers.privacy) count++;
  if (answers.timeHorizon) count++;
  if (answers.city) count++;
  if (answers.extras && answers.extras.length > 0) count++;
  return count;
}
