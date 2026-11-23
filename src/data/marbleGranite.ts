export interface StoneItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features?: string[];
}

export interface SpaceCategory {
  id: string;
  title: string;
  slug: string;
  image: string;
  subtitle: string;
  description: string;
  recommendedStones: string[];
}

export interface MarbleColourCategory {
  id: string;
  name: string;
  slug: string;
  colorHex: string;
  image: string;
  tagline: string;
  description: string;
  varieties: string[];
  finishes: string[];
  bestFor: string[];
}

export interface GraniteColourCategory {
  id: string;
  name: string;
  slug: string;
  colorHex: string;
  image: string;
  tagline: string;
  description: string;
  varieties: string[];
  finishes: string[];
  bestFor: string[];
}

export interface ColourMarbleProduct {
  id: string;
  name: string;
  colorName: string;
  colorHex: string;
  image: string;
  description: string;
  origin?: string;
}

export const marbleBySpaces: SpaceCategory[] = [
  {
    id: "living-room",
    title: "Marble for Living Room",
    slug: "living-room",
    image: "/spaces/living-room.jpg",
    subtitle: "Grandeur & Welcoming Sophistication",
    description: "Create an extraordinary centerpiece in your home with polished Statuario, Flawless White, and Bianco Waves marble. Imparts timeless elegance, luminous natural light reflection, and expansive scale to residential living spaces.",
    recommendedStones: ["Statuario Marble", "Flawless White Marble", "Bianco Waves", "Panda White"]
  },
  {
    id: "kitchen",
    title: "Marble & Granite for Kitchen",
    slug: "kitchen",
    image: "/spaces/kitchen.jpg",
    subtitle: "Heat-Resistant Surfaces & Island Tops",
    description: "High-density granites and sealed marble surfaces engineered for culinary masterminds. Scratch-proof, heat-resilient, and stain-resistant for islands, countertops, and full-height backsplashes.",
    recommendedStones: ["Exotic Black Granite", "Emerald Green Granite", "Colonial White Granite", "Royal Blue Granite"]
  },
  {
    id: "washroom",
    title: "Marble for Washroom",
    slug: "washroom",
    image: "/spaces/washroom.jpg",
    subtitle: "Spa-Inspired Sanctuary & Serenity",
    description: "Transform washrooms and master suites into private luxury retreats. Naturally cooling calcite, subtle translucent Onyx backlighting, and honed non-slip flooring that resists humidity and moisture.",
    recommendedStones: ["Onyx Marble", "Vatican Tra-Onyx", "Flawless White", "Travertine Marble"]
  },
  {
    id: "bedroom",
    title: "Marble for Bedroom",
    slug: "bedroom",
    image: "/spaces/bedroom.jpg",
    subtitle: "Restful Calm & Gentle Hues",
    description: "Serene neutral marble palettes in soft smoky dove-grey, warm beige, and cream. Creates a tranquil, refined atmosphere that remains naturally cool during warm Indian summers.",
    recommendedStones: ["Silver Dove Marble", "Victoria Beige", "Monte Bianco", "Vogue Grey"]
  },
  {
    id: "flooring",
    title: "Marble & Stone for Flooring",
    slug: "flooring",
    image: "/spaces/flooring.jpg",
    subtitle: "Enduring Footfall & Book-Matched Slabs",
    description: "High compressive strength stone flooring for expansive halls, luxury villas, and commercial lobbies. Precision cut and polished for seamless joint lines and lasting durability across generations.",
    recommendedStones: ["Kota Stone Mirror Polish", "Flawless White Marble", "Steel Grey Granite", "Volakas White"]
  },
  {
    id: "wall",
    title: "Marble for Wall Cladding",
    slug: "wall",
    image: "/spaces/wall.jpg",
    subtitle: "Sculptural Backdrops & Statement Paneling",
    description: "Dramatic vertical book-matched feature walls, fireplace surrounds, and double-height architectural portals. Natural veining creates monumental artwork crafted by Mother Nature herself.",
    recommendedStones: ["Michael Angelo Marble", "Golden Spider Marble", "White Equator", "Panda White Marble"]
  }
];

