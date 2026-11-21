import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { CONTACT_EMAIL, INQUIRY_PATH, INSTAGRAM_URL, LINKEDIN_URL } from "@/components/site/constants";
import "./dym-next.css";

type NavigationItem={ title:string; path:string; children:{title:string;path:string}[] };
const serviceMenu=[
  {title:"All services",path:"/services"},
  {title:"Website & E-commerce Development",path:"/services/web-creation"},
  {title:"E-commerce & Marketplace Growth",path:"/services/ecommerce-marketplace-growth"},
  {title:"Performance Marketing",path:"/services/paid-marketing"},
  {title:"Search Engine Optimisation (SEO)",path:"/services/seo"},
  {title:"Generative Engine Optimisation (GEO)",path:"/services/GEO"},
  {title:"Analytics, Tracking & CRO",path:"/services/analytics-cro"},
];
export const dymServices=[
  ["01","Website & E-commerce Development","/services/web-creation","Design and improve websites, storefronts and customer journeys."],
  ["02","E-commerce & Marketplace Growth","/services/ecommerce-marketplace-growth","Strengthen catalogue quality, discoverability and marketplace performance."],
  ["03","Performance Marketing","/services/paid-marketing","Plan paid customer acquisition around meaningful business outcomes."],
  ["04","Search Engine Optimisation (SEO)","/services/seo","Improve relevant organic visibility on conventional search engines."],
  ["05","Generative Engine Optimisation (GEO)","/services/GEO","Build clearer, more credible signals for AI answer-engine discoverability."],
  ["06","Analytics, Tracking & CRO","/services/analytics-cro","Measure the customer journey and prioritise improvements."],
] as const;
const navigation:NavigationItem[]=[
  {title:"Home",path:"/",children:[{title:"Overview",path:"/"},{title:"Business challenges",path:"/#challenges"},{title:"Our approach",path:"/#method"},{title:"Selected work",path:"/#projects"},{title:"Interactive challenge explorer",path:"/diagnostic-demo"}]},
  {title:"Services",path:"/services",children:serviceMenu},
  {title:"Industries",path:"/industries",children:[{title:"All industries",path:"/industries"},{title:"E-commerce businesses",path:"/industries/ecommerce"},{title:"Manufacturers",path:"/industries/manufacturing-b2b"},{title:"Local businesses",path:"/industries/local-business"},{title:"Professional services",path:"/industries/professional-services"}]},
  {title:"Work",path:"/work",children:[{title:"Selected work",path:"/work"},{title:"Gems Gallery",path:"/work/gemstone-gallery"},{title:"SensyTalk",path:"/work/SensyTalk"}]},
  {title:"Insights",path:"/insights",children:[{title:"All insights",path:"/insights"},{title:"Digital marketing explained",path:"/insights/what-is-digital-marketing"},{title:"Search engine optimisation",path:"/insights/what-is-seo"}]},
  {title:"About",path:"/about",children:[{title:"About DigitalyMarket",path:"/about"},{title:"Meet the founder",path:"/founder"},{title:"Our methodology",path:"/#method"}]},
  {title:"Contact",path:INQUIRY_PATH,children:[{title:"Start a growth conversation",path:INQUIRY_PATH},{title:"Our approach",path:"/#method"},{title:"Frequently asked questions",path:"/#faq"}]},
];
export function DymHeader(){
  const [mobile,setMobile]=useState(false);
  const [expanded,setExpanded]=useState<string|null>(null);
  const header=useRef<HTMLElement|null>(null);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"){setExpanded(null);setMobile(false);}};
    const onOutside=(e:MouseEvent)=>{if(header.current&&!header.current.contains(e.target as Node))setExpanded(null)};
    document.addEventListener("keydown",onKey);document.addEventListener("mousedown",onOutside);
    return ()=>{document.removeEventListener("keydown",onKey);document.removeEventListener("mousedown",onOutside)};
  },[]);
  useEffect(()=>{const body=document.body; if(mobile){const previous=body.style.overflow;body.style.overflow="hidden";return()=>{body.style.overflow=previous;}} return undefined;},[mobile]);
  return <header className="dm-nav" ref={header}>
    <div className="dm-container dm-nav-row">
      <a href="/" className="dm-brand" aria-label="DigitalyMarket homepage"><BrandLogo placement="header"/></a>
      <button className="dm-menu-toggle" aria-expanded={mobile} aria-controls="dm-main-menu" aria-label={mobile?"Close navigation menu":"Open navigation menu"} onClick={()=>{setMobile(v=>!v);setExpanded(null)}} type="button">{mobile?"✕":"☰"}</button>
      <nav className={"dm-nav-links"+(mobile?" open":"")} id="dm-main-menu" aria-label="Main navigation">
        {navigation.map(item=><div key={item.title} className={"dm-nav-group"+(expanded===item.title?" expanded":"")} onMouseEnter={()=>{if(typeof window!=="undefined"&&window.innerWidth>1100)setExpanded(item.title)}} onMouseLeave={()=>{if(typeof window!=="undefined"&&window.innerWidth>1100)setExpanded(null)}}>
          <a href={item.path} className="dm-nav-parent" onClick={()=>setMobile(false)}>{item.title}</a>
          <button className="dm-nav-subtoggle" type="button" aria-label={"Toggle "+item.title+" dropdown"} aria-expanded={expanded===item.title} aria-controls={"dm-submenu-"+item.title.toLowerCase()} onClick={()=>setExpanded(v=>v===item.title?null:item.title)} onKeyDown={e=>{if(e.key==="ArrowDown"){e.preventDefault();setExpanded(item.title);const first=header.current?.querySelector<HTMLAnchorElement>("#dm-submenu-"+item.title.toLowerCase()+" a");requestAnimationFrame(()=>first?.focus())}}}>⌄</button>
          <div className="dm-nav-submenu" id={"dm-submenu-"+item.title.toLowerCase()} role="group" aria-label={item.title+" links"}>{item.children.map(child=><a href={child.path} key={child.path} onClick={()=>{setMobile(false);setExpanded(null)}}>{child.title}</a>)}</div>
        </div>)}
        <Button asChild className="dm-btn dm-btn-primary dm-nav-cta"><a href={INQUIRY_PATH} onClick={()=>{setMobile(false);setExpanded(null)}}>Get a Consultation <ArrowRight aria-hidden="true"/></a></Button>
      </nav>
    </div>
  </header>;
}
export function DymFooter(){
 return <footer className="dm-footer"><div className="dm-container"><div className="dm-footer-main">
  <div><a href="/" className="dm-footer-logo" aria-label="DigitalyMarket homepage"><BrandLogo/></a><p>DigitalyMarket is a business-first digital growth consultancy. Understand · Strategize · Grow.</p></div>
  <div><h4>Explore</h4><a href="/about">About</a><a href="/founder">Meet the founder</a><a href="/industries">Who we help</a><a href="/work">Selected work</a></div>
  <div><h4>Capabilities</h4>{dymServices.map(x=><a key={x[2]} href={x[2]}>{x[1]}</a>)}</div>
  <div><h4>Connect</h4><a href={INQUIRY_PATH}>Start a conversation</a><a href="/insights">Insights</a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a><a href="/privacy">Privacy policy</a></div>
 </div><div className="dm-footer-bottom"><span>© {new Date().getFullYear()} DigitalyMarket · Understand · Strategize · Grow.</span><span><a href="/sitemap.xml">Sitemap</a> · <a href="/privacy">Privacy</a></span></div></div></footer>;
}
export function DymCta(){
 return <div className="dm-container dm-cta-wrap"><section className="dm-cta-section"><div><span className="dm-eyebrow">START WITH CLARITY</span><h2>Before choosing a service, understand the challenge.</h2><p>Tell us what you're trying to achieve. We'll start with the business problem.</p></div><a href={INQUIRY_PATH} className="dm-btn dm-btn-white">Start a conversation ↗</a></section></div>;
}
export function DymShell({children,homepage=false}:{children:ReactNode;homepage?:boolean}){
 return <div className={"dm-site"+(homepage?" dm-home":"")}><a className="dm-skip-link" href="#main">Skip to content</a><DymHeader/><main id="main">{children}</main><DymFooter/><GlobalFloatingCta/></div>;
}
export function DymPageHero({eyebrow,title,description,crumb}:{eyebrow:string;title:string;description:string;crumb:string}){
 return <section className="dm-page-hero"><div className="dm-container"><div className="dm-breadcrumb"><a href="/">Home</a><span>/</span><span>{crumb}</span></div><span className="dm-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="dm-cta-row"><a href={INQUIRY_PATH} className="dm-btn dm-btn-primary">Start a conversation ↗</a><a href="/work" className="dm-btn dm-btn-outline">Explore project examples</a></div></div></section>;
}
