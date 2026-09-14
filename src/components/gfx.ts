// Semi-realistic technical illustrations, ported from the 2026 design
// handoff (graphics.js). Each scene is an SVG string rendered into a .gfx
// container. `watch` and `signage` were added for the wearables and digital
// signage categories, using the same material library.

const SAGE = "#7E9B7A", SAGED = "#4F6B4C", BRASS = "#C9A05E", LT = "#EFEBE1";

/* Shared material defs — referenced by every scene */
const DEFS =
  '<defs>' +
  '<linearGradient id="gFace" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3A4653"/><stop offset=".45" stop-color="#2A3441"/><stop offset="1" stop-color="#1E2732"/></linearGradient>' +
  '<linearGradient id="gSide" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#151C25"/><stop offset="1" stop-color="#232D38"/></linearGradient>' +
  '<linearGradient id="gTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A5766"/><stop offset="1" stop-color="#333E4B"/></linearGradient>' +
  '<linearGradient id="gBezel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#55616F"/><stop offset=".25" stop-color="#2E3846"/><stop offset="1" stop-color="#202935"/></linearGradient>' +
  '<linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#20303A"/><stop offset=".5" stop-color="#16222B"/><stop offset="1" stop-color="#101A22"/></linearGradient>' +
  '<linearGradient id="gSheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity=".03"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
  '<linearGradient id="gSage" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9C0A4"/><stop offset="1" stop-color="#5E7C5A"/></linearGradient>' +
  '<linearGradient id="gBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E3C68E"/><stop offset="1" stop-color="#A8813F"/></linearGradient>' +
  '<linearGradient id="gWire" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8FA98A"/><stop offset="1" stop-color="#4E6A4A"/></linearGradient>' +
  '<radialGradient id="gScreenGlow" cx=".5" cy=".42" r=".7"><stop offset="0" stop-color="#9DB89A" stop-opacity=".5"/><stop offset="1" stop-color="#9DB89A" stop-opacity="0"/></radialGradient>' +
  '<radialGradient id="gFloor" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>' +
  '<filter id="fGlow" x="-160%" y="-160%" width="420%" height="420%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
  '<filter id="fGlowLg" x="-120%" y="-120%" width="340%" height="340%"><feGaussianBlur stdDeviation="6"/></filter>' +
  '<filter id="fSoft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3.5"/></filter>' +
  '</defs>';

function svg(vb: string, body: string) {
  return '<svg class="gfx-svg" viewBox="' + vb + '" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + DEFS + body + '</svg>';
}