export const popularMarbles: StoneItem[] = [
  {
    id: "flawless-white",
    name: "Flawless White Marble",
    category: "Popular Marble",
    image: "/marble/flawless-white.jpg",
    description: "Pristine milky-white surface with subtle natural luminosity, ideal for luxury residential living spaces and master bedrooms.",
    features: ["Mirror Polish", "High Calcite Purity", "Living & Foyer Flooring"]
  },
  {
    id: "italian-marble",
    name: "Italian Marble",
    category: "Imported Marble",
    image: "/marble/italian-marble.jpg",
    description: "Celebrated worldwide for dramatic metamorphic veining, velvety smooth texture, and timeless architectural grandeur.",
    features: ["Imported Origin", "Lustrous Surface", "Feature Wall Cladding"]
  },
  {
    id: "statuario-marble",
    name: "Statuario Marble",
    category: "Italian Marble",
    image: "/marble/statuario-marble.jpg",
    description: "The crown jewel of Italian stones, defined by bold distinctive grey and gold veins carving through pure white marble.",
    features: ["Prestige Luxury", "Book-Match Pattern", "Statement Villas"]
  },
  {
    id: "imported-marble",
    name: "Imported Marble Collection",
    category: "Imported Marble",
    image: "/marble/imported-marble.jpg",
    description: "Curated selection of premium global marbles featuring unique mineral striations and high compressive strength.",
    features: ["Global Quarrying", "Exclusive Textures", "Commercial & Residential"]
  },
  {
    id: "onyx-marble",
    name: "Onyx Marble",
    category: "Exotic Onyx",
    image: "/marble/onyx-marble.jpg",
    description: "Translucent exotic stone that glows vibrantly under backlit installations, bars, reception counters, and feature niches.",
    features: ["Backlit Capable", "Rare Mineral Bands", "Accent Highlights"]
  },
  {
    id: "travertine-marble",
    name: "Travertine Marble",
    category: "Travertine",
    image: "/marble/travertine-marble.jpg",
    description: "Warm porous sedimentary limestone-marble with linear bedding, bringing European rustic warmth to facades and bathrooms.",
    features: ["Linear Cleft Finish", "Earthy Warmth", "Wall & Floor Accents"]
  },
  {
    id: "panda-white",
    name: "Panda White Marble",
    category: "Popular Marble",
    image: "/marble/panda-white.jpg",
    description: "High-contrast statement marble featuring broad flowing jet-black veins sweeping across a stark snow-white canvas.",
    features: ["High Contrast", "Artistic Book-Match", "Designer Portals"]
  },
  {
    id: "michael-angelo",
    name: "Michael Angelo Marble",
    category: "Italian Marble",
    image: "/marble/michael-angelo.jpg",
    description: "Rich black and golden ochre veining evoking classical Renaissance sculpture and majestic modern interior aesthetics.",
    features: ["Dramatic Aesthetic", "Premium Gloss", "Dining & Vanities"]
  },
  {
    id: "golden-spider",
    name: "Golden Spider Marble",
    category: "Exotic Marble",
    image: "/marble/golden-spider.jpg",
    description: "Dramatic white base crisscrossed by a fine web of golden, orange, and amber veins, providing captivating warmth.",
    features: ["Spider Web Veining", "Warm Amber Tones", "Luxury Flooring"]
  },
  {
    id: "volakas-white",
    name: "Volakas White Marble",
    category: "Imported Marble",
    image: "/marble/volakas-white.jpg",
    description: "Elegant white marble with flowing diagonal ribbons of soft ash grey and lilac undertones, quarried in Greece.",
    features: ["Diagonal Veining", "Cool Ash Tones", "Seamless Living Rooms"]
  },
  {
    id: "bianco-waves",
    name: "Bianco Waves Marble",
    category: "Popular Marble",
    image: "/marble/bianco-waves.jpg",
    description: "Rhythmic wave-like patterns of pale grey and white creating dynamic visual movement across expansive floorplates.",
    features: ["Wave Pattern", "Contemporary Chic", "Expansive Slabs"]
  },
  {
    id: "white-equator",
    name: "White Equator Marble",
    category: "Linear Marble",
    image: "/marble/white-equator.jpg",
    description: "Rare architectural marble featuring razor-sharp, parallel horizontal charcoal stripes on a cool silver-white background.",
    features: ["Geometric Striations", "Modern Minimalist", "Feature Wall Cladding"]
  },
  {
    id: "silver-dove",
    name: "Silver Dove Marble",
    category: "Grey Marble",
    image: "/marble/silver-dove.jpg",
    description: "Sophisticated smoky dove-grey tone with delicate white calcite veining, perfect for serene understated luxury.",
    features: ["Neutral Smokey Palette", "Calm Texture", "Executive Suites"]
  },
  {
    id: "monte-bianco",
    name: "Monte Bianco Marble",
    category: "Popular Marble",
    image: "/marble/monte-bianco.jpg",
    description: "Alpine white marble with soft feathery clouds of grey, creating bright reflective interiors with exceptional durability.",
    features: ["Luminous White", "Subtle Feathery Grain", "Bedrooms & Corridors"]
  },
  {
    id: "cats-eye",
    name: "Cat's Eye Marble",
    category: "Exotic Marble",
    image: "/marble/cats-eye.jpg",
    description: "Distinctive crystalline radiance and unique chatoyant luster reminiscent of the rare gemstone.",
    features: ["Luminous Chatoyancy", "Rare Crystallization", "Artisan Columns & Borders"]
  },
  {
    id: "vatican-tra-onyx",
    name: "Vatican Tra-Onyx Marble",
    category: "Exotic Marble",
    image: "/marble/vatican-tra-onyx.jpg",
    description: "A rare fusion of travertine linear stratification and translucent onyx crystalline bands for feature portals.",
    features: ["Travertine & Onyx Blend", "Rare Slabs", "Architectural Niches"]
  },
  {
    id: "victoria-beige",
    name: "Victoria Beige Marble",
    category: "Imported Marble",
    image: "/marble/victoria-beige.jpg",
    description: "Warm royal beige with gentle golden crystallizations that add sun-drenched European warmth to living spaces.",
    features: ["Warm Beige", "Velvety Texture", "Hallways & Living"]
  },
  {
    id: "vogue-grey",
    name: "Vogue Grey Marble",
    category: "Grey Marble",
    image: "/marble/vogue-grey.jpg",
    description: "Trendy contemporary slate-grey marble with silver striations, celebrated in boutique residential and corporate spaces.",
    features: ["Contemporary Grey", "Subtle Highlights", "Office & Villa Flooring"]
  },
  {
    id: "xposed-concrete",
    name: "Xposed Concrete Marble",
    category: "Popular Marble",
    image: "/marble/xposed-concrete.jpg",
    description: "Urban industrial aesthetic crafted from natural stone, combining brutalist concrete look with luxury polished marble.",
    features: ["Industrial Chic", "Matte & Gloss", "Feature Walls"]
  },
  {
    id: "terracotta-marble",
    name: "Terracotta Marble",
    category: "Exotic Marble",
    image: "/marble/terracotta-marble.jpg",
    description: "Deep rustic terracotta and burnt sienna marble infused with crystalline white calcite veins.",
    features: ["Rich Terracotta", "Warm Earth Tones", "Courtyards & Accent Walls"]
  }
];

