import { displayWeight } from './utils';

export type Mode = 'Chains' | 'Eccentric' | 'Drop sets' | 'Smart Flex' | 'Burnout';
export type Cell = '✓' | '—' | 'peak' | 'opt';

export interface ExampleMovement {
  name: string;
  sets: number;
  reps: string;
  perCableLb: number;
  isTwoSided?: boolean;
  isBilateral?: boolean;
}

export interface Program {
  id: string;
  label: string;
  tagline: string;
  summary: string;
  example: {
    title: string;
    movements: ExampleMovement[];
  };
  science: string[];
  modes: Record<string, Record<Mode, Cell>>;
}

export const PROGRAMS: Program[] = [
  {
    id: 'hypertrophy',
    label: 'Hypertrophy',
    tagline: 'MEV → MAV → MRV — volume in landmarks',
    summary:
      'Build muscle the way the literature says muscle is built. Volume waves through MEV → MAV → MRV per Israetel; eccentric overload at intensification breaks plateaus; drop sets on isolations during peak weeks add metabolic stress without compromising compounds. Five-week mesocycle, 4 sessions per week, periodized against your specific recovery.',
    example: {
      title: 'Wk 01 · Upper A · 6 movements · 18 sets · ~50 min',
      movements: [
        { name: 'Bench Press', sets: 3, reps: '6–10', perCableLb: 75, isTwoSided: true, isBilateral: true },
        { name: 'Half Kneeling Push-Pull', sets: 3, reps: '8–12', perCableLb: 35 },
        { name: 'Seated Overhead Press', sets: 3, reps: '6–10', perCableLb: 31, isTwoSided: true, isBilateral: true },
        { name: 'Seated Biceps Curl', sets: 3, reps: '10–15', perCableLb: 32 },
        { name: 'Close Grip Bench', sets: 3, reps: '6–10', perCableLb: 47, isTwoSided: true, isBilateral: true },
        { name: 'X-Pulldown w/ Triceps', sets: 3, reps: '6–10', perCableLb: 35 },
      ],
    },
    science: [
      'Volume waves through MEV → MAV → MRV (Israetel, Renaissance Periodization). Each muscle gets a dose calibrated to your specific recovery, not a generic split.',
      'Eccentric overload on first compound of weeks 3–4. Schoenfeld 2017 meta: time-under-tension correlates with hypertrophy stimulus to a saturation point.',
      'Drop sets on isolations during peak weeks. Metabolic stress without compromising downstream compounds — placed at end of session by design.',
      'Frequency: 2× per muscle group per week minimum (Schoenfeld 2016 frequency meta-analysis). Splits emerge from your tolerance, not bro-splits.',
    ],
    modes: {
      'Wk 1': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '—' },
      'Wk 2': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '—' },
      'Wk 3': { Chains: '—', Eccentric: '✓', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '—' },
      'Wk 4': { Chains: '—', Eccentric: '✓', 'Drop sets': 'peak', 'Smart Flex': '✓', Burnout: 'opt' },
      'Wk 5': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
    },
  },
  {
    id: 'strength',
    label: 'Strength',
    tagline: 'Heavy, recovered, repeated — neural drive first',
    summary:
      'Build maximum force production at sub-maximal-to-maximal loads, with low fatigue per set and full recovery between. Strength is a skill: it improves with quality reps under heavy load, not chasing pump. Wave loading 4–6 → 3–5 → 2–4 → 1–3 → deload. Chains on every compound for variable resistance matched to the strength curve.',
    example: {
      title: 'Wk 01 · Upper Press · 4 movements · 14 sets · ~55 min',
      movements: [
        { name: 'Bench Press', sets: 4, reps: '5', perCableLb: 97, isTwoSided: true, isBilateral: true },
        { name: 'Standing OHP', sets: 3, reps: '6–8', perCableLb: 45, isTwoSided: true, isBilateral: true },
        { name: 'Barbell Row', sets: 3, reps: '8', perCableLb: 70, isTwoSided: true, isBilateral: true },
        { name: 'Triceps Press', sets: 4, reps: '8–10', perCableLb: 32 },
      ],
    },
    science: [
      'Rest 3–5 minutes between primary working sets — non-negotiable per Schoenfeld 2018 rest interval review. Strength gains require near-full ATP/PCr replenishment.',
      'Chains on every compound. Variable resistance matches the strength curve, builds lockout strength without breaking eccentric form.',
      'Slow eccentrics weeks 3–4 only. Eccentric overload (110–130% concentric) for neural adaptation; capped at 1–2 sets per session to respect recovery.',
      'Volume below MAV by design. Strength template optimizes intensity (% 1RM), not volume. Accumulated fatigue is the enemy of force production.',
    ],
    modes: {
      'Wk 1': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 2': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 3': { Chains: '✓', Eccentric: '✓', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 4': { Chains: '✓', Eccentric: '✓', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 5': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
    },
  },
  {
    id: 'power',
    label: 'Power',
    tagline: 'Velocity-first — explosive against load',
    summary:
      'Train rate of force development. Loads at 30–60% of 1RM moved with maximum intent; the cable resists, you accelerate against it. Chains on explosive compounds add load through the range so you keep accelerating into lockout. High RIR throughout — power requires recovered work, never failure grinding.',
    example: {
      title: 'Wk 01 · Upper Power · 4 movements · 16 sets · ~45 min',
      movements: [
        { name: 'Bench Throw', sets: 5, reps: '3', perCableLb: 50, isTwoSided: true, isBilateral: true },
        { name: 'Push Press', sets: 4, reps: '3', perCableLb: 40, isTwoSided: true, isBilateral: true },
        { name: 'Med Ball Slam', sets: 4, reps: '5', perCableLb: 0 },
        { name: 'Explosive Row', sets: 3, reps: '5', perCableLb: 55 },
      ],
    },
    science: [
      'Rate of force development (RFD) is the trained variable. Move sub-maximal loads at maximum velocity — Tonal\'s velocity tracking surfaces the bar speed per rep.',
      'Chains on explosive compounds (accelerate against increasing load through the range). Slow tempo conflicts with explosive intent — eccentric overload is never used.',
      'High RIR (3–4) throughout. Power requires recovered work; one slow rep ends the set. Failure grinding kills the adaptation we\'re training.',
      'Drop sets, burnout, and slow eccentric all contraindicated. Velocity is the variable; anything that compromises bar speed compromises the stimulus.',
    ],
    modes: {
      'Wk 1': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 2': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 3': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 4': { Chains: '✓', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
      'Wk 5': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
    },
  },
  {
    id: 'endurance',
    label: 'Endurance',
    tagline: 'Aerobic capacity through resistance — high-rep circuits',
    summary:
      'Build muscular endurance and aerobic capacity through resistance circuits. 12–25 reps per set, short rest, paired or tri-set movements that flow without accessory swap. Burnout sets at the end of each circuit drive metabolic capacity. Smart Flex auto-progresses load when your reps land above target.',
    example: {
      title: 'Wk 01 · Push Circuit · 5 movements · 15 sets · ~40 min',
      movements: [
        { name: 'Bench Press', sets: 3, reps: '15', perCableLb: 50, isTwoSided: true, isBilateral: true },
        { name: 'Push-Pull Squat', sets: 3, reps: '20', perCableLb: 30, isTwoSided: true, isBilateral: true },
        { name: 'Standing Press', sets: 3, reps: '15', perCableLb: 25, isTwoSided: true, isBilateral: true },
        { name: 'Triceps Extension', sets: 3, reps: '20', perCableLb: 20 },
        { name: 'Burnout Press', sets: 3, reps: 'AMRAP', perCableLb: 20 },
      ],
    },
    science: [
      'High-rep resistance (12–25) drives capillary density and mitochondrial adaptation. Volume is high; intensity (% 1RM) is moderate.',
      'Burnout finishers per circuit drive metabolic stress beyond the rep target — mode is built for this protocol.',
      'Eccentric work explicitly avoided — slow negatives + high-rep fatigue create form-breakdown risk. Speed of execution stays controlled, not slowed.',
      'Smart Flex on. When reps consistently land above the upper rep target, the engine auto-progresses load on the next session.',
    ],
    modes: {
      'Wk 1': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 2': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 3': { Chains: '—', Eccentric: '—', 'Drop sets': 'opt', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 4': { Chains: '—', Eccentric: '—', 'Drop sets': 'opt', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 5': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
    },
  },
  {
    id: 'weight-loss',
    label: 'Weight Loss',
    tagline: 'Total-body density — calorie burn meets muscle preservation',
    summary:
      'Maximize calorie burn while preserving muscle. Total-body sessions, compound-heavy, short rest, density-block structure. Smart Flex on so the engine progresses load as your conditioning improves. Burnout finishers add metabolic cost at session end. Cardio intent without sacrificing hypertrophy stimulus.',
    example: {
      title: 'Wk 01 · Total Body Burn — Push · 5 movements · 18 sets · ~45 min',
      movements: [
        { name: 'Goblet Squat', sets: 4, reps: '12', perCableLb: 40, isTwoSided: true, isBilateral: true },
        { name: 'Bench Press', sets: 4, reps: '10', perCableLb: 60, isTwoSided: true, isBilateral: true },
        { name: 'Bent Row', sets: 4, reps: '12', perCableLb: 55 },
        { name: 'Walking Lunge', sets: 3, reps: '12 ea', perCableLb: 30 },
        { name: 'Burnout Press', sets: 3, reps: 'AMRAP', perCableLb: 25 },
      ],
    },
    science: [
      'Total-body sessions 4× per week maximize weekly energy expenditure while keeping per-session fatigue manageable.',
      'Compound-heavy at moderate-high reps (8–15). Preserves muscle (sufficient mechanical tension) while driving high heart rate (short rest, large muscle masses).',
      'Smart Flex auto-progresses load as conditioning improves. Drop sets and burnouts add metabolic cost at session end — not at the start, where they\'d compromise the rest of the work.',
      'Helms hierarchy applied: adherence first. Sessions cap at 45 minutes by design — short enough to be done daily, long enough to drive adaptation.',
    ],
    modes: {
      'Wk 1': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 2': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 3': { Chains: '—', Eccentric: '—', 'Drop sets': 'opt', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 4': { Chains: '—', Eccentric: '—', 'Drop sets': 'opt', 'Smart Flex': '✓', Burnout: '✓' },
      'Wk 5': { Chains: '—', Eccentric: '—', 'Drop sets': '—', 'Smart Flex': '—', Burnout: '—' },
    },
  },
  {
    id: 'custom',
    label: 'Custom',
    tagline: 'Bring your own plan — paste it, parse it, push it',
    summary:
      'Already have a program from a coach, an AI, or a PDF? Paste it in natural language. The Architect parses sets, reps, loads, and tempo notation; auto-fleshes any ambiguity from your training history; renders the plan as Tonal-executable workouts; pushes the cycle straight to your machine. Your plan, your translation, your machine.',
    example: {
      title: 'Imported plan · Day 1 · 5 movements · 18 sets · ~50 min',
      movements: [
        { name: 'Back Squat (your plan)', sets: 5, reps: '5', perCableLb: 95, isTwoSided: true, isBilateral: true },
        { name: 'Romanian Deadlift', sets: 4, reps: '8', perCableLb: 88, isTwoSided: true, isBilateral: true },
        { name: 'Bulgarian Split Squat', sets: 3, reps: '8 ea', perCableLb: 35 },
        { name: 'Hamstring Curl', sets: 3, reps: '12', perCableLb: 30 },
        { name: 'Standing Calf Raise', sets: 4, reps: '15', perCableLb: 55, isTwoSided: true, isBilateral: true },
      ],
    },
    science: [
      'NL plan parser handles tempo notation (3-1-1-0), RPE/RIR scales, percentage notation (@ 75% 1RM), and prose ("4 hard sets, leave 2 in the tank").',
      'Auto-flesh fills ambiguity from your training history. Plan says "moderate weight" → engine reads your last 90 days, computes a reasonable load.',
      'Tonal-executable rendering — barbells map to closest cable equivalents, accessory groupings preserved to minimize mid-session swaps.',
      'Architect-tier feature. Available unlimited during 14-day trial; required for ongoing NL paste import after trial.',
    ],
    modes: {
      'Wk 1': { Chains: 'opt', Eccentric: 'opt', 'Drop sets': 'opt', 'Smart Flex': 'opt', Burnout: 'opt' },
      'Wk 2': { Chains: 'opt', Eccentric: 'opt', 'Drop sets': 'opt', 'Smart Flex': 'opt', Burnout: 'opt' },
      'Wk 3': { Chains: 'opt', Eccentric: 'opt', 'Drop sets': 'opt', 'Smart Flex': 'opt', Burnout: 'opt' },
      'Wk 4': { Chains: 'opt', Eccentric: 'opt', 'Drop sets': 'opt', 'Smart Flex': 'opt', Burnout: 'opt' },
      'Wk 5': { Chains: 'opt', Eccentric: 'opt', 'Drop sets': 'opt', 'Smart Flex': 'opt', Burnout: 'opt' },
    },
  },
];

export function formatMovementWeight(m: ExampleMovement): string {
  return displayWeight(m.perCableLb, { isTwoSided: m.isTwoSided, isBilateral: m.isBilateral });
}