/* glowing indicator */
function led(x: number, y: number, col: string, r = 2.2) {
  return '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 2.6) + '" fill="' + col + '" opacity=".28" filter="url(#fGlowLg)"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '" filter="url(#fGlow)"/>';
}

/* ============ HERO: server rack in 3/4 perspective ============ */
function rackScene() {
  let units = "", leds = "";
  for (let i = 0; i < 10; i++) {
    const y = 58 + i * 25, on = [0, 1, 3, 4, 5, 7, 8].indexOf(i) > -1;
    if (on) {
      units += '<rect x="40" y="' + y + '" width="104" height="19" rx="2.5" fill="url(#gBezel)"/>' +
        '<rect x="40.5" y="' + (y + .5) + '" width="103" height="18" rx="2" stroke="#000" stroke-opacity=".45"/>' +
        '<rect x="40" y="' + y + '" width="104" height="6" rx="2.5" fill="url(#gSheen)"/>';
      for (let v = 0; v < 11; v++) units += '<rect x="' + (48 + v * 5.2) + '" y="' + (y + 7) + '" width="2.4" height="7" rx="1" fill="#0C1319" opacity=".85"/>';
      leds += led(133, y + 10.5, i % 4 === 1 ? BRASS : SAGE, 1.9);
      leds += '<circle cx="126" cy="' + (y + 10.5) + '" r="1.6" fill="#5D6874" opacity=".7"/>';
    } else {
      units += '<rect x="40" y="' + y + '" width="104" height="19" rx="2.5" fill="#161E27"/>' +
        '<rect x="40.5" y="' + (y + .5) + '" width="103" height="18" rx="2" stroke="#fff" stroke-opacity=".05"/>';
    }
  }
  /* patch panel + cable bundle */
  let ports = "", cable = "";
  for (let p = 0; p < 12; p++) ports += '<rect x="' + (44 + p * 8.4) + '" y="314" width="5.6" height="7" rx="1" fill="#0C1319"/>';
  for (let cb = 0; cb < 8; cb++) {
    const sx = 46.8 + cb * 8.4, ex = 52 + cb * 11, col = cb % 3 === 0 ? "url(#gBrass)" : "url(#gWire)";
    cable += '<path d="M' + sx + ' 321 C' + sx + ' 344,' + ex + ' 340,' + ex + ' 366" stroke="#0B1016" stroke-opacity=".5" stroke-width="3.4" stroke-linecap="round"/>' +
      '<path d="M' + sx + ' 321 C' + sx + ' 344,' + ex + ' 340,' + ex + ' 366" stroke="' + col + '" stroke-width="2.1" stroke-linecap="round"/>';
  }
  return '<ellipse cx="104" cy="372" rx="86" ry="12" fill="url(#gFloor)"/>' +
    '<path d="M34 44 L150 44 L172 28 L56 28 Z" fill="url(#gTop)"/>' +
    '<path d="M150 44 L172 28 L172 314 L150 330 Z" fill="url(#gSide)"/>' +
    '<rect x="34" y="44" width="116" height="286" rx="4" fill="url(#gFace)"/>' +
    '<rect x="34.5" y="44.5" width="115" height="285" rx="4" stroke="#fff" stroke-opacity=".14"/>' +
    units + ports + leds +
    '<rect x="40" y="308" width="104" height="19" rx="2.5" fill="url(#gBezel)"/>' +
    '<rect x="40" y="308" width="104" height="5" rx="2.5" fill="url(#gSheen)"/>' +
    ports +
    cable +
    '<path d="M14 366 H194" stroke="#fff" stroke-opacity=".10" stroke-width="1.2"/>' +
    '<path d="M104 12 a92 92 0 0 1 90 92" stroke="' + SAGE + '" stroke-opacity=".35" stroke-width="1.2"/>' +
    '<path d="M104 12 a92 92 0 0 0 -90 92" stroke="' + SAGE + '" stroke-opacity=".35" stroke-width="1.2"/>';
}

/* ============ stacked servers, perspective ============ */
function serversScene() {
  let srv = '<ellipse cx="82" cy="140" rx="62" ry="8" fill="url(#gFloor)"/>';
  for (let s = 2; s >= 0; s--) {
    const sy = 30 + s * 36;
    srv += '<path d="M22 ' + sy + ' L128 ' + sy + ' L142 ' + (sy - 9) + ' L36 ' + (sy - 9) + ' Z" fill="url(#gTop)"/>' +
      '<path d="M128 ' + sy + ' L142 ' + (sy - 9) + ' L142 ' + (sy + 17) + ' L128 ' + (sy + 26) + ' Z" fill="url(#gSide)"/>' +
      '<rect x="22" y="' + sy + '" width="106" height="26" rx="3" fill="url(#gFace)"/>' +
      '<rect x="22.5" y="' + (sy + .5) + '" width="105" height="25" rx="3" stroke="#fff" stroke-opacity=".13"/>' +
      '<rect x="22" y="' + sy + '" width="106" height="7" rx="3" fill="url(#gSheen)"/>';
    for (let g2 = 0; g2 < 9; g2++) srv += '<rect x="' + (31 + g2 * 6) + '" y="' + (sy + 9) + '" width="2.6" height="9" rx="1.3" fill="#0C1319" opacity=".8"/>';
    srv += led(115, sy + 13, s === 1 ? BRASS : SAGE, 1.8);
    srv += '<circle cx="107" cy="' + (sy + 13) + '" r="1.5" fill="#5D6874" opacity=".7"/>';
  }
  return srv;
}

/* ============ mesh wi-fi — router + propagating field ============ */
function meshScene() {
  let rings = "";
  for (let rr = 0; rr < 5; rr++) {
    rings += '<ellipse cx="80" cy="112" rx="' + (22 + rr * 21) + '" ry="' + (8 + rr * 7.6) + '" stroke="' + SAGE + '" stroke-width="' + (1.5 - rr * .16) + '" stroke-opacity="' + (.55 - rr * .1) + '"/>';
  }
  return '<ellipse cx="80" cy="150" rx="58" ry="8" fill="url(#gFloor)"/>' + rings +
    '<circle cx="80" cy="86" r="26" fill="' + SAGE + '" opacity=".14" filter="url(#fGlowLg)"/>' +
    '<path d="M60 112 L100 112 L108 104 L68 104 Z" fill="url(#gTop)"/>' +
    '<path d="M100 112 L108 104 L108 122 L100 130 Z" fill="url(#gSide)"/>' +
    '<rect x="60" y="112" width="40" height="18" rx="4" fill="url(#gFace)"/>' +
    '<rect x="60.5" y="112.5" width="39" height="17" rx="4" stroke="#fff" stroke-opacity=".16"/>' +
    '<rect x="60" y="112" width="40" height="6" rx="4" fill="url(#gSheen)"/>' +
    led(80, 121, SAGE, 2) +
    '<path d="M80 104 C80 88,72 80,66 74" stroke="#8A939E" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M80 104 C80 88,88 80,94 74" stroke="#8A939E" stroke-width="2" stroke-linecap="round"/>' +
    '<g>' + led(26, 46, BRASS, 2.4) + '<ellipse cx="26" cy="46" rx="14" ry="5" stroke="' + BRASS + '" stroke-opacity=".45" stroke-width="1.2"/></g>' +
    '<g>' + led(136, 54, BRASS, 2.4) + '<ellipse cx="136" cy="54" rx="14" ry="5" stroke="' + BRASS + '" stroke-opacity=".45" stroke-width="1.2"/></g>' +
    '<path d="M32 50 C48 62,58 74,72 84" stroke="' + SAGE + '" stroke-width="1.3" stroke-dasharray="3 5" stroke-opacity=".8"/>' +
    '<path d="M130 58 C114 68,102 76,90 84" stroke="' + SAGE + '" stroke-width="1.3" stroke-dasharray="3 5" stroke-opacity=".8"/>';
}

/* ============ monitoring dashboard — glass screen ============ */
function monitorScene() {
  let mb = "";
  const hv = [16, 26, 19, 34, 27, 43, 31, 50, 38, 29, 45, 22];
  for (let b3 = 0; b3 < hv.length; b3++) {
    mb += '<rect x="' + (30 + b3 * 11.4) + '" y="' + (120 - hv[b3]) + '" width="6.4" height="' + hv[b3] + '" rx="2.4" fill="' + (b3 === 7 ? "url(#gBrass)" : "url(#gSage)") + '" opacity="' + (b3 === 7 ? 1 : .78) + '"/>';
  }
  return '<ellipse cx="96" cy="150" rx="66" ry="7" fill="url(#gFloor)"/>' +
    '<rect x="14" y="16" width="164" height="116" rx="9" fill="url(#gBezel)"/>' +
    '<rect x="20" y="22" width="152" height="104" rx="5" fill="url(#gGlass)"/>' +
    '<rect x="20" y="22" width="152" height="104" rx="5" fill="url(#gScreenGlow)"/>' +
    '<line x1="20" y1="40" x2="172" y2="40" stroke="#fff" stroke-opacity=".12"/>' +
    led(31, 31, SAGE, 1.7) + '<circle cx="41" cy="31" r="1.6" fill="#4E5866"/><circle cx="50" cy="31" r="1.6" fill="#4E5866"/>' +
    '<path d="M30 100 L52 84 L70 92 L92 62 L112 74 L134 52 L156 64 L166 56 L166 118 L30 118 Z" fill="' + SAGE + '" opacity=".16"/>' +
    '<path d="M30 100 L52 84 L70 92 L92 62 L112 74 L134 52 L156 64 L166 56" stroke="' + LT + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" filter="url(#fGlow)"/>' +
    led(134, 52, BRASS, 2.6) +
    '<rect x="20" y="22" width="152" height="40" rx="5" fill="url(#gSheen)" opacity=".5"/>' +
    '<g transform="translate(0,28)">' + mb + '</g>' +
    '<rect x="84" y="132" width="24" height="10" fill="url(#gSide)"/>' +
    '<rect x="66" y="142" width="60" height="5" rx="2.5" fill="url(#gTop)"/>';
}

/* ============ layered security ============ */
function layersScene() {
  return '<circle cx="96" cy="90" r="30" fill="' + SAGED + '" opacity=".3" filter="url(#fGlowLg)"/>' +
    '<circle cx="96" cy="90" r="13" fill="url(#gSage)"/>' +
    '<circle cx="96" cy="90" r="13" stroke="#fff" stroke-opacity=".3"/>' +
    '<circle cx="96" cy="90" r="7" fill="#16222B" opacity=".55"/>' +
    '<circle cx="96" cy="90" r="34" stroke="' + LT + '" stroke-opacity=".85" stroke-width="1.6" stroke-dasharray="40 16"/>' +
    '<circle cx="96" cy="90" r="52" stroke="' + SAGE + '" stroke-opacity=".6" stroke-width="1.4" stroke-dasharray="28 20"/>' +
    '<circle cx="96" cy="90" r="70" stroke="' + SAGE + '" stroke-opacity=".28" stroke-width="1.3" stroke-dasharray="16 24"/>' +
    led(96, 56, BRASS, 2.2) + led(130, 90, BRASS, 2.2) + led(96, 124, BRASS, 2.2) + led(62, 90, BRASS, 2.2) +
    '<circle cx="146" cy="46" r="2" fill="' + LT + '" opacity=".5"/><circle cx="44" cy="140" r="2" fill="' + LT + '" opacity=".4"/>';
}

/* ============ cloud backup — stacked platters ============ */
function cloudScene() {
  let plat = '<ellipse cx="96" cy="140" rx="62" ry="9" fill="url(#gFloor)"/>';
  for (let d3 = 0; d3 < 4; d3++) {
    const dy = 124 - d3 * 20, top = d3 === 3;
    plat += '<ellipse cx="96" cy="' + dy + '" rx="52" ry="15" fill="' + (top ? "url(#gTop)" : "url(#gFace)") + '"/>' +
      '<ellipse cx="96" cy="' + dy + '" rx="52" ry="15" stroke="#fff" stroke-opacity="' + (top ? ".2" : ".1") + '"/>' +
      '<ellipse cx="96" cy="' + (dy - 1.5) + '" rx="46" ry="12" fill="url(#gSheen)" opacity=".35"/>' +
      '<circle cx="96" cy="' + dy + '" r="5" fill="#0F1820"/>';
    if (top) plat += led(96, dy, SAGE, 2);
  }
  return plat +
    '<ellipse cx="96" cy="42" rx="46" ry="14" stroke="' + SAGE + '" stroke-opacity=".5" stroke-width="1.4"/>' +
    '<ellipse cx="96" cy="42" rx="30" ry="9" stroke="' + SAGE + '" stroke-opacity=".8" stroke-width="1.4"/>' +
    '<path d="M96 30 V64 M87 39 L96 30 L105 39" stroke="url(#gBrass)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#fGlow)"/>';
}

/* ============ device fleet ============ */
function fleetScene() {
  let fleet = '<ellipse cx="96" cy="146" rx="80" ry="8" fill="url(#gFloor)"/>';
  for (let r2 = 0; r2 < 2; r2++) for (let c2 = 0; c2 < 3; c2++) {
    const fx = 20 + c2 * 56, fy = 28 + r2 * 58, on2 = (r2 === 0 && c2 === 1);
    fleet += '<rect x="' + fx + '" y="' + fy + '" width="44" height="32" rx="4" fill="url(#gBezel)"/>' +
      '<rect x="' + (fx + 3) + '" y="' + (fy + 3) + '" width="38" height="26" rx="2.5" fill="' + (on2 ? "url(#gGlass)" : "#131C24") + '"/>';
    if (on2) fleet += '<rect x="' + (fx + 3) + '" y="' + (fy + 3) + '" width="38" height="26" rx="2.5" fill="url(#gScreenGlow)"/>' + led(fx + 22, fy + 16, BRASS, 2.2);
    else fleet += '<line x1="' + (fx + 9) + '" y1="' + (fy + 13) + '" x2="' + (fx + 30) + '" y2="' + (fy + 13) + '" stroke="#3C4754" stroke-width="1.4"/><line x1="' + (fx + 9) + '" y1="' + (fy + 19) + '" x2="' + (fx + 24) + '" y2="' + (fy + 19) + '" stroke="#3C4754" stroke-width="1.4"/>';
    fleet += '<rect x="' + (fx + 18) + '" y="' + (fy + 32) + '" width="8" height="5" fill="url(#gSide)"/>' +
      '<rect x="' + (fx + 9) + '" y="' + (fy + 37) + '" width="26" height="3.4" rx="1.7" fill="url(#gTop)"/>' +
      '<rect x="' + fx + '" y="' + fy + '" width="44" height="12" rx="4" fill="url(#gSheen)" opacity=".5"/>';
  }
  return fleet;
}

/* ============ smart home ============ */
function homeScene() {
  return '<ellipse cx="96" cy="156" rx="78" ry="8" fill="url(#gFloor)"/>' +
    '<path d="M96 22 L172 70 L172 148 L20 148 L20 70 Z" fill="url(#gFace)"/>' +
    '<path d="M96 22 L172 70 L20 70 Z" fill="url(#gTop)"/>' +
    '<path d="M96 22 L172 70 L172 148 L20 148 L20 70 Z" stroke="#fff" stroke-opacity=".16" stroke-linejoin="round"/>' +
    '<line x1="96" y1="70" x2="96" y2="148" stroke="#fff" stroke-opacity=".09"/>' +
    '<line x1="20" y1="110" x2="96" y2="110" stroke="#fff" stroke-opacity=".09"/>' +
    '<rect x="84" y="118" width="24" height="30" rx="2" fill="url(#gGlass)"/>' +
    '<g>' + led(58, 90, SAGE, 2.4) + '<circle cx="58" cy="90" r="13" stroke="' + SAGE + '" stroke-opacity=".4" stroke-width="1.2"/></g>' +
    '<g>' + led(58, 130, BRASS, 2.4) + '<circle cx="58" cy="130" r="13" stroke="' + BRASS + '" stroke-opacity=".35" stroke-width="1.2"/></g>' +
    '<g>' + led(134, 108, SAGE, 2.4) + '<circle cx="134" cy="108" r="13" stroke="' + SAGE + '" stroke-opacity=".4" stroke-width="1.2"/></g>' +
    led(96, 52, LT, 1.8);
}

/* ============ conference room ============ */
function roomScene() {
  let seats = "";
  [[38, 92], [74, 80], [118, 80], [154, 92], [56, 136], [136, 136]].forEach(function (s2) {
    seats += '<ellipse cx="' + s2[0] + '" cy="' + s2[1] + '" rx="7" ry="5" fill="url(#gTop)"/>' +
      '<ellipse cx="' + s2[0] + '" cy="' + (s2[1] - 2) + '" rx="7" ry="5" fill="url(#gFace)" stroke="#fff" stroke-opacity=".12"/>';
  });
  return '<ellipse cx="96" cy="150" rx="76" ry="9" fill="url(#gFloor)"/>' + seats +
    '<ellipse cx="96" cy="112" rx="60" ry="24" fill="url(#gSide)"/>' +
    '<ellipse cx="96" cy="108" rx="60" ry="24" fill="url(#gFace)" stroke="#fff" stroke-opacity=".16"/>' +
    '<ellipse cx="96" cy="105" rx="48" ry="17" fill="url(#gSheen)" opacity=".4"/>' +
    '<rect x="60" y="22" width="72" height="22" rx="3" fill="url(#gBezel)"/>' +
    '<rect x="63" y="25" width="66" height="16" rx="2" fill="url(#gGlass)"/>' +
    '<rect x="63" y="25" width="66" height="16" rx="2" fill="url(#gScreenGlow)"/>' +
    led(96, 50, BRASS, 2) +
    '<path d="M96 54 C118 60,132 72,138 86" stroke="' + SAGE + '" stroke-opacity=".5" stroke-width="1.3"/>' +
    '<path d="M96 54 C74 60,60 72,54 86" stroke="' + SAGE + '" stroke-opacity=".5" stroke-width="1.3"/>' +
    '<path d="M96 54 C128 58,150 72,158 94" stroke="' + SAGE + '" stroke-opacity=".22" stroke-width="1.2"/>' +
    '<path d="M96 54 C64 58,42 72,34 94" stroke="' + SAGE + '" stroke-opacity=".22" stroke-width="1.2"/>';
}

/* ============ power / UPS ============ */
function powerScene() {
  let cells = "";
  for (let pc = 0; pc < 4; pc++) {
    cells += '<rect x="' + (46 + pc * 26) + '" y="54" width="18" height="42" rx="2.5" fill="' + (pc < 3 ? "url(#gSage)" : "#28323E") + '"/>' +
      '<rect x="' + (46 + pc * 26) + '" y="54" width="18" height="12" rx="2.5" fill="url(#gSheen)"/>';
  }
  return '<ellipse cx="96" cy="150" rx="68" ry="8" fill="url(#gFloor)"/>' +
    '<path d="M30 36 L162 36 L174 26 L42 26 Z" fill="url(#gTop)"/>' +
    '<path d="M162 36 L174 26 L174 100 L162 110 Z" fill="url(#gSide)"/>' +
    '<rect x="30" y="36" width="132" height="74" rx="5" fill="url(#gFace)"/>' +
    '<rect x="30.5" y="36.5" width="131" height="73" rx="5" stroke="#fff" stroke-opacity=".14"/>' +
    '<rect x="30" y="36" width="132" height="12" rx="5" fill="url(#gSheen)"/>' +
    cells + led(150, 46, SAGE, 2) +
    '<path d="M26 132 L56 132 L68 116 L84 146 L98 124 L112 136 L126 132 L166 132" stroke="url(#gBrass)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" filter="url(#fGlow)"/>';
}

/* ============ AI node graph ============ */
function aiScene() {
  return '<circle cx="96" cy="90" r="34" fill="' + SAGED + '" opacity=".3" filter="url(#fGlowLg)"/>' +
    '<path d="M40 46 L96 90 L152 46 M40 134 L96 90 L152 134 M96 28 L96 90 M96 90 L96 152 M40 46 L40 134 M152 46 L152 134 M40 46 L152 46 M40 134 L152 134" stroke="#fff" stroke-opacity=".1" stroke-width="1.2"/>' +
    '<path d="M40 46 L96 90 L152 134" stroke="url(#gSage)" stroke-width="2.2" filter="url(#fGlow)"/>' +
    '<path d="M96 28 L96 90 L152 46" stroke="' + SAGE + '" stroke-opacity=".55" stroke-width="1.6"/>' +
    '<circle cx="96" cy="90" r="12" fill="url(#gSage)"/><circle cx="96" cy="90" r="12" stroke="#fff" stroke-opacity=".3"/>' +
    '<circle cx="96" cy="90" r="5.5" fill="#16222B" opacity=".5"/>' +
    led(40, 46, SAGE, 3.4) + led(152, 134, BRASS, 3.4) +
    '<circle cx="152" cy="46" r="5.5" fill="url(#gTop)" stroke="#fff" stroke-opacity=".2"/>' +
    '<circle cx="40" cy="134" r="5.5" fill="url(#gTop)" stroke="#fff" stroke-opacity=".2"/>' +
    '<circle cx="96" cy="28" r="5.5" fill="url(#gTop)" stroke="#fff" stroke-opacity=".2"/>' +
    '<circle cx="96" cy="152" r="5.5" fill="url(#gTop)" stroke="#fff" stroke-opacity=".2"/>';
}

/* ============ network topology ============ */
function nodeBox(x: number, y: number, w: number, hh: number) {
  return '<path d="M' + x + ' ' + y + ' L' + (x + w) + ' ' + y + ' L' + (x + w + 7) + ' ' + (y - 6) + ' L' + (x + 7) + ' ' + (y - 6) + ' Z" fill="url(#gTop)"/>' +
    '<path d="M' + (x + w) + ' ' + y + ' L' + (x + w + 7) + ' ' + (y - 6) + ' L' + (x + w + 7) + ' ' + (y + hh - 6) + ' L' + (x + w) + ' ' + (y + hh) + ' Z" fill="url(#gSide)"/>' +
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="3" fill="url(#gFace)" stroke="#fff" stroke-opacity=".14"/>' +
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (hh / 3) + '" rx="3" fill="url(#gSheen)"/>';
}
function netScene() {
  return '<ellipse cx="96" cy="158" rx="80" ry="8" fill="url(#gFloor)"/>' +
    '<path d="M96 92 C96 56,50 58,40 38 M96 92 C96 56,142 58,152 38 M96 100 C96 130,50 126,40 146 M96 100 C96 130,142 126,152 146" stroke="url(#gWire)" stroke-width="1.8" stroke-opacity=".85"/>' +
    nodeBox(20, 24, 40, 22) + nodeBox(132, 24, 40, 22) + nodeBox(20, 132, 40, 22) + nodeBox(132, 132, 40, 22) +
    '<circle cx="96" cy="96" r="30" fill="' + SAGE + '" opacity=".16" filter="url(#fGlowLg)"/>' +
    nodeBox(68, 84, 56, 24) +
    led(82, 96, SAGE, 1.8) + led(96, 96, BRASS, 1.8) + '<circle cx="110" cy="96" r="1.7" fill="#4E5866"/>';
}

/* ============ remote session ============ */
function remoteScene() {
  return '<ellipse cx="96" cy="140" rx="82" ry="8" fill="url(#gFloor)"/>' +
    '<rect x="10" y="34" width="74" height="52" rx="6" fill="url(#gBezel)"/>' +
    '<rect x="14" y="38" width="66" height="44" rx="3" fill="#131C24"/>' +
    '<line x1="22" y1="50" x2="60" y2="50" stroke="#3C4754" stroke-width="1.4"/><line x1="22" y1="58" x2="52" y2="58" stroke="#3C4754" stroke-width="1.4"/><line x1="22" y1="66" x2="56" y2="66" stroke="#3C4754" stroke-width="1.4"/>' +
    '<rect x="38" y="86" width="18" height="6" fill="url(#gSide)"/><rect x="26" y="92" width="42" height="4" rx="2" fill="url(#gTop)"/>' +
    '<rect x="108" y="34" width="74" height="52" rx="6" fill="url(#gBezel)"/>' +
    '<rect x="112" y="38" width="66" height="44" rx="3" fill="url(#gGlass)"/>' +
    '<rect x="112" y="38" width="66" height="44" rx="3" fill="url(#gScreenGlow)"/>' +
    '<rect x="112" y="38" width="66" height="18" rx="3" fill="url(#gSheen)" opacity=".55"/>' +
    '<circle cx="145" cy="60" r="12" stroke="' + SAGE + '" stroke-width="1.6"/>' + led(145, 60, SAGE, 2.6) +
    '<rect x="136" y="86" width="18" height="6" fill="url(#gSide)"/><rect x="124" y="92" width="42" height="4" rx="2" fill="url(#gTop)"/>' +
    '<path d="M86 50 C96 50,96 42,106 42" stroke="url(#gSage)" stroke-width="1.8" stroke-dasharray="4 4" filter="url(#fGlow)"/>' +
    '<path d="M106 74 C96 74,96 66,86 66" stroke="url(#gBrass)" stroke-width="1.8" stroke-dasharray="4 4"/>' +
    '<path d="M96 118 a48 48 0 0 1 46 18" stroke="' + SAGE + '" stroke-opacity=".2" stroke-width="1.2"/>' +
    '<path d="M96 118 a48 48 0 0 0 -46 18" stroke="' + SAGE + '" stroke-opacity=".2" stroke-width="1.2"/>';
}

/* ============ smartwatch (wearables) ============ */
function watchScene() {
  return '<ellipse cx="96" cy="154" rx="64" ry="8" fill="url(#gFloor)"/>' +
    /* strap */
    '<rect x="74" y="6" width="44" height="42" rx="9" fill="url(#gSide)"/>' +
    '<rect x="74" y="120" width="44" height="30" rx="9" fill="url(#gSide)"/>' +
    '<line x1="80" y1="18" x2="112" y2="18" stroke="#fff" stroke-opacity=".06"/><line x1="80" y1="138" x2="112" y2="138" stroke="#fff" stroke-opacity=".06"/>' +
    /* case + crown */
    '<rect x="138" y="68" width="7" height="18" rx="2.5" fill="url(#gTop)"/>' +
    '<rect x="56" y="36" width="82" height="94" rx="22" fill="url(#gBezel)"/>' +
    '<rect x="56.5" y="36.5" width="81" height="93" rx="22" stroke="#fff" stroke-opacity=".14"/>' +
    '<rect x="63" y="43" width="68" height="80" rx="16" fill="url(#gGlass)"/>' +
    '<rect x="63" y="43" width="68" height="80" rx="16" fill="url(#gScreenGlow)"/>' +
    /* activity ring */
    '<circle cx="97" cy="74" r="19" stroke="#2A3441" stroke-width="5"/>' +
    '<path d="M97 55 a19 19 0 1 1 -18 25" stroke="url(#gSage)" stroke-width="5" stroke-linecap="round" filter="url(#fGlow)"/>' +
    led(97, 74, BRASS, 2) +
    /* heartbeat */
    '<path d="M72 106 L84 106 L88 98 L94 114 L100 101 L104 106 L122 106" stroke="url(#gBrass)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" filter="url(#fGlow)"/>' +
    '<rect x="63" y="43" width="68" height="30" rx="16" fill="url(#gSheen)" opacity=".55"/>' +
    /* signal arcs */
    '<path d="M150 34 a14 14 0 0 1 14 14" stroke="' + SAGE + '" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>' +
    '<path d="M150 22 a26 26 0 0 1 26 26" stroke="' + SAGE + '" stroke-opacity=".3" stroke-width="1.3" stroke-linecap="round"/>' +
    '<circle cx="36" cy="120" r="2" fill="' + LT + '" opacity=".4"/><circle cx="28" cy="52" r="1.6" fill="' + LT + '" opacity=".35"/>';
}

/* ============ digital signage display ============ */
function signageScene() {
  return '<ellipse cx="96" cy="156" rx="72" ry="8" fill="url(#gFloor)"/>' +
    /* stand */
    '<rect x="90" y="118" width="12" height="30" fill="url(#gSide)"/>' +
    '<rect x="62" y="146" width="68" height="6" rx="3" fill="url(#gTop)"/>' +
    /* display */
    '<rect x="12" y="16" width="168" height="104" rx="7" fill="url(#gBezel)"/>' +
    '<rect x="12.5" y="16.5" width="167" height="103" rx="7" stroke="#fff" stroke-opacity=".12"/>' +
    '<rect x="17" y="21" width="158" height="94" rx="4" fill="url(#gGlass)"/>' +
    '<rect x="17" y="21" width="158" height="94" rx="4" fill="url(#gScreenGlow)"/>' +
    /* feature panel */
    '<rect x="25" y="29" width="84" height="52" rx="4" fill="' + SAGE + '" opacity=".2"/>' +
    '<rect x="33" y="40" width="54" height="6" rx="3" fill="' + LT + '" opacity=".85"/>' +
    '<rect x="33" y="52" width="40" height="4" rx="2" fill="' + LT + '" opacity=".4"/>' +
    '<rect x="33" y="65" width="26" height="8" rx="4" fill="url(#gBrass)"/>' +
    /* side tiles */
    '<rect x="117" y="29" width="50" height="23" rx="4" fill="#27313D"/>' +
    '<rect x="123" y="36" width="30" height="3" rx="1.5" fill="' + LT + '" opacity=".45"/><rect x="123" y="43" width="20" height="3" rx="1.5" fill="' + LT + '" opacity=".25"/>' +
    '<rect x="117" y="58" width="50" height="23" rx="4" fill="#27313D"/>' +
    '<path d="M123 75 L131 68 L138 72 L147 63 L161 67" stroke="' + SAGE + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    /* ticker */
    '<rect x="25" y="89" width="142" height="18" rx="4" fill="#1E2732"/>' +
    led(36, 98, SAGE, 1.6) +
    '<line x1="46" y1="98" x2="112" y2="98" stroke="#3C4754" stroke-width="1.6" stroke-linecap="round"/>' +
    '<line x1="120" y1="98" x2="156" y2="98" stroke="#3C4754" stroke-width="1.6" stroke-linecap="round"/>' +
    '<rect x="17" y="21" width="158" height="36" rx="4" fill="url(#gSheen)" opacity=".5"/>';
}

export type GfxName =
  | "rack" | "servers" | "mesh" | "monitor" | "layers" | "cloud" | "fleet"
  | "home" | "room" | "power" | "ai" | "net" | "remote" | "watch" | "signage";

export const GFX: Record<GfxName, string> = {
  rack: svg("0 0 208 384", rackScene()),
  servers: svg("0 0 164 152", serversScene()),
  mesh: svg("0 0 160 164", meshScene()),
  monitor: svg("0 0 192 156", monitorScene()),
  layers: svg("0 0 192 180", layersScene()),
  cloud: svg("0 0 192 152", cloudScene()),
  fleet: svg("0 0 192 156", fleetScene()),
  home: svg("0 0 192 168", homeScene()),
  room: svg("0 0 192 162", roomScene()),
  power: svg("0 0 192 160", powerScene()),
  ai: svg("0 0 192 180", aiScene()),
  net: svg("0 0 192 168", netScene()),
  remote: svg("0 0 192 150", remoteScene()),
  watch: svg("0 0 192 164", watchScene()),
  signage: svg("0 0 192 164", signageScene()),
};
