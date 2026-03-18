import type { SceneId } from "./types";

type GeneratedIllustrationProps = {
  scene: SceneId;
};

export function GeneratedIllustration({
  scene,
}: GeneratedIllustrationProps) {
  return (
    <div className="game-illustration overflow-hidden rounded-[2rem] border">
      {renderScene(scene)}
    </div>
  );
}

function renderScene(scene: SceneId) {
  switch (scene) {
    case "vin-diesel":
      return (
        <SceneFrame accent="#f59e0b" secondary="#38bdf8">
          <WineBottle x={112} y={76} />
          <FuelNozzle x={274} y={92} />
        </SceneFrame>
      );
    case "ice-spice":
      return (
        <SceneFrame accent="#67e8f9" secondary="#f97316">
          <IceCube x={98} y={104} rotate={-12} />
          <IceCube x={160} y={90} rotate={10} />
          <IceCube x={128} y={144} rotate={7} />
          <SpiceJar x={266} y={84} />
        </SceneFrame>
      );
    case "jean-dujardin":
      return (
        <SceneFrame accent="#60a5fa" secondary="#4ade80">
          <Jeans x={94} y={58} />
          <GardenPatch x={238} y={114} />
        </SceneFrame>
      );
    case "jean-reno":
      return (
        <SceneFrame accent="#60a5fa" secondary="#fca5a5">
          <Jeans x={78} y={58} />
          <Rhino x={246} y={132} />
        </SceneFrame>
      );
    case "shakira":
      return (
        <SceneFrame accent="#f472b6" secondary="#fde047">
          <LaughingCat x={210} y={142} />
        </SceneFrame>
      );
    case "kendji-girac":
      return (
        <SceneFrame accent="#c084fc" secondary="#fb7185">
          <DollWithSpeech x={120} y={146} />
          <Giraffe x={298} y={148} />
        </SceneFrame>
      );
  }
}

type SceneFrameProps = {
  accent: string;
  secondary: string;
  children: React.ReactNode;
};

function SceneFrame({ accent, secondary, children }: SceneFrameProps) {
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Illustration de l'enigme"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="game-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="280" rx="32" fill="url(#game-card-bg)" />
      <circle cx="60" cy="54" r="56" fill={withAlpha(accent, 0.16)} />
      <circle cx="358" cy="42" r="48" fill={withAlpha(secondary, 0.16)} />
      <circle cx="344" cy="230" r="78" fill={withAlpha(accent, 0.1)} />
      <path
        d="M24 214C94 168 146 176 202 214C258 252 326 246 396 200"
        fill="none"
        stroke={withAlpha("#ffffff", 0.08)}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <Sparkle x={62} y={210} color={accent} />
      <Sparkle x={348} y={88} color={secondary} />
      <rect
        x="22"
        y="22"
        width="376"
        height="236"
        rx="26"
        fill="none"
        stroke={withAlpha("#ffffff", 0.08)}
      />

      {children}
    </svg>
  );
}

type SparkleProps = {
  x: number;
  y: number;
  color: string;
};

function Sparkle({ x, y, color }: SparkleProps) {
  return (
    <>
      <circle cx={x} cy={y} r="8" fill={withAlpha(color, 0.24)} />
      <path
        d={`M${x} ${y - 16} L${x} ${y + 16} M${x - 16} ${y} L${x + 16} ${y}`}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  );
}

type PositionedProps = {
  x: number;
  y: number;
};