export const popularGranites: StoneItem[] = [
  {
    id: "black-granite",
    name: "Exotic Black Granite",
    category: "Black Granite",
    image: "/granite/black-granite.jpg",
    description: "Deep jet-black igneous stone with mirror-polished crystalline sheen. Scratch, stain, and heat resistant for heavy duty kitchen tops and thresholds.",
    features: ["Ultra Hardness", "Zero Porosity", "Kitchen Tops & Cladding"]
  },
  {
    id: "blue-granite",
    name: "Royal Blue Granite",
    category: "Blue Granite",
    image: "/granite/blue-granite.png",
    description: "Stunning iridescent blue feldspar crystals that shimmer under architectural illumination. One of the world's most sought-after exotic granites.",
    features: ["Iridescent Shimmer", "Luxury Focal Point", "Tabletops & Cladding"]
  },
  {
    id: "brown-granite",
    name: "Imperial Brown Granite",
    category: "Brown Granite",
    image: "/granite/brown-granite.jpg",
    description: "Deep chocolate and coffee tones with bronze crystalline mineral deposits, pairing effortlessly with natural timber joinery.",
    features: ["Warm Earthy Base", "High Impact Strength", "Staircases & Floors"]
  },
  {
    id: "green-granite",
    name: "Emerald Green Granite",
    category: "Green Granite",
    image: "/granite/green-granite.jpg",
    description: "Lush forest and emerald green crystalline matrices, celebrated in architectural building plinths, facades, and vanity tops.",
    features: ["Rich Forest Tones", "Chemical Resistance", "Commercial Plinths"]
  },
  {
    id: "grey-granite",
    name: "Steel Grey Granite",
    category: "Grey Granite",
    image: "/granite/grey-granite.jpg",
    description: "Uniform medium-grey crystalline structure with high quartz density, ideal for institutional and high-footfall commercial plazas.",
    features: ["Uniform Color", "Heavy Traffic Durability", "Driveways & Steps"]
  },
  {
    id: "red-granite",
    name: "Ruby Red Granite",
    category: "Red Granite",
    image: "/granite/red-granite.jpg",
    description: "Vibrant imperial red granite with dark crystalline flecks, recognized for decades across monumental facades and monuments.",
    features: ["Monumental Toughness", "Fade Proof", "Outdoor Facades"]
  },
  {
    id: "white-granite",
    name: "Colonial White Granite",
    category: "White Granite",
    image: "/granite/white-granite.jpg",
    description: "Creamy white feldspar background accented with subtle smoky quartz flakes and dark garnet speckles.",
    features: ["Bright Aesthetic", "Heat Proof", "Island Counters & Flooring"]
  },
  {
    id: "yellow-granite",
    name: "Gold & Yellow Granite",
    category: "Yellow Granite",
    image: "/granite/yellow-granite.jpg",
    description: "Radiant golden yellow and honey tones infused with quartz and mica crystals, imparting sunlight warmth to elevations.",
    features: ["Warm Golden Glow", "Weather Resistant", "Porch & Exterior Walls"]
  },
  {
    id: "venetian-brown",
    name: "Venetian Brown Granite",
    category: "Exotic Granite",
    image: "/granite/venetian-brown.jpg",
    description: "Exotic brown granite with dynamic swirling mineral rivers of fawn, taupe, and deep graphite.",
    features: ["Dynamic Vein Flow", "Exotic Look", "Executive Reception Desks"]
  },
  {
    id: "versilia-grey",
    name: "Versilia Grey Granite",
    category: "Exotic Granite",
    image: "/granite/versilia-grey.jpg",
    description: "Modern architectural granite with subtle micro-crystalline texture, offering a sleek concrete-like aesthetic with granite resilience.",
    features: ["Modern Architectural", "Matte or Gloss Finish", "Minimalist Portals"]
  }
];

