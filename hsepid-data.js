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
  announcements: [],
  products: [],
  offers: [],
  /* Planned developments: shown under "Upcoming developments". Never listed as available. */
  roadmap: []
};
