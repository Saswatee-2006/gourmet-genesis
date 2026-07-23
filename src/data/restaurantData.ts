import heroInterior from "@/assets/hero-interior.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";
import chef from "@/assets/chef.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

// Source of truth extracted from the Google Maps place page.
// Fields marked EDITABLE are realistic placeholders — swap them for real data.
export const restaurantData = {
  name: "Roxie",
  tagline: "Fine Dining · Reimagined",
  description:
    "An intimate fine dining destination in Bengaluru pairing global culinary craft with locally sourced ingredients and elegant hospitality.",
  cuisine: "Fine Dining · Global · Continental",
  priceRange: "₹₹₹",
  rating: 4.3,
  totalReviews: 1280, // EDITABLE
  address:
    "26, Haralur Main Rd, near HP Petrol Station, Amblipura, PWD Quarters, Ambalipura, HSR Layout, Bengaluru, Karnataka 560102, India",
  shortAddress: "HSR Layout, Bengaluru",
  phone: "+91 80 4736 0000",
  phoneRaw: "+918047360000",
  whatsapp: "918047360000", // EDITABLE
  email: "reserve@roxie.example", // EDITABLE
  website: "https://roxie.example", // EDITABLE
  menuLink: "#menu",
  reserveUrl:
    "https://www.google.com/maps/reserve/v/dine/c/QV4tRGph-PQ?source=pa&opi=79508299",
  googleMapsUrl:
    "https://www.google.com/maps/place/Roxie/@12.9152303,77.6658631,17z",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Roxie+HSR+Layout+Bengaluru&destination_place_id=ChIJL4iI0HwTrjsRvs6L6BiUBcs",
  lat: 12.9152303,
  lng: 77.6658631,
  plusCode: "WM88+38 Bengaluru",
  hours: [
    { day: "Monday", time: "12:00 PM – 1:00 AM" },
    { day: "Tuesday", time: "12:00 PM – 1:00 AM" },
    { day: "Wednesday", time: "12:00 PM – 1:00 AM" },
    { day: "Thursday", time: "12:00 PM – 1:00 AM" },
    { day: "Friday", time: "12:00 PM – 1:00 AM" },
    { day: "Saturday", time: "12:00 PM – 1:00 AM" },
    { day: "Sunday", time: "12:00 PM – 1:00 AM" },
  ],
  attributes: ["LGBTQ+ friendly", "Women-owned", "Reservations", "Full bar", "Vegetarian options"],
  nearbyLandmarks: [
    "HP Petrol Station, Haralur Main Road",
    "Ambalipura Lake",
    "HSR Layout Sector 1",
    "Iblur Junction",
    "Sarjapur Outer Ring Road",
  ],
  popularDishes: ["Seared Scallops", "Truffle Tagliolini", "Wagyu Tenderloin", "Molten Chocolate Cremeux"],
  hero: heroInterior,
  chefImage: chef,
  chef: {
    name: "Chef Aditya Verma", // EDITABLE
    title: "Executive Chef",
    bio: "Trained across Paris, Copenhagen and Tokyo, Chef Aditya translates seasonal Indian produce into a modern fine-dining language — precise, generous and deeply personal.",
  },
  story:
    "Roxie was born from a simple obsession — the belief that a great meal is theatre. Every plate, every pour and every pause is choreographed to feel effortless. Set within a candle-lit HSR Layout townhouse, our kitchen champions Karnataka's farms, coastal catches and heritage grains, layered with technique from the world's most iconic kitchens.",
  mission:
    "To craft a dining experience that lingers long after the last course — memorable, considered, and quietly extraordinary.",
  timeline: [
    { year: "2019", title: "The Beginning", text: "Roxie opens its doors as an intimate 32-seat table in HSR." },
    { year: "2021", title: "The Ovation", text: "Featured in India's Top 30 New Restaurants by Condé Nast Traveller." },
    { year: "2023", title: "The Expansion", text: "A private chef's counter and cellar bar are added." },
    { year: "2025", title: "Today", text: "A 4.3★ rated fine-dining institution welcoming thousands each month." },
  ],
  featuredDishes: [
    { id: 1, name: "Seared Hokkaido Scallops", desc: "Cauliflower velouté, brown butter, oscietra caviar.", price: "₹1,850", image: dish1, veg: false, tag: "Signature" },
    { id: 2, name: "Wagyu Tenderloin", desc: "48-hour braise, bone marrow jus, charred alliums.", price: "₹3,200", image: dish2, veg: false, tag: "Chef's Special" },
    { id: 3, name: "Molten Chocolate Cremeux", desc: "Valrhona 70%, sour cherry, edible gold leaf.", price: "₹950", image: dish3, veg: true, tag: "Popular" },
  ],
  chefsPicks: [
    { id: 1, name: "Truffle Tagliolini", desc: "36-month parmigiano, black truffle shavings.", price: "₹1,650", image: dish4, veg: true },
    { id: 2, name: "Lamb Rack", desc: "Herb crust, jus reduction, pomme purée.", price: "₹2,650", image: dish5, veg: false },
    { id: 3, name: "Roasted Sea Bass", desc: "Fennel confit, saffron beurre blanc.", price: "₹2,100", image: dish6, veg: false },
  ],
  cocktails: [
    { name: "The Roxie Old Fashioned", desc: "Bourbon, house bitters, smoked orange peel.", price: "₹850", image: dish3, tag: "Signature" },
    { name: "Negroni Reserve", desc: "Barrel-aged 30 days. Campari, gin, sweet vermouth.", price: "₹920", image: dish4 },
    { name: "Smoked Rosemary Sour", desc: "Mezcal, rosemary smoke, egg white foam.", price: "₹780", image: dish6 },
  ],
  events: [
    { id: 1, title: "Live Jazz Fridays", date: "Every Friday", time: "9 PM – 12 AM", image: interior1, tag: "Live Music", desc: "An intimate jazz trio pairing bourbon, brass and the low glow of candlelight." },
    { id: 2, title: "Weekend DJ Nights", date: "Saturdays", time: "10 PM – 1 AM", image: interior2, tag: "DJ Night", desc: "Deep house and lounge sets curated for late-night dining and slow dancing." },
    { id: 3, title: "Chef's Table Sunday", date: "Sundays", time: "7 PM – 10 PM", image: dish2, tag: "Tasting Menu", desc: "A ten-course tasting menu at the kitchen counter with the executive chef." },
    { id: 4, title: "Cellar Release Dinner", date: "First Thursday", time: "8 PM Onwards", image: dish5, tag: "Wine Pairing", desc: "New vintages from our cellar, paired course-by-course by the sommelier." },
  ],
  instagram: {
    handle: "@roxie.bengaluru",
    url: "https://www.instagram.com/roxie.bengaluru/",
    bio: "Fine dining · Global plates · Cocktail bar · HSR Layout, Bengaluru. Reserve below.",
    followers: "18.4K", // EDITABLE
    posts: [dish1, interior1, dish2, dish3, interior2, dish4, dish5, interior3, dish6],
    highlights: [
      { label: "Signatures", image: dish1 },
      { label: "Cocktails", image: dish3 },
      { label: "Interiors", image: interior1 },
      { label: "Events", image: interior2 },
      { label: "Chef", image: chef },
    ],
  },
  gallery: [dish1, interior1, dish2, interior2, dish5, interior3, dish3, dish6, dish4],
  interiorGallery: [interior1, interior2, interior3],
  menu: [
    {
      category: "Starters",
      items: [
        { name: "Burrata & Heirloom Tomato", desc: "Aged balsamic, basil oil, sourdough crumble.", price: "₹850", veg: true, popular: true },
        { name: "Seared Hokkaido Scallops", desc: "Cauliflower velouté, oscietra caviar.", price: "₹1,850", veg: false, popular: true, tag: "Signature" },
        { name: "Beef Tartare", desc: "Smoked yolk, capers, brioche.", price: "₹1,250", veg: false },
        { name: "Charred Padron Peppers", desc: "Manchego, smoked salt.", price: "₹620", veg: true },
      ],
    },
    {
      category: "Small Plates",
      items: [
        { name: "Truffle Tagliolini", desc: "36-month parmigiano, black truffle shavings.", price: "₹1,650", veg: true, popular: true },
        { name: "Oysters on Ice", desc: "Half dozen, mignonette, lemon.", price: "₹1,450", veg: false },
        { name: "Wild Mushroom Risotto", desc: "Porcini, thyme, aged pecorino.", price: "₹1,150", veg: true },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Wagyu Tenderloin", desc: "Bone marrow jus, charred alliums.", price: "₹3,200", veg: false, popular: true, tag: "Chef's Special" },
        { name: "Roasted Sea Bass", desc: "Fennel confit, saffron beurre blanc.", price: "₹2,100", veg: false },
        { name: "Cauliflower Steak", desc: "Almond romesco, salsa verde.", price: "₹950", veg: true, tag: "Signature" },
        { name: "Lamb Rack", desc: "Herb crust, jus reduction, pomme purée.", price: "₹2,650", veg: false },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Molten Chocolate Cremeux", desc: "Valrhona 70%, sour cherry.", price: "₹950", veg: true, popular: true },
        { name: "Vanilla Bean Panna Cotta", desc: "Alphonso mango, tuile.", price: "₹780", veg: true },
        { name: "Cheese Trolley", desc: "Selection of three, fig chutney.", price: "₹1,100", veg: true },
      ],
    },
    {
      category: "Bar & Cellar",
      items: [
        { name: "The Roxie Old Fashioned", desc: "Bourbon, house bitters, smoked orange.", price: "₹850", veg: true, popular: true, tag: "Signature" },
        { name: "Negroni Reserve", desc: "Barrel-aged, 30 days.", price: "₹920", veg: true },
        { name: "Sommelier's Pour", desc: "125ml pour by the glass, ask for tonight's selection.", price: "₹680", veg: true },
      ],
    },
  ],
  reviews: [
    { name: "Priya Menon", rating: 5, text: "Every course felt like a small piece of theatre. The scallops are the best in the city.", date: "2 weeks ago" },
    { name: "Rahul Iyer", rating: 5, text: "Impeccable service and a wine list that keeps giving. The tasting menu is a must.", date: "1 month ago" },
    { name: "Ananya Sharma", rating: 4, text: "Beautiful interiors, thoughtful plating, and warm hospitality. Reservations recommended.", date: "1 month ago" },
    { name: "Karthik Rao", rating: 5, text: "Wagyu was cooked to absolute perfection. A rare Bangalore gem.", date: "2 months ago" },
    { name: "Meera Krishnan", rating: 4, text: "The Old Fashioned is unreal. Ambience is intimate and truly special.", date: "3 months ago" },
    { name: "Vikram Shetty", rating: 5, text: "Michelin-level plating in Bengaluru. Every visit is memorable.", date: "3 months ago" },
  ],
  ratingBreakdown: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
  faqs: [
    { q: "Do you take reservations?", a: "Yes — reservations are recommended, especially on weekends. Book via the reserve button or call us directly." },
    { q: "Is there a dress code?", a: "Smart casual. We ask guests to avoid shorts and slippers during dinner service." },
    { q: "Do you offer vegetarian options?", a: "Absolutely. Every course on our menu has a considered vegetarian counterpart." },
    { q: "Is there parking?", a: "Valet parking is available at the entrance from 6 PM onwards." },
    { q: "Can you accommodate private events?", a: "Yes, our private dining room seats up to 14. Reach out via the contact form." },
  ],
};

export type Restaurant = typeof restaurantData;