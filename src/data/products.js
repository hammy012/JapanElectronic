export const COMPANY_INFO = {
  name: "Japan Electronics",
  tagline: "Power Your World With Better Electronics",
  phone: "0333 2798969",
  rawPhone: "03332798969",
  whatsappNumber: "923332798969",
  address: "Japan Electronics, Main Electronics Market, Saddar / Auto Bhan, Hyderabad, Sindh 71000, Pakistan",
  city: "Hyderabad, Pakistan",
  email: "info@japanelectronics.pk",
  workingHours: "Mon - Sat: 10:00 AM - 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/place/Japan+Electronics/@25.3585812,68.2931557,13z/data=!4m6!3m5!1s0x394c70ef411e8bc5:0xe5c79667f34bcced!8m2!3d25.3908067!4d68.3683512!16s%2Fg%2F11xh73g6f",
  googleEmbedUrl: "https://maps.google.com/maps?q=25.3908067,68.3683512&z=16&output=embed",
  googleRating: 4.8,
  googleReviewCount: "120+"
};


export const CATEGORIES = [
  {
    id: "tvs",
    name: "TVs & Displays",
    count: "18+ Models",
    description: "4K OLED, QLED & Ultra HD Smart TVs with immersive Dolby Vision.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80",
    badge: "Popular"
  },
  {
    id: "laptops",
    name: "Laptops & Computers",
    count: "24+ Models",
    description: "High-performance laptops for gaming, creative work & office productivity.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
    badge: "Top Rated"
  },
  {
    id: "mobile",
    name: "Mobile & Accessories",
    count: "35+ Models",
    description: "Flagship smartphones, fast chargers, wireless pads & protective gear.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
    badge: "New Arrival"
  },
  {
    id: "audio",
    name: "Audio & Speakers",
    count: "20+ Models",
    description: "Active noise-canceling headphones, Bluetooth soundbars & hi-fi speakers.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    badge: "Best Seller"
  },
  {
    id: "smart",
    name: "Smart Devices",
    count: "15+ Models",
    description: "Smartwatches, fitness bands, home automation hubs & security systems.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    badge: "Trending"
  },
  {
    id: "home",
    name: "Home Electronics",
    count: "30+ Models",
    description: "Inverter ACs, smart refrigerators, micro-waves & kitchen appliances.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    badge: "Essential"
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Bravia Ultra 65\" 4K OLED Smart TV",
    category: "tvs",
    categoryLabel: "TVs & Displays",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    description: "Stunning 4K OLED display with Cognitive Processor XR, 120Hz refresh rate and immersive Acoustic Surface Audio.",
    specs: ["65-inch 4K OLED", "120Hz Refresh Rate", "Google TV OS", "Dolby Atmos & Vision"],
    tag: "Flagship"
  },
  {
    id: 2,
    name: "SonicPro Wireless Noise-Canceling Headphones",
    category: "audio",
    categoryLabel: "Audio & Speakers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Industry-leading active noise cancellation with 30-hour battery life, quick charge and ultra-soft memory foam earcups.",
    specs: ["ANC Dual Noise Sensor", "30-Hr Battery", "High-Res Audio", "Hands-Free Mic"],
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "ZenBook Pro 15 M-Series Laptop",
    category: "laptops",
    categoryLabel: "Laptops & Computers",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-slim aluminum chassis featuring 3.2K OLED Touch display, 32GB RAM and next-gen multi-core processor performance.",
    specs: ["Intel i9 / 32GB RAM", "1TB NVMe SSD", "3.2K OLED Display", "Lightweight 1.4kg"],
    tag: "Pro Performance"
  },
  {
    id: 4,
    name: "Apex Ultra 5G Smartphone (256GB)",
    category: "mobile",
    categoryLabel: "Mobile & Accessories",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description: "200MP Quad-Camera system with 100x Space Zoom, 120Hz Dynamic AMOLED display and lightning 65W fast charging.",
    specs: ["200MP Camera", "5000mAh Battery", "6.8\" AMOLED 120Hz", "IP68 Water Resistant"],
    tag: "New Arrival"
  },
  {
    id: 5,
    name: "AcousticPulse Portable Bluetooth Speaker",
    category: "audio",
    categoryLabel: "Audio & Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description: "360-degree deep bass spatial audio speaker, IP67 waterproof design with up to 24 hours playback capability.",
    specs: ["360° Spatial Sound", "24-Hr Battery", "IP67 Dust & Waterproof", "PartyBoost Link"],
    tag: "Portable"
  },
  {
    id: 6,
    name: "ChronoFit Ultra Smartwatch Series 9",
    category: "smart",
    categoryLabel: "Smart Devices",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Precision health sensor tracking ECG, SpO2, sleep cycle & sports modes with sapphire crystal always-on display.",
    specs: ["Sapphire Glass", "ECG & Heart Monitor", "GPS Track", "7-Day Battery Life"],
    tag: "Smart Fitness"
  }
];

export const TRUST_STATS = [
  {
    icon: "ShieldCheck",
    title: "Quality Products",
    description: "Carefully selected electronics from top trusted manufacturers."
  },
  {
    icon: "Headphones",
    title: "Trusted Service",
    description: "Dedicated customer support before & after your purchase."
  },
  {
    icon: "Cpu",
    title: "Modern Technology",
    description: "Latest genuine electronic solutions and smart gadgets."
  },
  {
    icon: "Zap",
    title: "Easy Ordering",
    description: "Quick & simple WhatsApp / Direct call communication."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "CheckCircle2",
    title: "Quality First",
    description: "Every product in our inventory is thoroughly inspected for performance, durability, and authenticity."
  },
  {
    icon: "Sparkles",
    title: "Modern Technology",
    description: "We bring the newest technological innovations directly to you, from 4K displays to smart wearables."
  },
  {
    icon: "PhoneCall",
    title: "Reliable Support",
    description: "Enjoy direct personal assistance. Our team is readily available via phone or WhatsApp to guide your purchase."
  },
  {
    icon: "UserCheck",
    title: "Customer Focused",
    description: "Transparent pricing, authentic products, and hassle-free buying experience tailored to customer satisfaction."
  }
];