export const marbleByColours: MarbleColourCategory[] = [
  {
    id: "beige-marble",
    name: "Beige Marble",
    slug: "beige-marble",
    colorHex: "#D8C7A5",
    image: "/marble-colors/beige-marble.png",
    tagline: "Timeless Warmth & Earthy Elegance",
    description: "Earthy, warm, and inviting tones that seamlessly complement modern minimalist interiors as well as classical architectural aesthetics.",
    varieties: ["Victoria Beige", "Classic Beige", "Botticino Classico", "Dyna Beige", "Burch Beige"],
    finishes: ["Mirror Polished", "Honed", "Brushed Antique"],
    bestFor: ["Living Room Flooring", "Hotel Lobbies", "Bedrooms", "Staircases"]
  },
  {
    id: "white-marble",
    name: "White Marble",
    slug: "white-marble",
    colorHex: "#F2F2F2",
    image: "/marble-colors/white-marble.jpg",
    tagline: "Purity, Light & Monumental Grandeur",
    description: "The epitome of timeless luxury. Pristine whites with delicate to bold veining that expand visual space and reflect natural daylight exquisitely.",
    varieties: ["Flawless White", "Statuario Marble", "Bianco Waves", "Volakas White", "White Equator"],
    finishes: ["High Polish", "Satin Matt", "Honed"],
    bestFor: ["Main Hall Flooring", "Foyer Entrance", "Feature Walls", "Luxury Bathrooms"]
  },
  {
    id: "grey-marble",
    name: "Grey Marble",
    slug: "grey-marble",
    colorHex: "#8B9096",
    image: "/marble-colors/grey-marble.jpg",
    tagline: "Contemporary Modernism & Subtle Drama",
    description: "Sophisticated neutral tones ranging from soft dove grey to deep graphite charcoal with crisp white or silver vein networks.",
    varieties: ["Vogue Grey", "Versilia Grey", "Silver Dove", "Xposed Concrete", "Armani Grey"],
    finishes: ["High Gloss", "Honed", "Leather / Antique"],
    bestFor: ["Modern Living Rooms", "Executive Offices", "Bathroom Vanity Walls", "Commercial Foyers"]
  },
  {
    id: "black-marble",
    name: "Black Marble",
    slug: "black-marble",
    colorHex: "#1E1E20",
    image: "/marble-colors/black-marble.jpg",
    tagline: "Mysterious Opulence & Striking Contrast",
    description: "Deep, ink-black calcite and limestone surfaces laced with luminous gold, white, or electric copper streaks for unforgettable statement installations.",
    varieties: ["Black Marquina", "Portoro Gold", "Black Laurent", "Panda Black", "Black Spider"],
    finishes: ["Mirror Polished", "Leather Finish"],
    bestFor: ["Accent Feature Walls", "Bar Counters", "Powder Rooms", "Luxury Reception Backdrops"]
  },
  {
    id: "green-marble",
    name: "Green Marble",
    slug: "green-marble",
    colorHex: "#2E5C46",
    image: "/marble-colors/green-marble.jpg",
    tagline: "Regal Forest Tones & Natural Serenity",
    description: "Rich emerald, jade, and forest greens patterned with intricate lighter veining that invoke the lush tranquility of natural landscapes.",
    varieties: ["Spider Green", "Verde Alpi", "Guatemala Green", "Irish Emerald", "Rainforest Green"],
    finishes: ["Polished", "Honed", "Antique Flamed"],
    bestFor: ["Courtyard Flooring", "Bathroom Suites", "Dining Table Tops", "Temple Mandirs"]
  },
  {
    id: "blue-marble",
    name: "Blue Marble",
    slug: "blue-marble",
    colorHex: "#2B4C7E",
    image: "/marble-colors/blue-marble.jpg",
    tagline: "Ultra-Rare Celestial Luxury",
    description: "Exotic and exceptionally rare celestial blue and lapis-hued marble. Radiates an aura of high nobility and artistic exclusivity.",
    varieties: ["Sodalite Blue", "Blue Jeans Marble", "Palissandro Bluette", "Blue Agate", "Sky Blue"],
    finishes: ["Ultra Polished", "Backlit Honed"],
    bestFor: ["Backlit Statement Walls", "Presidential Lounges", "Powder Room Counters"]
  },
  {
    id: "brown-marble",
    name: "Brown Marble",
    slug: "brown-marble",
    colorHex: "#5E4436",
    image: "/marble-colors/brown-marble.jpg",
    tagline: "Rich Cocoa & Earthbound Warmth",
    description: "Deep espresso, chocolate, and walnut tones interwoven with golden honey spider-web veining. Creates warm, welcoming sanctuary spaces.",
    varieties: ["Venetian Brown", "Dark Emperador", "Light Emperador", "Tobacco Brown", "Armani Brown"],
    finishes: ["Polished", "Honed", "Satin"],
    bestFor: ["Fireplace Cladding", "Dining Areas", "Master Suites", "Study Rooms"]
  },
  {
    id: "pink-marble",
    name: "Pink Marble",
    slug: "pink-marble",
    colorHex: "#D9A5A8",
    image: "/marble-colors/pink-marble.jpg",
    tagline: "Blush Elegance & Gentle Romance",
    description: "Delicate rose, blush, and strawberry hues that impart soft ambient warmth, feminine grace, and subtle luxury.",
    varieties: ["Rose Pink Marble", "Norwegian Rose", "Rosa Tea", "Pink Onyx", "Banswara Pink"],
    finishes: ["Polished", "Semi-Honed"],
    bestFor: ["Powder Rooms", "Bedrooms", "Luxury Spa Salons", "Ornamental Carvings"]
  },
  {
    id: "yellow-marble",
    name: "Yellow & Gold Marble",
    slug: "yellow-marble",
    colorHex: "#D4A349",
    image: "/marble-colors/yellow-marble.jpg",
    tagline: "Solar Radiance & Golden Splendor",
    description: "Warm amber, sunlit yellow, and imperial gold shades that energize interiors with brilliant natural luminescence.",
    varieties: ["Vatican Tra-Onyx", "Jaisalmer Yellow", "Golden Spider", "Yellow Onyx", "Spanish Gold"],
    finishes: ["Mirror Polished", "Translucent Backlit", "Honed"],
    bestFor: ["Pooja Rooms / Mandirs", "Backlit Bar Counters", "Luxury Entry Foyers", "Accent Borders"]
  },
  {
    id: "red-marble",
    name: "Red Marble",
    slug: "red-marble",
    colorHex: "#9B382F",
    image: "/marble-colors/red-marble.jpg",
    tagline: "Passionate Imperial Majesty",
    description: "Deep burgundy, terracotta, and crimson red stones with white calcite crystallization, historically chosen for palaces and stately residences.",
    varieties: ["Terracotta Red", "Rosso Levanto", "Rosso Verona", "Red Alicante", "Agra Red Marble"],
    finishes: ["Polished", "Antique Brushed"],
    bestFor: ["Colonnades & Pillars", "Borders & Inlays", "Heritage Portals", "Dramatic Foyers"]
  }
];

