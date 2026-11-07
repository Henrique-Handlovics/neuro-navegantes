import { useId } from "react";

const RAINBOW = ["#EF4444", "#F97316", "#FACC15", "#22C55E", "#3B82F6", "#8B5CF6"];

function useGradientId(prefix) {
  return prefix + useId().replace(/[^a-zA-Z0-9]/g, "");
}

function RainbowDefs({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        {RAINBOW.map((color, i) => (
          <stop key={color} offset={`${(i / (RAINBOW.length - 1)) * 100}%`} stopColor={color} />
        ))}
      </linearGradient>
    </defs>
  );
}

const star = (x, y, r) =>
  `M${x} ${y - r} L${x + r * 0.28} ${y - r * 0.28} L${x + r} ${y} L${x + r * 0.28} ${y + r * 0.28} ` +
  `L${x} ${y + r} L${x - r * 0.28} ${y + r * 0.28} L${x - r} ${y} L${x - r * 0.28} ${y - r * 0.28}Z`;

/* Símbolo da neurodiversidade: infinito em arco-íris */
export function InfinitoArcoIris({ className }) {
  const id = useGradientId("inf");
  return (
    <svg className={className} viewBox="0 0 120 60" aria-hidden="true" focusable="false">
      <RainbowDefs id={id} />
      <path
        d="M60 30 C48 12 14 12 14 30 C14 48 48 48 60 30 C72 12 106 12 106 30 C106 48 72 48 60 30 Z"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CerebroColorido({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 90" aria-hidden="true" focusable="false">
      <path d="M50 14 C40 4 18 8 16 28 C6 33 8 54 19 59 C20 72 38 78 50 70 Z" fill="#F9A8D4" stroke="#4338CA" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M50 14 C60 4 82 8 84 28 C94 33 92 54 81 59 C80 72 62 78 50 70 Z" fill="#A5B4FC" stroke="#4338CA" strokeWidth="3.5" strokeLinejoin="round" />
      <g fill="none" strokeWidth="3" strokeLinecap="round">
        <path d="M26 28 C32 22 38 32 44 26" stroke="#FACC15" />
        <path d="M24 46 C31 40 37 50 44 44" stroke="#22C55E" />
        <path d="M56 26 C62 32 68 22 74 28" stroke="#F97316" />
        <path d="M56 44 C62 50 68 40 76 46" stroke="#3B82F6" />
      </g>
    </svg>
  );
}

export function Estrelas({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 60" aria-hidden="true" focusable="false">
      <path d={star(24, 34, 16)} fill="#FACC15" />
      <path d={star(62, 20, 11)} fill="#F97316" />
      <path d={star(96, 38, 14)} fill="#8B5CF6" />
      <circle cx="44" cy="52" r="3" fill="#22C55E" />
      <circle cx="80" cy="8" r="3" fill="#3B82F6" />
      <circle cx="112" cy="14" r="2.5" fill="#EF4444" />
    </svg>
  );
}

export function Espiral({ className }) {
  const id = useGradientId("esp");
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <RainbowDefs id={id} />
      <path
        d="M40 40 C40 36 46 36 46 41 C46 49 34 50 32 41 C29 29 47 25 53 33 C61 45 49 59 36 55 C20 50 17 31 29 22"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Lampada({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <circle cx="40" cy="34" r="17" fill="#FACC15" stroke="#B45309" strokeWidth="3.5" />
      <rect x="32" y="52" width="16" height="9" rx="3" fill="#8B5CF6" />
      <rect x="35" y="62" width="10" height="5" rx="2.5" fill="#4338CA" />
      <g stroke="#F97316" strokeWidth="3.5" strokeLinecap="round">
        <path d="M40 6 L40 11" /><path d="M14 34 L9 34" /><path d="M66 34 L71 34" />
        <path d="M21 15 L17 11" /><path d="M59 15 L63 11" />
      </g>
    </svg>
  );
}

const MAPA = {
  infinito: InfinitoArcoIris,
  cerebro: CerebroColorido,
  estrelas: Estrelas,
  espiral: Espiral,
  lampada: Lampada,
};

/* Figura decorativa acima do título de cada seção */
export default function Decoracao({ tipo = "infinito" }) {
  const Figura = MAPA[tipo] || InfinitoArcoIris;
  return (
    <div className="section-deco">
      <Figura />
    </div>
  );
}
