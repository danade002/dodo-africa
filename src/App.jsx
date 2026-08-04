import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Egg,
  Store,
  UtensilsCrossed,
  Sprout,
  MapPin,
  TrendingUp,
  Check,
  ShieldCheck,
  Activity,
  Flame,
  Quote,
  Fish,
  Shell,
  Truck,
  HeartHandshake,
  Package,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

/* ============================================================
   DODO AFRICA

   Corporate visual system:
   Red       = Dodo Africa master brand
   Deep green = agriculture, trust, operations
   White / near-white green = clean surfaces

   Photography:
   Local editorial agriculture, market and food photography.
   ============================================================ */

const C = {
  red: "#FF0000",
  redDeep: "#D90000",
  redSoft: "#FFF0F0",

  green: "#006837",
  green2: "#0F7C46",
  greenDeep: "#006837",
  footerGreen: "#006837",
  footerGreenDeep: "#002D18",
  leaf: "#8CF9BB",
  harvest: "#F2B94B",

  // Deliberately extremely close to white.
  mist: "#F8FFFB",
  mist2: "#F1FFF7",
  greenMist: "#F1FFF7",
  paper: "#FDFFFE",

  white: "#FFFFFF",

  ink: "#173126",
  inkSoft: "#5C6B63",
  muted: "#78817B",

  border: "rgba(0,104,55,0.14)",
  borderStrong: "#8CF9BB",

  shadow: "0 8px 24px rgba(0,104,55,0.055)",
  shadowLarge: "0 22px 70px rgba(0,104,55,0.14)",
};

