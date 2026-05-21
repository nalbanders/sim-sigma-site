/**
 * SimSigmaLogo.jsx
 *
 * Editable SVG React component built from the official Sim Sigma logo assets.
 * All SVG paths are taken directly from the generated brand package.
 *
 * Variants:
 *   "full"  — 1600×1000 canvas with screen, sigma, ball, wordmark + tagline
 *   "icon"  — 900×650 canvas with screen, sigma, ball only (no text)
 *
 * CSS variables exposed as props:
 *   neonColor      #39D800  — sigma path, ball stroke, wordmark
 *   screenColor    #F4F7F5  — screen frame + floor lines
 *   bgColor        #030403  — background (set to "none" for transparent)
 *   glowIntensity  8        — controls feGaussianBlur stdDeviation (1–20)
 *
 * Usage:
 *   <SimSigmaLogo />
 *   <SimSigmaLogo variant="icon" width={120} bgColor="none" />
 *   <SimSigmaLogo glowIntensity={12} neonColor="#00ff88" showControls />
 */

import { useState, useRef, useCallback } from "react";

/* ─── Brand defaults (from sim-sigma-brand-colors.css) ──────── */
const BRAND = {
  neonColor:     "#39D800",
  screenColor:   "#F4F7F5",
  bgColor:       "#030403",
  glowIntensity: 8,
};

/* ─── SVG Filters ────────────────────────────────────────────── */
function Filters({ glow }) {
  const g1 = (glow * 0.5).toFixed(1);
  const g2 = (glow * 1.5).toFixed(1);
  const w1 = (glow * 0.375).toFixed(1);
  const w2 = (glow * 1.0).toFixed(1);
  return (
    <defs>
      <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation={g1} result="blur1"/>
        <feGaussianBlur stdDeviation={g2} result="blur2"/>
        <feMerge>
          <feMergeNode in="blur2"/><feMergeNode in="blur1"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation={w1} result="blur1"/>
        <feGaussianBlur stdDeviation={w2} result="blur2"/>
        <feMerge>
          <feMergeNode in="blur2"/><feMergeNode in="blur1"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  );
}

/* ─── Icon (900×650) — screen + sigma + ball, no text ───────── */
function IconMark({ neon, screen }) {
  return (
    <>
      {/* Screen frame — split top bar leaves gap where ball exits */}
      <g filter="url(#whiteGlow)" fill="none" stroke={screen}
         strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M120 150 H560"/>
        <path d="M635 150 H760 V520 H120 V150"/>
        <path d="M120 520 L20 585"/>
        <path d="M760 520 L880 585"/>
      </g>

      {/*
        Sigma / swing-path — the real path from the brand package.
        Complex self-intersecting bezier creates the sigma S-curve:
        tight bottom loop + S-inflection + ball-flight arc.
      */}
      <path
        d="M385 525
           C280 525 255 445 330 390
           C415 330 600 245 735 65
           C630 245 415 275 350 365
           C310 420 450 425 470 495
           C485 552 415 605 315 570
           C225 540 225 435 325 390"
        fill="none" stroke={neon} strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#greenGlow)"/>

      {/* Golf ball — dark fill + neon stroke + dimple dots */}
      <g transform="translate(818 50)" filter="url(#greenGlow)">
        <circle r="44" fill="#060706" stroke={neon} strokeWidth="6"/>
        <g fill="#F4F7F5" opacity="0.9">
          <circle cx="-12" cy="-22" r="4"/><circle cx="5"  cy="-26" r="3.5"/>
          <circle cx="20"  cy="-18" r="4"/><circle cx="-24" cy="-5"  r="4"/>
          <circle cx="-5"  cy="-6"  r="4"/><circle cx="14"  cy="-3"  r="4"/>
          <circle cx="30"  cy="6"   r="3.5"/><circle cx="-15" cy="14" r="3.5"/>
          <circle cx="5"   cy="16"  r="4"/><circle cx="22"  cy="22"  r="3.5"/>
        </g>
      </g>
    </>
  );
}

