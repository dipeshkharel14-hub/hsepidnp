/* HSEPID.NP shared data — the ONE file you edit to manage announcements, products and offers.
   Loaded by updates.html. Nothing here is invented: empty lists simply show an empty state.
   Dates: use "YYYY-MM-DD". Prices: plain numbers in NPR (no commas, no "Rs").
   announcement.status : published | in-progress | upcoming | planned | completed | cancelled
   announcement.category: announcement | project | store | product | offer | maintenance | tech
   announcement.featured: true to show it in the featured slot (first match wins)
   product.availability : in-stock | out-of-stock | upcoming | awaiting-details
   product.category     : sunglasses | glasses | power-glasses | frames | reading | screen | accessories | other
   offer.productId      : id of a product, or omit for a store-wide offer
   offer.discountedPrice: only for product offers (needs productId); store-wide offers use "terms"
   Offer status (active / upcoming / expired) is calculated from startDate and endDate automatically.
   Example entries are kept in comments below — copy one, remove the comment markers, fill in real details.

   ANNOUNCEMENT EXAMPLE
   { id:"a1", title:"…", description:"…", category:"store", status:"published",
     publishedAt:"2026-10-28", image:"", link:"", featured:false },

   PRODUCT EXAMPLE
   { id:"p1", name:"…", category:"sunglasses", description:"…", image:"", originalPrice:2500,
     availability:"in-stock", specs:["UV400"], productUrl:"https://…" },

   OFFER EXAMPLE
   { id:"o1", title:"…", description:"…", productId:"p1", discountedPrice:2000,
     startDate:"2026-11-01", endDate:"2026-11-15", terms:"…", featured:false },
*/
window.HSEPID_DATA = {
  announcements: [  {
  id: "lovecraft-platform-launch-2026",
  title: "Introducing LoveCraft — A New Digital Surprise Platform",
  description: "LoveCraft is a project developed by Dipesh Kharel, designed to help people create personalized digital surprise pages for birthdays, anniversaries, apologies and special moments. Users can create interactive pages with messages, photos, videos, music and animations, then share them through a private link or QR code. The platform is currently under development, with its public website available at https://relationshipletter.vercel.app/.",
  category: "project",
  status: "launched",
  publishedAt: "2026-10-30",
  image: "LoveCraft Heartfelt Digital Logo.png",
  link: "https://relationshipletter.vercel.app/",
  featured: true
},
                 {
  id: "shreekunja-opticals-website-upgrade-2026",
  title: "Shreekunja Opticals — A Complete Digital Shopping Experience",
  description: "Shreekunja Opticals is a digital platform developed by Dipesh Kharel for a modern optical shopping experience in Kathmandu, Nepal. The website allows customers to explore eyewear products, discover optical services, read blog updates, locate the store, and place orders online. It includes product listings, order tracking, Cash on Delivery and eSewa payment options, multilingual support, multiple aesthetic themes, and an AI-powered chat experience. The platform is designed to make discovering and purchasing eyewear easier and more convenient. Visit the website at https://shreekunjaoptical.vercel.app/.",
  category: "store",
  status: "launched",
  publishedAt: "2026-11-01",
  image: "Shreekunja Opticals Online Eyewear Showcase.png",
  link: "https://shreekunjaoptical.vercel.app/",
  featured: true
}],
  products: [],
  offers: [],
  /* Planned developments: shown under "Upcoming developments". Never listed as available. */
  roadmap: []
};
