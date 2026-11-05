/** DigitalyMarket public navigation and inquiry-first contact architecture. */
export const INQUIRY_PATH="/start";
export const CONTACT_EMAIL="mohammad@digitalymarket.com";
export const INSTAGRAM_URL="https://www.instagram.com/digital.y.market/";
export const LINKEDIN_URL="https://www.linkedin.com/company/digitalymarket/";
export const NAV_LINKS=[
 {label:"Home",href:"/",children:[{label:"Homepage",href:"/"},{label:"Business Problems",href:"/#problems"},{label:"Our Approach",href:"/#approach"}]},
 {label:"Services",href:"/services",children:[
  {label:"All Services",href:"/services",description:"Find the right starting point"},
  {label:"Website Development",href:"/services/web-creation"},
  {label:"E-commerce & Marketplace Growth",href:"/services/ecommerce-marketplace-growth"},
  {label:"Performance Marketing",href:"/services/paid-marketing"},
  {label:"Search Engine Optimisation (SEO)",href:"/services/seo"},
  {label:"Generative Engine Optimisation (GEO)",href:"/services/GEO"},
  {label:"Analytics & Conversion Optimisation",href:"/services/analytics-cro"}
 ]},
 {label:"Industries",href:"/industries",children:[{label:"All Industries",href:"/industries"},{label:"E-commerce",href:"/industries/ecommerce"},{label:"Manufacturers & B2B",href:"/industries/manufacturing-b2b"},{label:"Local Businesses",href:"/industries/local-business"},{label:"Professional Services",href:"/industries/professional-services"}]},
 {label:"Work",href:"/work",children:[{label:"Selected Work",href:"/work"},{label:"Gems Gallery",href:"/work/gemstone-gallery"},{label:"SensyTalk",href:"/work/SensyTalk"}]},
 {label:"Insights",href:"/insights",children:[{label:"All Insights",href:"/insights"},{label:"Digital Marketing",href:"/insights/what-is-digital-marketing"},{label:"SEO Explained",href:"/insights/what-is-seo"}]},
 {label:"About",href:"/about",children:[{label:"About the Agency",href:"/about"},{label:"Meet the Founder",href:"/founder"},{label:"Our Methodology",href:"/#approach"}]},
 {label:"Contact",href:"/start",children:[{label:"Start a Growth Conversation",href:"/start"},{label:"How We Work",href:"/#approach"},{label:"Frequently Asked Questions",href:"/#faq"}]}
] as const;