function WineBottle({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="48" cy="164" rx="60" ry="18" fill="rgba(15, 23, 42, 0.34)" />
      <rect x="28" y="16" width="40" height="132" rx="16" fill="#14532d" />
      <rect x="38" y="-8" width="20" height="40" rx="9" fill="#166534" />
      <rect x="34" y="44" width="28" height="56" rx="8" fill="#fef3c7" />
      <circle cx="48" cy="72" r="10" fill="#f59e0b" />
      <rect x="40" y="-16" width="16" height="14" rx="4" fill="#fbbf24" />
      <path
        d="M28 112C44 120 52 120 68 112"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
}

function FuelNozzle({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="44" cy="144" rx="54" ry="16" fill="rgba(15, 23, 42, 0.34)" />
      <path
        d="M18 28C18 14 30 2 44 2H72C86 2 98 14 98 28V76C98 88 88 98 76 98H54L34 124H12L28 94C18 92 10 82 10 70V28H18Z"
        fill="#38bdf8"
      />
      <path
        d="M74 18H106C118 18 128 28 128 40V74"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M121 70L138 70L146 54"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="26" y="22" width="52" height="28" rx="8" fill="#0f172a" opacity="0.36" />
      <circle cx="54" cy="62" r="14" fill="#0f172a" opacity="0.28" />
    </g>
  );
}

type IceCubeProps = {
  x: number;
  y: number;
  rotate?: number;
};

function IceCube({ x, y, rotate = 0 }: IceCubeProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect
        x="-24"
        y="-24"
        width="48"
        height="48"
        rx="12"
        fill="rgba(224, 242, 254, 0.64)"
        stroke="rgba(255,255,255,0.26)"
      />
      <path
        d="M-14 -6C0 -18 14 -18 24 -8"
        fill="none"
        stroke="rgba(255,255,255,0.46)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

function SpiceJar({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="48" cy="154" rx="60" ry="16" fill="rgba(15, 23, 42, 0.34)" />
      <rect x="12" y="30" width="72" height="104" rx="20" fill="#fb923c" />
      <rect x="18" y="12" width="60" height="28" rx="10" fill="#7c2d12" />
      <rect x="24" y="58" width="48" height="52" rx="14" fill="#ffedd5" opacity="0.82" />
      <circle cx="36" cy="74" r="4" fill="#c2410c" />
      <circle cx="52" cy="88" r="4" fill="#c2410c" />
      <circle cx="60" cy="72" r="4" fill="#c2410c" />
      <circle cx="42" cy="100" r="4" fill="#c2410c" />
      <circle cx="62" cy="100" r="4" fill="#c2410c" />
    </g>
  );
}

function Jeans({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="62" cy="184" rx="70" ry="18" fill="rgba(15, 23, 42, 0.34)" />
      <path
        d="M18 24H106L96 154L74 154L66 92L58 154H30L18 24Z"
        fill="#2563eb"
      />
      <path
        d="M58 24V92"
        stroke="#93c5fd"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M26 42H98"
        stroke="#93c5fd"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="42" y="10" width="40" height="18" rx="6" fill="#fbbf24" />
      <circle cx="42" cy="58" r="4" fill="#bfdbfe" />
      <circle cx="82" cy="58" r="4" fill="#bfdbfe" />
    </g>
  );
}

function GardenPatch({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="58" cy="92" rx="78" ry="20" fill="rgba(15, 23, 42, 0.34)" />
      <rect x="0" y="22" width="116" height="58" rx="22" fill="#854d0e" />
      <path
        d="M18 38H96M18 52H96M18 66H96"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Vegetable x={24} y={-8} leaf="#4ade80" bulb="#fb923c" />
      <Vegetable x={50} y={-4} leaf="#22c55e" bulb="#fb923c" />
      <Vegetable x={78} y={-6} leaf="#86efac" bulb="#f59e0b" />
    </g>
  );
}

type VegetableProps = {
  x: number;
  y: number;
  leaf: string;
  bulb: string;
};

function Vegetable({ x, y, leaf, bulb }: VegetableProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M12 12C12 -6 22 -12 26 -18"
        fill="none"
        stroke={leaf}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M20 10C20 -4 34 -8 38 -16"
        fill="none"
        stroke={leaf}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M22 18C22 30 32 38 36 48C20 50 8 46 0 38C6 30 12 18 22 18Z"
        fill={bulb}
      />
    </g>
  );
}

function Rhino({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="70" cy="92" rx="86" ry="22" fill="rgba(15, 23, 42, 0.34)" />
      <ellipse cx="74" cy="54" rx="72" ry="46" fill="#94a3b8" />
      <ellipse cx="132" cy="48" rx="34" ry="28" fill="#cbd5e1" />
      <path d="M146 42L178 24L158 54Z" fill="#f8fafc" />
      <circle cx="142" cy="44" r="5" fill="#0f172a" />
      <path
        d="M28 84V118M58 84V120M96 84V118M126 84V120"
        stroke="#64748b"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <ellipse cx="22" cy="44" rx="16" ry="20" fill="#94a3b8" />
    </g>
  );
}

function LaughingCat({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="98" rx="86" ry="22" fill="rgba(15, 23, 42, 0.34)" />
      <circle cx="0" cy="0" r="74" fill="#f8fafc" />
      <path d="M-56 -34L-22 -76L-4 -28Z" fill="#f8fafc" />
      <path d="M56 -34L22 -76L4 -28Z" fill="#f8fafc" />
      <path d="M-28 -4C-20 -16 -10 -16 -2 -4" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <path d="M2 -4C10 -16 20 -16 28 -4" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
      <path d="M-12 12L0 4L12 12L0 18Z" fill="#fb7185" />
      <path d="M-30 34C-18 56 18 56 30 34" fill="#0f172a" />
      <path d="M-26 34C-12 48 12 48 26 34" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <path d="M-90 -12C-112 -4 -120 18 -118 36" fill="none" stroke="#60a5fa" strokeWidth="10" strokeLinecap="round" />
      <path d="M90 -12C112 -4 120 18 118 36" fill="none" stroke="#60a5fa" strokeWidth="10" strokeLinecap="round" />
      <path d="M-84 44L-74 28L-64 44" fill="#60a5fa" />
      <path d="M84 44L94 28L104 44" fill="#60a5fa" />
      <path
        d="M-98 18H-148M96 18H146M-94 34H-140M92 34H138"
        stroke="rgba(255,255,255,0.52)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
}

function DollWithSpeech({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="90" rx="70" ry="18" fill="rgba(15, 23, 42, 0.34)" />
      <circle cx="0" cy="-36" r="30" fill="#fde68a" />
      <path d="M-30 -42C-14 -68 16 -68 30 -42V-22H-30Z" fill="#facc15" />
      <rect x="-18" y="-6" width="36" height="18" rx="9" fill="#fecdd3" />
      <path d="M-30 20L0 0L30 20L18 78H-18Z" fill="#c084fc" />
      <path
        d="M-34 26L-52 60M34 26L52 60M-12 78V110M12 78V110"
        stroke="#f8fafc"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M56 -12H100C110 -12 118 -4 118 6V30L98 18H56C46 18 38 10 38 0V6C38 -4 46 -12 56 -12Z"
        fill="#f8fafc"
      />
      <path
        d="M64 2H88M64 14H96"
        stroke="#c084fc"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
}

function Giraffe({ x, y }: PositionedProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="92" rx="72" ry="18" fill="rgba(15, 23, 42, 0.34)" />
      <ellipse cx="-10" cy="36" rx="38" ry="26" fill="#fbbf24" />
      <rect x="-2" y="-56" width="18" height="92" rx="9" fill="#fbbf24" />
      <circle cx="10" cy="-68" r="22" fill="#fbbf24" />
      <path d="M2 -90L0 -108M18 -90L20 -108" stroke="#854d0e" strokeWidth="6" strokeLinecap="round" />
      <circle cx="0" cy="-110" r="5" fill="#854d0e" />
      <circle cx="20" cy="-110" r="5" fill="#854d0e" />
      <path
        d="M-30 58V112M-8 58V112M12 56V112M34 56V112"
        stroke="#f8fafc"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="-24" cy="28" r="8" fill="#b45309" />
      <circle cx="-2" cy="18" r="8" fill="#b45309" />
      <circle cx="16" cy="42" r="8" fill="#b45309" />
      <circle cx="6" cy="-18" r="7" fill="#b45309" />
      <circle cx="8" cy="-34" r="6" fill="#b45309" />
      <circle cx="18" cy="-64" r="6" fill="#b45309" />
      <circle cx="18" cy="-72" r="4" fill="#0f172a" />
      <path d="M30 -66C38 -60 38 -46 28 -40" fill="none" stroke="#854d0e" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

function withAlpha(color: string, alpha: number) {
  const value = color.replace("#", "");

  if (value.length !== 6) {
    return color;
  }

  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
