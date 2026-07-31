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
  Handshake,
  Activity,
  Flame,
  Quote,
  Mail,
  Fish,
  Shell,
  Truck,
  Users,
  Building2,
  HeartHandshake,
  Globe2,
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
  red: "#EF1912",
  redDeep: "#B81208",
  redSoft: "#FFF1F0",

  green: "#0B451F",
  green2: "#17612F",
  greenDeep: "#052E14",
  footerGreen: "#0F5A2B",
  footerGreenDeep: "#0A431F",
  leaf: "#7DBB6A",
  harvest: "#F2B94B",

  // Deliberately extremely close to white.
  mist: "#F8FBF8",
  mist2: "#F3F8F4",
  greenMist: "#EAF7EE",
  paper: "#FCFEFC",

  white: "#FFFFFF",

  ink: "#172019",
  inkSoft: "#56605A",
  muted: "#78817B",

  border: "#DCE8DF",
  borderStrong: "#C8DACD",

  shadow: "0 8px 24px rgba(5,46,20,0.055)",
  shadowLarge: "0 22px 70px rgba(5,46,20,0.14)",
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
   Put the logo you just supplied at:

   public/images/dodo-africa-logo-red.png

   The logo ALREADY includes the Dodo Africa wordmark.
   We therefore never place "Dodo Africa" text beside it in nav.
   ============================================================ */

const LOGO_SRC = "/images/dodo-africa-logo-red.png";
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

const IMG = {
  hero: `${SITE_IMAGE_DIR}/african-greenhouse-farmer.jpg`,

  plantain: siteImage("hero-plantain"),

  poultry: siteImage("poultry-barn"),

  fish: siteImage("fish-farm-river"),

  snail: siteImage("snail-farming"),

  goat: siteImage("goats-farm"),

  story: siteImage("story-smiling-farmer"),

  founderDaniel: `${SITE_IMAGE_DIR}/ademeso-daniel.jpeg`,

  model: siteImage("model-plantain-truck"),

  martHero: `${SITE_IMAGE_DIR}/supermarket-produce.jpg`,

  market: `${SITE_IMAGE_DIR}/supermarket-produce.jpg`,

  eatery: siteImage("eatery-plantain-skewers"),

  partners: siteImage("farmers-harvest-sacks"),
};

