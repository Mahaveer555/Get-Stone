export interface StoneProduct {
  id: string;
  slug: string;
  name: string;
  category: 'primary' | 'catalogue-concept';
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  appearance: {
    colorRange: string;
    grainTexture: string;
    visualCharacter: string;
  };
  finishes: string[];
  applications: string[];
  specifications: {
    materialType: string;
    origin: string;
    density?: string;
    waterAbsorption?: string;
    standardThickness: string;
    availableSizes: string;
    finishOptions: string;
  };
  features: string[];
  isCatalogueConcept?: boolean;
}

export const stoneProducts: StoneProduct[] = [
  {
    id: "sandstone",
    slug: "sandstone",
    name: "Natural Sandstone",
    category: "primary",
    shortDescription: "Warm tones, distinctive natural textures, and timeless architectural versatility for exterior facades, pathways, and wall cladding.",
    heroImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Natural sandstone is one of the most celebrated and historically revered building stones from Rajasthan. Characterized by warm beige, fawn, buff, and terracotta hues, it provides high compressive strength combined with workability that allows for refined architectural treatments, hand-crafted masonry, and modern monolithic cladding.",
    appearance: {
      colorRange: "Warm beige, desert sand, cream buff, golden ochre, and subtle terracotta banding.",
      grainTexture: "Fine to medium quartz grain with natural sedimentary striations and earthy tactile depth.",
      visualCharacter: "Warm, grounding, and organic; harmonizes with both heritage restoration and contemporary minimalist architecture."
    },
    finishes: [
      "Natural Split / Cleft",
      "Honed & Matte",
      "Sandblasted / Textured",
      "Shot-blasted",
      "Brushed Antique",
      "Chiseled & Rock Face"
    ],
    applications: [
      "Exterior Wall Cladding",
      "Architectural Facades & Portals",
      "Garden Paving & Walkways",
      "Pool Copings & Terraces",
      "Feature Boundary Walls",
      "Columns & Landscaping Elements"
    ],
    specifications: {
      materialType: "Sedimentary Quartzitic Sandstone",
      origin: "Rajasthan, India",
      density: "Approx. 2.35 - 2.55 g/cm³",
      waterAbsorption: "Low to Moderate (< 1.8%)",
      standardThickness: "20mm, 25mm, 30mm, 40mm, 50mm (Custom sawing available upon enquiry)",
      availableSizes: "Tiles, Slabs, Cobbles, Kerbstones, Cut-to-size architectural panels",
      finishOptions: "Natural cleft, Honed, Shotblasted, Brushed, Rock-face edges"
    },
    features: [
      "Excellent thermal insulation properties under direct sunlight",
      "Naturally slip-resistant textured surface when split or blasted",
      "Resilient against weathering, frost, and UV exposure",
      "Ages with graceful natural patina over decades"
    ]
  },
  {
    id: "bijolia-stone",
    slug: "bijolia-stone",
    name: "Bijolia Stone",
    category: "primary",
    shortDescription: "Celebrated for its rugged toughness, distinctive earthy grey-buff tonality, and unmatched resilience in outdoor paving and boundary walls.",
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533779283484-8da4c792c314?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Originating from the renowned quarries near Bijolia in the Bhilwara-Kota belt of Rajasthan, Bijolia stone is a dense, hard quartzitic sandstone. Known for its naturally cleft surface that remains flat yet slip-proof, Bijolia stone is the gold standard for robust heavy-traffic walkways, courtyards, rustic steps, and traditional wall masonry.",
    appearance: {
      colorRange: "Olive-grey, warm khaki, earthy tan, with occasional charcoal iron-stone mineral veining.",
      grainTexture: "Very compact, dense crystalline structure with natural cleavage planes that produce clean split faces.",
      visualCharacter: "Rustic, authentic, and ruggedly elegant. Perfect for resort architecture, farmhouses, and modern landscape interventions."
    },
    finishes: [
      "Natural Hand-Cut Cleft",
      "Calibrated Machine-Cut",
      "Tumbled Antique Edge",
      "Cobblestone / Sett Finish",
      "Brushed Semi-Honed"
    ],
    applications: [
      "Heavy-Traffic Driveways & Courtyards",
      "Exterior Step Treads & Risers",
      "Rustic Wall Masonry & Dry-Stone Walling",
      "Public Plazas & Promenade Paving",
      "Waterfront & Pool Surroundings"
    ],
    specifications: {
      materialType: "Dense Quartzitic Sandstone / Slatey Sandstone",
      origin: "Bijolia, Rajasthan, India",
      density: "Approx. 2.50 - 2.65 g/cm³",
      waterAbsorption: "Extremely Low (< 0.8%)",
      standardThickness: "25mm, 35mm, 50mm, 75mm (Paving and Masonry grades)",
      availableSizes: "Flagstones (60x60, 60x90cm), Cobbles (10x10, 14x14cm), Masonry blocks",
      finishOptions: "Hand-dressed edges, Machine-cut edges, Natural split top"
    },
    features: [
      "High flexural strength ideal for vehicular traffic when properly bedded",
      "Exceptional resistance to moisture penetration, moss, and algae",
      "Naturally non-slip even in torrential monsoon weather",
      "Distinctive regional heritage and rugged textural depth"
    ]
  },
  {
    id: "kota-stone",
    slug: "kota-stone",
    name: "Kota Stone",
    category: "primary",
    shortDescription: "The iconic fine-grained limestone of Kota, Rajasthan, renowned across India for superior durability, cool underfoot feel, and timeless appeal.",
    heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Kota Stone is synonymous with Kota, Rajasthan. A fine-grained, hard, and non-porous dolomitic limestone, Kota stone has been the foundational flooring material for prestigious institutions, commercial complexes, healthcare facilities, and architectural residences. It can be mirror-polished, honed to a smooth leather finish, or left naturally matte.",
    appearance: {
      colorRange: "Signature greenish-blue (Kota Blue/Green), warm chocolate brown (Kota Brown), and smoky ash tones.",
      grainTexture: "Extremely fine, compact micro-crystalline limestone with uniform density and minimal directional veining.",
      visualCharacter: "Calm, clean, architectural, and cool. Pairs flawlessly with teak wood, brass accents, and minimalist lime plasters."
    },
    finishes: [
      "High Gloss Mirror Polish",
      "Honed & Matte Satin",
      "Leather / River Wash Finish",
      "Shotblasted Anti-Skid",
      "Rough Natural Rough-Cut"
    ],
    applications: [
      "High-Traffic Interior & Corridor Flooring",
      "Hospital & Institutional Flooring",
      "Exterior Verandahs & Walkways",
      "Staircases & Skirtings",
      "Railway, Airport, and Commercial Terminals",
      "Modern Minimalist Courtyard Paving"
    ],
    specifications: {
      materialType: "Fine-Grained Dolomitic Limestone",
      origin: "Kota District, Rajasthan, India",
      density: "Approx. 2.60 - 2.72 g/cm³",
      waterAbsorption: "Virtually Impermeable (< 0.4%)",
      standardThickness: "18mm, 20mm, 25mm, 30mm, 40mm",
      availableSizes: "Cut sizes: 30x30, 45x45, 60x60, 60x90, 60x120cm, and oversized gangsaw slabs",
      finishOptions: "Mirror Polish, Honed Satin, Leather Wash, Bush Hammered"
    },
    features: [
      "Naturally cool underfoot during high-temperature summers",
      "Extremely dense and resistant to heavy abrasion and foot traffic",
      "Non-porous surface that resists common oil and grease stains",
      "Can be re-polished multiple times across decades of service life"
    ]
  },
  {
    id: "basalt",
    slug: "basalt",
    name: "Basalt Stone",
    category: "primary",
    shortDescription: "A dark volcanic stone offering a dramatic monolithic aesthetic, high compressive strength, and striking contrast for modern architectural designs.",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Formed from rapidly cooled volcanic lava, Basalt is a dense, igneous rock characterized by deep charcoal, slate-black, and dark graphite tones. In contemporary architecture, Basalt is prized for creating bold geometric statements, moody minimalist bathrooms, striking rain-screen facades, and luxury outdoor landscape water features.",
    appearance: {
      colorRange: "Deep charcoal, graphite grey, volcanic black, and subtle dark olive undertones.",
      grainTexture: "Very dense, homogeneous fine-grained structure, occasionally featuring subtle vesicular micro-pores.",
      visualCharacter: "Sophisticated, bold, modern, and monolithic. Creates stunning contrast against light stone, concrete, and timber."
    },
    finishes: [
      "Honed Matte",
      "Flamed / Thermal Finish",
      "Brushed & Antique",
      "Bush Hammered",
      "Grooved / Linear Chiseled",
      "Natural Sawn Face"
    ],
    applications: [
      "Contemporary Architectural Facades",
      "Feature Interior Accent Walls",
      "Minimalist Bathroom Cladding & Vanities",
      "Reflecting Pools & Water Features",
      "Outdoor Terraces & Urban Plazas"
    ],
    specifications: {
      materialType: "Extrusive Igneous Volcanic Basalt",
      origin: "India",
      density: "Approx. 2.80 - 3.00 g/cm³",
      waterAbsorption: "Very Low (< 0.5%)",
      standardThickness: "20mm, 30mm, 50mm, 80mm",
      availableSizes: "Slabs, Pavers, Linear wall tiles, Custom architectural profiles",
      finishOptions: "Honed, Flamed, Waterjet, Bush Hammered, Linear Sawn"
    },
    features: [
      "Highest compressive density among architectural building stones",
      "Outstanding resistance to thermal shock, freeze-thaw, and acid rain",
      "Stays consistently dark and rich even when wet or dry",
      "Ideal for modern luxury architectural minimalism"
    ]
  },
  {
    id: "marble",
    slug: "marble",
    name: "Architectural Marble",
    category: "catalogue-concept",
    isCatalogueConcept: true,
    shortDescription: "Catalogue Concept: Timeless metamorphic stone with organic veining, presented for design consultation pending inventory confirmation.",
    heroImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Please note: Marble is currently presented as a catalogue design concept pending direct supplier inventory verification. Natural marble features fluid metamorphic veining and crystalline radiance, suited for interior feature walls, statement staircases, and luxury residential foyers.",
    appearance: {
      colorRange: "Pristine white, warm cream, soft grey veining, and rich calcite patterns.",
      grainTexture: "Recrystallized calcite matrix with translucent crystalline sheen.",
      visualCharacter: "Opulent, luminous, and refined."
    },
    finishes: [
      "High Polish",
      "Honed Satin",
      "Leather Finish"
    ],
    applications: [
      "Interior Feature Walls",
      "Luxury Bathrooms",
      "Statement Foyers",
      "Custom Furniture & Mantels"
    ],
    specifications: {
      materialType: "Metamorphic Recrystallized Carbonate Stone",
      origin: "Rajasthan, India (Subject to batch verification)",
      standardThickness: "16mm, 18mm, 20mm",
      availableSizes: "Gangsaw slabs & bespoke cut panels",
      finishOptions: "Polished, Honed, Leathered"
    },
    features: [
      "Distinctive one-of-a-kind natural artistic veining",
      "High aesthetic appeal for high-end interior spaces",
      "Subject to consultation and direct material confirmation"
    ]
  },
  {
    id: "granite",
    slug: "granite",
    name: "Architectural Granite",
    category: "catalogue-concept",
    isCatalogueConcept: true,
    shortDescription: "Catalogue Concept: Highly durable crystalline igneous stone with speckled granular texture, presented for commercial design review.",
    heroImage: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Please note: Granite is categorized as a catalogue concept pending supplier inventory confirmation. Formed under extreme pressure within the earth's crust, granite offers immense hardness, scratch resistance, and structural longevity for kitchen counters, steps, and commercial thresholds.",
    appearance: {
      colorRange: "Speckled grey, deep black, brown, and multi-crystalline granitic hues.",
      grainTexture: "Interlocking coarse to medium grains of quartz, feldspar, and mica.",
      visualCharacter: "Solid, dependable, crystalline, and robust."
    },
    finishes: [
      "Polished",
      "Flamed",
      "Honed",
      "Leathered"
    ],
    applications: [
      "Commercial Countertops",
      "Heavy Duty Stairs",
      "Building Base Cladding",
      "Public Thresholds"
    ],
    specifications: {
      materialType: "Plutonic Igneous Stone",
      origin: "Rajasthan & South India (Subject to confirmation)",
      standardThickness: "18mm, 20mm, 30mm",
      availableSizes: "Counter slabs and cut-to-size tiles",
      finishOptions: "Polished, Flamed, Leathered"
    },
    features: [
      "Exceptional hardness on the Mohs scale (6-7)",
      "Resistant to kitchen acids and heat",
      "Inventory confirmation required upon enquiry"
    ]
  }
];

