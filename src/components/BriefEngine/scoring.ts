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
  | "mixed"
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
    label: "HOT DESK / COWORK",
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
    label: "PRYWATNY GABINET",
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
    label: "DEDYKOWANY MODUŁ",
    description:
      "Dla firm, które chcą połączyć elastyczność z kontrolą nad środowiskiem pracy.",
    advantages: [
      "pełniejsze wydzielenie",
      "większy wpływ na aranżację i branding",
      "przewidywalny model kosztowy",
    ],
  },
  mixed: {
    type: "mixed",
    label: "MODEL MIESZANY",
    description:
      "Twój zespół prawdopodobnie nie potrzebuje jednego formatu dla wszystkich.",
    advantages: [
      "lepsze dopasowanie do realnego obłożenia",
      "ograniczenie niewykorzystanych stanowisk",
      "większa elastyczność operacyjna",
    ],
  },
  compare: {
    type: "compare",
    label: "PORÓWNAJ Z NAJMEM",
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
 */
export function calculateScores(answers: BriefAnswers): Recommendation[] {
  const scores: Record<Exclude<RecommendationType, "unknown">, number> = {
    hotdesk: 0,
    private: 0,
    dedicated: 0,
    mixed: 0,
    compare: 0,
  };

  let totalFactors = 0;

  // --- Team size ---
  if (answers.teamSize !== undefined) {
    totalFactors++;
    if (answers.teamSize <= 5) {
      scores.hotdesk += 3;
      scores.private += 2;
    } else if (answers.teamSize <= 20) {
      scores.private += 3;
      scores.dedicated += 2;
      scores.mixed += 2;
    } else if (answers.teamSize <= 50) {
      scores.dedicated += 3;
      scores.mixed += 2;
      scores.compare += 1;
    } else {
      scores.dedicated += 2;
      scores.compare += 3;
      scores.mixed += 1;
    }
  }

  // --- Desk ratio (seats vs people) ---
  if (answers.teamSize !== undefined && answers.desksNeeded !== undefined && answers.teamSize > 0) {
    totalFactors++;
    const ratio = answers.desksNeeded / answers.teamSize;
    if (ratio < 0.5) {
      scores.hotdesk += 3;
      scores.mixed += 2;
    } else if (ratio < 0.8) {
      scores.mixed += 3;
      scores.private += 1;
    } else {
      scores.private += 2;
      scores.dedicated += 2;
      scores.compare += 1;
    }
  }

  // --- Work model ---
  if (answers.workModel) {
    totalFactors++;
    switch (answers.workModel) {
      case "stationary":
        scores.private += 2;
        scores.dedicated += 2;
        scores.compare += 2;
        break;
      case "hybrid":
        scores.mixed += 3;
        scores.private += 1;
        break;
      case "rotational":
        scores.hotdesk += 3;
        scores.mixed += 2;
        break;
      case "undecided":
        scores.hotdesk += 2;
        scores.private += 1;
        scores.mixed += 1;
        break;
    }
  }

  // --- Privacy ---
  if (answers.privacy) {
    totalFactors++;
    switch (answers.privacy) {
      case "low":
        scores.hotdesk += 3;
        break;
      case "medium":
        scores.private += 3;
        scores.mixed += 1;
        break;
      case "high":
        scores.dedicated += 3;
        scores.compare += 2;
        break;
    }
  }

  // --- Time horizon ---
  if (answers.timeHorizon) {
    totalFactors++;
    switch (answers.timeHorizon) {
      case "temporary":
        scores.hotdesk += 3;
        break;
      case "months":
        scores.hotdesk += 2;
        scores.private += 2;
        break;
      case "year":
        scores.private += 3;
        scores.dedicated += 1;
        break;
      case "1-3years":
        scores.dedicated += 3;
        scores.mixed += 1;
        break;
      case "3plus":
        scores.dedicated += 2;
        scores.compare += 3;
        break;
    }
  }

  // --- Location priority ---
  if (answers.locationPriority) {
    totalFactors++;
    switch (answers.locationPriority) {
      case "center":
        scores.private += 1;
        scores.dedicated += 2;
        break;
      case "access":
        scores.private += 2;
        scores.mixed += 1;
        break;
      case "cost":
        scores.hotdesk += 2;
        scores.private += 1;
        break;
      case "prestige":
        scores.dedicated += 3;
        scores.compare += 1;
        break;
    }
  }

  // --- Extras ---
  if (answers.extras && answers.extras.length > 0) {
    totalFactors++;
    const extrasScoring: Record<string, Partial<typeof scores>> = {
      meeting_rooms: { private: 1, dedicated: 2, mixed: 1 },
      branding: { dedicated: 3, compare: 1 },
      reception: { dedicated: 3, compare: 1 },
      scaling: { mixed: 3, private: 1 },
      it_privacy: { dedicated: 2, compare: 2 },
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

  // --- Parking ---
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

  // If no factors provided yet, return unknown
  if (totalFactors === 0) {
    return [];
  }

  // Normalize scores to confidence (0-100)
  const maxPossibleScore = totalFactors * 3; // max 3 points per factor
  const results: Recommendation[] = Object.entries(scores)
    .map(([type, score]) => ({
      ...RECOMMENDATIONS[type as Exclude<RecommendationType, "unknown">],
      confidence: Math.round((score / maxPossibleScore) * 100),
    }))
    .sort((a, b) => b.confidence - a.confidence);

  return results;
}

/**
 * Returns the minimum number of answered factors for a recommendation to be shown
 */
export function hasEnoughData(answers: BriefAnswers): boolean {
  let factors = 0;
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
  if (answers.teamSize !== undefined) count++;
  if (answers.workModel) count++;
  if (answers.timeHorizon) count++;
  if (answers.city) count++;
  if (answers.extras && answers.extras.length > 0) count++;
  return count;
}