const IMAGE_PRELOADS = [
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
    IMG.founderDaniel,
    IMG.model,
    IMG.martHero,
    IMG.market,
    IMG.eatery,
    IMG.partners,
    IMG.plantain,
    IMG.poultry,
    IMG.fish,
    IMG.snail,
    IMG.goat,
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

const AFRICA_HERO_PATH =
  "M158 42L210 28L282 32L338 52L376 84L393 128L386 160L412 190L462 210L512 242L466 254L424 239L398 254L383 301L357 337L338 382L359 427L380 466L365 514L330 566L296 626L263 609L248 558L211 516L188 464L177 416L148 374L111 357L64 344L34 309L23 259L47 218L91 191L117 160L130 108Z M440 425L466 469L462 523L439 575L407 621L397 581L409 520L421 471Z";

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
      "Farm management, inventory, analytics, traceability, automation and operational systems.",
    status: "Technology Backbone",
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
    label: "African greenhouse farmer",
    author: "Mukhtar Shuaib Mukhtar",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/african-farmer-holding-melon-in-greenhouse-29091325/",
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
    label: "Plantain truck",
    author: "Zeal Creative Studios",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/street-market-scene-in-accra-with-plantain-truck-36392321/",
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
    label: "Fish farm",
    author: "Co Hai",
    license: "Pexels License",
    href:
      "https://www.pexels.com/photo/outdoor-fish-farm-by-tropical-riverbank-31291832/",
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

function Logo({ footer = false }) {
  const src = footer ? FOOTER_LOGO_SRC : LOGO_SRC;

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
          backgroundPosition: "center",
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
      className={center ? "mx-auto text-center" : ""}
      style={{
        maxWidth: center ? 790 : 800,
      }}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2
        style={{
          ...SERIF,
          color: C.greenDeep,
          fontSize: "clamp(30px,4vw,48px)",
          lineHeight: 1.07,
          fontWeight: 700,
          letterSpacing: 0,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-4 text-base md:text-lg"
          style={{
            color: C.inkSoft,
            lineHeight: 1.75,
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
}) {
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
      className={`motion-card surface-card rounded-lg ${className}`}
      style={{
        position: "relative",
        background,
        border: `1px solid ${border}`,
        color,
        boxShadow: green || red ? "none" : C.shadow,
        transition:
          "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease, background-color 260ms ease",
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
    padding: "13px 20px",
    color: "#fff",
    background: C.red,
    border: `2px solid ${C.greenDeep}`,
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 800,
    textAlign: "center",
    boxShadow: "0 4px 0 rgba(5,46,20,.24)",
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
        color: "#020702",
      }}
    >
      {children}

      <span
        style={{
          position: "absolute",
          bottom: -2,
          left: 12,
          right: 12,
          height: 2,
          borderRadius: 99,
          background: C.red,
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 180ms ease",
        }}
      />
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
        background: settled
          ? "rgba(248,251,248,.98)"
          : "rgba(234,247,238,.98)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        pointerEvents: "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8"
      >
        <div
          className="nav-frame flex min-h-[58px] md:min-h-[64px] items-center justify-between gap-4"
          style={{
            pointerEvents: "auto",
            padding: "0 12px",
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
            <Logo />
          </button>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
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

          <div className="hidden lg:block">
            <PrimaryButton onClick={() => go("partners")}>
              Partner With Us
              <ArrowRight size={15} />
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
            style={{
              color: C.green,
              background: C.mist2,
              border: `1px solid ${C.border}`,
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
              background: "rgba(255,255,255,.97)",
              border: `1px solid ${C.border}`,
              boxShadow: "0 18px 48px rgba(5,46,20,.16)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
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
                    background: page === id ? C.mist2 : C.white,
                    color: "#020702",
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
                  background: C.red,
                  color: "#fff",
                  boxShadow: "0 8px 22px rgba(239,25,18,.16)",
                }}
              >
                Partner With Us
                <ArrowRight size={15} />
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
}) {
  const shapeData = HERO_SHAPES[shape] || HERO_SHAPES.leaf;

  return (
    <section
      className="page-hero page-hero-light"
      style={{
        position: "relative",
        overflow: "hidden",
        background: C.greenMist,
      }}
    >
      <div className="page-hero-grain" aria-hidden="true" />

      <div className="page-hero-soft-inner max-w-7xl mx-auto px-5 md:px-8">
        <div className="hero-copy page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1
              style={{
                ...SERIF,
                color: "#020702",
                fontSize: "clamp(38px,5.8vw,74px)",
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: 0,
              }}
          >
            {title}
          </h1>

          <p
            className="mt-6 max-w-2xl text-base md:text-xl"
            style={{
              color: "#15231A",
              lineHeight: 1.65,
              fontWeight: 700,
            }}
          >
            {lede}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Production", "Market channels", "Consumer food"].map(
              (item) => (
                <span
                  key={item}
                  className="hero-pill rounded-full px-4 py-2 text-sm font-bold"
                  style={{
                    color: C.greenDeep,
                    background: "rgba(255,255,255,.7)",
                    border: `1px solid ${C.borderStrong}`,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div
          role="img"
          aria-label={photoAlt}
          className="page-hero-photo-wrap hero-image"
          style={{
            "--hero-clip-a": shapeData.clipA,
            "--hero-clip-b": shapeData.clipB,
            "--hero-clip-c": shapeData.clipC,
            "--hero-radius-a": shapeData.radiusA,
            "--hero-radius-b": shapeData.radiusB,
            "--hero-radius-c": shapeData.radiusC,
          }}
        >
          <img
            src={photo}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ objectPosition: photoPosition }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOME
   ============================================================ */

function HomeMetric({ icon: Icon, value, label }) {
  return (
    <div
      className="motion-card home-metric rounded-lg p-5 md:p-6 h-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1), rgba(248,251,248,.96))",
        border: `1px solid ${C.border}`,
        boxShadow: "0 12px 32px rgba(5,46,20,.055)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            style={{
              ...SERIF,
              color: C.red,
              fontSize: "clamp(29px,3vw,39px)",
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            {value}
          </div>

          <div
            className="mt-2 text-sm"
            style={{
              color: C.inkSoft,
              lineHeight: 1.5,
            }}
          >
            {label}
          </div>
        </div>

        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #EAF5ED, #FFFFFF)",
            color: C.green,
            border: `1px solid ${C.border}`,
          }}
        >
          <Icon size={19} />
        </div>
      </div>
    </div>
  );
}

function FarmCard({ farm, index, visible }) {
  return (
    <Card className="farm-card overflow-hidden h-full">
      <div
        style={{
          opacity: 1,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: `all 480ms ease ${index * 65}ms`,
        }}
      >
        <Photo
          src={farm.photo}
          alt={`${farm.name} production reference`}
          ratio="4 / 3"
          radius={0}
          eager
          position={farm.photoPosition}
        />

        <div className="p-5">
          <h3
            style={{
              ...SERIF,
              color: C.greenDeep,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            {farm.name}
          </h3>

          <div
            className="mt-5"
            style={{
              ...SERIF,
              color: C.red,
              fontSize: 29,
              fontWeight: 700,
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
        className="home-hero home-hero-light"
        style={{
          position: "relative",
          overflow: "hidden",
          background: C.greenMist,
        }}
      >
        <div className="home-hero-inner relative max-w-7xl mx-auto px-5 md:px-8 py-18 md:py-24">
          <div className="hero-copy home-hero-copy max-w-3xl">
            <h1
              className="hero-title"
              style={{
                ...SERIF,
                color: "#020702",
                fontSize: "clamp(38px,5vw,68px)",
                lineHeight: 0.98,
                letterSpacing: 0,
                fontWeight: 900,
              }}
            >
              Feeding Africa,
              <br />
              <span className="hero-title-line">
                <span>Building</span>{" "}
                <span>Generations.</span>
              </span>
            </h1>

            <p
              className="home-hero-lede mt-6 md:mt-8 max-w-2xl text-base md:text-xl"
              style={{
                color: "#06130B",
                lineHeight: 1.55,
                fontWeight: 800,
              }}
            >
              Dodo Africa is building an integrated agriculture and
              food business from the ground up, starting with farm
              production and growing into market channels, food
              products and consumer experiences.
            </p>

            <div className="home-hero-actions mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <PrimaryButton onClick={() => setPage("model")}>
                Explore Our Model
                <ArrowRight size={16} />
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div
          className="home-hero-media"
          role="img"
          aria-label="African farmer in a modern greenhouse"
        >
          <img
            className="home-hero-preload"
            src={IMG.hero}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          <svg
            className="home-hero-africa hero-image"
            viewBox="0 0 520 640"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="homeAfricaClip" clipPathUnits="userSpaceOnUse">
                <path d={AFRICA_HERO_PATH} />
              </clipPath>

              <linearGradient
                id="homeAfricaWash"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop offset="0%" stopColor={C.greenMist} stopOpacity=".55" />
                <stop offset="28%" stopColor={C.greenMist} stopOpacity=".18" />
                <stop offset="100%" stopColor={C.greenMist} stopOpacity="0" />
              </linearGradient>
            </defs>

            <image
              href={IMG.hero}
              x="-170"
              y="0"
              width="840"
              height="640"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#homeAfricaClip)"
            />

            <path d={AFRICA_HERO_PATH} fill="url(#homeAfricaWash)" />

            <path
              d={AFRICA_HERO_PATH}
              fill="none"
              stroke="rgba(5,46,20,.18)"
              strokeWidth="2.3"
            />
          </svg>
        </div>
      </section>

      {/* COMPANY SNAPSHOT */}

      <section
        style={{
          background: C.mist,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-15 md:py-16">
          <SectionHeading
            eyebrow="Dodo Africa Today"
            title="Building from the farm outward."
            description="We start with primary production, strengthen dependable routes to market, and expand carefully into processing, food service and technology around the same agricultural base."
          />

          <div className="mt-9 grid sm:grid-cols-2 gap-4">
            <HomeMetric
              icon={MapPin}
              value="100"
              label="plots of land"
            />

            <HomeMetric
              icon={Sprout}
              value="5"
              label="production enterprises in the broader plan"
            />
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
                  Dodo Digital, the technology backbone
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#D9EEE0",
                    lineHeight: 1.65,
                  }}
                >
                  Farm management • inventory • supply chain •
                  operational data • automation • analytics •
                  AI-enabled insights
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

      <section style={{ background: C.greenMist }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <div
            className="overflow-hidden rounded-lg"
            style={{
              background: C.greenDeep,
              boxShadow: C.shadowLarge,
            }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center p-7 md:p-12">
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

              <PrimaryButton onClick={() => setPage("partners")}>
                Work With Dodo Africa
                <ArrowRight size={16} />
              </PrimaryButton>
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
        <FounderPortrait founder={founder} />

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
        lede="Dodo Africa began with a practical agricultural foundation and a broader ambition: build a Nigerian agribusiness that produces food, creates dependable routes to market, develops stronger consumer products and uses technology to improve how the entire operation works."
        photo={IMG.story}
        photoAlt="Smiling Nigerian farmer in a cultivated field"
        photoPosition="center 35%"
        shape="leaf"
      />

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-[.92fr_1.08fr] gap-8 items-start">
            <div>
              <Eyebrow>Where we are today</Eyebrow>

              <h2
                style={{
                  ...SERIF,
                  color: C.greenDeep,
                  fontSize: "clamp(30px,4vw,46px)",
                  lineHeight: 1.08,
                  fontWeight: 700,
                }}
              >
                We are not starting with a PowerPoint farm.
              </h2>

              <p
                className="mt-5"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.8,
                }}
              >
                The business already has access to 100 plots of land,
                existing farm infrastructure and a clear plan for
                integrated agriculture. The next major production
                focus is the cultivation of approximately 8,500
                plantain suckers.
              </p>

              <p
                className="mt-4"
                style={{
                  color: C.inkSoft,
                  lineHeight: 1.8,
                }}
              >
                From that foundation, Dodo Africa can progressively
                build stronger distribution, processing and
                consumer-facing businesses without losing sight of
                the farm itself.
              </p>
            </div>

            <Card pale className="p-7 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["100", "Plots of land"],
                  ["8,500", "Plantain suckers planned"],
                  ["5", "Production enterprises planned"],
                  ["Ondo State", "Operating base in Nigeria"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg p-5"
                    style={{
                      background: C.white,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div
                      style={{
                        ...SERIF,
                        color: C.red,
                        fontSize: 29,
                        fontWeight: 700,
                      }}
                    >
                      {value}
                    </div>

                    <div
                      className="mt-2 text-sm"
                      style={{
                        color: C.inkSoft,
                        lineHeight: 1.55,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
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
                    "Strong supplier, buyer and community relationships matter.",
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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

              <PrimaryButton onClick={() => setPage("model")}>
                Explore the Model
                <ArrowRight size={16} />
              </PrimaryButton>
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

function SubsidiaryCard({ subsidiary, index, visible }) {
  const Icon = subsidiary.Icon;

  const tone =
    subsidiary.tone === "live"
      ? "green"
      : subsidiary.tone === "building"
      ? "red"
      : "grey";

  return (
    <Card pale className="p-6 h-full">
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: `all 470ms ease ${index * 65}ms`,
        }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background:
              subsidiary.tone === "live" ? C.green : C.red,
            color: "#fff",
          }}
        >
          <Icon size={20} />
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
          {subsidiary.name}
        </h3>

        <p
          className="mt-3 text-sm"
          style={{
            color: C.inkSoft,
            lineHeight: 1.7,
          }}
        >
          {subsidiary.desc}
        </p>

        <div className="mt-5">
          <Tag tone={tone}>{subsidiary.status}</Tag>
        </div>
      </div>
    </Card>
  );
}

function ModelPage({ setPage }) {
  const [ref, visible] = useReveal();

  return (
    <>
      <PageHeader
        eyebrow="The Dodo Africa Model"
        title="One agricultural ecosystem. Multiple businesses."
        lede="Dodo Africa is structured to capture more value from the same agricultural base, beginning with production and progressively adding distribution, processing, hospitality, logistics and technology."
        photo={IMG.model}
        photoAlt="Plantain produce being transported to market"
        photoPosition="center 42%"
        shape="pod"
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

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBS.map((subsidiary, index) => (
              <SubsidiaryCard
                key={subsidiary.name}
                subsidiary={subsidiary}
                index={index}
                visible={visible}
              />
            ))}
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

              <button
                type="button"
                onClick={() => setPage("mart")}
                className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold"
                style={{
                  background: "transparent",
                  color: C.red,
                }}
              >
                Explore Farm Mart & Eatery
                <ArrowRight size={15} />
              </button>
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
        <Photo
          src={image}
          alt={alt}
          ratio="16 / 9"
          radius={0}
          eager
          position="center"
          className="consumer-business-photo"
        />

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
          className="rounded-lg p-4"
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
        eyebrow="Farm-to-Consumer"
        title="Farm Mart & Eatery."
        lede="These businesses create direct routes from agricultural production to buyers and consumers, from fresh produce and commercial supply to a future food concept built around the Dodo brand."
        photo={IMG.martHero}
        photoAlt="Supermarket produce aisle with shoppers"
        photoPosition="center 50%"
        shape="market"
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
      />

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Partnership Opportunities"
            title="Different partners. Shared growth."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: Handshake,
                title: "Offtake & Buyers",
                body:
                  "Hotels, retailers, restaurants, processors and commercial buyers looking for dependable supply.",
              },
              {
                Icon: Truck,
                title: "Suppliers & Logistics",
                body:
                  "Input suppliers, equipment providers, transport businesses and operational service partners.",
              },
              {
                Icon: Building2,
                title: "Financial Institutions",
                body:
                  "Banks, agricultural finance providers and development institutions supporting productive enterprise.",
              },
              {
                Icon: Globe2,
                title: "Distribution",
                body:
                  "Partners capable of strengthening routes into retail, hospitality and regional markets.",
              },
              {
                Icon: Activity,
                title: "Technology",
                body:
                  "Systems, data, automation and infrastructure partnerships for modern agricultural operations.",
              },
              {
                Icon: Users,
                title: "Communities",
                body:
                  "Collaboration around agricultural skills, jobs, local supply chains and sustainable production.",
              },
            ].map((item) => {
              const Icon = item.Icon;

              return (
                <Card key={item.title} pale className="p-6 h-full">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: C.green,
                      color: "#fff",
                    }}
                  >
                    <Icon size={21} />
                  </div>

                  <h3
                    className="mt-5"
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
                </Card>
              );
            })}
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
          <div className="grid lg:grid-cols-[1fr_.9fr] gap-6">
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
                  <Mail size={16} />
                  Get In Touch
                </PrimaryButton>
              </div>
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
        Agricultural, market and food photography used from Pexels
        and Unsplash.
        {" "}

        {PHOTO_CREDITS.map((credit, index) => (
          <span key={credit.href}>
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
          background: `linear-gradient(180deg, ${C.greenDeep}, #031E0D)`,
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
                  color: "#CDE4D4",
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
                  color: "#CDE4D4",
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
                  color: "#9FC9AA",
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
                    className="block text-sm"
                    style={{
                      background: "transparent",
                      color: "#E6F3EA",
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
                  color: "#9FC9AA",
                  letterSpacing: 0,
                }}
              >
                Businesses
              </div>

              <div
                className="mt-5 space-y-3 text-sm"
                style={{
                  color: "#E6F3EA",
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
                  color: "#9FC9AA",
                  letterSpacing: 0,
                }}
              >
                Agriculture
              </div>

              <div
                className="mt-5 space-y-3 text-sm"
                style={{
                  color: "#E6F3EA",
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
              color: "#A9CDB2",
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
            linear-gradient(135deg, rgba(234,247,238,.65), transparent 34%, rgba(255,255,255,.45) 72%, transparent),
            repeating-linear-gradient(90deg, rgba(5,46,20,.028) 0 1px, transparent 1px 86px);
        }

        .page-shell section:not(.home-hero):not(.page-hero):nth-of-type(even)::before {
          background:
            linear-gradient(45deg, rgba(255,255,255,.72), transparent 42%, rgba(234,247,238,.72)),
            repeating-linear-gradient(0deg, rgba(5,46,20,.024) 0 1px, transparent 1px 72px);
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
        }

        .surface-card::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          opacity: .9;
          background: linear-gradient(90deg, rgba(239,25,18,.68), rgba(11,69,31,.72));
          transform: scaleX(.36);
          transform-origin: left;
          transition: transform 300ms ease, opacity 300ms ease;
        }

        .surface-card > * {
          position: relative;
          z-index: 1;
        }

        .surface-card:hover {
          transform: translateY(-3px);
          border-color: ${C.borderStrong};
          box-shadow: 0 18px 42px rgba(5,46,20,.09);
        }

        .surface-card:hover::before {
          transform: scaleX(1);
          opacity: 1;
        }

        .home-metric {
          position: relative;
          overflow: hidden;
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .home-metric::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          background: linear-gradient(90deg, ${C.red}, ${C.green});
          transform: scaleX(.24);
          transform-origin: left;
          transition: transform 280ms ease;
        }

        .home-metric:hover {
          transform: translateY(-3px);
          border-color: ${C.borderStrong};
          box-shadow: 0 18px 42px rgba(5,46,20,.08);
        }

        .home-metric:hover::after {
          transform: scaleX(1);
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
          width: 100%;
          max-width: min(80rem, 100vw);
        }

        .nav-frame {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .nav-frame > * {
          flex-shrink: 0;
        }

        .home-hero {
          min-height: 100vh;
          display: grid;
          align-items: center;
        }

        .home-hero-light {
          min-height: 100svh;
          display: block;
          isolation: isolate;
        }

        .home-hero-light::before {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 42%;
          pointer-events: none;
          opacity: .42;
          background:
            repeating-linear-gradient(112deg, rgba(5,46,20,.05) 0 1px, transparent 1px 36px),
            linear-gradient(180deg, transparent, rgba(255,255,255,.7));
        }

        .home-hero-media {
          position: absolute;
          top: clamp(86px, 10vh, 118px);
          right: 0;
          bottom: clamp(10px, 3vh, 36px);
          z-index: 0;
          width: min(61vw, 1040px);
          display: grid;
          place-items: center end;
          overflow: visible;
          background: transparent;
          pointer-events: none;
        }

        .home-hero-preload {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .home-hero-africa {
          width: min(112%, 860px);
          height: min(82svh, 770px);
          overflow: visible;
          filter: drop-shadow(-24px 24px 52px rgba(5,46,20,.14));
        }

        .home-hero-africa image {
          filter: saturate(.94) contrast(1.02) brightness(1.03);
        }

        .home-hero-inner {
          min-height: 100svh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 3;
        }

        .home-hero-copy {
          width: min(600px, 50vw);
        }

        .page-hero {
          min-height: min(760px, 100svh);
          display: grid;
          align-items: stretch;
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
          opacity: .48;
          background:
            repeating-linear-gradient(112deg, rgba(5,46,20,.05) 0 1px, transparent 1px 38px),
            linear-gradient(180deg, transparent, rgba(255,255,255,.72));
        }

        .page-hero-soft-inner {
          position: relative;
          z-index: 2;
          min-height: inherit;
          display: grid;
          grid-template-columns: minmax(0, .84fr) minmax(390px, .96fr);
          gap: clamp(30px, 4.6vw, 64px);
          align-items: center;
          padding-top: clamp(112px, 13vh, 150px);
          padding-bottom: clamp(58px, 9vh, 96px);
        }

        .page-hero-photo-wrap {
          position: relative;
          justify-self: end;
          width: min(100%, 690px);
          aspect-ratio: 1.18 / 1;
          min-height: auto;
          border-radius: var(--hero-radius-a, 58% 42% 62% 38% / 42% 58% 42% 58%);
          clip-path: var(--hero-clip-a, polygon(14% 17%, 51% 0%, 87% 14%, 100% 49%, 82% 88%, 45% 100%, 10% 80%, 0% 42%));
          overflow: hidden;
          border: 2px solid rgba(5,46,20,.18);
          background: ${C.mist2};
          box-shadow: 0 22px 54px rgba(5,46,20,.13);
          transform-origin: center;
        }

        .page-hero-photo-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          filter: saturate(.94) contrast(1.03) brightness(1.03);
          transform: scale(1.012);
          animation: page-photo-pan 9000ms ease-in-out infinite alternate;
        }

        .page-hero-photo-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255,255,255,.05), rgba(5,46,20,.1)),
            linear-gradient(90deg, rgba(234,247,238,.22), rgba(234,247,238,0) 46%, rgba(239,25,18,.04));
          mix-blend-mode: multiply;
        }

        .page-hero-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .45;
          background:
            repeating-linear-gradient(90deg, rgba(5,46,20,.045) 0 1px, transparent 1px 96px),
            repeating-linear-gradient(0deg, rgba(5,46,20,.025) 0 1px, transparent 1px 72px);
        }

        .hero-pill {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 220ms ease, background-color 220ms ease;
        }

        .hero-pill:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.92) !important;
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

        .page-hero-copy {
          max-width: 700px;
        }

        .hero-title-line {
          display: block;
        }

        .consumer-business-photo {
          min-height: 255px;
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
            linear-gradient(180deg, rgba(5,46,20,.02), rgba(5,46,20,.16)),
            linear-gradient(90deg, rgba(239,25,18,.06), rgba(11,69,31,.08));
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

        .home-hero-africa.hero-image {
          animation:
            home-africa-settle 1600ms ease both,
            hero-map-drift 5600ms ease-in-out 1600ms infinite alternate;
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
          box-shadow: 0 14px 34px rgba(5,46,20,.075);
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
        .consumer-business-card:hover .motion-photo img,
        .founder-card:hover .motion-photo img {
          transform: scale(1.045);
        }

        .photo-frame:not(.founder-portrait)::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255,255,255,.04), rgba(5,46,20,.1)),
            linear-gradient(90deg, rgba(239,25,18,.04), rgba(11,69,31,.05));
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

        @keyframes home-africa-settle {
          from {
            transform: scaleX(1.12) scale(1.045);
          }

          to {
            transform: scaleX(1.12) scale(1);
          }
        }

        @keyframes hero-map-drift {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg) scaleX(1.12) scale(1);
          }

          45% {
            transform: translate3d(-10px, 8px, 0) rotate(-1.1deg) scaleX(1.12) scale(1.018);
          }

          100% {
            transform: translate3d(8px, -7px, 0) rotate(.9deg) scaleX(1.12) scale(1.032);
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
            linear-gradient(90deg, rgba(5,46,20,.92), rgba(5,46,20,.74) 48%, rgba(5,46,20,.18)),
            linear-gradient(180deg, rgba(5,46,20,.08), rgba(5,46,20,.72)),
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
          box-shadow: 0 0 0 6px rgba(11,69,31,.08);
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
          background: #DCE8DF;
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
          height: 34px;
          width: 85px;
        }

        @media (min-width: 640px) {
          .dodo-logo {
            height: 36px;
            width: 90px;
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
            height: 38px;
            width: 95px;
          }
        }

        @media (max-width: 420px) {
          .dodo-logo {
            height: 32px;
            width: 80px;
          }
        }

        @media (max-width: 360px) {
          .dodo-logo {
            height: 30px;
            width: 75px;
          }
        }

        .footer-logo {
          height: 32px;
          width: 80px;
        }

        @media (min-width: 640px) {
          .footer-logo {
            height: 34px;
            width: 85px;
          }
        }

        @media (max-width: 360px) {
          .footer-logo {
            height: 30px;
            width: 75px;
          }
        }

        @media (max-width: 1100px) {
          .home-hero:not(.home-hero-light) {
            min-height: auto;
          }

          .home-hero:not(.home-hero-light) h1 {
            font-size: clamp(44px, 8vw, 72px) !important;
          }

          .home-hero-light h1 {
            font-size: clamp(38px, 6.4vw, 60px) !important;
          }

          .home-hero-copy {
            width: min(560px, 54vw);
          }

          .page-hero h1 {
            font-size: clamp(36px, 6.4vw, 60px) !important;
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

          .home-hero-media {
            position: relative;
            inset: auto;
            display: grid;
            place-items: center;
            width: min(114%, 620px);
            aspect-ratio: 520 / 640;
            margin: 42px auto -70px;
          }

          .home-hero-africa {
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 14px 32px rgba(5,46,20,.1));
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
          .home-hero-africa.hero-image,
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

          .site-nav > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .nav-frame {
            min-height: 54px !important;
            padding: 0 8px !important;
          }

          .home-hero:not(.home-hero-light) {
            min-height: auto;
            align-items: start;
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

          .page-hero-soft-inner {
            padding-top: 104px;
            padding-bottom: 42px;
          }

          .home-hero-light .home-hero-inner {
            padding-top: 106px;
            padding-bottom: 0;
          }

          .home-hero-light h1 {
            font-size: clamp(34px, 9.4vw, 42px) !important;
            line-height: 1 !important;
            max-width: 100%;
          }

          .home-hero-light .home-hero-lede {
            font-size: 16px !important;
            line-height: 1.5 !important;
            max-width: 100%;
          }

          .home-hero-media {
            width: min(116%, 460px);
            margin-top: 34px;
            margin-bottom: -66px;
          }

          .hero-title-line > span {
            display: block;
          }

          .page-hero h1 {
            font-size: clamp(34px, 9vw, 42px) !important;
            line-height: 1.04 !important;
            max-width: 100%;
          }

          .page-hero-photo-wrap {
            width: min(100%, 420px);
            min-height: auto;
            aspect-ratio: 1.1 / 1;
          }

          .hero-copy p {
            font-size: 15px !important;
            line-height: 1.65 !important;
            max-width: 100%;
          }

          .home-hero:not(.home-hero-light) .hero-copy button,
          .home-hero:not(.home-hero-light) .hero-copy a {
            width: 100%;
          }

          .home-hero-light .home-hero-actions button,
          .home-hero-light .home-hero-actions a {
            width: auto;
            align-self: flex-start;
          }

          .site-loader-card {
            width: calc(100% - 40px);
            padding: 20px;
          }
        }

        @media (max-width: 380px) {
          .home-hero:not(.home-hero-light) h1 {
            font-size: 38px !important;
          }

          .home-hero-light h1 {
            font-size: 34px !important;
          }

          .page-hero h1 {
            font-size: 32px !important;
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