export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedStones: string[];
  image: string;
}

export const applicationsData: ApplicationItem[] = [
  {
    id: "exterior-cladding",
    title: "Exterior Wall Cladding",
    subtitle: "Architectural Shielding & Natural Texture",
    description: "Create enduring building facades with natural sandstone, Basalt, and Bijolia stone. Natural stone cladding shields structures from severe thermal variation while providing organic textures that age gracefully without repainting.",
    recommendedStones: ["Natural Sandstone", "Basalt Stone", "Bijolia Stone"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "interior-flooring",
    title: "Interior Flooring",
    subtitle: "Cool Underfoot, Timeless Durability",
    description: "Kota stone and polished sandstone provide cooling properties perfectly attuned to warm climates. Highly resistant to abrasion and high foot traffic, they lend clean architectural beauty to residential and commercial interiors.",
    recommendedStones: ["Kota Stone", "Natural Sandstone", "Marble (Catalogue Concept)"],
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "architectural-facades",
    title: "Architectural Facades",
    subtitle: "Monolithic Geometry & Light Modulation",
    description: "Expressive stone screens, monolithic panels, and geometric reveals created with precision-sawn sandstone and deep Basalt create unforgettable play of light and shadow on contemporary building volumes.",
    recommendedStones: ["Natural Sandstone", "Basalt Stone"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "landscaping",
    title: "Landscaping & Courtyards",
    subtitle: "Organic Transitions from Earth to Architecture",
    description: "Ground your outdoor living spaces with naturally split sandstone and Bijolia flagstones. Perfect for stepped garden terraces, firepit surroundings, retaining walls, and serene outdoor water features.",
    recommendedStones: ["Bijolia Stone", "Natural Sandstone", "Basalt Stone"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "outdoor-pathways",
    title: "Outdoor Pathways & Driveways",
    subtitle: "Non-Slip Resilience for Heavy Traffic",
    description: "Bijolia stone cobblestones, flame-treated Basalt, and rough-cleft sandstone provide superior traction even when wet, resisting vehicular loads and weathering across decades of heavy use.",
    recommendedStones: ["Bijolia Stone", "Basalt Stone", "Kota Stone (Shotblasted)"],
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "feature-walls",
    title: "Feature Walls & Niches",
    subtitle: "Artisanal Depth & Tactile Focal Points",
    description: "Transform entry foyers, double-height living spaces, and executive reception walls with chiseled stone surfaces, linear relief grooving, and dramatic natural stone texture pairings.",
    recommendedStones: ["Basalt Stone", "Natural Sandstone", "Marble (Catalogue Concept)"],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'sandstone' | 'bijolia' | 'kota' | 'basalt' | 'applications';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  illustrativeNote?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Sandstone Architectural Facade",
    category: "sandstone",
    categoryLabel: "Sandstone",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary residence featuring natural sandstone architectural wall cladding",
    description: "Honed natural sandstone wall panels creating warm geometric warmth in daylight.",
    illustrativeNote: "Illustrative architectural application"
  },
  {
    id: "g2",
    title: "Kota Stone Polished Flooring",
    category: "kota",
    categoryLabel: "Kota Stone",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined architectural interior featuring cool tone Kota stone flooring",
    description: "Iconic Kota stone with smooth satin finish providing cool thermal comfort and understated luxury.",
    illustrativeNote: "Illustrative interior concept"
  },
  {
    id: "g3",
    title: "Basalt Monolithic Cladding",
    category: "basalt",
    categoryLabel: "Basalt",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark textured basalt stone wall with dramatic architectural lighting",
    description: "Deep volcanic basalt panels creating a moody, high-contrast backdrop.",
    illustrativeNote: "Illustrative material presentation"
  },
  {
    id: "g4",
    title: "Bijolia Stone Rustic Pathway",
    category: "bijolia",
    categoryLabel: "Bijolia Stone",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    alt: "Rustic natural cleft Bijolia stone paving in lush landscaped surroundings",
    description: "Hand-cut cleft Bijolia flagstones offering non-slip traction and natural earthy tones.",
    illustrativeNote: "Illustrative exterior paving"
  },
  {
    id: "g5",
    title: "Sandstone Texture & Cleft Close-Up",
    category: "sandstone",
    categoryLabel: "Sandstone",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    alt: "Macro detail of natural beige sandstone texture with subtle quartz striations",
    description: "Fine quartz grain and natural sedimentary bedding in authentic Rajasthan sandstone.",
    illustrativeNote: "Material surface detail"
  },
  {
    id: "g6",
    title: "Modern Courtyard Paving",
    category: "applications",
    categoryLabel: "Architectural Applications",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural courtyard utilizing natural stone slabs and gravel borders",
    description: "Harmonious combination of natural stone slabs and organic garden elements.",
    illustrativeNote: "Illustrative landscape architecture"
  },
  {
    id: "g7",
    title: "Kota Stone Corridor Architecture",
    category: "kota",
    categoryLabel: "Kota Stone",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    alt: "Wide interior hallway with seamless natural stone floor panels",
    description: "Minimalist hall illuminated with natural skylight across Kota stone tiles.",
    illustrativeNote: "Illustrative institutional flooring"
  },
  {
    id: "g8",
    title: "Basalt Feature Wall & Water Element",
    category: "basalt",
    categoryLabel: "Basalt",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury residence with dark basalt feature elements and reflection pool",
    description: "Dark flamed basalt retaining water resistance and striking deep tones.",
    illustrativeNote: "Illustrative feature wall"
  },
  {
    id: "g9",
    title: "Bijolia Stone Courtyard Masonry",
    category: "bijolia",
    categoryLabel: "Bijolia Stone",
    image: "https://images.unsplash.com/photo-1533779283484-8da4c792c314?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional courtyards crafted with rugged Bijolia stone masonry",
    description: "Durable Rajasthan stone masonry standing strong against intense weather.",
    illustrativeNote: "Illustrative masonry installation"
  },
  {
    id: "g10",
    title: "Architectural Stone Screen & Portal",
    category: "applications",
    categoryLabel: "Architectural Applications",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Sculptural natural stone opening showing fine architectural craftsmanship",
    description: "Custom cut stone elements defining the entrance portal of a private villa.",
    illustrativeNote: "Illustrative architectural design"
  },
  {
    id: "g11",
    title: "Warm Sandstone Villa Exterior",
    category: "sandstone",
    categoryLabel: "Sandstone",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury modern villa with full sandstone cladding against evening lighting",
    description: "Evening illumination highlighting the soft tactile richness of natural sandstone.",
    illustrativeNote: "Illustrative residential project"
  },
  {
    id: "g12",
    title: "Minimalist Stone Hearth & Feature Wall",
    category: "applications",
    categoryLabel: "Architectural Applications",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    alt: "Double height living room with full height natural stone feature wall",
    description: "Textured natural stone wall creating an architectural centerpiece.",
    illustrativeNote: "Illustrative interior feature"
  }
];