export const colourMarbleProducts: ColourMarbleProduct[] = [
  {
    id: "bianco-waves",
    name: "Bianco Waves",
    colorName: "White Marble",
    colorHex: "#F2F2F2",
    image: "/marble-colors/bianco-waves.jpg",
    description: "Flowing horizontal linear grey waves undulating across a luminous white base, ideal for expansive statement flooring."
  },
  {
    id: "xposed-concrete",
    name: "Xposed Concrete",
    colorName: "Grey Marble",
    colorHex: "#8B9096",
    image: "/marble-colors/xposed-concrete.jpg",
    description: "Urban industrial aesthetic with natural stone tactile richness, mimicking cast architectural concrete with natural crystal luster."
  },
  {
    id: "white-equator",
    name: "White Equator",
    colorName: "White Marble",
    colorHex: "#F2F2F2",
    image: "/marble-colors/white-equator.jpg",
    description: "Strict parallel charcoal and graphite striping across a chalk-white canvas, engineered by nature for dramatic modern lines."
  },
  {
    id: "volakas-white",
    name: "Volakas White",
    colorName: "White Marble",
    colorHex: "#F2F2F2",
    image: "/marble-colors/volakas-white.jpg",
    description: "Classical Greek marble featuring light, soft diagonal smoky veining reminiscent of Carrara and Calacatta."
  },
  {
    id: "vogue-grey",
    name: "Vogue Grey",
    colorName: "Grey Marble",
    colorHex: "#8B9096",
    image: "/marble-colors/vogue-grey.jpg",
    description: "Ultra-sleek neutral grey marble with micro-vein crystallization, beloved by top architects for contemporary luxury apartments."
  },
  {
    id: "victoria-beige",
    name: "Victoria Beige",
    colorName: "Beige Marble",
    colorHex: "#D8C7A5",
    image: "/marble-colors/victoria-beige.jpg",
    description: "Creamy vanilla and caramel clouds with subtle fossil markings that radiate calm warmth throughout master suites and living lounges."
  },
  {
    id: "versilia-grey-marble",
    name: "Versilia Grey",
    colorName: "Grey Marble",
    colorHex: "#8B9096",
    image: "/marble-colors/versilia-grey.jpg",
    description: "Deep smoky tone infused with subtle dendritic veining, providing a dramatic textural backdrop for light-colored furniture."
  },
  {
    id: "venetian-brown-marble",
    name: "Venetian Brown",
    colorName: "Brown Marble",
    colorHex: "#5E4436",
    image: "/marble-colors/venetian-brown.jpg",
    description: "Deep roasted espresso background woven with shimmering amber veins, lending an intimate club-lounge luxury feel."
  },
  {
    id: "vatican-tra-onyx",
    name: "Vatican Tra-Onyx",
    colorName: "Yellow & Gold Marble",
    colorHex: "#D4A349",
    image: "/marble-colors/vatican-tra-onyx.jpg",
    description: "Semi-translucent honey-gold travertine onyx with natural crystalline bands that glow with warm ethereal light when backlit."
  },
  {
    id: "terracotta-red",
    name: "Terracotta Red",
    colorName: "Red Marble",
    colorHex: "#9B382F",
    image: "/marble-colors/terracotta-red.jpg",
    description: "Warm brick red and rust tones with striking white calcite streaks, perfect for Mediterranean and Indian heritage luxury spaces."
  }
];

