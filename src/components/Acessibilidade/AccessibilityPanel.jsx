import { useEffect, useState } from "react";
import { FaUniversalAccess } from "react-icons/fa6";
import useEscape from "../../hooks/useEscape";
import "./acessibilidade.css";

const STORAGE_KEY = "neuro-navegantes-preferencias";

const DEFAULTS = {
  fontSize: "md",
  contrast: "normal",
  font: "default",
  spacing: "normal",
  motion: "normal",
};

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return { ...DEFAULTS, ...saved };
  } catch {
    /* sem armazenamento disponível: usa o padrão */
  }
  const prefs = { ...DEFAULTS };
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    prefs.motion = "reduced";
  }
  return prefs;
}

const GROUPS = [
  {
    key: "fontSize",
    label: "Tamanho do texto",
    options: [["md", "Normal"], ["lg", "Grande"], ["xl", "Muito grande"]],
  },
  {
    key: "contrast",
    label: "Contraste",
    options: [["normal", "Normal"], ["high", "Alto"]],
  },
  {
    key: "font",
    label: "Fonte",
    options: [["default", "Padrão"], ["lexend", "Lexend (leitura fácil)"]],
  },
  {
    key: "spacing",
    label: "Espaçamento do texto",
    options: [["normal", "Normal"], ["wide", "Amplo"]],
  },
  {
    key: "motion",
    label: "Movimento e animações",
    options: [["normal", "Normal"], ["reduced", "Reduzido"]],
  },
];

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(loadPrefs);

  useEscape(open, () => setOpen(false));

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.fontsize = prefs.fontSize;
    root.dataset.contrast = prefs.contrast;
    root.dataset.font = prefs.font;
    root.dataset.spacing = prefs.spacing;
    root.dataset.motion = prefs.motion;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* ignora */
    }
  }, [prefs]);

  function choose(key, value) {
    setPrefs((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="a11y">

      {open && (
        <div
          className="a11y-panel"
          role="dialog"
          aria-label="Ajustes de acessibilidade"
        >
          <h2>Ajustes do site</h2>
          <p className="a11y-hint">
            Escolha o que deixa a leitura mais confortável. Suas escolhas ficam salvas neste navegador.
          </p>

          {GROUPS.map((group) => (
            <div className="a11y-group" key={group.key} role="group" aria-label={group.label}>
              <span className="a11y-label">{group.label}</span>
              <div className="a11y-options">
                {group.options.map(([value, text]) => (
                  <button
                    key={value}
                    type="button"
                    className={prefs[group.key] === value ? "active" : ""}
                    aria-pressed={prefs[group.key] === value}
                    onClick={() => choose(group.key, value)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="a11y-footer">
            <button type="button" className="a11y-reset" onClick={() => setPrefs({ ...DEFAULTS })}>
              Restaurar padrão
            </button>
            <button type="button" className="a11y-close" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="a11y-toggle"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <FaUniversalAccess aria-hidden="true" />
        <span>Acessibilidade</span>
      </button>

    </div>
  );
}
