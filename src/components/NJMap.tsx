import { geoArea, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import countiesTopo from "us-atlas/counties-10m.json";
import { SERVED_COUNTIES } from "@/data/site";

// Real county geometry (US Census TIGER via us-atlas), projected at build time
// so the page ships a static SVG — no client-side d3 or data fetch.

const W = 420;
const H = 441;

const fips = (f: Feature) => String(f.id).padStart(5, "0");
const trim = (d: string | null) => (d ?? "").replace(/(\.\d)\d+/g, "$1");

export default function NJMap() {
  const topo = countiesTopo as unknown as Topology<{ counties: GeometryCollection }>;
  const all = feature(topo, topo.objects.counties) as FeatureCollection<Geometry>;
  const feats = all.features.filter((f) => fips(f).startsWith("34"));
  const nj: FeatureCollection<Geometry> = { type: "FeatureCollection", features: feats };

  const path = geoPath(geoMercator().fitExtent([[10, 10], [W - 10, H - 28]], nj));
  const served = feats.filter((f) => SERVED_COUNTIES[fips(f)]);
  const unserved = feats.filter((f) => !SERVED_COUNTIES[fips(f)]);

  // Every served county gets a dot; labels only for the larger counties and
  // only where they don't collide — the chip list names all thirteen.
  const maxArea = Math.max(...served.map((f) => geoArea(f))) || 1;
  const placed: { x1: number; x2: number; y1: number; y2: number }[] = [];
  const dots: [number, number][] = [];
  const labels: { x: number; y: number; name: string }[] = [];
  for (const f of served) {
    const [cx, cy] = path.centroid(f);
    if (!Number.isFinite(cx)) continue;
    dots.push([cx, cy]);
    if (geoArea(f) < maxArea * 0.34) continue;
    const name = SERVED_COUNTIES[fips(f)].toUpperCase();
    const tw = name.length * 5.6 + 4;
    const b = { x1: cx - tw / 2, x2: cx + tw / 2, y1: cy - 20, y2: cy - 8 };
    if (placed.some((p) => !(b.x2 < p.x1 || b.x1 > p.x2 || b.y2 < p.y1 || b.y1 > p.y2))) continue;
    placed.push(b);
    labels.push({ x: cx, y: cy - 9, name });
  }

  const textStyle = { fontFamily: "var(--f-text)" };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Map of New Jersey highlighting the 13 counties where Double Click Computing provides on-site service"
    >
      <g>
        {unserved.map((f) => (
          <path key={fips(f)} d={trim(path(f))} fill="#DDD7C8" stroke="#F7F5EF" strokeWidth={1} />
        ))}
      </g>
      <g>
        {served.map((f) => (
          <path
            key={fips(f)}
            d={trim(path(f))}
            fill="#7E9B7A"
            fillOpacity={0.5}
            stroke="#4F6B4C"
            strokeWidth={1}
            strokeLinejoin="round"
          />
        ))}
      </g>
      <path d={trim(path(nj))} fill="none" stroke="#1B2430" strokeWidth={1.2} strokeLinejoin="round" pointerEvents="none" />
      <g pointerEvents="none">
        {dots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={2.8} fill="#1B2430" />
        ))}
        {labels.map((l) => (
          <text
            key={l.name}
            x={l.x.toFixed(1)}
            y={l.y.toFixed(1)}
            textAnchor="middle"
            fill="#1B2430"
            fontSize={9}
            fontWeight={600}
            letterSpacing=".06em"
            style={textStyle}
          >
            {l.name}
          </text>
        ))}
      </g>
      <text
        x={W / 2}
        y={H - 6}
        textAnchor="middle"
        fill="#5E6775"
        fontSize={10}
        fontWeight={600}
        letterSpacing=".14em"
        style={textStyle}
      >
        13 ON-SITE COUNTIES
      </text>
    </svg>
  );
}