export const graniteByColours: GraniteColourCategory[] = [
  {
    id: "black-granite",
    name: "Black Granite",
    slug: "black-granite",
    colorHex: "#1C1C1E",
    image: "/granite-colors/black-granite.jpg",
    tagline: "Timeless Power & Mirror Reflection",
    description: "The gold standard of durability and architectural depth. Deep pitch-black feldspar and quartz matrix highly resistant to scratches, heat, and acidic spills.",
    varieties: ["Absolute Black Granite", "Black Galaxy", "Black Pearl", "Titanium Black", "Nero Impala"],
    finishes: ["Mirror Polished", "Leather Finish", "Flamed Outdoor", "Lapatro"],
    bestFor: ["Kitchen Island Countertops", "High-Traffic Commercial Flooring", "Monuments & Facades", "Vanity Slabs"]
  },
  {
    id: "blue-granite",
    name: "Blue Granite",
    slug: "blue-granite",
    colorHex: "#274060",
    image: "/granite-colors/blue-granite.png",
    tagline: "Rare Exotic Oceanic Luminescence",
    description: "Extraordinarily rare and luxurious granite with iridescent labradorite feldspar crystals that shimmer like ocean waves and mother-of-pearl in sunlight.",
    varieties: ["Blue Dunes Granite", "Volga Blue", "Blue Pearl", "Sapphire Blue", "Azul Bahia"],
    finishes: ["High Gloss Polished", "Honed Velvet"],
    bestFor: ["Luxury Bar Counters", "Executive Office Desks", "Feature Reception Portals", "Island Waterfall Tops"]
  },
  {
    id: "brown-granite",
    name: "Brown Granite",
    slug: "brown-granite",
    colorHex: "#4E3629",
    image: "/granite-colors/brown-granite.jpg",
    tagline: "Warm Earth Tones & Cozy Elegance",
    description: "Rich chocolate, coffee, and roasted cinnamon mineral beds swirling with golden mica flakes and quartz veins. Imparts grounding warmth to kitchens and elevations.",
    varieties: ["Tan Brown Granite", "Coffee Brown", "Baltic Brown", "Venetian Brown", "Desert Brown"],
    finishes: ["Mirror Polished", "Antique Brushed", "Honed"],
    bestFor: ["Modular Kitchen Counters", "Staircase Treads & Risers", "Outdoor Patio Flooring", "Fireplace Mantels"]
  },
  {
    id: "green-granite",
    name: "Green Granite",
    slug: "green-granite",
    colorHex: "#2D4736",
    image: "/granite-colors/green-granite.jpg",
    tagline: "Lush Nature & Botanical Grandeur",
    description: "Vibrant emerald, olive, and forest green crystalline granite laced with white calcite, grey quartz, and deep forest striations. Highly prized for its refreshing organic look.",
    varieties: ["Hassan Green Granite", "Emerald Pearl", "Kuppam Green", "Tropical Green", "Verde Butterfly"],
    finishes: ["Mirror Polish", "Flamed", "Honed"],
    bestFor: ["Verandahs & Porches", "Kitchen Countertops", "Temple Mandirs & Altars", "Landscaping Water Features"]
  },
  {
    id: "grey-granite",
    name: "Grey Granite",
    slug: "grey-granite",
    colorHex: "#6E727A",
    image: "/granite-colors/grey-granite.jpg",
    tagline: "Modern Industrial Minimalism",
    description: "The architect's favorite neutral canvas. Uniform grain, calm silver and charcoal speckles, and extreme compressive strength suitable for mega commercial and residential projects.",
    varieties: ["Steel Grey Granite", "Platinum Grey", "Versilia Grey", "Alaska Grey", "Silver Cloud"],
    finishes: ["Leathered Touch", "High Polished", "Bush Hammered", "Shot Blasted"],
    bestFor: ["Commercial Atrium Flooring", "Minimalist Kitchen Tops", "Exterior Cladding Panels", "Driveway Paving"]
  },
  {
    id: "red-granite",
    name: "Red Granite",
    slug: "red-granite",
    colorHex: "#8B2E24",
    image: "/granite-colors/red-granite.jpg",
    tagline: "Imperial Majesty & Monumental Toughness",
    description: "Bold imperial crimson and ruby red feldspar clusters interspersed with black and smoky grey quartz crystals. Renowned worldwide for resisting weathering across decades.",
    varieties: ["Ruby Red Granite", "Imperial Red", "Jhansi Red", "New Imperial Red", "Multicolor Red"],
    finishes: ["High Polish", "Flamed Non-Slip", "Antique Finish"],
    bestFor: ["Monumental Buildings", "Temple Architecture", "Exterior Pillar Cladding", "Main Entrance Portals"]
  },
  {
    id: "white-granite",
    name: "White Granite",
    slug: "white-granite",
    colorHex: "#EAEAEA",
    image: "/granite-colors/white-granite.jpg",
    tagline: "Bright Luminosity & Crisp Cleanliness",
    description: "Crisp white and cream backdrops accented by charcoal garnet speckles and subtle smoky quartz rivers. Delivers the bright elegance of marble with granite hardness.",
    varieties: ["Colonial White Granite", "Moon White", "Alaska White", "Kashmir White", "Viscon White"],
    finishes: ["High Gloss Polished", "Honed Silk", "Leather Finish"],
    bestFor: ["Open Kitchen Countertops", "Master Bath Vanities", "Living Room Flooring", "Dining Table Tops"]
  },
  {
    id: "yellow-granite",
    name: "Yellow Granite",
    slug: "yellow-granite",
    colorHex: "#CFA043",
    image: "/granite-colors/yellow-granite.jpg",
    tagline: "Sun-Drenched Warmth & Golden Radiance",
    description: "Radiant golden ochre, sunny amber, and warm mustard hues with subtle quartz patterns that bring inviting warmth and natural luxury to architectural facades and interiors.",
    varieties: ["Crystal Yellow Granite", "Giallo Veneziano", "Imperial Gold", "Madura Gold", "Tiger Skin Yellow"],
    finishes: ["Polished", "Flamed Antique", "Bush Hammered"],
    bestFor: ["Exterior Wall Elevation Cladding", "Porch & Portico Flooring", "Kitchen Counters", "Pool Surrounds"]
  }
];