/* ─── Full logo (1600×1000) — adds wordmark + tagline ────────── */
function FullMark({ neon, screen }) {
  return (
    <>
      {/* Screen — split top bar with ball-exit gap (900→975) */}
      <g filter="url(#whiteGlow)" fill="none" stroke={screen}
         strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M430 230 H900"/>
        <path d="M975 230 H1120 V610 H430 V230"/>
        <path d="M430 610 L250 720"/>
        <path d="M1120 610 L1350 720"/>
      </g>

      {/* Sigma path — scaled up for 1600×1000 canvas */}
      <path
        d="M705 615
           C600 615 575 535 650 480
           C735 420 920 335 1055 155
           C950 335 735 365 670 455
           C630 510 770 515 790 585
           C805 642 735 695 635 660
           C545 630 545 525 645 480"
        fill="none" stroke={neon} strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#greenGlow)"/>

      {/* Ball */}
      <g transform="translate(1138 140)" filter="url(#greenGlow)">
        <circle r="44" fill="#060706" stroke={neon} strokeWidth="6"/>
        <g fill="#F4F7F5" opacity="0.9">
          <circle cx="-12" cy="-22" r="4"/><circle cx="5"  cy="-26" r="3.5"/>
          <circle cx="20"  cy="-18" r="4"/><circle cx="-24" cy="-5"  r="4"/>
          <circle cx="-5"  cy="-6"  r="4"/><circle cx="14"  cy="-3"  r="4"/>
          <circle cx="30"  cy="6"   r="3.5"/><circle cx="-15" cy="14" r="3.5"/>
          <circle cx="5"   cy="16"  r="4"/><circle cx="22"  cy="22"  r="3.5"/>
        </g>
      </g>

      {/* Wordmark */}
      <text x="800" y="820" textAnchor="middle"
        fontFamily="Montserrat, Eurostile, Arial, sans-serif"
        fontWeight="700" fontSize="88" letterSpacing="26"
        fill={neon} filter="url(#greenGlow)">
        SIM SIGMA
      </text>

      {/* Tagline */}
      <text x="800" y="895" textAnchor="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="500" fontSize="34" letterSpacing="18"
        fill="#F4F7F5" filter="url(#whiteGlow)">
        OUTPLAY THE AVERAGE
      </text>
    </>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function SimSigmaLogo({
  variant       = "full",   /* "full" | "icon" */
  width         = 560,
  bgColor       = BRAND.bgColor,
  neonColor     = BRAND.neonColor,
  screenColor   = BRAND.screenColor,
  glowIntensity = BRAND.glowIntensity,
  showControls  = false,
  showExport    = false,
}) {
  const svgRef = useRef(null);
  const isIcon = variant === "icon";
  const vw = isIcon ? 900  : 1600;
  const vh = isIcon ? 650  : 1000;
  const height = Math.round(width * (vh / vw));

  const [bg,    setBg]    = useState(bgColor);
  const [neon,  setNeon]  = useState(neonColor);
  const [scr,   setScr]   = useState(screenColor);
  const [glow,  setGlow]  = useState(glowIntensity);

  const handleExport = useCallback(() => {
    const el = svgRef.current;
    if (!el) return;
    const clone = el.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", width);
    clone.setAttribute("height", height);
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');";
    clone.querySelector("defs").appendChild(style);
    const str = '<?xml version="1.0" encoding="UTF-8"?>\n'
      + new XMLSerializer().serializeToString(clone);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([str], { type: "image/svg+xml" }));
    a.download = `sim-sigma-logo-${variant}.svg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }, [width, height, variant]);

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <svg ref={svgRef} viewBox={`0 0 ${vw} ${vh}`} width={width} height={height}
           xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Sim Sigma — Outplay the Average"
           style={{ display: "block" }}>
        <Filters glow={glow} />
        {bg !== "none" && <rect width={vw} height={vh} fill={bg} />}
        {isIcon
          ? <IconMark neon={neon} screen={scr} />
          : <FullMark neon={neon} screen={scr} />
        }
      </svg>

      {showControls && (
        <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap", justifyContent:"center",
                      fontFamily:"Montserrat,sans-serif" }}>
          {[
            ["Glow", "range", glow, setGlow, {min:1,max:20,step:1}],
            ["Path/ball", "color", neon, setNeon, {}],
            ["Screen", "color", scr,  setScr,  {}],
            ["Background", "color", bg, setBg, {}],
          ].map(([label, type, val, setter, extra]) => (
            <label key={label} style={{ display:"flex", flexDirection:"column",
                                        gap:4, fontSize:11, color:"#888",
                                        letterSpacing:"0.1em", textTransform:"uppercase" }}>
              {label}
              <input type={type} value={val}
                onChange={e => setter(type === "range" ? Number(e.target.value) : e.target.value)}
                style={type === "range" ? {width:100, accentColor: BRAND.neonColor} : {width:36,height:28}}
                {...extra}/>
              {type === "range" && <span style={{fontSize:12,fontWeight:500,color:BRAND.neonColor}}>{val}</span>}
            </label>
          ))}
        </div>
      )}

      {showExport && (
        <button onClick={handleExport}
          style={{ padding:"0.5rem 1.5rem", background:"transparent",
                   border:"1px solid #39D800", color:"#39D800",
                   fontFamily:"Montserrat,sans-serif", fontSize:"0.65rem",
                   fontWeight:500, letterSpacing:"0.15em", textTransform:"uppercase",
                   cursor:"pointer", borderRadius:2 }}>
          Export SVG
        </button>
      )}
    </div>
  );
}