const SERIF = {
  fontFamily:
    "'Host Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const BODY = {
  fontFamily:
    "'Host Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const MONO = {
  fontFamily:
    "'Host Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

/* ============================================================
   LOGO

   IMPORTANT:
   Logo files:
   - public/images/dodo-africa-logo-red.png for light surfaces
   - public/images/dodo-africa-logo-white.png for dark green,
     red and photo-overlay surfaces

   The logo ALREADY includes the Dodo Africa wordmark.
   We therefore never place "Dodo Africa" text beside it in nav.
   ============================================================ */

const LOGO_SRC = "/images/dodo-africa-logo-red.png";
const NAV_LOGO_SRC = "/images/dodo-africa-logo-white.png";
const FOOTER_LOGO_SRC = "/images/dodo-africa-logo-white.png";

/* ============================================================
   REAL NIGERIAN PHOTOGRAPHY

   Runtime performance:
   Photos are vendored locally so visitors are not waiting on
   third-party image requests for the first page paint.
   ============================================================ */

const SITE_IMAGE_DIR = "/images/site";

function siteImage(name) {
  return `${SITE_IMAGE_DIR}/${name}.webp`;
}

function siteJpg(name) {
  return `${SITE_IMAGE_DIR}/${name}.jpg`;
}

const IMG = {
  hero: siteJpg("home-farmers-harvest-hero"),

  plantain: siteJpg("plantain-grove-close"),
  enterpriseCollage: siteImage("enterprise-collage"),

  poultry: siteImage("poultry-barn"),
  poultryStory: siteImage("poultry-barn"),

  fish: siteImage("catfish-farming"),

  snail: siteImage("snail-farming"),

  goat: siteImage("goats-farm"),
  goatPeople: siteJpg("goat-farm-people-color"),

  story: siteImage("story-smiling-farmer"),
  fieldWork: siteImage("farm-worker-crops"),

  founderDaniel: `${SITE_IMAGE_DIR}/ademeso-daniel.jpeg`,

  model: siteJpg("model-integrated-farm-aerial"),

  martHero: siteJpg("farm-mart-nigerian-hero"),

  market: `${SITE_IMAGE_DIR}/supermarket-produce.jpg`,
  openMarket: siteImage("mart-open-market"),

  eatery: siteImage("eatery-plantain-skewers"),

  partners: siteImage("farmers-harvest-sacks"),

  partnerOfftake: siteJpg("partner-real-offtake-buyers"),
  partnerSuppliers: siteJpg("partner-suppliers-truck"),
  partnerFinance: siteJpg("partner-real-financial-institutions"),
  partnerDistribution: siteJpg("partner-distribution-market"),
  partnerTechnology: siteJpg("partner-real-technology"),
  partnerCommunities: siteJpg("partner-real-communities"),
};

const IMAGE_PRELOADS = [
  NAV_LOGO_SRC,
  LOGO_SRC,
  IMG.hero,
  IMG.plantain,
  IMG.poultry,
  IMG.fish,
  IMG.snail,
  IMG.goat,
];
const PAGE_PRELOADS = Array.from(
  new Set([
    IMG.story,
    IMG.fieldWork,
    IMG.founderDaniel,
    IMG.model,
    IMG.martHero,
    IMG.market,
    IMG.openMarket,
    IMG.eatery,
    IMG.partners,
    IMG.plantain,
    IMG.poultry,
    IMG.poultryStory,
    IMG.fish,
    IMG.snail,
    IMG.goat,
    IMG.goatPeople,
    IMG.partnerOfftake,
    IMG.partnerSuppliers,
    IMG.partnerFinance,
    IMG.partnerDistribution,
    IMG.partnerTechnology,
    IMG.partnerCommunities,
  ])
);

const PAGE_PATHS = {
  home: "/",
  story: "/our-story",
  model: "/model",
  mart: "/farm-mart_eatery",
  partners: "/partner",
};

const PATH_PAGES = {
  "/": "home",
  "/our-story": "story",
  "/model": "model",
  "/farm-mart_eatery": "mart",
  "/farm-mart-eatery": "mart",
  "/partner": "partners",
  "/partners": "partners",
};

const HERO_SHAPES = {
  leaf: {
    clipA:
      "polygon(10% 18%, 47% 2%, 89% 11%, 100% 48%, 82% 88%, 43% 100%, 7% 80%, 0% 41%)",
    clipB:
      "polygon(7% 22%, 44% 0%, 91% 15%, 98% 53%, 78% 92%, 40% 99%, 5% 76%, 2% 36%)",
    clipC:
      "polygon(14% 15%, 52% 1%, 88% 18%, 100% 45%, 84% 84%, 47% 100%, 10% 83%, 0% 45%)",
    radiusA: "58% 42% 62% 38% / 42% 58% 42% 58%",
    radiusB: "49% 51% 66% 34% / 45% 61% 39% 55%",
    radiusC: "62% 38% 56% 44% / 44% 55% 45% 56%",
  },
  pod: {
    clipA:
      "polygon(5% 35%, 20% 10%, 53% 0%, 87% 12%, 100% 43%, 91% 77%, 64% 98%, 25% 91%, 1% 62%)",
    clipB:
      "polygon(3% 40%, 18% 13%, 49% 1%, 86% 9%, 98% 39%, 94% 73%, 67% 100%, 24% 94%, 0% 65%)",
    clipC:
      "polygon(7% 31%, 24% 8%, 57% 0%, 89% 16%, 100% 47%, 87% 80%, 60% 99%, 20% 88%, 0% 57%)",
    radiusA: "47% 53% 44% 56% / 55% 42% 58% 45%",
    radiusB: "42% 58% 51% 49% / 49% 48% 52% 51%",
    radiusC: "53% 47% 40% 60% / 58% 39% 61% 42%",
  },
  harvest: {
    clipA:
      "polygon(13% 5%, 62% 0%, 98% 30%, 100% 73%, 71% 100%, 25% 93%, 0% 58%)",
    clipB:
      "polygon(9% 8%, 60% 1%, 96% 25%, 99% 71%, 74% 98%, 28% 96%, 1% 62%)",
    clipC:
      "polygon(17% 3%, 65% 0%, 100% 34%, 96% 76%, 67% 100%, 22% 89%, 0% 54%)",
    radiusA: "40% 60% 54% 46% / 36% 47% 53% 64%",
    radiusB: "47% 53% 50% 50% / 41% 52% 48% 59%",
    radiusC: "36% 64% 58% 42% / 34% 44% 56% 66%",
  },
  market: {
    clipA:
      "polygon(0% 21%, 28% 2%, 74% 0%, 100% 25%, 93% 82%, 56% 100%, 11% 88%)",
    clipB:
      "polygon(2% 16%, 31% 0%, 78% 3%, 99% 29%, 91% 79%, 58% 98%, 8% 91%)",
    clipC:
      "polygon(0% 26%, 25% 4%, 70% 0%, 100% 22%, 96% 84%, 51% 100%, 12% 84%)",
    radiusA: "38% 62% 44% 56% / 31% 42% 58% 69%",
    radiusB: "44% 56% 39% 61% / 36% 47% 53% 64%",
    radiusC: "34% 66% 47% 53% / 30% 39% 61% 70%",
  },
};

/* ============================================================
   AFRICA CONTINENT SHAPE

   Traced continent outline (mainland + Madagascar) used to clip
   the home page enterprise photo mosaic into a recognisable
   Africa silhouette.
   ============================================================ */

const AFRICA_SHAPE = {
  viewBox: "0 0 854 1008",
  transform: "translate(0,1008) scale(0.1,-0.1)",
  mainland:
    "M3295 10019 c-25 -16 -41 -19 -90 -14 -180 17 -215 17 -215 1 0 -19 3 -19 -210 -21 -117 -1 -172 -5 -190 -14 -13 -8 -63 -18 -110 -23 -94 -9 -185 -46 -195 -78 -4 -13 -15 -20 -33 -20 -46 0 -102 -20 -115 -41 -34 -56 -187 -84 -202 -36 -4 13 -8 17 -12 10 -3 -9 -35 -13 -108 -13 -111 0 -112 0 -150 65 -13 22 -73 12 -82 -13 -60 -173 -121 -250 -230 -291 -77 -29 -169 -116 -179 -170 -4 -19 -20 -53 -36 -76 -30 -42 -55 -156 -37 -163 28 -11 8 -85 -38 -143 -86 -110 -196 -188 -294 -208 -64 -13 -76 -25 -108 -102 -22 -56 -48 -87 -107 -127 -35 -24 -68 -91 -85 -174 -10 -46 -20 -61 -75 -115 -44 -42 -64 -69 -64 -86 0 -13 -13 -49 -30 -80 -16 -31 -30 -62 -30 -68 0 -6 -13 -23 -29 -38 -28 -26 -56 -101 -63 -166 -2 -24 1 -31 19 -33 12 -2 25 -12 28 -23 4 -10 13 -19 21 -19 17 0 19 -52 4 -130 -7 -37 -7 -56 0 -60 35 -22 41 -200 10 -288 -11 -31 -29 -92 -40 -134 -22 -87 -59 -153 -95 -170 -30 -14 -32 -24 -5 -31 42 -11 61 -84 54 -205 l-7 -110 27 -17 c22 -15 26 -24 26 -66 0 -27 5 -49 10 -49 6 0 10 -13 10 -30 0 -16 5 -30 10 -30 6 0 10 5 10 10 0 6 23 10 50 10 44 0 52 -3 61 -24 7 -14 22 -27 34 -30 16 -4 26 -16 30 -36 4 -16 10 -30 15 -30 4 0 25 -16 46 -35 22 -19 42 -35 47 -35 4 0 7 -7 7 -16 0 -9 9 -27 20 -41 15 -19 20 -41 20 -82 0 -44 4 -60 20 -74 14 -12 20 -29 20 -57 0 -37 3 -41 30 -46 16 -4 30 -9 30 -13 0 -4 21 -18 48 -31 44 -23 68 -42 135 -104 16 -15 46 -38 67 -51 21 -13 56 -45 77 -70 40 -49 125 -107 207 -143 59 -27 61 -27 95 -3 15 11 40 23 57 27 16 4 46 15 67 26 125 62 371 58 493 -10 18 -10 26 -8 48 9 14 11 49 28 79 38 29 10 78 33 108 50 36 20 69 31 94 31 31 0 44 6 64 30 32 37 146 60 305 60 90 0 102 -2 131 -24 29 -22 95 -137 95 -165 0 -25 32 -71 58 -84 19 -9 45 -11 87 -5 33 4 108 10 168 14 l107 7 0 -44 c-1 -35 -6 -50 -30 -73 -33 -33 -38 -51 -14 -60 22 -9 22 -9 39 24 14 26 21 30 59 30 55 0 56 -3 56 -134 0 -96 -2 -106 -27 -142 -26 -36 -28 -48 -33 -164 l-5 -124 -30 -16 c-16 -8 -31 -16 -33 -16 -1 -1 10 -30 26 -65 17 -35 39 -84 50 -109 11 -25 41 -65 67 -90 26 -25 64 -70 86 -101 21 -31 61 -80 89 -108 27 -28 50 -56 50 -63 0 -8 10 -31 22 -53 20 -39 30 -72 47 -163 4 -24 17 -56 29 -71 58 -78 96 -254 68 -309 -11 -22 -13 -38 -7 -54 5 -13 16 -48 26 -78 10 -30 27 -71 39 -90 45 -75 13 -273 -46 -282 -16 -2 -26 -13 -33 -35 -6 -18 -20 -42 -31 -55 -20 -23 -35 -72 -69 -233 -10 -44 -23 -89 -30 -100 -7 -11 -15 -77 -19 -150 -8 -153 3 -202 58 -270 20 -24 47 -72 61 -107 53 -140 96 -232 143 -310 l49 -83 7 -136 c5 -93 13 -152 25 -185 10 -27 21 -91 25 -143 3 -52 10 -99 15 -105 5 -6 11 -24 14 -41 18 -98 59 -178 120 -233 36 -31 79 -113 97 -182 17 -65 54 -149 95 -217 43 -71 53 -193 16 -193 -24 0 -37 -31 -19 -45 22 -17 38 -63 38 -110 0 -67 6 -75 56 -75 34 0 49 -5 65 -24 32 -37 62 -40 105 -11 30 21 49 25 104 25 58 0 71 3 95 26 28 26 29 26 174 24 234 -5 252 -3 258 20 4 16 14 20 47 20 59 0 128 36 231 121 118 96 292 280 336 353 19 32 43 74 54 93 34 56 75 103 90 103 8 0 15 5 15 10 0 6 7 10 15 10 20 0 42 47 71 153 14 51 30 100 35 109 5 10 9 56 9 102 l0 85 43 25 c23 14 79 39 124 57 120 47 146 77 155 182 14 175 10 287 -11 287 -15 0 -19 9 -23 55 -3 31 -12 63 -21 73 -25 27 -23 99 3 107 11 3 43 33 72 66 33 38 62 62 80 66 16 3 30 14 34 26 3 11 19 31 35 45 16 13 29 29 29 35 1 30 129 111 219 138 23 7 45 18 48 25 3 7 24 25 48 38 24 15 57 47 74 73 17 27 43 63 56 82 14 19 25 46 25 60 0 15 5 32 12 39 9 9 9 23 0 59 -14 63 -25 404 -14 468 10 59 -6 95 -56 125 -25 15 -31 27 -37 72 -4 29 -14 62 -21 73 -22 31 -19 145 4 145 19 0 42 18 42 32 0 4 -12 8 -26 8 l-26 0 7 93 c5 50 7 97 6 102 -15 83 -12 113 11 117 28 4 41 68 14 68 -37 0 -4 164 46 229 10 13 18 36 18 50 0 32 16 51 43 51 10 0 21 9 24 20 3 11 9 20 14 20 5 0 9 6 9 14 0 7 12 19 28 25 25 11 92 105 92 130 0 6 4 11 9 11 5 0 36 38 69 83 82 113 210 241 307 309 118 82 294 268 341 361 9 17 39 67 67 111 29 44 58 106 68 143 10 35 32 87 49 114 17 28 34 65 37 82 3 18 14 40 24 50 10 10 22 30 25 45 4 15 22 55 41 90 26 50 33 76 33 118 0 51 2 54 24 54 14 0 28 5 31 10 3 6 -1 10 -9 10 -12 0 -16 18 -18 97 l-3 97 -30 8 c-26 7 -33 4 -55 -21 -33 -39 -97 -55 -315 -77 -37 -4 -74 -16 -97 -30 -30 -19 -51 -24 -103 -24 -55 0 -72 -4 -99 -25 -26 -20 -45 -25 -89 -25 -61 0 -72 7 -112 71 -14 20 -29 40 -35 44 -6 4 -10 33 -9 68 2 64 -29 147 -55 147 -14 1 -76 56 -76 69 0 5 -26 35 -57 68 -32 32 -68 70 -80 86 -13 15 -29 27 -35 27 -32 1 -68 49 -68 90 0 28 -4 40 -15 40 -8 0 -19 9 -25 20 -8 15 -21 20 -55 20 -44 0 -44 1 -55 43 -6 23 -15 58 -20 77 -14 52 -74 190 -83 190 -9 0 -23 11 -68 53 -16 15 -34 27 -39 27 -29 0 -60 144 -60 279 0 52 -5 74 -19 92 -10 13 -21 38 -25 54 -7 32 -85 120 -115 130 -40 12 -73 146 -39 157 6 2 -9 25 -33 50 -43 45 -170 283 -198 369 -20 64 -15 109 13 109 22 0 25 7 41 78 9 42 22 97 29 122 12 43 10 49 -34 165 -39 101 -49 120 -65 117 -84 -12 -113 -14 -179 -7 -71 6 -76 8 -76 30 0 21 -5 23 -52 27 -29 2 -54 0 -56 -4 -2 -4 -16 -8 -32 -8 -32 0 -60 -13 -112 -53 -33 -25 -44 -28 -85 -24 -80 10 -123 19 -129 28 -3 5 -13 9 -23 9 -10 0 -31 7 -48 15 -40 20 -123 35 -194 35 -45 0 -59 4 -59 14 0 25 -30 46 -68 46 -69 1 -167 34 -170 59 -4 24 -58 56 -114 66 -58 11 -174 -29 -221 -76 l-39 -38 8 -91 c6 -86 5 -92 -16 -115 -34 -36 -126 -36 -159 -1 -34 36 -128 74 -212 86 -89 12 -119 32 -139 92 -20 57 -37 78 -64 78 -12 0 -44 12 -71 27 -42 22 -66 27 -145 31 -143 6 -230 52 -230 122 0 16 -7 20 -30 20 -28 0 -30 2 -30 41 0 32 7 49 30 76 40 45 42 102 5 131 -35 28 -35 89 0 122 41 38 30 64 -27 68 -27 2 -48 7 -48 13 0 18 -113 9 -145 -12z",
  madagascar:
    "M8160 3236 c0 -8 -11 -23 -25 -34 -21 -17 -25 -28 -25 -71 l0 -51 -40 0 c-33 0 -40 -4 -40 -19 0 -10 -9 -21 -20 -24 -16 -4 -20 -14 -20 -47 0 -23 -6 -48 -15 -56 -8 -9 -15 -24 -15 -35 0 -10 -6 -19 -13 -19 -14 0 -57 -52 -57 -70 0 -5 -9 -10 -20 -10 -10 0 -35 -14 -53 -30 -19 -17 -50 -33 -68 -37 -19 -3 -40 -12 -47 -20 -7 -7 -24 -13 -36 -13 -13 0 -29 -7 -36 -15 -7 -8 -25 -15 -41 -15 -26 0 -29 -3 -29 -32 0 -20 -14 -55 -35 -89 -37 -61 -38 -85 -6 -254 19 -100 14 -157 -19 -209 -17 -27 -34 -62 -37 -78 -3 -17 -14 -33 -26 -37 -44 -16 -73 -173 -43 -235 10 -22 16 -61 16 -109 0 -108 52 -217 103 -217 10 0 30 -9 44 -20 34 -27 63 -25 107 5 20 14 47 25 60 25 84 0 109 39 197 310 37 113 57 169 180 525 34 100 65 207 68 240 5 53 9 60 31 65 24 6 25 9 21 73 -3 67 -3 67 23 67 34 0 61 56 51 104 -3 17 -12 80 -20 140 -14 106 -40 206 -54 206 -3 0 -15 23 -26 50 -19 48 -35 65 -35 36z",
};

function cleanPath(pathname) {
  if (!pathname || pathname === "/") return "/";

  return pathname.replace(/\/+$/, "") || "/";
}

function pageFromPath(pathname) {
  return PATH_PAGES[cleanPath(pathname)] || "home";
}

function pathForPage(page) {
  return PAGE_PATHS[page] || PAGE_PATHS.home;
}

/* ============================================================
   DATA
   ============================================================ */

const PHASES = [
  {
    n: 0,
    title: "Foundation",
    when: "Month 0 to 1",
    state: "done",
  },
  {
    n: 1,
    title: "Launch & Plant",
    when: "Month 1 to 3",
    state: "current",
  },
  {
    n: 2,
    title: "Build Proof",
    when: "Month 3 to 6",
    state: "upcoming",
  },
  {
    n: 3,
    title: "Pre-Harvest Ramp",
    when: "Month 6 to 10",
    state: "upcoming",
  },
  {
    n: 4,
    title: "Harvest",
    when: "Month 10 to 12",
    state: "upcoming",
  },
  {
    n: 5,
    title: "Scale",
    when: "Month 12+",
    state: "upcoming",
  },
];

const FARMS = [
  {
    name: "Plantain",
    qty: "8,500",
    unit: "suckers planned for cultivation",
    photo: IMG.plantain,
    photoPosition: "center 34%",
  },
  {
    name: "Poultry",
    qty: "500",
    unit: "birds currently growing",
    photo: IMG.poultry,
    photoPosition: "center 44%",
  },
  {
    name: "Fishery",
    qty: "20,000",
    unit: "planned production capacity per cycle",
    photo: IMG.fish,
    photoPosition: "center 42%",
  },
  {
    name: "Snail",
    qty: "1,000",
    unit: "planned breeder stock",
    photo: IMG.snail,
    photoPosition: "center",
  },
  {
    name: "Goat",
    qty: "50",
    unit: "planned foundation herd",
    photo: IMG.goat,
    photoPosition: "center 45%",
  },
];

const SUBS = [
  {
    name: "Dodo Africa Farms",
    desc:
      "Primary agricultural production across plantain, poultry, fish, snail and goat enterprises.",
    status: "Operating & Expanding",
    tone: "live",
    Icon: Sprout,
  },
  {
    name: "Dodo Farm Mart",
    desc:
      "Fresh produce retail, wholesale, commercial supply and direct distribution.",
    status: "Growth Roadmap",
    tone: "building",
    Icon: Store,
  },
  {
    name: "Dodo Foods",
    desc:
      "Plantain processing, packaging, preservation and value-added food products.",
    status: "Future Phase",
    tone: "planned",
    Icon: Package,
  },
  {
    name: "Dodo Eatery",
    desc:
      "A consumer-facing food concept built around plantain and complementary farm products.",
    status: "Future Phase",
    tone: "building",
    Icon: UtensilsCrossed,
  },
  {
    name: "Dodo Logistics",
    desc:
      "Farm-to-market movement, commercial fulfilment and distribution infrastructure.",
    status: "Future Phase",
    tone: "planned",
    Icon: Truck,
  },
  {
    name: "Dodo Digital",
    desc:
      "Farm records, inventory, traceability, field data and operational systems.",
    status: "Operations Backbone",
    tone: "live",
    Icon: Activity,
  },
];

const MENU = [
  {
    name: "Dodo + Egg",
    note: "A simple everyday plantain and egg combination.",
    Icon: Egg,
  },
  {
    name: "Dodo + Fish",
    note: "Plantain paired with fresh fish.",
    Icon: Fish,
  },
  {
    name: "Dodo + Fried Chicken",
    note: "Fried plantain paired with chicken.",
    Icon: Flame,
  },
  {
    name: "Dodo + Goat Pepper Soup",
    note: "A protein-led Nigerian pairing.",
    Icon: UtensilsCrossed,
  },
  {
    name: "Boli + Pepper Sauce",
    note: "Roasted plantain with pepper sauce.",
    Icon: Flame,
  },
  {
    name: "Dodo + Beans",
    note: "A familiar Nigerian combination.",
    Icon: Sprout,
  },
  {
    name: "Dodo + Snail",
    note: "Plantain paired with peppered snail.",
    Icon: Shell,
  },
];

const PARTNER_OPPORTUNITIES = [
  {
    title: "Offtake & Buyers",
    body:
      "Hotels, retailers, restaurants, processors and commercial buyers looking for dependable supply.",
    image: IMG.partnerOfftake,
    imageAlt: "Commercial buyer inspecting fresh Dodo Africa produce",
    imagePosition: "center",
  },
  {
    title: "Suppliers & Logistics",
    body:
      "Input suppliers, equipment providers, transport businesses and operational service partners.",
    image: IMG.partnerSuppliers,
    imageAlt: "Farm logistics team loading supplies and produce",
    imagePosition: "center 48%",
  },
  {
    title: "Financial Institutions",
    body:
      "Banks, agricultural finance providers and development institutions supporting productive enterprise.",
    image: IMG.partnerFinance,
    imageAlt: "Agribusiness founder reviewing farm finance records",
    imagePosition: "center",
  },
  {
    title: "Distribution",
    body:
      "Partners capable of strengthening routes into retail, hospitality and regional markets.",
    image: IMG.partnerDistribution,
    imageAlt: "Produce distribution team moving crates into a delivery van",
    imagePosition: "center 48%",
  },
  {
    title: "Technology",
    body:
      "Systems, data, automation and infrastructure partnerships for modern agricultural operations.",
    image: IMG.partnerTechnology,
    imageAlt: "Farm technology operator using a tablet in a plantain field",
    imagePosition: "center 48%",
  },
  {
    title: "Communities",
    body:
      "Collaboration around agricultural skills, jobs, local supply chains and sustainable production.",
    image: IMG.partnerCommunities,
    imageAlt: "Agricultural training with local farming communities",
    imagePosition: "center",
  },
];

const FOUNDERS = [
  {
    initials: "AD",
    name: "Ademeso Daniel",
    role: "Co-Founder, Technology & Strategy",
    photo: IMG.founderDaniel,
    photoAlt: "Portrait of Ademeso Daniel",
    photoPosition: "center 18%",
    desc:
      "Brings a background in software engineering, DevOps, technology entrepreneurship and digital systems. Leads technology strategy, automation, operational systems, data and business innovation.",
    tags: [
      "Technology",
      "Software",
      "DevOps",
      "Automation",
      "Business Strategy",
    ],
  },
  {
    initials: "TM",
    name: "Temitope Menawonu",
    role: "Co-Founder, Agribusiness & Operations",
    desc:
      "Brings a background in law and agricultural business. Leads farm operations, legal and regulatory matters, partnerships, procurement and commercial execution.",
    tags: [
      "Agriculture",
      "Operations",
      "Law",
      "Compliance",
      "Partnerships",
    ],
  },
];

/* ============================================================
   PHOTO ATTRIBUTION

   Keeping attribution available on-site is good practice for
   open photography, even when not strictly required.
   ============================================================ */

const PHOTO_CREDITS = [
  {
    label: "Dodo Africa harvest hero",
    author: "Generated for Dodo Africa",
    license: "Project asset",
  },
  {
    label: "Integrated farm aerial",
    author: "Generated for Dodo Africa",
    license: "Project asset",
  },
  {
    label: "Plantain grove",
    author: "Generated for Dodo Africa",
    license: "Project asset",
  },
  {
    label: "Modern poultry house",
    author: "Provided project asset",
    license: "Project asset",
  },
  {
    label: "Partner buyers market",
    author: "That Photographer",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/african-fruit-market-with-woman-shopping-36925519/",
  },
  {
    label: "Partner supplier logistics",
    author: "JC Presco",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/busy-market-scene-with-trucks-and-produce-34756097/",
  },
  {
    label: "Partner finance meeting",
    author: "Gustavo Fring",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/two-businessmen-having-a-meeting-6285075/",
  },
  {
    label: "Partner produce distribution",
    author: "Muktar Zubairu",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/pineapples-being-transported-in-nigerian-truck-37088334/",
  },
  {
    label: "Partner farm technology",
    author: "Magda Ehlers",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/farmers-utilizing-drone-technology-in-fields-34182409/",
  },
  {
    label: "Partner farming communities",
    author: "Safari Consoler",
    license: "Pexels License",
    href: "https://www.pexels.com/photo/senior-men-working-on-a-farm-field-11350430/",
  },
  {
    label: "Catfish rearing",
    author: "Provided project asset",
    license: "Project asset",
  },
  {
    label: "Plantain harvest",
    author: "Provided project asset",
    license: "Project asset",
  },
  {
    label: "Farmers in field",
    author: "Alex Gamaliel",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/african-farmers-working-in-lush-green-field-31472079/",
  },
  {
    label: "Nigerian farmer portrait",
    author: "2xman Yef",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/smiling-african-farmer-in-nigerian-field-33993456/",
  },
  {
    label: "Ibadan tomato market",
    author: "Tunde Buremo",
    license: "Unsplash License",
    href:
      "https://unsplash.com/photos/a-group-of-people-standing-around-a-table-filled-with-tomatoes-cnVn4Gg4b00",
  },
  {
    label: "African market",
    author: "El'bataky photos",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/lively-african-market-scene-with-fresh-produce-36943006/",
  },
  {
    label: "Supermarket produce aisle",
    author: "Spencer Backman-Chilcott",
    license: "Unsplash License",
    href:
      "https://unsplash.com/photos/people-shopping-for-produce-in-a-grocery-store-Vqya4pNt-bY",
  },
  {
    label: "Supermarket produce wall",
    author: "nrd",
    license: "Unsplash License",
    href: "https://unsplash.com/@nrd",
  },
  {
    label: "Plantain skewers",
    author: "Ndagi Idris",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/delicious-african-plantain-and-skewers-buffet-36458103/",
  },
  {
    label: "Crop work",
    author: "Safari Consoler",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/a-farmer-in-an-agricultural-field-11588042/",
  },
  {
    label: "Poultry farm",
    author: "Alexas Fotos",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/free-range-chickens-grazing-on-a-farm-34433157/",
  },
  {
    label: "Snail closeup",
    author: "Magda Ehlers",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/close-up-of-a-snail-on-the-soil-9891137/",
  },
  {
    label: "Goat farm",
    author: "Thato Moiketsi",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/two-men-with-goat-in-rural-farm-setting-35980994/",
  },
  {
    label: "Harvest sacks",
    author: "Safari Consoler",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/people-working-on-the-farm-field-11196879/",
  },
];

/* ============================================================
   HOOKS
   ============================================================ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* ============================================================
   SHARED COMPONENTS
   ============================================================ */

function Logo({ footer = false, nav = false }) {
  const src = footer ? FOOTER_LOGO_SRC : nav ? NAV_LOGO_SRC : LOGO_SRC;

  return (
    <div
      style={
        footer
          ? {
              display: "inline-flex",
              padding: 0,
            }
          : undefined
      }
    >
      <span
        role="img"
        aria-label="Dodo Africa"
        className={footer ? "dodo-logo footer-logo" : "dodo-logo"}
        style={{
          display: "block",
          backgroundImage: `url("${src}")`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
}

function Photo({
  src,
  alt,
  ratio = "16 / 10",
  radius = 8,
  eager = false,
  position = "center",
  className = "",
}) {
  const imgRef = useRef(null);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);

    const image = imgRef.current;

    if (!image) return;

    let cancelled = false;
    let frame = 0;
    let timeout = 0;

    const markLoaded = () => {
      if (!cancelled && image.naturalWidth > 0) {
        setLoaded(true);
      }
    };

    const checkLoaded = () => {
      if (image.complete && image.naturalWidth > 0) {
        markLoaded();
        return;
      }

      if (image.decode) {
        image.decode().then(markLoaded).catch(() => {});
      }
    };

    frame = window.requestAnimationFrame(checkLoaded);
    timeout = window.setTimeout(checkLoaded, 250);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [src]);

  return (
    <div
      className={`motion-photo photo-frame ${loaded ? "is-loaded" : ""} ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        ...(ratio ? { aspectRatio: ratio } : {}),
        background: C.mist2,
        backgroundImage: failed ? undefined : `url("${src}")`,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {!loaded && !failed && (
        <div className="photo-loader" aria-hidden="true">
          <span />
        </div>
      )}

      {!failed ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: position,
            opacity: 1,
            transition: "opacity 220ms ease, transform 760ms ease",
          }}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            color: C.green,
            background: C.mist2,
          }}
        >
          <Sprout size={30} />
        </div>
      )}
    </div>
  );
}

function SiteLoader() {
  return (
    <div className="site-loader" role="status" aria-live="polite">
      <div className="site-loader-card">
        <Logo />

        <div className="loader-route" aria-hidden="true">
          <span className="loader-node loader-node-red" />
          <span className="loader-track">
            <span />
          </span>
          <span className="loader-node loader-node-green" />
          <span className="loader-track">
            <span />
          </span>
          <span className="loader-node loader-node-red" />
        </div>

        <div
          className="loader-caption text-xs font-extrabold uppercase"
          style={{
            ...MONO,
            color: C.green,
            letterSpacing: 0,
          }}
        >
          Farm. Market. Table.
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`section-eyebrow mb-3 text-xs font-extrabold uppercase ${
        light ? "is-light" : ""
      }`}
      style={{
        ...MONO,
        color: light ? "#B9DFC4" : C.red,
        letterSpacing: 0,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`section-heading ${center ? "mx-auto text-center" : ""}`}
      style={{
        width: "100%",
        minWidth: 0,
        maxWidth: center ? 790 : 800,
      }}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2
        style={{
          ...SERIF,
          color: C.greenDeep,
          fontSize: "clamp(25px,3.2vw,40px)",
          lineHeight: 1.12,
          fontWeight: 650,
          letterSpacing: 0,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
            className="mt-4 text-sm md:text-base"
            style={{
              color: C.inkSoft,
              lineHeight: 1.68,
            }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Card({
  children,
  className = "",
  green = false,
  pale = false,
  red = false,
  style = {},
}) {
  const toneClass = green
    ? "surface-card-dark"
    : red
    ? "surface-card-red"
    : pale
    ? "surface-card-pale"
    : "";

  let background = C.white;
  let border = C.border;
  let color = C.ink;

  if (pale) {
    background = C.mist2;
  }

  if (green) {
    background = C.green;
    border = C.green;
    color = "#fff";
  }

  if (red) {
    background = C.red;
    border = C.red;
    color = "#fff";
  }

  return (
    <div
      className={`motion-card surface-card ${toneClass} rounded-lg ${className}`}
      style={{
        position: "relative",
        background,
        border: `1px solid ${border}`,
        color,
        boxShadow: green || red ? "none" : C.shadow,
        transition:
          "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease, background-color 260ms ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Tag({ children, tone = "green" }) {
  const values = {
    green: {
      background: "#E5F3E9",
      color: C.green,
      border: "#CEE4D4",
    },
    red: {
      background: C.redSoft,
      color: C.redDeep,
      border: "#F8D2CF",
    },
    grey: {
      background: C.mist2,
      color: C.inkSoft,
      border: C.border,
    },
  };

  const current = values[tone] || values.green;

  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-xs font-bold"
      style={{
        background: current.background,
        color: current.color,
        border: `1px solid ${current.border}`,
      }}
    >
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, href }) {
  const styles = {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 8,
    padding: "12px 17px",
    color: "#fff",
    background: C.greenDeep,
    border: "1px solid rgba(0,104,55,.2)",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 650,
    textAlign: "center",
    boxShadow: "0 12px 28px rgba(0,104,55,.16)",
  };

  if (href) {
    return (
      <a className="primary-button" href={href} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      className="primary-button"
      type="button"
      onClick={onClick}
      style={styles}
    >
      {children}
    </button>
  );
}

/* ============================================================
   NAVIGATION

   IMPORTANT CHANGE:
   There is NO separate text "Dodo Africa".
   Only the supplied logo / wordmark is used.

   Logo sizing is intentionally compact and shared across all routes.
   ============================================================ */

function NavLink({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative px-3 py-2 text-sm font-semibold"
      style={{
        background: "transparent",
        color: "inherit",
        lineHeight: 1.15,
      }}
    >
      <span style={{ position: "relative", display: "inline-block" }}>
        {children}

        <span
          style={{
            position: "absolute",
            bottom: -8,
            left: 0,
            right: 0,
            height: 2,
            borderRadius: 999,
            background: C.red,
            transform: active ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 180ms ease",
          }}
        />
      </span>
    </button>
  );
}

function NavBar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const settled = scrolled || open;

  const links = [
    ["home", "Home"],
    ["story", "Our Story"],
    ["model", "The Model"],
    ["mart", "Farm Mart & Eatery"],
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);

    handler();

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (id) => {
    setPage(id);
    setOpen(false);
  };

  return (
    <nav
      className={`site-nav ${settled ? "is-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: settled ? C.footerGreenDeep : "transparent",
        color: "#fff",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: settled
          ? "1px solid rgba(255,255,255,.14)"
          : "1px solid transparent",
        boxShadow: settled
          ? "0 12px 34px rgba(0,40,18,.18)"
          : "none",
        pointerEvents: "none",
      }}
    >
      <div className="mx-auto">
        <div
          className="nav-frame flex min-h-[58px] md:min-h-[64px] items-center justify-between gap-4"
          style={{
            pointerEvents: "auto",
            padding: 0,
            borderRadius: 0,
            background: "transparent",
            border: "1px solid transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            boxShadow: "none",
          }}
        >
          <button
            type="button"
            aria-label="Dodo Africa home"
            onClick={() => go("home")}
            style={{
              background: "transparent",
              padding: 0,
            }}
          >
            <Logo nav />
          </button>

          <div className="desktop-nav-links items-center gap-1 xl:gap-2">
            {links.map(([id, label]) => (
              <NavLink
                key={id}
                active={page === id}
                onClick={() => go(id)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="desktop-nav-cta">
            <button
              type="button"
              onClick={() => go("partners")}
              className={`nav-partner-button ${
                page === "partners" ? "is-active" : ""
              }`}
            >
              Partner With Us
            </button>
          </div>

          <button
            type="button"
            className="nav-menu-button h-10 w-10 items-center justify-center"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
            style={{
              color: "#fff",
              background: "transparent",
              border: "0",
            }}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {open && (
          <div
            className="mobile-menu-panel lg:hidden mt-2 p-3"
            style={{
              pointerEvents: "auto",
              borderRadius: 16,
              background: C.footerGreenDeep,
              border: "1px solid rgba(255,255,255,.18)",
              boxShadow: "0 18px 48px rgba(0,40,18,.24)",
            }}
          >
            <div className="flex flex-col gap-2">
              {links.map(([id, label]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => go(id)}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm font-bold"
                  style={{
                    background:
                      page === id
                        ? "rgba(255,255,255,.16)"
                        : "rgba(255,255,255,.06)",
                    color: "#FFFFFF",
                  }}
                >
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => go("partners")}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-extrabold"
                style={{
                  background: page === "partners" ? C.greenDeep : C.leaf,
                  color: page === "partners" ? "#fff" : C.greenDeep,
                  border: `1px solid ${
                    page === "partners" ? "rgba(140,249,187,.6)" : C.leaf
                  }`,
                  boxShadow:
                    page === "partners"
                      ? "0 0 0 2px rgba(140,249,187,.45), 0 8px 22px rgba(0,40,18,.28)"
                      : "0 8px 22px rgba(0,40,18,.2)",
                }}
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ============================================================
   PAGE HEADER

   Header media now stays compact on mobile and uses local images,
   so pages keep their visual identity without waiting on remote files.
   ============================================================ */

function PageHeader({
  eyebrow,
  title,
  lede,
  photo,
  photoAlt,
  photoPosition = "center",
  shape = "leaf",
  compactTitle = false,
  deepOverlay = false,
  chips = ["Production", "Market channels", "Consumer food"],
}) {
  const shapeData = HERO_SHAPES[shape] || HERO_SHAPES.leaf;
  const overlay = deepOverlay
    ? `linear-gradient(90deg, rgba(0,28,12,.9) 0%, rgba(0,104,55,.66) 46%, rgba(0,28,12,.36) 100%), linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.58)), url("${photo}") ${photoPosition} / cover no-repeat`
    : `linear-gradient(90deg, rgba(0,28,12,.82) 0%, rgba(0,104,55,.52) 46%, rgba(0,28,12,.18) 100%), linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.46)), url("${photo}") ${photoPosition} / cover no-repeat`;

  return (
    <section
      className="page-hero page-photo-hero"
      aria-label={photoAlt}
      style={{
        position: "relative",
        overflow: "hidden",
        background: overlay,
      }}
    >
      <div className="page-hero-grain" aria-hidden="true" />

      <div className="page-photo-hero-inner max-w-7xl mx-auto px-5 md:px-8">
        <div className="hero-copy page-photo-hero-copy">
          <Eyebrow light>{eyebrow}</Eyebrow>

          <h1
              className={`page-hero-title ${
                compactTitle ? "is-compact" : ""
              }`}
              style={{
                  ...SERIF,
                color: "rgba(248,255,251,.92)",
                fontSize: compactTitle
                  ? "clamp(30px,3.8vw,48px)"
                  : "clamp(32px,4.4vw,54px)",
                lineHeight: 1.06,
                fontWeight: 680,
                letterSpacing: 0,
              }}
          >
            {title}
          </h1>

          <p
              className="mt-5 max-w-2xl text-sm md:text-base"
              style={{
              color: "rgba(242,255,248,.82)",
              lineHeight: 1.62,
              fontWeight: 400,
            }}
          >
            {lede}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((item) => (
                <span
                  key={item}
                  className="hero-pill rounded-full px-4 py-2 text-xs font-semibold"
                  style={{
                    color: "#fff",
                    background: "rgba(255,255,255,.13)",
                    border: "1px solid rgba(255,255,255,.24)",
                  }}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div
          className="page-photo-hero-card hero-copy"
          style={{
            "--hero-clip-a": shapeData.clipA,
            "--hero-clip-b": shapeData.clipB,
            "--hero-clip-c": shapeData.clipC,
            "--hero-radius-a": shapeData.radiusA,
            "--hero-radius-b": shapeData.radiusB,
            "--hero-radius-c": shapeData.radiusC,
          }}
        >
          <div className="page-photo-card-title">
            Our Focus
          </div>

          <p
            className="page-photo-card-copy mt-4 text-sm"
            style={{
              color: "rgba(242,255,248,.82)",
              lineHeight: 1.62,
              fontWeight: 400,
            }}
          >
            {chips.join(" / ")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOME
   ============================================================ */

function FarmCard({ farm, index, visible }) {
  return (
    <Card
      className="farm-card overflow-hidden h-full"
      style={{
        "--card-index": index,
      }}
    >
      <div
        style={{
          opacity: 1,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: `all 480ms ease ${index * 65}ms`,
        }}
      >
        <div className="p-5">
          <h3
            style={{
              ...SERIF,
              color: C.greenDeep,
              fontSize: 20,
              fontWeight: 650,
            }}
          >
            {farm.name}
          </h3>

          <div
            className="mt-5"
            style={{
              ...SERIF,
              color: C.red,
              fontSize: 25,
              fontWeight: 650,
            }}
          >
            {farm.qty}
          </div>

          <p
            className="mt-1 text-sm"
            style={{
              color: C.inkSoft,
              lineHeight: 1.5,
            }}
          >
            {farm.unit}
          </p>
        </div>

        <Photo
          src={farm.photo}
          alt={`${farm.name} production reference`}
          ratio="4 / 3"
          radius={0}
          eager
          position={farm.photoPosition}
        />
      </div>
    </Card>
  );
}

function HomePage({ setPage }) {
  const [farmRef, farmVisible] = useReveal();
  const [modelRef, modelVisible] = useReveal();

  return (
    <>
      {/* HERO */}

      <section
        className="home-hero home-hero-story"
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #F8FFFB 0%, #E9FFF3 100%)",
        }}
      >
        <div className="home-hero-shell max-w-7xl mx-auto">
          <div className="home-hero-photo" aria-hidden="true">
            <img
              src={IMG.hero}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="home-hero-inner relative">
            <div className="hero-copy home-hero-copy">
              <span
                className="home-hero-badge"
                style={{
                  color: "#F2FFF8",
                  borderColor: "rgba(242,255,248,.3)",
                  background: "rgba(255,255,255,.1)",
                }}
              >
                Sustainable Food Systems
              </span>

	              <h1
	                className="hero-title"
	                style={{
	                  ...SERIF,
	                  color: "rgba(248,255,251,.92)",
                  fontSize: "clamp(32px,3.8vw,50px)",
                  lineHeight: 1.04,
                  letterSpacing: 0,
                  fontWeight: 680,
                }}
              >
                Feeding Africa,
                <br />
                Building Generations.
              </h1>

              <p
                className="home-hero-lede mt-5 md:mt-6 max-w-3xl text-base"
                style={{
                  color: "rgba(242,255,248,.78)",
                  lineHeight: 1.48,
                  fontWeight: 400,
                  fontSize: "clamp(13px,1vw,15px)",
                }}
              >
                Dodo Africa is a farm-led Nigerian food business
                growing from land, plantain, livestock and aquaculture
                into market channels, processing and everyday meals.
              </p>

              <div className="home-hero-actions mt-8 md:mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPage("story")}
                  className="home-story-button"
                >
                  Our Story
                  <span>
                    <ArrowRight size={15} />
                  </span>
                </button>

              </div>
            </div>

            <aside className="home-hero-mission hero-copy">
              <div
                className="font-extrabold"
                style={{
                  color: "rgba(248,255,251,.92)",
                  letterSpacing: 0,
                  fontSize: "clamp(13px,1.05vw,14px)",
                }}
              >
                Our Mission
              </div>

              <p
                className="mt-4 text-sm md:text-base"
                style={{
                  color: "rgba(242,255,248,.8)",
                  lineHeight: 1.62,
                  fontWeight: 400,
                  fontSize: "clamp(13px,1vw,14px)",
                }}
              >
                Build dependable agricultural capacity, create better
                routes to market and turn farm output into stronger
                food products for Nigerian communities.
              </p>

            </aside>
          </div>
        </div>
      </section>

      {/* COMPANY SNAPSHOT */}

      <section
        className="home-today-section"
        style={{
          background: C.mist,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <svg
          className="home-today-africa-mark"
          viewBox={AFRICA_SHAPE.viewBox}
          aria-hidden="true"
        >
          <path
            d={AFRICA_SHAPE.mainland}
            transform={AFRICA_SHAPE.transform}
          />
          <path
            d={AFRICA_SHAPE.madagascar}
            transform={AFRICA_SHAPE.transform}
          />
        </svg>

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="home-today-intro">
            <div
              className="home-today-copy"
              style={{
                width: "min(100%, calc(100vw - 40px))",
                maxWidth: 800,
                minWidth: 0,
              }}
            >
              <Eyebrow>Dodo Africa Today</Eyebrow>

              <h2
                className="mt-4"
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: "clamp(31px,4vw,48px)",
                  lineHeight: 1.08,
                  fontWeight: 650,
                }}
              >
                <span className="home-today-title-line">
                  Building from the farm
                </span>{" "}
                <span className="home-today-title-line">outward.</span>
              </h2>

              <p
                className="home-today-desktop-copy mt-4 text-sm md:text-base"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.68,
                  display: "block",
                  width: "min(100%, calc(100vw - 40px))",
                  maxWidth: "min(100%, calc(100vw - 40px))",
                  whiteSpace: "normal",
                  overflowWrap: "anywhere",
                  wordBreak: "normal",
                }}
              >
                We start with primary production, strengthen dependable
                routes to market, and expand carefully into processing,
                food service and technology around the same agricultural
                base.
              </p>

              <p
                className="home-today-mobile-copy mt-4 text-sm"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.64,
                }}
              >
                <span>Primary production comes first.</span>
                <span>Routes to market grow next.</span>
                <span>Processing, food service and technology follow.</span>
              </p>

              <div className="home-today-stats mt-7">
                <div className="home-today-stat">
                  <div
                    style={{
                      ...SERIF,
                      color: C.red,
                      fontSize: "clamp(26px,2.6vw,34px)",
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    100
                  </div>

                  <div
                    className="mt-2 text-sm"
                    style={{ color: C.inkSoft, lineHeight: 1.5 }}
                  >
                    plots of land
                  </div>
                </div>

                <div className="home-today-stat">
                  <div
                    style={{
                      ...SERIF,
                      color: C.red,
                      fontSize: "clamp(26px,2.6vw,34px)",
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    5
                  </div>

                  <div
                    className="mt-2 text-sm"
                    style={{ color: C.inkSoft, lineHeight: 1.5 }}
                  >
                    production enterprises in the broader plan
                  </div>
                </div>
              </div>
            </div>

            <div
              className="home-today-visual motion-card"
              aria-label="Dodo Africa's five production enterprises"
            >
              <Photo
                src={IMG.enterpriseCollage}
                alt="Dodo Africa's five production enterprises: plantain, fish, goat, snail and poultry"
                ratio="1672 / 941"
                radius={8}
                position="center"
                className="home-today-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REAL FARM PHOTOGRAPHY */}

      <section
        style={{
          background: C.white,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          ref={farmRef}
          className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Dodo Africa Farms"
              title="One agricultural base. Multiple production lines."
              description="Our long-term production model combines plantain with complementary livestock and aquaculture enterprises."
            />

            <button
              type="button"
              onClick={() => setPage("model")}
              className="inline-flex items-center gap-2 text-sm font-extrabold"
              style={{
                background: "transparent",
                color: C.red,
              }}
            >
              See the full model
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {FARMS.map((farm, index) => (
              <FarmCard
                key={farm.name}
                farm={farm}
                index={index}
                visible={farmVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}

      <section
        ref={modelRef}
        style={{
          background: C.white,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Integrated Business Model"
            title="Farm to Market to Food to Consumer."
            description="The businesses are designed to support one another rather than operate as unrelated ventures."
            center
          />

          <div className="mt-11 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              {
                Icon: Sprout,
                title: "Dodo Africa Farms",
                copy:
                  "Primary production across plantain and livestock enterprises.",
              },
              {
                Icon: Store,
                title: "Dodo Farm Mart",
                copy:
                  "Retail, wholesale and distribution connecting production to buyers.",
              },
              {
                Icon: Package,
                title: "Dodo Foods",
                copy:
                  "Processing, packaging, preservation and value addition.",
              },
              {
                Icon: UtensilsCrossed,
                title: "Dodo Eatery",
                copy:
                  "A future consumer food concept built around the Dodo brand.",
              },
            ].map((item, index) => (
              <Card key={item.title} pale className="p-6 h-full">
                <div
                  style={{
                    opacity: modelVisible ? 1 : 0,
                    transform: modelVisible
                      ? "translateY(0)"
                      : "translateY(15px)",
                    transition: `all 460ms ease ${
                      index * 75
                    }ms`,
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: C.green,
                      color: "#fff",
                    }}
                  >
                    <item.Icon size={21} />
                  </div>

                  <h3
                    className="mt-5"
                    style={{
                      ...SERIF,
                      color: C.greenDeep,
                      fontSize: 21,
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-sm"
                    style={{
                      color: C.inkSoft,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.copy}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card green className="mt-5 p-6 md:p-8">
            <div className="grid md:grid-cols-[auto_1fr_auto] gap-5 items-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background: C.white,
                  color: C.green,
                }}
              >
                <Activity size={24} />
              </div>

              <div>
                <h3
                  style={{
                    ...SERIF,
                    fontSize: 23,
                    fontWeight: 700,
                  }}
                >
                  Dodo Digital, the operations backbone
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#D9EEE0",
                    lineHeight: 1.65,
                  }}
                >
                  Farm records • inventory • supply chain •
                  field data • traceability • operating insight
                </p>
              </div>

              <Smartphone
                size={33}
                className="hidden md:block"
                style={{ color: "#BFE1C9" }}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}

      <section className="home-closing-section" style={{ background: C.greenMist }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div
            className="overflow-hidden rounded-lg"
            style={{
              background: C.greenDeep,
              boxShadow: C.shadowLarge,
            }}
          >
            <div className="home-closing-panel grid md:grid-cols-[.92fr_1.08fr] gap-8 items-center p-7 md:p-12">
              <div>
                <Eyebrow light>Growing with discipline</Eyebrow>

                <h2
                  style={{
                    ...SERIF,
                    color: "#fff",
                    fontSize: "clamp(30px,4vw,48px)",
                    lineHeight: 1.07,
                    fontWeight: 700,
                  }}
                >
                  From production to a complete African food
                  ecosystem.
                </h2>

                <p
                  className="mt-4 max-w-2xl"
                  style={{
                    color: "#D9EEE0",
                    lineHeight: 1.75,
                  }}
                >
                  Each stage is intended to build on real operating
                  capability, customer demand and disciplined
                  expansion.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  ["Production", "Start with real farm capacity."],
                  ["Channels", "Move produce through dependable routes."],
                  ["Consumer", "Build food experiences from the same base."],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-lg p-4"
                    style={{
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.14)",
                    }}
                  >
                    <div
                      className="text-sm font-extrabold"
                      style={{ color: "#fff" }}
                    >
                      {title}
                    </div>

                    <p
                      className="mt-2 text-xs"
                      style={{
                        color: "#CDE4D4",
                        lineHeight: 1.55,
                      }}
                    >
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   OUR STORY

   Rather than an AI-looking farm image, the header uses a real
   photograph of Nigerian farmers working in the Middle Belt.

   It also avoids pretending that generic people in stock photos
   are the actual founders.
   ============================================================ */

function FounderPortrait({ founder }) {
  if (founder.photo) {
    return (
      <Photo
        src={founder.photo}
        alt={founder.photoAlt || founder.name}
        ratio="4 / 3"
        radius={0}
        position={founder.photoPosition || "center"}
        className="founder-portrait"
      />
    );
  }

  return (
    <div className="founder-portrait founder-portrait-fallback">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          background: "#fff",
          color: C.green,
          border: `1px solid ${C.borderStrong}`,
          ...SERIF,
          fontSize: 23,
          fontWeight: 800,
        }}
      >
        {founder.initials}
      </div>
    </div>
  );
}

function FounderCard({ founder, index, active }) {
  return (
    <Card className="founder-card overflow-hidden h-full">
      <div
        className="h-full"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(16px)",
          transition: `all 500ms ease ${index * 100}ms`,
        }}
      >
        <div className="p-7 md:p-8">
          <div>
            <h3
              style={{
                ...SERIF,
                color: C.greenDeep,
                fontSize: "clamp(25px,3vw,31px)",
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              {founder.name}
            </h3>

            <p
              className="mt-1 text-xs font-extrabold uppercase"
              style={{ color: C.red }}
            >
              {founder.role}
            </p>
          </div>

          <p
            className="mt-5 text-sm md:text-[15px]"
            style={{
              color: C.inkSoft,
              lineHeight: 1.78,
            }}
          >
            {founder.desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {founder.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <FounderPortrait founder={founder} />
      </div>
    </Card>
  );
}

function StoryPage({ setPage }) {
  const [ref, visible] = useReveal();

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Built in Nigeria. Designed for the long term."
        lede="Dodo Africa began from practical farm production and is growing into markets, food products and operating systems that make Nigerian agriculture more valuable."
        photo={IMG.story}
        photoAlt="Smiling Nigerian farmer in a cultivated field"
        photoPosition="center 35%"
        shape="leaf"
        deepOverlay
        chips={["Farm Roots", "Growth Journey", "Long-Term Vision"]}
      />

      <section className="story-editorial-section" style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="story-editorial-grid">
            <div className="story-quote-panel">
              <Eyebrow>Our Story</Eyebrow>

              <h2
                className="mt-4"
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: "clamp(31px,4vw,48px)",
                  lineHeight: 1.08,
                  fontWeight: 650,
                }}
              >
                Born from the farm, built for the food system.
              </h2>

              <p
                className="story-large-copy mt-6"
                style={{
                  color: C.ink,
                  lineHeight: 1.68,
                  fontWeight: 700,
                }}
              >
                Dodo Africa connects primary production with the
                market routes, food products and consumer experiences
                that make agriculture more valuable.
              </p>

              <p
                className="mt-5"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.82,
                }}
              >
                We begin with 100 plots of land and a clear
                production focus. From there, the business grows
                carefully into distribution, processing, hospitality
                and digital systems without losing sight of the farm.
              </p>

              <button
                type="button"
                onClick={() => setPage("model")}
                className="story-discover-button mt-7"
              >
                Discover the Model
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="story-photo-strip" aria-label="Dodo Africa agricultural and market story">
              <Photo
                src={IMG.plantain}
                alt="Plantain growing on the farm"
                ratio="3 / 4"
                radius={24}
                position="center 42%"
                className="story-strip-photo"
              />

              <Photo
                src={IMG.goatPeople}
                alt="Goat production on a rural farm"
                ratio="3 / 4"
                radius={24}
                position="center 48%"
                className="story-strip-photo is-tall"
              />

              <Photo
                src={IMG.poultryStory}
                alt="Chicken production on the farm"
                ratio="3 / 4"
                radius={24}
                position="center 54%"
                className="story-strip-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="story-identity-section"
        style={{
          background: `linear-gradient(180deg, ${C.mist2}, rgba(140,249,187,.14))`,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="About Us"
            title="Our identity, vision and values."
            description="Dodo Africa exists to build a practical, trusted and scalable Nigerian agribusiness with production at its centre."
            center
          />

          <div className="story-values-band mt-10">
            {[
              "Freshness",
              "Trust",
              "Sustainability",
              "Operational Discipline",
            ].map((value) => (
              <div key={value} className="story-value-item">
                <span />
                {value}
              </div>
            ))}
          </div>

          <div className="story-vision-card mt-[-26px]">
            <div>
              <h3
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: 25,
                  fontWeight: 650,
                }}
              >
                Vision
              </h3>

              <p
                className="mt-4 text-sm md:text-base"
                style={{ color: C.inkSoft, lineHeight: 1.75 }}
              >
                To build an African food business that grows from
                dependable farm production into stronger market and
                consumer channels.
              </p>
            </div>

            <div className="story-vision-divider" />

            <div>
              <h3
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: 25,
                  fontWeight: 650,
                }}
              >
                Mission
              </h3>

              <p
                className="mt-4 text-sm md:text-base"
                style={{ color: C.inkSoft, lineHeight: 1.75 }}
              >
                To produce, move and improve food through disciplined
                agriculture, honest partnerships, smart systems and
                products people can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        style={{
          background: C.mist,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="The Founders"
            title="Agriculture, law, technology and operations."
            description="The founding team brings complementary capabilities that are directly relevant to building a modern agricultural business."
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {FOUNDERS.map((founder, index) => (
              <FounderCard
                key={founder.name}
                founder={founder}
                index={index}
                active={visible}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
          <div className="grid lg:grid-cols-[.88fr_1.12fr] gap-7">
            <Card green className="p-8 md:p-10">
              <Quote size={34} style={{ color: "#A9D4B7" }} />

              <h2
                className="mt-6"
                style={{
                  ...SERIF,
                  color: "#fff",
                  fontSize: "clamp(29px,4vw,42px)",
                  lineHeight: 1.12,
                  fontWeight: 700,
                }}
              >
                Feeding Africa, Building Generations.
              </h2>

              <p
                className="mt-5"
                style={{
                  color: "#D7EBDD",
                  lineHeight: 1.8,
                }}
              >
                The long-term ambition is to build an agricultural and
                food business capable of creating value beyond a
                single harvest or generation.
              </p>
            </Card>

            <Card className="p-8 md:p-10">
              <Eyebrow>What guides us</Eyebrow>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  [
                    ShieldCheck,
                    "Operational Discipline",
                    "Expansion should follow operational capability.",
                  ],
                  [
                    HeartHandshake,
                    "Partnerships",
                    "Strong relationships with suppliers, buyers and communities matter.",
                  ],
                  [
                    TrendingUp,
                    "Value Creation",
                    "We aim to capture more value across the agricultural chain.",
                  ],
                  [
                    Activity,
                    "Technology",
                    "Data and automation can improve agricultural decision-making.",
                  ],
                ].map(([Icon, title, description]) => (
                  <div
                    key={title}
                    className="rounded-lg p-5"
                    style={{
                      background: C.mist2,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <Icon size={21} style={{ color: C.green }} />

                    <h3
                      className="mt-4 font-extrabold"
                      style={{ color: C.greenDeep }}
                    >
                      {title}
                    </h3>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color: C.inkSoft,
                        lineHeight: 1.65,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card pale className="mt-7 p-7 md:p-9">
            <div className="max-w-4xl">
              <div>
                <Eyebrow>Our Direction</Eyebrow>

                <h2
                  style={{
                    ...SERIF,
                    color: C.greenDeep,
                    fontSize: 31,
                    fontWeight: 700,
                  }}
                >
                  Production first. Value-chain expansion next.
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setPage("partners")}
                className="story-discover-button mt-6"
              >
                Partner with us
                <ArrowRight size={15} />
              </button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   MODEL PAGE
   ============================================================ */

function ModelPage({ setPage }) {
  const [ref, visible] = useReveal();

  return (
    <>
      <PageHeader
        eyebrow="The Model"
        title="Production. Distribution. Processing."
        lede="Dodo Africa is structured to capture more value from the same agricultural base, beginning with production and progressively adding distribution, processing, hospitality, logistics and technology."
        photo={IMG.model}
        photoAlt="Aerial view of an integrated farm with fields, fish ponds and farm buildings"
        photoPosition="center 52%"
        shape="pod"
        compactTitle
        chips={["Production", "Distribution", "Processing"]}
      />

      <section
        ref={ref}
        style={{
          background: C.mist,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Business Architecture"
            title="Different businesses. One connected value chain."
            description="Not every division is at the same stage. Farming is the foundation, while other business lines are introduced as operations and market demand support them."
          />

          <div className="model-service-band mt-10">
            <img
              src={IMG.fieldWork}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <div className="model-service-band-copy hero-copy">
              <Eyebrow light>Service Garden</Eyebrow>

              <h3
                style={{
                  ...SERIF,
                  color: "#fff",
                  fontSize: "clamp(25px,3.2vw,42px)",
                  lineHeight: 1.08,
                  fontWeight: 680,
                }}
              >
                The best choice for building an integrated food
                business.
              </h3>
            </div>
          </div>

          <div className="model-service-cards">
            {SUBS.map((subsidiary, index) => {
              const Icon = subsidiary.Icon;
              const tone =
                subsidiary.tone === "live"
                  ? "green"
                  : subsidiary.tone === "building"
                  ? "red"
                  : "grey";

              return (
                <Card
                  key={subsidiary.name}
                  className="model-service-card"
                >
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : "translateY(14px)",
                      transition: `all 470ms ease ${index * 65}ms`,
                    }}
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{
                        background:
                          subsidiary.tone === "live" ? C.green : C.red,
                        color: "#fff",
                      }}
                    >
                      <Icon size={19} />
                    </div>

                    <h3
                      className="mt-5"
                      style={{
                        ...SERIF,
                        color: C.greenDeep,
                        fontSize: 20,
                        fontWeight: 650,
                      }}
                    >
                      {subsidiary.name}
                    </h3>

                    <p
                      className="mt-3 text-sm"
                      style={{
                        color: C.inkSoft,
                        lineHeight: 1.68,
                      }}
                    >
                      {subsidiary.desc}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <Tag tone={tone}>{subsidiary.status}</Tag>

                      <ArrowRight size={17} style={{ color: C.green }} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_.85fr] gap-8">
            <div>
              <SectionHeading
                eyebrow="Consumer Concept"
                title="Dodo + X"
                description="Plantain becomes the anchor product, paired with complementary proteins and sides across future Dodo Eatery and food concepts."
              />

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Dodo + Egg",
                  "Dodo + Chicken",
                  "Dodo + Fish",
                  "Dodo + Snail",
                  "Dodo + Goat",
                  "Dodo + Beans",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full px-4 py-2 text-sm font-bold"
                    style={{
                      background: C.mist2,
                      color: C.green,
                      border: `1px solid ${C.borderStrong}`,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <PrimaryButton onClick={() => setPage("mart")}>
                  Farm Mart & Eatery
                  <ArrowRight size={15} />
                </PrimaryButton>
              </div>
            </div>

            <Card green className="p-8">
              <Eyebrow light>Long-Term Direction</Eyebrow>

              <h3
                style={{
                  ...SERIF,
                  color: "#fff",
                  fontSize: "clamp(27px,3vw,38px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                A Nigerian agribusiness built with African scale in
                mind.
              </h3>

              <p
                className="mt-5"
                style={{
                  color: "#D7EBDD",
                  lineHeight: 1.78,
                }}
              >
                The wider vision combines diversified production,
                food processing, distribution, consumer brands and
                technology while preserving agriculture as the
                operating foundation.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Diversified production",
                  "Processing and packaging",
                  "Consumer food brands",
                  "Regional distribution",
                  "Technology-enabled operations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: "#BEE2C8" }}
                    />

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   FARM MART + EATERY

   MOBILE DESIGN CHANGES:

   Images are local and responsive, so the page can keep strong
   visual cues on phones without becoming a slow vertical photo stack.
   ============================================================ */

function ConsumerBusinessCard({
  title,
  description,
  points,
  image,
  alt,
  accent = "green",
}) {
  const primary = accent === "red" ? C.red : C.green;
  const soft = accent === "red" ? C.redSoft : "#E8F4EB";

  return (
    <Card className="consumer-business-card overflow-hidden h-full">
      <div className="flex h-full flex-col">
        <div className="p-6 sm:p-7 md:p-8">
          <div className="flex justify-start">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-extrabold uppercase"
              style={{
                background: soft,
                color: primary,
                letterSpacing: 0,
              }}
            >
              {accent === "red" ? "Eatery concept" : "Market channel"}
            </span>
          </div>

          <h2
            className="mt-5"
            style={{
              ...SERIF,
              color: C.greenDeep,
              fontSize: 29,
              fontWeight: 700,
            }}
          >
            {title}
          </h2>

          <p
            className="mt-4"
            style={{
              color: C.inkSoft,
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>

          <div className="mt-6 space-y-3">
            {points.map((point) => (
              <div
                key={point}
                className="text-sm"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.55,
                  paddingTop: 10,
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <Photo
          src={image}
          alt={alt}
          ratio="16 / 9"
          radius={0}
          eager
          position="center"
          className="consumer-business-photo"
        />
      </div>
    </Card>
  );
}

function MartRouteStrip() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {[
        [Sprout, "Harvest", "Farm production enters the channel."],
        [Store, "Mart", "Fresh produce moves into retail and supply."],
        [
          UtensilsCrossed,
          "Eatery",
          "Plantain-led meals grow the consumer brand.",
        ],
      ].map(([Icon, title, copy]) => (
        <div
          key={title}
          className="mart-route-card rounded-lg p-4"
          style={{
            background: C.mist2,
            border: `1px solid ${C.border}`,
          }}
        >
          <Icon size={20} style={{ color: C.red }} />

          <div
            className="mt-3 font-extrabold"
            style={{ color: C.greenDeep }}
          >
            {title}
          </div>

          <p
            className="mt-1 text-sm"
            style={{ color: C.inkSoft, lineHeight: 1.55 }}
          >
            {copy}
          </p>
        </div>
      ))}
    </div>
  );
}

function MartPage() {
  const [menuRef, menuVisible] = useReveal();

  return (
    <>
      <PageHeader
        eyebrow="Farm Mart & Eatery"
        title={
          <>
            <span className="hero-title-line">Farm Mart &</span>
            <span className="hero-title-line">Eatery.</span>
          </>
        }
        lede="These businesses create direct routes from agricultural production to buyers and consumers, from fresh produce and commercial supply to a future food concept built around the Dodo brand."
        photo={IMG.martHero}
        photoAlt="Nigerian shoppers buying fresh produce in a modern farm mart"
        photoPosition="center 50%"
        shape="market"
        chips={["Retail", "Commercial Supply", "Eatery"]}
      />

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-18">
          <div className="grid lg:grid-cols-[.88fr_1.12fr] gap-8 items-start">
            <div>
              <Eyebrow>Two Routes to Market</Eyebrow>

              <h2
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: "clamp(30px,4vw,45px)",
                  lineHeight: 1.08,
                  fontWeight: 700,
                }}
              >
                Fresh produce for the market. Food experiences for
                the consumer.
              </h2>

              <p
                className="mt-5"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.8,
                }}
              >
                Farm Mart and Eatery serve different purposes but are
                connected by the same idea: create stronger direct
                channels for products coming through the Dodo Africa
                agricultural ecosystem.
              </p>
            </div>

            <MartRouteStrip />
          </div>

          <div className="mt-9 grid xl:grid-cols-2 gap-6">
            <ConsumerBusinessCard
              title="Dodo Farm Mart"
              description="A retail, wholesale and distribution channel designed to move agricultural products efficiently from production to households and commercial customers."
              points={[
                "Fresh agricultural produce",
                "Wholesale and bulk supply",
                "Hotels, restaurants and commercial buyers",
                "Direct-to-consumer retail",
              ]}
              image={IMG.market}
              alt="Supermarket produce wall with fresh vegetables"
              accent="green"
            />

            <ConsumerBusinessCard
              title="Dodo Eatery"
              description="A future consumer food concept built around plantain and complementary products, creating a recognizable Dodo experience beyond the farm."
              points={[
                "Plantain-led meals",
                "Farm-connected proteins",
                "Quick-service opportunities",
                "Potential future franchise model",
              ]}
              image={IMG.eatery}
              alt="Real Nigerian restaurant interior"
              accent="red"
            />
          </div>
        </div>
      </section>

      {/* MENU */}

      <section
        ref={menuRef}
        style={{
          background: C.mist,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <SectionHeading
            eyebrow="The Dodo + X Concept"
            title="Plantain at the centre."
            description="The initial concept focuses on recognizable Nigerian combinations that can eventually connect the farm, food processing and consumer businesses."
          />

          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MENU.map((item, index) => {
              const Icon = item.Icon;

              return (
                <Card key={item.name} className="p-5 h-full">
                  <div
                    style={{
                      opacity: menuVisible ? 1 : 0,
                      transform: menuVisible
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: `all 430ms ease ${
                        index * 55
                      }ms`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: C.mist2,
                          border: `1px solid ${C.border}`,
                          color: C.green,
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3
                          style={{
                            ...SERIF,
                            color: C.greenDeep,
                            fontWeight: 700,
                            fontSize: 18,
                          }}
                        >
                          {item.name}
                        </h3>

                        <p
                          className="mt-2 text-sm"
                          style={{
                            color: C.inkSoft,
                            lineHeight: 1.55,
                          }}
                        >
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHANNEL MODEL */}

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <Card green className="p-7 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                [
                  Store,
                  "Retail",
                  "A direct channel connecting products to households.",
                ],
                [
                  Truck,
                  "Commercial Distribution",
                  "Supply for hotels, restaurants, retailers and bulk buyers.",
                ],
                [
                  UtensilsCrossed,
                  "Hospitality",
                  "Turning agricultural products into a consumer brand experience.",
                ],
              ].map(([Icon, title, description]) => (
                <div key={title}>
                  <Icon size={25} style={{ color: "#B8DEC3" }} />

                  <h3
                    className="mt-4 text-lg font-extrabold"
                    style={{ color: "#fff" }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: "#D8ECDD",
                      lineHeight: 1.7,
                    }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PARTNERS
   ============================================================ */

function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partner With Us"
        title="Grow the value chain with us."
        lede="Dodo Africa is building relationships with buyers, suppliers, service providers, communities, financiers and strategic partners who take a long-term view of Nigerian agriculture and food production."
        photo={IMG.partners}
        photoAlt="Farm workers filling sacks after harvest"
        photoPosition="center 45%"
        shape="harvest"
        chips={["Buyers", "Suppliers", "Strategic Partners"]}
      />

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Partnership Opportunities"
            title="Different partners. Shared growth."
          />

          <div className="partner-opportunity-grid mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNER_OPPORTUNITIES.map((item, index) => (
              <Card
                key={item.title}
                className="partner-image-card overflow-hidden h-full"
                style={{
                  "--card-index": index,
                }}
              >
                <div className="p-5">
                  <h3
                    className="mt-1"
                    style={{
                      ...SERIF,
                      color: C.greenDeep,
                      fontWeight: 700,
                      fontSize: 21,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-sm"
                    style={{
                      color: C.inkSoft,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.body}
                  </p>
                </div>

                <Photo
                  src={item.image}
                  alt={item.imageAlt}
                  ratio="16 / 10"
                  radius={0}
                  position={item.imagePosition}
                  className="partner-card-photo"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: C.mist,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Growth Roadmap"
            title="Build proof, then scale."
            description="Growth is intended to be sequential: establish production, strengthen market channels, build operating evidence and expand from a stronger base."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHASES.map((phase) => {
              const done = phase.state === "done";
              const current = phase.state === "current";

              return (
                <Card key={phase.n} className="p-5 h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-black"
                      style={{
                        background: current
                          ? C.red
                          : done
                          ? C.green
                          : C.mist2,

                        color:
                          current || done ? "#fff" : C.green,

                        border:
                          current || done
                            ? "none"
                            : `1px solid ${C.borderStrong}`,
                      }}
                    >
                      {done ? <Check size={18} /> : phase.n + 1}
                    </div>

                    <div>
                      <div
                        className="text-xs font-bold uppercase"
                        style={{
                          color: current ? C.red : C.muted,
                          letterSpacing: 0,
                        }}
                      >
                        {phase.when}
                      </div>

                      <h3
                        className="mt-2"
                        style={{
                          ...SERIF,
                          color: C.greenDeep,
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        {phase.title}
                      </h3>

                      <div className="mt-3">
                        <Tag
                          tone={
                            current
                              ? "red"
                              : done
                              ? "green"
                              : "grey"
                          }
                        >
                          {done
                            ? "Foundation"
                            : current
                            ? "Current Focus"
                            : "Upcoming"}
                        </Tag>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
          <div className="partner-contact-grid grid lg:grid-cols-[.9fr_1fr] gap-6">
            <Card pale className="p-8 md:p-10">
              <Eyebrow>Contact</Eyebrow>

              <h2
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                Start a conversation.
              </h2>

              <p
                className="mt-4"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.75,
                }}
              >
                Interested in buying, supplying, financing,
                distributing or collaborating with Dodo Africa?
                Reach out to the team.
              </p>

              <div className="mt-7">
                <PrimaryButton href="mailto:hello@dodoafrica.com">
                  Discuss a Partnership
                  <ArrowRight size={16} />
                </PrimaryButton>
              </div>
            </Card>

            <Card green className="p-8 md:p-10">
              <ShieldCheck
                size={32}
                style={{ color: "#BCE0C6" }}
              />

              <h2
                className="mt-6"
                style={{
                  ...SERIF,
                  color: "#fff",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                }}
              >
                Partnerships should build measurable value.
              </h2>

              <p
                className="mt-5"
                style={{
                  color: "#D8ECDD",
                  lineHeight: 1.8,
                }}
              >
                We aim to build credibility through production,
                operating performance, commercial relationships and
                disciplined execution.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PHOTO CREDITS
   ============================================================ */

function PhotoCredits() {
  return (
    <details className="mt-7">
      <summary
        className="cursor-pointer text-xs font-bold"
        style={{
          color: "#A9CDB2",
        }}
      >
        Photography credits
      </summary>

      <div
        className="mt-4 text-[11px]"
        style={{
          color: "#A9CDB2",
          lineHeight: 1.8,
          maxWidth: 900,
        }}
      >
        Some supporting visuals are generated for Dodo Africa.
        Market and food photography also uses Pexels and Unsplash
        sources.
        {" "}

        {PHOTO_CREDITS.map((credit, index) => (
          <span key={credit.label}>
            {credit.href ? (
              <a
                href={credit.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#D8ECDD",
                  textDecoration: "underline",
                }}
              >
                {credit.label}
              </a>
            ) : (
              <span style={{ color: "#D8ECDD" }}>
                {credit.label}
              </span>
            )}

            {` by ${credit.author}, ${credit.license}`}

            {index < PHOTO_CREDITS.length - 1 ? " • " : ""}
          </span>
        ))}
      </div>
    </details>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer({ setPage }) {
  const go = (page) => {
    setPage(page);
  };

  return (
    <>
      <footer
        style={{
          background: C.footerGreenDeep,
          color: "#fff",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-10">
          <div className="footer-grid grid md:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr] gap-10 pb-10">
            <div>
              <Logo footer />

              <p
                className="mt-5 max-w-sm text-sm"
                style={{
                  color: "rgba(255,255,255,.84)",
                  lineHeight: 1.75,
                }}
              >
                An integrated Nigerian agribusiness building
                sustainable food systems from production to market,
                processing and consumer experiences.
              </p>

              <div
                className="mt-5 flex items-center gap-2 text-sm"
                style={{
                  color: "rgba(255,255,255,.84)",
                }}
              >
                <MapPin size={16} />
                Ondo State, Nigeria
              </div>
            </div>

            <div>
              <div
                className="text-xs font-extrabold uppercase"
                style={{
                  color: C.leaf,
                  letterSpacing: 0,
                }}
              >
                Company
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["story", "Our Story"],
                  ["model", "The Model"],
                  ["partners", "Partner With Us"],
                ].map(([id, label]) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => go(id)}
                    className="footer-link block text-sm"
                    style={{
                      background: "transparent",
                      color: "#FFFFFF",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div
                className="text-xs font-extrabold uppercase"
                style={{
                  color: C.leaf,
                  letterSpacing: 0,
                }}
              >
                Businesses
              </div>

              <div
                className="mt-5 space-y-3 text-sm"
                style={{
                  color: "#FFFFFF",
                }}
              >
                <div>Dodo Africa Farms</div>
                <div>Dodo Farm Mart</div>
                <div>Dodo Foods</div>
                <div>Dodo Eatery</div>
                <div>Dodo Digital</div>
              </div>
            </div>

            <div>
              <div
                className="text-xs font-extrabold uppercase"
                style={{
                  color: C.leaf,
                  letterSpacing: 0,
                }}
              >
                Agriculture
              </div>

              <div
                className="mt-5 space-y-3 text-sm"
                style={{
                  color: "#FFFFFF",
                }}
              >
                <div>Plantain</div>
                <div>Poultry</div>
                <div>Fishery</div>
                <div>Snail</div>
                <div>Goat</div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-7 text-xs"
            style={{
              color: "rgba(255,255,255,.74)",
              borderTop: "1px solid rgba(255,255,255,.12)",
            }}
          >
            <div>
              © {new Date().getFullYear()} Dodo Africa. All rights
              reserved.
            </div>

            <div>Feeding Africa, Building Generations.</div>
          </div>

          <PhotoCredits />
        </div>
      </footer>

      <div
        style={{
          height: 8,
          background: C.red,
        }}
      />
    </>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [page, setPage] = useState(() =>
    typeof window === "undefined"
      ? "home"
      : pageFromPath(window.location.pathname)
  );
  const [loaded, setLoaded] = useState(false);

  const navigateToPage = (
    nextPage,
    { replace = false, scroll = true } = {}
  ) => {
    const safePage = PAGE_PATHS[nextPage] ? nextPage : "home";

    setPage(safePage);

    if (typeof window === "undefined") return;

    const nextPath = pathForPage(safePage);
    const currentPath = cleanPath(window.location.pathname);

    if (currentPath !== nextPath) {
      const method = replace ? "replaceState" : "pushState";

      window.history[method]({ page: safePage }, "", nextPath);
    }

    if (scroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = C.mist;
    document.body.style.color = C.ink;

    return () => {
      document.body.style.margin = "";
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentPath = cleanPath(window.location.pathname);

    if (!PATH_PAGES[currentPath]) {
      window.history.replaceState(
        { page: "home" },
        "",
        pathForPage("home")
      );
    }

    const handlePopState = () => {
      setPage(pageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const labels = {
      home: "Dodo Africa",
      story: "Our Story | Dodo Africa",
      model: "The Model | Dodo Africa",
      mart: "Farm Mart & Eatery | Dodo Africa",
      partners: "Partner With Us | Dodo Africa",
    };

    document.title = labels[page] || labels.home;
  }, [page]);

  useEffect(() => {
    let active = true;

    const loadImage = (src) =>
      new Promise((resolve) => {
        const image = new Image();
        image.decoding = "async";
        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
      });

    const critical = [LOGO_SRC, IMG.hero];
    const minimumHold = new Promise((resolve) =>
      window.setTimeout(resolve, 300)
    );
    const fallback = new Promise((resolve) =>
      window.setTimeout(resolve, 1200)
    );

    Promise.race([
      Promise.all([...critical.map(loadImage), minimumHold]),
      fallback,
    ]).then(() => {
      if (active) {
        setLoaded(true);
      }
    });

    const scheduleIdle =
      window.requestIdleCallback ||
      ((callback) => window.setTimeout(callback, 350));

    scheduleIdle(() => {
      PAGE_PRELOADS.forEach((src, index) => {
        window.setTimeout(() => {
          const image = new Image();
          image.decoding = "async";
          image.loading = "eager";
          image.src = src;
        }, index * 180);
      });
    });

    IMAGE_PRELOADS.filter((src) => !critical.includes(src)).forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });

    return () => {
      active = false;
    };
  }, []);

  let content;

  switch (page) {
    case "story":
      content = <StoryPage setPage={navigateToPage} />;
      break;

    case "model":
      content = <ModelPage setPage={navigateToPage} />;
      break;

    case "mart":
      content = <MartPage />;
      break;

    case "partners":
      content = <PartnersPage />;
      break;

    case "home":
    default:
      content = <HomePage setPage={navigateToPage} />;
      break;
  }

  return (
    <div
      style={{
        ...BODY,
        minHeight: "100vh",
        background: C.mist,
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          min-width: 0;
          background: ${C.paper};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        #root {
          min-width: 0;
        }

        html,
        body,
        #root {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        main,
        nav,
        section,
        footer {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .max-w-7xl,
        .max-w-3xl,
        .max-w-2xl,
        .max-w-sm {
          width: 100%;
          min-width: 0;
        }

        .grid,
        .flex {
          min-width: 0;
        }

        .grid > *,
        .flex > * {
          min-width: 0;
        }

        button,
        a {
          font: inherit;
          min-width: 0;
          max-width: 100%;
        }

        button {
          border: 0;
          cursor: pointer;
        }

        button,
        a {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease;
        }

        button:hover,
        a:hover {
          transform: translateY(-1px);
        }

        h1,
        h2,
        h3 {
          text-wrap: balance;
        }

        .page-shell {
          font-size: 15px;
        }

        .page-shell h2 {
          font-weight: 650 !important;
        }

        .page-shell h3 {
          font-weight: 650 !important;
        }

        .page-shell p,
        .page-shell li {
          font-size: clamp(13px, .95vw, 15px);
          line-height: 1.68;
        }

        p,
        li {
          text-wrap: pretty;
        }

        a {
          text-decoration: none;
        }

        img {
          max-width: 100%;
        }

        h1,
        h2,
        h3,
        span {
          overflow-wrap: normal;
          word-break: normal;
        }

        p,
        li,
        button,
        a {
          overflow-wrap: break-word;
        }

        ::selection {
          background: ${C.red};
          color: #ffffff;
        }

        .page-shell {
          background:
            linear-gradient(180deg, ${C.paper} 0%, ${C.mist} 54%, ${C.paper} 100%);
          overflow-x: hidden;
        }

        .page-shell section:not(.home-hero):not(.page-hero) {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .page-shell section:not(.home-hero):not(.page-hero)::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: .44;
          background:
            linear-gradient(135deg, rgba(140,249,187,.14), transparent 34%, rgba(255,255,255,.45) 72%, transparent),
            repeating-linear-gradient(90deg, rgba(0,104,55,.028) 0 1px, transparent 1px 86px);
        }

        .page-shell section:not(.home-hero):not(.page-hero):nth-of-type(even)::before {
          background:
            linear-gradient(45deg, rgba(255,255,255,.72), transparent 42%, rgba(140,249,187,.14)),
            repeating-linear-gradient(0deg, rgba(0,104,55,.024) 0 1px, transparent 1px 72px);
        }

        .page-shell section:not(.home-hero):not(.page-hero) > .max-w-7xl {
          position: relative;
          z-index: 1;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .section-eyebrow::before {
          content: "";
          display: inline-block;
          width: 34px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, ${C.red}, ${C.green});
        }

        .section-eyebrow.is-light::before {
          background: linear-gradient(90deg, #ffffff, #B9DFC4);
        }

        .primary-button::after {
          content: "";
          position: absolute;
          inset: -2px;
          transform: translateX(-115%) skewX(-16deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.32), transparent);
          transition: transform 520ms ease;
        }

        .primary-button {
          transition:
            background-color 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            transform 220ms ease;
        }

        .primary-button:hover {
          transform: translateY(-1px);
          background: ${C.footerGreenDeep} !important;
          border-color: ${C.footerGreenDeep} !important;
          box-shadow: 0 16px 34px rgba(0,45,24,.22) !important;
        }

        .primary-button:hover::after {
          transform: translateX(115%) skewX(-16deg);
        }

        .primary-button svg {
          position: relative;
          z-index: 1;
          transition: transform 220ms ease;
        }

        .primary-button:hover svg {
          transform: translateX(3px);
        }

        .primary-button > * {
          position: relative;
          z-index: 1;
        }

        .surface-card {
          overflow: hidden;
          isolation: isolate;
          border-radius: 8px !important;
          will-change: transform;
        }

        .surface-card:not(.surface-card-dark):not(.surface-card-red) {
          background-image:
            radial-gradient(circle at 84% 0%, rgba(140,249,187,.08), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,.99), rgba(250,255,252,.97));
          border-color: rgba(0,104,55,.12) !important;
          box-shadow: 0 18px 46px rgba(23,49,38,.07) !important;
        }

        .surface-card-dark {
          background-image:
            linear-gradient(180deg, rgba(0,104,55,.98), ${C.footerGreenDeep}) !important;
          box-shadow: 0 22px 54px rgba(0,45,24,.2) !important;
        }

        .surface-card-red {
          background-image:
            linear-gradient(180deg, ${C.red}, ${C.redDeep}) !important;
          box-shadow: 0 22px 54px rgba(90,0,0,.16) !important;
        }

        .surface-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: min(112px, 34%);
          border-radius: 8px 999px 999px 0;
          opacity: .86;
          background: linear-gradient(90deg, rgba(255,0,0,.58), rgba(0,104,55,.62));
          transition: width 300ms ease, opacity 300ms ease;
        }

        .surface-card > * {
          position: relative;
          z-index: 1;
        }

        .surface-card:hover {
          transform: translateY(-1px);
          border-color: rgba(0,104,55,.22) !important;
          box-shadow: 0 22px 54px rgba(23,49,38,.095) !important;
        }

        .surface-card:hover::before {
          width: min(154px, 42%);
          opacity: 1;
        }

        .surface-card h2,
        .surface-card h3 {
          font-weight: 650 !important;
        }

        .surface-card h3 {
          font-size: clamp(17px, 1.35vw, 20px) !important;
          line-height: 1.22;
        }

        .surface-card p {
          font-size: clamp(13px, .9vw, 14px) !important;
          line-height: 1.62 !important;
        }

        .surface-card-dark p,
        .surface-card-red p {
          color: rgba(242,255,248,.78) !important;
        }

        .surface-card-dark h2,
        .surface-card-dark h3,
        .surface-card-red h2,
        .surface-card-red h3 {
          color: rgba(248,255,251,.92) !important;
        }

        .home-today-intro {
          display: grid;
          grid-template-columns: minmax(0, .8fr) minmax(420px, 1.15fr);
          gap: clamp(24px, 4vw, 64px);
          align-items: start;
        }

        .home-today-stats {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(28px, 4vw, 56px);
        }

        .home-today-intro > *,
        .section-heading {
          min-width: 0;
        }

        .home-today-title-line {
          display: inline;
        }

        .home-today-mobile-copy {
          display: none;
        }

        .home-today-mobile-copy span {
          display: block;
        }

        .home-today-section {
          position: relative;
          overflow: hidden;
        }

        .home-today-africa-mark {
          position: absolute;
          bottom: -54px;
          right: -32px;
          width: clamp(220px, 22vw, 340px);
          height: auto;
          fill: none;
          stroke: rgba(0,104,55,.14);
          stroke-width: 13;
          z-index: 0;
          pointer-events: none;
        }

        .home-today-visual {
          position: relative;
        }

        .home-today-photo {
          position: relative;
          z-index: 1;
          height: 100%;
          border: 1px solid rgba(0,104,55,.16);
          box-shadow: 0 24px 58px rgba(23,49,38,.09);
          border-radius: 8px !important;
        }

        .mart-route-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            border-color 260ms ease;
          background:
            radial-gradient(circle at 84% 0%, rgba(140,249,187,.08), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,.99), rgba(250,255,252,.97)) !important;
          border-color: rgba(0,104,55,.12) !important;
          box-shadow: 0 18px 46px rgba(23,49,38,.07);
        }

        .mart-route-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: min(88px, 38%);
          border-radius: 8px 999px 999px 0;
          background: linear-gradient(90deg, rgba(255,0,0,.58), rgba(0,104,55,.62));
        }

        .mart-route-card > * {
          position: relative;
          z-index: 1;
        }

        .mart-route-card:hover {
          transform: translateY(-1px);
          border-color: rgba(0,104,55,.22) !important;
          box-shadow: 0 22px 54px rgba(23,49,38,.095);
        }

        .site-nav,
        .nav-frame {
          transition:
            background-color 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            transform 220ms ease;
        }

        .site-nav > div {
          width: min(100%, 80rem);
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.25rem !important;
          padding-right: 1.25rem !important;
        }

        @media (min-width: 768px) {
          .site-nav > div {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
        }

        .desktop-nav-links {
          display: none;
        }

        .desktop-nav-cta {
          display: none;
        }

        .floating-mobile-toggle {
          display: none;
        }

        .nav-menu-button {
          display: flex;
          margin-left: auto;
          flex-shrink: 0;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .nav-menu-button:hover {
          color: ${C.leaf} !important;
          transform: translateY(-1px);
        }

        @media (min-width: 1024px) {
          .desktop-nav-links {
            display: flex;
          }

          .desktop-nav-cta {
            display: block;
          }

          .nav-menu-button {
            display: none !important;
          }
        }

        .nav-frame {
          width: 100%;
          max-width: 100%;
          overflow: visible;
        }

        .nav-frame > * {
          flex-shrink: 0;
        }

        .nav-partner-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 8px 17px;
          border: 1px solid rgba(255,255,255,.34);
          border-radius: 999px;
          background: ${C.leaf};
          color: ${C.greenDeep};
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(0,24,10,.16);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background-color 220ms ease;
        }

        .nav-partner-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(0,24,10,.22);
        }

        .nav-partner-button.is-active {
          background: ${C.greenDeep};
          color: #fff;
          border-color: rgba(140,249,187,.65);
          box-shadow: 0 0 0 2px rgba(140,249,187,.5), 0 12px 26px rgba(0,24,10,.28);
        }

        .nav-partner-button.is-active:hover {
          background: ${C.footerGreenDeep};
        }

        .site-nav .dodo-logo {
          filter: drop-shadow(0 2px 8px rgba(0,28,12,.18));
        }

        .home-closing-section {
          background:
            radial-gradient(circle at 15% 15%, rgba(255,255,255,.6), transparent 34%),
            linear-gradient(180deg, ${C.greenMist}, rgba(140,249,187,.14) 56%, ${C.greenMist}) !important;
        }

        .home-hero {
          min-height: auto;
          display: block;
        }

        .home-hero-story {
          min-height: auto !important;
          padding: 0;
          isolation: isolate;
          color: #fff;
        }

        .home-hero-shell {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: none !important;
          min-height: 100svh;
          margin: 0 auto;
          border: 0;
          border-radius: 0;
          background: ${C.greenDeep};
          box-shadow: none;
        }

        .home-hero-shell::before,
        .home-hero-shell::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .home-hero-shell::before {
          background:
            linear-gradient(90deg, rgba(0,16,7,.82) 0%, rgba(0,45,24,.58) 42%, rgba(0,16,7,.22) 100%),
            linear-gradient(180deg, rgba(0,0,0,.24), rgba(0,0,0,.52));
        }

        .home-hero-shell::after {
          background:
            radial-gradient(circle at 16% 82%, rgba(140,249,187,.22), transparent 26%),
            linear-gradient(180deg, transparent 62%, rgba(0,36,16,.82));
        }

        .home-hero-photo {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: ${C.footerGreenDeep};
        }

        .home-hero-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          filter: saturate(.94) contrast(1.04) brightness(.9);
          transform: scale(1.02);
          animation: home-photo-breathe 9800ms ease-in-out infinite alternate;
        }

        .home-hero-story .home-hero-inner {
          position: relative;
          z-index: 3;
          min-height: inherit;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(285px, .42fr);
          gap: clamp(28px, 4vw, 52px);
          align-items: end;
          padding: clamp(136px, 18vh, 188px) clamp(22px, 7vw, 132px) clamp(42px, 7vh, 72px);
        }

        .home-hero-story .home-hero-copy {
          width: 100%;
          max-width: 790px;
          justify-self: start;
        }

        .home-hero-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          padding: 8px 13px;
          border: 1px solid;
          border-radius: 999px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          font-size: 11px;
	          font-weight: 700;
          text-transform: none;
          letter-spacing: 0;
        }

        .home-hero-badge + .hero-title {
          margin-top: clamp(18px, 2.4vh, 30px);
        }

        .home-hero-story .hero-title,
        .page-hero-title {
          color: rgba(248,255,251,.92) !important;
          font-weight: 680 !important;
          letter-spacing: 0 !important;
        }

        .home-hero-story .home-hero-lede,
        .page-photo-hero-copy > p {
          color: rgba(242,255,248,.78) !important;
          font-weight: 400 !important;
        }

        .page-photo-hero-card p,
        .page-photo-hero-card div {
          font-weight: 500 !important;
        }

        .home-story-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: fit-content;
          min-height: 42px;
          padding: 9px 10px 9px 17px;
          border: 2px solid rgba(255,255,255,.38);
          border-radius: 999px;
          background: ${C.leaf};
          color: #00351B;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 14px 36px rgba(0,0,0,.22);
        }

        .home-story-button span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 22px;
          height: 22px;
          width: 22px;
          border-radius: 999px;
          background: ${C.greenDeep};
          color: #fff;
          transition: transform 220ms ease;
        }

        .home-story-button:hover span {
          transform: translateX(2px);
        }

        .home-hero-text-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: fit-content;
          min-height: 48px;
          padding: 13px 0;
          background: transparent;
          color: #fff;
          font-size: 14px;
	          font-weight: 700;
        }

        .home-hero-mission {
          align-self: end;
          width: 100%;
          max-width: 355px;
          margin-left: auto;
          padding: 22px;
          border: 1px solid rgba(255,255,255,.26);
          border-radius: 8px;
          background: rgba(255,255,255,.12);
          box-shadow: 0 22px 50px rgba(0,0,0,.2);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .page-hero {
          min-height: min(760px, 100svh);
          display: grid;
          align-items: stretch;
        }

        .page-photo-hero {
          min-height: min(720px, 100svh);
          isolation: isolate;
          color: #fff;
        }

        .page-photo-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 16% 82%, rgba(140,249,187,.2), transparent 26%),
            linear-gradient(180deg, transparent 55%, rgba(0,36,16,.68));
        }

        .page-photo-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: none !important;
          min-height: inherit;
          display: grid;
          grid-template-columns: minmax(0, .8fr) minmax(260px, .35fr);
          gap: clamp(28px, 4vw, 56px);
          align-items: end;
          padding-top: clamp(116px, 15vh, 154px);
          padding-left: clamp(22px, 7vw, 132px) !important;
          padding-right: clamp(22px, 7vw, 132px) !important;
          padding-bottom: clamp(52px, 8vh, 86px);
        }

        .page-photo-hero-copy {
          max-width: 720px;
        }

        .page-photo-hero-card {
          justify-self: end;
          width: min(100%, 350px);
          padding: 22px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 8px;
          background: rgba(255,255,255,.12);
          box-shadow: 0 22px 52px rgba(0,0,0,.2);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .page-photo-card-title {
          color: rgba(248,255,251,.92);
          font-size: clamp(13px, 1.05vw, 14px);
          font-weight: 700;
          letter-spacing: 0;
        }

        .page-photo-card-copy {
          color: rgba(242,255,248,.8) !important;
          font-size: clamp(13px, 1vw, 14px) !important;
          line-height: 1.62 !important;
          font-weight: 400 !important;
        }

        .model-service-band {
          position: relative;
          min-height: 335px;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid ${C.border};
          background: ${C.greenDeep};
          box-shadow: 0 24px 58px rgba(0,104,55,.12);
        }

        .model-service-band img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 52%;
          filter: saturate(.96) contrast(1.03) brightness(.84);
          transform: scale(1.015);
          animation: page-photo-pan 9800ms ease-in-out infinite alternate;
        }

        .model-service-band::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0,28,12,.76), rgba(0,104,55,.36) 52%, rgba(0,28,12,.12)),
            linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,28,12,.42));
        }

        .model-service-band-copy {
          position: relative;
          z-index: 2;
          width: min(620px, 100%);
          padding: clamp(28px, 5vw, 58px);
        }

        .model-service-cards {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          width: min(1040px, calc(100% - 44px));
          margin: -56px auto 0;
        }

        .model-service-card {
          padding: 22px;
          background: rgba(255,255,255,.96) !important;
          border-color: rgba(0,104,55,.14) !important;
          box-shadow: 0 16px 40px rgba(0,104,55,.075) !important;
          transition:
            transform 300ms cubic-bezier(.2,.7,.2,1),
            box-shadow 300ms ease,
            border-color 260ms ease;
        }

        .model-service-card.surface-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,104,55,.24) !important;
          box-shadow: 0 26px 58px rgba(0,45,24,.115) !important;
        }

        .model-service-card::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 0;
          height: 3px;
          width: 36%;
          border-radius: 8px 0 999px 0;
          background: linear-gradient(90deg, rgba(255,0,0,.55), rgba(0,104,55,.72));
          z-index: 4;
        }

        .partner-image-card {
          padding: 0;
          transform-origin: center;
          animation-delay: calc(var(--card-index, 0) * 70ms);
          isolation: isolate;
          transition:
            transform 320ms cubic-bezier(.2,.7,.2,1),
            border-color 260ms ease,
            box-shadow 320ms ease,
            background-color 260ms ease;
        }

        .partner-card-photo {
          min-height: 172px;
          background-color: ${C.mist2};
        }

        .partner-card-photo img {
          filter: saturate(.96) contrast(1.03) brightness(.98);
        }

        .partner-card-photo.photo-frame::after {
          background:
            linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,104,55,.15)),
            linear-gradient(90deg, rgba(255,0,0,.035), rgba(140,249,187,.08)) !important;
          opacity: .58 !important;
        }

        .partner-image-card h3 {
          position: relative;
          display: inline-block;
        }

        .partner-image-card h3::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, ${C.red}, ${C.green});
          transform: scaleX(.22);
          transform-origin: left;
          opacity: .55;
          transition:
            transform 260ms ease,
            opacity 260ms ease;
        }

        .partner-image-card.surface-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 64px rgba(0,45,24,.13) !important;
        }

        .partner-image-card:hover h3::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .consumer-business-card {
          transition:
            transform 320ms cubic-bezier(.2,.7,.2,1),
            box-shadow 320ms ease,
            border-color 260ms ease;
        }

        .consumer-business-card.surface-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 28px 64px rgba(0,45,24,.12) !important;
        }

        .page-hero-light {
          isolation: isolate;
          color: #020702;
        }

        .page-hero-light::before {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 44%;
          pointer-events: none;
          opacity: .32;
          background:
            repeating-linear-gradient(112deg, rgba(0,104,55,.035) 0 1px, transparent 1px 46px),
            linear-gradient(180deg, transparent, rgba(255,255,255,.82));
        }

        .page-hero-soft-inner {
          position: relative;
          z-index: 2;
          min-height: inherit;
          display: grid;
          grid-template-columns: minmax(0, .78fr) minmax(430px, 1.05fr);
          gap: clamp(34px, 5vw, 72px);
          align-items: center;
          padding-top: clamp(126px, 14vh, 164px);
          padding-bottom: clamp(62px, 9vh, 98px);
        }

        .page-hero-photo-wrap {
          position: relative;
          justify-self: end;
          width: min(100%, 760px);
          aspect-ratio: 1.24 / 1;
          min-height: auto;
          border-radius: var(--hero-radius-a, 58% 42% 62% 38% / 42% 58% 42% 58%);
          clip-path: var(--hero-clip-a, polygon(14% 17%, 51% 0%, 87% 14%, 100% 49%, 82% 88%, 45% 100%, 10% 80%, 0% 42%));
          overflow: hidden;
          border: 4px solid rgba(255,255,255,.86);
          background: ${C.mist2};
          box-shadow: 0 26px 72px rgba(0,104,55,.17);
          transform-origin: center;
        }

        .page-hero-photo-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          filter: saturate(.98) contrast(1.04) brightness(1.02);
          transform: scale(1.012);
          animation: page-photo-pan 9000ms ease-in-out infinite alternate;
        }

        .page-hero-photo-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,104,55,.1)),
            linear-gradient(90deg, rgba(140,249,187,.22), rgba(140,249,187,0) 46%, rgba(255,0,0,.04));
          mix-blend-mode: multiply;
        }

        .page-hero-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .45;
          background:
            repeating-linear-gradient(90deg, rgba(0,104,55,.045) 0 1px, transparent 1px 96px),
            repeating-linear-gradient(0deg, rgba(0,104,55,.025) 0 1px, transparent 1px 72px);
        }

        .hero-pill {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: chip-settle 620ms cubic-bezier(.2,.7,.2,1) both;
          transition:
            transform 220ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }

        .hero-pill:nth-child(2) {
          animation-delay: 90ms;
        }

        .hero-pill:nth-child(3) {
          animation-delay: 160ms;
        }

        .hero-pill:hover {
          transform: translateY(-1px);
          color: rgba(248,255,251,.94) !important;
          border-color: rgba(140,249,187,.42) !important;
          background: rgba(255,255,255,.18) !important;
        }

        .home-hero > .relative {
          padding-top: clamp(148px, 16vh, 190px);
          padding-bottom: clamp(74px, 10vh, 120px);
        }

        .page-hero:not(.page-hero-light) > .relative {
          padding-top: clamp(136px, 13vh, 164px);
          padding-bottom: clamp(76px, 9vh, 112px);
        }

        .hero-copy,
        .motion-card,
        .photo-frame,
        .rounded-lg {
          min-width: 0;
          max-width: 100%;
        }

        .hero-copy p,
        .hero-copy h1,
        .hero-copy h2,
        .hero-copy h3,
        .story-large-copy {
          overflow-wrap: anywhere;
        }

        .page-hero-copy {
          max-width: 700px;
          justify-self: start;
        }

        .page-hero-title.is-compact {
          max-width: 720px;
          font-size: clamp(30px, 3.8vw, 48px) !important;
          line-height: 1.08 !important;
        }

        .hero-title-line {
          display: block;
        }

        .consumer-business-photo {
          min-height: 255px;
        }

        .story-editorial-grid {
          display: grid;
          grid-template-columns: minmax(0, .92fr) minmax(420px, 1fr);
          gap: clamp(34px, 5vw, 68px);
          align-items: center;
        }

        .story-quote-panel {
          max-width: 560px;
        }

        .story-large-copy {
          font-size: clamp(18px, 2vw, 25px);
          font-weight: 500 !important;
        }

        .story-discover-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 17px;
          border: 1px solid rgba(0,104,55,.2);
          border-radius: 999px;
          background: ${C.greenDeep};
          color: #fff;
          font-size: 13px;
          font-weight: 650;
          box-shadow: 0 12px 28px rgba(0,104,55,.16);
          transition:
            transform 220ms ease,
            background-color 220ms ease,
            color 220ms ease,
            box-shadow 220ms ease;
        }

        .story-discover-button::after {
          content: "";
          position: absolute;
          inset: -2px;
          transform: translateX(-118%) skewX(-16deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.26), transparent);
          transition: transform 560ms ease;
        }

        .story-discover-button > * {
          position: relative;
          z-index: 1;
        }

        .story-discover-button:hover {
          transform: translateY(-1px);
          background: ${C.footerGreenDeep};
          box-shadow: 0 16px 34px rgba(0,45,24,.22);
        }

        .story-discover-button:hover::after {
          transform: translateX(118%) skewX(-16deg);
        }

        .story-discover-button svg {
          position: relative;
          z-index: 1;
          transition: transform 220ms ease;
        }

        .story-discover-button:hover svg {
          transform: translateX(3px);
        }

        .model-cta-button {
          background: ${C.greenDeep};
          color: #fff;
          box-shadow: 0 14px 32px rgba(0,104,55,.18);
        }

        .story-photo-strip {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          align-items: center;
          perspective: 900px;
        }

        .story-strip-photo {
          min-height: 330px;
          box-shadow: 0 18px 42px rgba(0,104,55,.12);
          transform-origin: center;
          transition:
            transform 360ms cubic-bezier(.2,.7,.2,1),
            box-shadow 360ms ease,
            opacity 260ms ease,
            filter 260ms ease;
          will-change: transform;
        }

        .story-strip-photo img {
          filter: saturate(.95) contrast(1.02) brightness(.98);
          animation: story-image-breathe 7600ms ease-in-out infinite alternate;
        }

        .story-strip-photo:nth-child(2) img {
          animation-delay: -2200ms;
        }

        .story-strip-photo:nth-child(3) img {
          animation-delay: -4100ms;
        }

        .story-strip-photo.photo-frame::after {
          background:
            linear-gradient(180deg, rgba(255,255,255,.04), rgba(0,104,55,.12)),
            linear-gradient(90deg, rgba(140,249,187,.09), rgba(255,0,0,.025)) !important;
          opacity: .48 !important;
          mix-blend-mode: multiply;
        }

        .story-strip-photo.is-tall {
          min-height: 405px;
          margin-top: -28px;
        }

        .story-photo-strip:hover .story-strip-photo:not(:hover) {
          opacity: .86;
          filter: saturate(.92);
          transform: translateY(5px) scale(.985);
        }

        .story-strip-photo:hover {
          transform: translateY(-9px) rotate(.5deg) scale(1.012);
          box-shadow: 0 26px 58px rgba(0,104,55,.18);
        }

        .story-values-band {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          width: min(900px, 100%);
          margin-left: auto;
          margin-right: auto;
          padding: 24px;
          border-radius: 8px;
          background: ${C.greenDeep};
          box-shadow: 0 20px 46px rgba(0,104,55,.16);
        }

        .story-value-item {
          display: grid;
          justify-items: center;
          gap: 10px;
          color: #fff;
          font-size: 13px;
          font-weight: 650;
          text-align: center;
        }

        .story-value-item span {
          display: block;
          width: 11px;
          height: 11px;
          border-radius: 999px;
          background: ${C.leaf};
          box-shadow: 0 0 0 6px rgba(140,249,187,.16);
        }

        .story-vision-card {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          gap: clamp(22px, 4vw, 42px);
          width: min(980px, 100%);
          margin-left: auto;
          margin-right: auto;
          padding: 66px clamp(24px, 5vw, 54px) 38px;
          border: 1px solid ${C.border};
          border-radius: 8px;
          background: rgba(255,255,255,.94);
          box-shadow: ${C.shadowLarge};
        }

        .story-vision-divider {
          width: 1px;
          min-height: 145px;
          background: ${C.border};
        }

        .founder-card {
          background: #fff;
        }

        .founder-portrait {
          min-height: 310px;
          background-color: ${C.mist2};
          border-bottom: 1px solid ${C.border};
        }

        .founder-portrait.photo-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(0,104,55,.02), rgba(0,104,55,.16)),
            linear-gradient(90deg, rgba(255,0,0,.06), rgba(0,104,55,.08));
          mix-blend-mode: multiply;
        }

        .founder-portrait img {
          filter: saturate(.92) contrast(1.04) brightness(.98);
        }

        .founder-portrait-fallback {
          aspect-ratio: 4 / 3;
          position: relative;
          display: grid;
          place-items: center;
          background: #f7fbf8;
        }

        .founder-portrait-fallback > div {
          position: relative;
          z-index: 3;
        }

        .page-shell {
          animation: page-enter 520ms cubic-bezier(.2,.7,.2,1) both;
        }

        .hero-image {
          transform-origin: center;
          animation: hero-image-settle 1600ms ease both;
          will-change: transform;
        }

        .page-hero-photo-wrap.hero-image {
          animation: page-photo-float 7400ms ease-in-out infinite alternate;
        }

        .hero-copy > * {
          opacity: 0;
          transform: translateY(18px);
          animation: copy-rise 720ms cubic-bezier(.2,.7,.2,1) both;
        }

        .hero-copy > *:nth-child(1) {
          animation-delay: 60ms;
        }

        .hero-copy > *:nth-child(2) {
          animation-delay: 130ms;
        }

        .hero-copy > *:nth-child(3) {
          animation-delay: 200ms;
        }

        .hero-copy > *:nth-child(4) {
          animation-delay: 270ms;
        }

        .motion-card {
          animation: card-rise 560ms cubic-bezier(.2,.7,.2,1) both;
        }

        .farm-card {
          animation: none !important;
          opacity: 1 !important;
        }

        .motion-card:hover {
          border-color: ${C.borderStrong};
          box-shadow: 0 14px 34px rgba(0,104,55,.075);
        }

        .motion-photo {
          animation: photo-rise 620ms cubic-bezier(.2,.7,.2,1) both;
          transform: translateZ(0);
        }

        .motion-photo img {
          transform: scale(1.025);
        }

        .motion-photo.is-loaded img {
          transform: scale(1);
        }

        .farm-card:hover .motion-photo img,
        .partner-image-card:hover .motion-photo img,
        .consumer-business-card:hover .motion-photo img,
        .founder-card:hover .motion-photo img {
          transform: scale(1.045);
        }

        @media (prefers-reduced-motion: no-preference) {
          .farm-card .motion-photo.is-loaded img,
          .partner-image-card .motion-photo.is-loaded img {
            animation: card-image-drift 9200ms ease-in-out infinite alternate;
            animation-delay: calc(var(--card-index, 0) * 160ms);
          }

          .partner-image-card:nth-child(2n) .motion-photo.is-loaded img,
          .farm-card:nth-child(2n) .motion-photo.is-loaded img {
            animation-duration: 10800ms;
            animation-direction: alternate-reverse;
          }
        }

        .photo-frame:not(.founder-portrait)::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255,255,255,.04), rgba(0,104,55,.1)),
            linear-gradient(90deg, rgba(255,0,0,.04), rgba(0,104,55,.05));
          opacity: .72;
          mix-blend-mode: multiply;
        }

        .mobile-menu-panel {
          animation: menu-drop 240ms ease both;
          transform-origin: top;
        }

        @keyframes page-enter {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes hero-image-settle {
          from {
            transform: scale(1.045);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes home-photo-breathe {
          from {
            transform: scale(1.02) translate3d(-.7%, 0, 0);
          }

          to {
            transform: scale(1.055) translate3d(.7%, -.5%, 0);
          }
        }

        @keyframes page-photo-float {
          0% {
            border-radius: var(--hero-radius-a, 58% 42% 62% 38% / 42% 58% 42% 58%);
            clip-path: var(--hero-clip-a, polygon(14% 17%, 51% 0%, 87% 14%, 100% 49%, 82% 88%, 45% 100%, 10% 80%, 0% 42%));
            transform: translate3d(0, 0, 0) rotate(-1deg) scale(1);
          }

          50% {
            border-radius: var(--hero-radius-b, 50% 50% 66% 34% / 48% 62% 38% 52%);
            clip-path: var(--hero-clip-b, polygon(11% 20%, 48% 2%, 90% 17%, 98% 52%, 78% 91%, 42% 99%, 8% 76%, 2% 38%));
            transform: translate3d(-8px, 7px, 0) rotate(.8deg) scale(1.018);
          }

          100% {
            border-radius: var(--hero-radius-c, 62% 38% 56% 44% / 44% 55% 45% 56%);
            clip-path: var(--hero-clip-c, polygon(16% 14%, 55% 1%, 88% 20%, 100% 46%, 84% 84%, 48% 100%, 12% 83%, 0% 45%));
            transform: translate3d(7px, -8px, 0) rotate(-.6deg) scale(1.026);
          }
        }

        @keyframes page-photo-pan {
          from {
            transform: scale(1.015) translate3d(-.8%, 0, 0);
          }

          to {
            transform: scale(1.04) translate3d(.8%, -.6%, 0);
          }
        }

        @keyframes copy-rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes chip-settle {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes photo-rise {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes story-image-breathe {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.035) translate3d(.6%, -.5%, 0);
          }
        }

        @keyframes card-image-drift {
          from {
            transform: scale(1.01) translate3d(-.35%, .2%, 0);
          }

          to {
            transform: scale(1.055) translate3d(.45%, -.45%, 0);
          }
        }

        @keyframes menu-drop {
          from {
            opacity: 0;
            transform: scaleY(.98) translateY(-4px);
          }

          to {
            opacity: 1;
            transform: scaleY(1) translateY(0);
          }
        }

        @supports (animation-timeline: view()) {
          .page-shell section:not(.home-hero):not(.page-hero) > .max-w-7xl {
            animation: section-lift both;
            animation-timeline: view();
            animation-range: entry 0% cover 24%;
          }
        }

        @keyframes section-lift {
          from {
            opacity: .55;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .site-loader {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: grid;
          place-items: center;
          background:
            linear-gradient(90deg, rgba(0,104,55,.92), rgba(0,104,55,.74) 48%, rgba(0,104,55,.18)),
            linear-gradient(180deg, rgba(0,104,55,.08), rgba(0,104,55,.72)),
            url("${IMG.hero}") center / cover no-repeat;
        }

        .site-loader-card {
          position: relative;
          overflow: hidden;
          display: grid;
          justify-items: center;
          gap: 18px;
          width: min(360px, calc(100% - 40px));
          padding: 24px 26px 22px;
          border: 1px solid ${C.border};
          border-radius: 10px;
          background: rgba(255,255,255,.96);
          box-shadow: ${C.shadowLarge};
          animation: loader-card 520ms cubic-bezier(.2,.7,.2,1) both;
        }

        .site-loader-card::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 4px;
          background: linear-gradient(90deg, ${C.red}, ${C.green}, ${C.red});
        }

        @keyframes loader-card {
          from {
            opacity: 0;
            transform: translateY(8px) scale(.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .loader-route {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 250px;
          margin-top: 2px;
        }

        .loader-node {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          box-shadow: 0 0 0 6px rgba(0,104,55,.08);
        }

        .loader-node-red {
          background: ${C.red};
        }

        .loader-node-green {
          background: ${C.green};
        }

        .loader-track {
          position: relative;
          height: 3px;
          overflow: hidden;
          border-radius: 999px;
          background: ${C.border};
        }

        .loader-track span {
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          border-radius: inherit;
          background: linear-gradient(90deg, ${C.green}, ${C.red});
          animation: route-load 1050ms cubic-bezier(.5,0,.2,1) infinite;
        }

        .loader-track:nth-of-type(4) span {
          animation-delay: 180ms;
        }

        .loader-caption {
          padding-top: 2px;
        }

        @keyframes route-load {
          0% {
            transform: translateX(-100%);
          }

          55%,
          100% {
            transform: translateX(100%);
          }
        }

        .photo-loader {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background:
            linear-gradient(135deg, ${C.mist2}, #ffffff 48%, #EAF4ED);
        }

        .photo-loader span {
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background:
            linear-gradient(90deg, transparent, rgba(255,255,255,.78), transparent);
          animation: image-shimmer 1.05s ease-in-out infinite;
        }

        @keyframes image-shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        .dodo-logo {
          height: 41px;
          width: 102px;
        }

        @media (min-width: 640px) {
          .dodo-logo {
            height: 43px;
            width: 108px;
          }
        }

        @media (min-width: 1024px) {
          .home-hero:not(.home-hero-light) {
            min-height: min(680px, calc(100vh - 88px));
          }

          .home-hero-light {
            min-height: 100svh;
          }

          .page-hero {
            min-height: min(760px, 100svh);
          }

          .dodo-logo {
            height: 47px;
            width: 118px;
          }
        }

        @media (max-width: 1023px) {
          .desktop-nav-links,
          .desktop-nav-cta {
            display: none !important;
          }

          .nav-frame {
            position: relative;
          }

          .floating-mobile-toggle {
            display: flex !important;
            position: fixed;
            top: 10px;
            right: 14px;
            z-index: 150;
            margin-left: 0;
            transform: none;
          }

          .floating-mobile-toggle:hover {
            transform: none;
          }
        }

        @media (max-width: 420px) {
          .dodo-logo {
            height: 39px;
            width: 98px;
          }
        }

        @media (max-width: 360px) {
          .dodo-logo {
            height: 37px;
            width: 93px;
          }
        }

        .footer-logo {
          height: 47px;
          width: 118px;
        }

        .footer-link {
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          transition: color 180ms ease;
        }

        .footer-link:hover {
          color: ${C.leaf} !important;
          text-decoration: underline;
        }

        @media (max-width: 420px) {
          .footer-logo {
            height: 39px;
            width: 98px;
          }
        }

        @media (max-width: 360px) {
          .footer-logo {
            height: 37px;
            width: 93px;
          }
        }

        @media (max-width: 1100px) {
          .home-hero:not(.home-hero-light) {
            min-height: auto;
          }

          .home-today-intro {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .home-hero-shell {
            min-height: min(720px, 100svh);
          }

          .home-hero-story .home-hero-inner {
            min-height: inherit;
          }

          .home-hero:not(.home-hero-light) h1 {
            font-size: clamp(38px, 6.6vw, 56px) !important;
          }

          .home-hero-light h1 {
            font-size: clamp(34px, 5.6vw, 50px) !important;
          }

          .home-hero-copy {
            width: min(560px, 54vw);
          }

          .home-hero-story .home-hero-copy {
            width: 100%;
          }

          .page-hero h1 {
            font-size: clamp(32px, 5.6vw, 50px) !important;
          }

          .page-hero-title.is-compact {
            font-size: clamp(30px, 4.8vw, 46px) !important;
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }

          .page-shell .md\\:grid-cols-2,
          .page-shell .md\\:grid-cols-3,
          .page-shell .md\\:grid-cols-\\[1\\.04fr_\\.96fr\\],
          .page-shell .md\\:grid-cols-\\[1fr_auto\\],
          .page-shell .md\\:grid-cols-\\[auto_1fr_auto\\],
          .page-shell .lg\\:grid-cols-2,
          .page-shell .lg\\:grid-cols-3,
          .page-shell .lg\\:grid-cols-4,
          .page-shell .xl\\:grid-cols-2,
          .page-shell .xl\\:grid-cols-4,
          .page-shell .xl\\:grid-cols-5 {
            grid-template-columns: 1fr !important;
          }

          .home-closing-panel,
          .partner-contact-grid {
            grid-template-columns: 1fr !important;
          }

          .page-shell .md\\:flex-row,
          .page-shell .sm\\:flex-row {
            flex-direction: column !important;
          }

          .page-shell .md\\:items-center,
          .page-shell .sm\\:items-center {
            align-items: stretch !important;
          }

          .home-hero > .relative,
          .page-hero:not(.page-hero-light) > .relative {
            padding-top: 64px;
            padding-bottom: 58px;
          }

          .home-hero-story .home-hero-inner {
            grid-template-columns: 1fr;
            align-items: end;
            gap: 22px;
            padding-top: 118px;
            padding-bottom: 48px;
          }

          .page-photo-hero {
            min-height: auto;
          }

          .page-photo-hero-inner {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 24px;
            padding-top: 118px;
            padding-bottom: 52px;
          }

          .page-photo-hero-card {
            justify-self: start;
            width: min(100%, 520px);
          }

          .model-service-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: min(100%, 720px);
            margin-top: -34px;
          }

          .home-hero-mission {
            max-width: 650px;
            margin-left: 0;
          }

          .story-editorial-grid {
            grid-template-columns: 1fr;
          }

          .story-quote-panel {
            max-width: 760px;
          }

          .story-photo-strip {
            max-width: 680px;
          }

          .story-values-band {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .story-vision-card {
            grid-template-columns: 1fr;
            margin-top: -18px;
            padding-top: 56px;
          }

          .story-vision-divider {
            width: 100%;
            min-height: 1px;
            height: 1px;
          }

          .page-hero-light {
            min-height: auto;
          }

          .page-hero-soft-inner {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 118px;
            padding-bottom: 50px;
          }

          .page-hero-photo-wrap {
            width: min(100%, 560px);
            min-height: auto;
            aspect-ratio: 1.12 / 1;
            justify-self: center;
          }

          .home-hero-light {
            min-height: auto;
          }

          .home-hero-light .home-hero-inner {
            min-height: auto;
            display: block;
            padding-top: 118px;
            padding-bottom: 0;
          }

          .home-hero-light .home-hero-copy {
            width: 100%;
            max-width: 620px;
          }

          .page-shell button,
          .page-shell a {
            white-space: normal;
          }
        }

        /*
         * Photography receives a subtle treatment only. No heavy
         * filters that make real scenes look synthetic.
         */
        img {
          image-rendering: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }

          .page-shell section:not(.home-hero):not(.page-hero) > .max-w-7xl,
          .home-hero-photo img,
          .page-hero .hero-image {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }

          .page-hero-photo-wrap img {
            animation: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 640px) {
          button:hover,
          a:hover {
            transform: none;
          }

          .site-nav {
            top: 0 !important;
          }

          .site-nav > div {
            padding-left: clamp(20px, 5vw, 22px) !important;
            padding-right: clamp(20px, 5vw, 22px) !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-left: auto;
            margin-right: auto;
          }

          .nav-frame {
            min-height: 58px !important;
            width: 100% !important;
            padding: 0 !important;
          }

          .floating-mobile-toggle {
            background: transparent !important;
            border-color: transparent !important;
            box-shadow: none !important;
          }

          .home-hero:not(.home-hero-light) {
            min-height: auto;
            align-items: start;
          }

          .home-hero-story {
            min-height: auto !important;
            padding: 0;
          }

          .home-hero-shell {
            width: 100%;
            min-height: auto;
            border-radius: 0;
          }

          .page-hero {
            min-height: auto;
            align-items: start;
          }

          .founder-portrait {
            min-height: 255px;
          }

          .home-hero:not(.home-hero-light) > .relative,
          .page-hero:not(.page-hero-light) > .relative {
            padding-top: 118px;
            padding-bottom: 46px;
          }

          .home-hero-story .home-hero-inner {
            min-height: auto;
            padding-top: 110px;
            padding-bottom: 42px;
            padding-left: 20px !important;
            padding-right: 20px !important;
            width: 100%;
            max-width: 100%;
            margin-left: 0;
          }

          .page-photo-hero-inner {
            padding-top: 104px;
            padding-bottom: 42px;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .page-photo-hero-copy,
          .story-quote-panel,
          .story-quote-panel p {
            width: min(320px, calc(100vw - 40px)) !important;
            max-width: min(320px, calc(100vw - 40px)) !important;
          }

          .page-photo-hero-card {
            display: none;
          }

          .page-photo-hero .hero-pill {
            display: none;
          }

          .page-hero-soft-inner {
            padding-top: 104px;
            padding-bottom: 42px;
          }

          .home-hero-light .home-hero-inner {
            padding-top: 106px;
            padding-bottom: 0;
          }

          .home-hero-light h1 {
            font-size: clamp(30px, 8.4vw, 38px) !important;
            line-height: 1 !important;
            max-width: 100%;
          }

          .home-hero-light .home-hero-lede {
            font-size: 14px !important;
            line-height: 1.5 !important;
            max-width: 100%;
          }

          .hero-title-line > span {
            display: block;
          }

          .page-hero h1 {
            font-size: clamp(30px, 8.4vw, 38px) !important;
            line-height: 1.08 !important;
            max-width: 100%;
          }

          .page-hero-title.is-compact {
            font-size: clamp(29px, 7.8vw, 36px) !important;
          }

          .model-service-band {
            min-height: 292px;
            margin-left: -20px;
            margin-right: -20px;
            border-radius: 0;
          }

          .model-service-band-copy {
            padding: 24px 20px;
          }

          .model-service-cards {
            grid-template-columns: 1fr;
            width: 100%;
            margin-top: 16px;
          }

          .page-hero-photo-wrap {
            width: min(100%, 420px);
            min-height: auto;
            aspect-ratio: 1.1 / 1;
          }

          .hero-copy p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            max-width: 100%;
          }

          .story-large-copy {
            font-size: clamp(19px, 5.6vw, 24px) !important;
            line-height: 1.52 !important;
          }

          .home-hero-story h1 {
            max-width: 100%;
            font-size: clamp(29px, 8vw, 35px) !important;
            line-height: 1.08 !important;
          }

          .home-hero-story .home-hero-copy,
          .home-hero-mission {
            width: 100%;
            max-width: 340px;
          }

          .home-hero-story .home-hero-lede {
            font-size: 13px !important;
            line-height: 1.52 !important;
            max-width: 100%;
          }

          .home-hero-mission p {
            font-size: 13px !important;
            line-height: 1.58 !important;
          }

          .home-hero-badge {
            padding: 7px 10px;
            font-size: 11px;
            white-space: normal;
          }

          .home-hero-story .home-hero-actions {
            align-items: flex-start;
          }

          .home-story-button,
          .home-hero-text-link,
          .home-hero-mission button {
            width: fit-content !important;
          }

          .section-heading {
            width: min(100%, calc(100vw - 40px)) !important;
            max-width: min(100%, calc(100vw - 40px)) !important;
          }

          .section-heading h2 {
            max-width: 100%;
            font-size: clamp(23px, 6.6vw, 30px) !important;
            line-height: 1.14 !important;
            white-space: normal !important;
            overflow-wrap: anywhere !important;
            word-break: normal !important;
            text-wrap: balance;
          }

          .section-heading p {
            max-width: 100%;
            white-space: normal !important;
            overflow-wrap: anywhere !important;
            word-break: normal !important;
          }

          section h2 {
            max-width: calc(100vw - 40px) !important;
            white-space: normal !important;
            overflow-wrap: anywhere !important;
            word-break: normal !important;
            text-wrap: balance;
          }

          section p {
            max-width: calc(100vw - 40px);
            white-space: normal !important;
            overflow-wrap: anywhere !important;
            word-break: normal !important;
          }

          .story-photo-strip {
            gap: 10px;
            max-width: 100%;
          }

          .story-strip-photo {
            min-height: 225px;
          }

          .story-strip-photo.is-tall {
            min-height: 280px;
            margin-top: -16px;
          }

          .story-values-band {
            gap: 10px;
            padding: 18px 14px;
          }

          .story-value-item {
            font-size: 12px;
          }

          .story-vision-card {
            padding: 48px 20px 26px;
          }

          .home-hero:not(.home-hero-light):not(.home-hero-story) .hero-copy button,
          .home-hero:not(.home-hero-light):not(.home-hero-story) .hero-copy a {
            width: 100%;
          }

          .home-hero-light .home-hero-actions button,
          .home-hero-light .home-hero-actions a {
            width: auto;
            align-self: flex-start;
          }

          .home-today-title-line {
            display: block;
          }

          .home-today-desktop-copy {
            display: none !important;
          }

          .home-today-mobile-copy {
            display: block !important;
            width: min(320px, calc(100vw - 40px)) !important;
            max-width: min(320px, calc(100vw - 40px)) !important;
            white-space: normal !important;
            overflow-wrap: anywhere !important;
          }

          .home-today-intro .section-heading,
          .home-today-intro .section-heading h2,
          .home-today-intro .section-heading p {
            width: 100% !important;
            max-width: calc(100vw - 40px) !important;
          }

          .home-today-intro .section-heading h2 {
            font-size: clamp(22px, 6vw, 28px) !important;
            line-height: 1.16 !important;
          }

          .partner-card-photo {
            min-height: 190px;
          }

          .partner-image-card h3 {
            font-size: 18px !important;
          }

          .partner-image-card .p-5 {
            padding: 18px !important;
          }

          .site-loader-card {
            width: calc(100% - 40px);
            padding: 20px;
          }
        }

        @media (max-width: 380px) {
          .home-hero:not(.home-hero-light) h1 {
            font-size: 34px !important;
          }

          .home-hero-light h1 {
            font-size: 31px !important;
          }

          .home-hero-story h1 {
            font-size: clamp(28px, 7.8vw, 32px) !important;
            line-height: 1.08 !important;
          }

          .home-hero-story .home-hero-lede {
            font-size: 14px !important;
            line-height: 1.55 !important;
          }

          .page-hero h1 {
            font-size: 30px !important;
          }

          .page-hero-title.is-compact {
            font-size: 29px !important;
          }
        }
      `}</style>

      {!loaded && <SiteLoader />}

      <NavBar page={page} setPage={navigateToPage} />

      <main key={page} className="page-shell">
        {content}
      </main>

      <Footer setPage={navigateToPage} />
    </div>
  );
}