export const graniteBySpaces: SpaceCategory[] = [
  {
    id: "front-wall-cladding",
    title: "Granite for Front Wall Cladding",
    slug: "front-wall-cladding",
    image: "/granite-spaces/front-wall-cladding.jpg",
    subtitle: "Weatherproof Exterior Elevations & Grand Facades",
    description: "Transform exterior architectural facades with heavy-duty gangsaw-cut granite cladding. Resists extreme heat, torrential rains, UV fading, and air pollution, preserving a commanding aesthetic for centuries.",
    recommendedStones: ["Ruby Red Granite", "Steel Grey Granite", "Absolute Black", "Imperial Gold"]
  },
  {
    id: "wall-highlighters",
    title: "Granite for Wall Highlighters",
    slug: "wall-highlighters",
    image: "/granite-spaces/wall-highlighters.jpg",
    subtitle: "Sculptural Accent Walls & Textured Panels",
    description: "Create striking feature focal points in living foyers, executive boardroom walls, and double-height stairwells. Flamed, leathered, or mirror-finished granite brings dynamic mineral depth and textured luxury.",
    recommendedStones: ["Blue Dunes Granite", "Titanium Black", "Venetian Brown", "Versilia Grey"]
  },
  {
    id: "kitchen-top",
    title: "Granite for Kitchen Tops & Islands",
    slug: "kitchen-top",
    image: "/granite-spaces/kitchen-top.jpg",
    subtitle: "Scorching Heat Resilience & Culinary Excellence",
    description: "The ultimate culinary countertop surface. Impervious to hot cookware up to 480°C, acidic lemon/vinegar spills, turmeric stains, and heavy knife impact. Seamlessly polished with water-jet edge profiles.",
    recommendedStones: ["Absolute Black Granite", "Black Galaxy", "Colonial White Granite", "Emerald Pearl"]
  },
  {
    id: "parking",
    title: "Granite for Parking & Driveways",
    slug: "parking",
    image: "/granite-spaces/parking.jpg",
    subtitle: "Heavy Vehicle Load-Bearing & Anti-Skid Grip",
    description: "Calibrated 25mm to 40mm thick granite pavers and flamed slabs engineered for vehicular traffic, ramps, porch aprons, and outdoor pathways. Exceptional compressive strength with non-slip flamed traction.",
    recommendedStones: ["Steel Grey Flamed Granite", "Sadahalli Grey", "Jhansi Red Cobbles", "Tan Brown Outdoor"]
  },
  {
    id: "table-top",
    title: "Granite for Table Tops & Reception Desks",
    slug: "table-top",
    image: "/granite-spaces/table-top.jpg",
    subtitle: "Sculptural Dining Tables & Executive Desks",
    description: "Elevate dining rooms, conference tables, and hotel concierge counters with bespoke solid granite table slabs. Beveled edges, high gloss mirror shine, and effortless stain-free maintenance.",
    recommendedStones: ["Black Pearl Granite", "Blue Pearl", "Volga Blue", "Alaska White Granite"]
  }
];
