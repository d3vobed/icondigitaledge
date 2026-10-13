import {
  Bot,
  Clapperboard,
  Fingerprint,
  Globe,
  LayoutDashboard,
  Mail,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Newspaper,
  PenTool,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ================= Services ================= */

export type ServiceItem = {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  detail: string;
  deliverables: string[];
};

export type ServiceCategory = {
  slug: string;
  label: string;
  icon: LucideIcon;
  intro: string;
  items: ServiceItem[];
};

export const marketingServices: ServiceItem[] = [
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    blurb: "Full-funnel campaigns that attract, convert, and retain customers across every channel.",
    detail:
      "Our flagship offering pulls every digital channel into one coordinated growth engine. We start with deep audience and market research, build a channel strategy around your revenue goals, and execute with weekly optimization loops. Every campaign is measured against pipeline and revenue, not vanity metrics, so you always know what your budget is returning.",
    deliverables: ["Channel strategy & media plan", "Campaign setup & management", "Conversion tracking & dashboards", "Weekly optimization reports"],
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    icon: Share2,
    blurb: "Scroll-stopping content and community management that turns followers into buyers.",
    detail:
      "We build social programs that sound like your brand and grow like paid media. From content calendars and short-form video to community management and social listening, our team runs the entire channel so you stay top-of-feed and top-of-mind. Paid amplification is layered in to push proven organic winners even further.",
    deliverables: ["Content calendar & production", "Community management", "Paid social campaigns", "Monthly growth reporting"],
  },
  {
    slug: "seo",
    name: "Search Engine Optimisation",
    icon: Search,
    blurb: "Technical, content, and authority SEO that compounds into durable organic growth.",
    detail:
      "Search is the only channel that pays you back while you sleep. Our SEO practice covers the full stack: technical audits and fixes, keyword and topic research, on-page optimization, content briefs your writers will love, and digital PR that earns real authority links. You get transparent rank, traffic, and revenue reporting every month.",
    deliverables: ["Technical SEO audit & fixes", "Keyword & topic strategy", "On-page & content optimization", "Authority link building"],
  },
  {
    slug: "ai-marketing",
    name: "AI Marketing",
    icon: Bot,
    blurb: "AI-powered personalization, chatbots, and predictive targeting that outpace competitors.",
    detail:
      "Artificial intelligence is rewriting how marketing works, and we make sure you are ahead of the curve. We deploy AI for audience modeling, content production at scale, conversational chatbots that qualify leads around the clock, and predictive budget allocation across channels. The result is a marketing operation that learns faster than your competition can.",
    deliverables: ["AI opportunity assessment", "Chatbot & assistant deployment", "Predictive audience modeling", "AI content pipelines"],
  },
  {
    slug: "ppc",
    name: "Pay Per Click (PPC) Marketing",
    icon: MousePointerClick,
    blurb: "Precision-targeted ads on Google, Meta, and LinkedIn engineered for profitable ROAS.",
    detail:
      "Paid media is an investment, and we treat your budget like our own. Our PPC team builds tightly themed campaigns, writes ad copy that earns the click, and obsesses over landing page conversion rates. Expect rigorous A/B testing, negative keyword hygiene, and bid strategies tuned to your target cost per acquisition.",
    deliverables: ["Google & Meta Ads management", "Landing page CRO", "Shopping & remarketing feeds", "ROAS & CPA reporting"],
  },
  {
    slug: "public-relations",
    name: "Public Relations",
    icon: Newspaper,
    blurb: "Earned media placements and press relations that build serious brand authority.",
    detail:
      "A mention in the right publication can change the trajectory of a company. Our PR team pitches your story to journalists, secures features and interviews, and manages communications around launches and key moments. We build the kind of credibility that advertising money cannot buy.",
    deliverables: ["PR strategy & press kit", "Media outreach & pitching", "Press release writing", "Crisis communications support"],
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    icon: Users,
    blurb: "Vetted creator partnerships that put your product in front of trusting audiences.",
    detail:
      "We find, vet, and manage creators whose audiences actually match your buyers. From micro-influencers with unbeatable engagement to macro names with mass reach, we negotiate rates, brief the content, and track performance down to promo-code level so every partnership earns its keep.",
    deliverables: ["Creator sourcing & vetting", "Campaign briefs & management", "Usage rights & contracts", "Performance tracking"],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    icon: PenTool,
    blurb: "Articles, guides, and resources that rank, resonate, and generate pipeline.",
    detail:
      "Great content is the fuel for SEO, social, email, and sales enablement all at once. Our strategists map content to every stage of your funnel, then our writers and designers produce blog posts, lead magnets, case studies, and video scripts that educate your buyers and move deals forward.",
    deliverables: ["Content strategy & calendar", "SEO blog production", "Lead magnets & whitepapers", "Case studies & sales assets"],
  },
  {
    slug: "email-and-sms-marketing",
    name: "Email & SMS Marketing",
    icon: Mail,
    blurb: "Lifecycle flows and campaigns that recover carts and multiply customer value.",
    detail:
      "Your email and SMS lists are the cheapest revenue you will ever generate — if they are done right. We design welcome flows, abandoned cart sequences, win-back campaigns, and newsletters with copy and design that get opened and clicked. Every send is segmented, tested, and measured.",
    deliverables: ["Lifecycle flow design", "Campaign design & copy", "List growth & segmentation", "Deliverability management"],
  },
  {
    slug: "online-reputation",
    name: "Online Reputation",
    icon: MonitorSmartphone,
    blurb: "Review management and brand monitoring that keeps your name spotless.",
    detail:
      "Before anyone buys from you, they Google you. We help you take control of that first impression: generating a steady stream of authentic reviews, responding professionally to feedback, suppressing negative results with positive content, and alerting you the moment your brand is mentioned anywhere online.",
    deliverables: ["Review generation system", "Review response management", "Brand mention monitoring", "Negative content mitigation"],
  },
];

export const technologyServices: ServiceItem[] = [
  {
    slug: "website-design-development",
    name: "Website Design & Development",
    icon: Globe,
    blurb: "Fast, beautiful, conversion-focused websites built on modern stacks.",
    detail:
      "Your website is your hardest-working salesperson. We design and build blazing-fast, mobile-first websites that look world-class and convert visitors into enquiries. Whether you need a marketing site, a corporate platform, or a full CMS, we ship with performance, accessibility, and SEO baked in from day one.",
    deliverables: ["UX research & wireframes", "Custom UI design", "Next.js / CMS development", "Speed & SEO optimization"],
  },
  {
    slug: "web-mobile-app-development",
    name: "Web & Mobile App Development",
    icon: Smartphone,
    blurb: "Native-quality web and mobile apps, from MVP to enterprise scale.",
    detail:
      "From lean MVPs that validate an idea to enterprise platforms serving millions, our engineering team ships reliable, scalable products. We work in agile sprints with transparent weekly demos, and we stay with you after launch for iteration, monitoring, and growth feature development.",
    deliverables: ["Product discovery & scoping", "iOS & Android development", "Web app engineering", "QA, launch & maintenance"],
  },
  {
    slug: "ecommerce-solutions",
    name: "E-commerce Solutions",
    icon: ShoppingCart,
    blurb: "Online stores engineered to maximize average order value and repeat purchase.",
    detail:
      "We build storefronts on Shopify and headless stacks that load fast, inspire trust, and make buying effortless. Beyond launch, we optimize the entire purchase journey — product pages, checkout flow, upsells, and post-purchase flows — so your store compounds revenue instead of plateauing.",
    deliverables: ["Store design & build", "Payment & shipping setup", "CRO & A/B testing", "Abandoned cart automation"],
  },
];

export const designServices: ServiceItem[] = [
  {
    slug: "brand-identity",
    name: "Brand Design",
    icon: Fingerprint,
    blurb: "Identities that make your company unforgettable — logo to brand book.",
    detail:
      "A brand is more than a logo; it is the sum of every impression you make. Our brand designers dig into your positioning, audience, and ambition, then craft a complete identity system: logo, color, typography, voice, and guidelines that keep every future asset on-brand and instantly recognizable.",
    deliverables: ["Brand strategy workshop", "Logo & identity system", "Brand guidelines book", "Collateral templates"],
  },
  {
    slug: "graphics",
    name: "Graphic Design",
    icon: PenTool,
    blurb: "Campaign graphics, decks, and print that look unmistakably premium.",
    detail:
      "Every touchpoint matters — ads, decks, packaging, billboards, social posts. Our graphic designers produce scroll-stopping visuals that carry your identity consistently across print and digital, with fast turnarounds and a revision process that respects your timeline.",
    deliverables: ["Ad creative & social graphics", "Pitch & sales decks", "Print & packaging design", "Ongoing design retainer"],
  },
  {
    slug: "ui-ux",
    name: "UX/UI Design",
    icon: LayoutDashboard,
    blurb: "Research-driven product design that users navigate instinctively.",
    detail:
      "We design interfaces that people do not need a manual for. Grounded in user research and usability testing, our UX/UI process maps user journeys, prototypes rapidly, and validates with real users before a line of production code is written. The result: products that feel obvious and convert naturally.",
    deliverables: ["User research & journeys", "Wireframes & prototypes", "UI design systems", "Usability testing"],
  },
  {
    slug: "video-animation",
    name: "Video & Animation",
    icon: Clapperboard,
    blurb: "Brand films, explainer animations, and social video that demand attention.",
    detail:
      "Video is the highest-engagement format on every platform. Our motion team writes, storyboards, and produces brand videos, product explainers, motion graphics, and short-form social cuts that hold attention in the first three seconds and drive viewers to act.",
    deliverables: ["Script & storyboard", "2D/3D motion graphics", "Product explainers", "Short-form social cuts"],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "marketing",
    label: "Marketing",
    icon: Megaphone,
    intro:
      "We build growth engines that put your brand in front of the right audience, convert them into loyal customers, and keep the pipeline full — across search, social, email, and paid media.",
    items: marketingServices,
  },
  {
    slug: "technology",
    label: "Technology",
    icon: MonitorSmartphone,
    intro:
      "We design and engineer the digital products behind your brand — websites, apps, and stores that load fast, feel effortless, and turn visitors into revenue.",
    items: technologyServices,
  },
  {
    slug: "design",
    label: "Design",
    icon: PenTool,
    intro:
      "We craft the way your brand looks, speaks, and feels — identities, interfaces, and motion that make people remember you and choose you.",
    items: designServices,
  },
];

/* ================= Case studies ================= */

export type CaseStudy = {
  slug: string;
  client: string;
  categories: string[];
  country: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shopnaija-retail",
    client: "ShopNaija Retail",
    categories: ["Digital Marketing", "SEO", "Web Design and Development"],
    country: "Nigeria",
    challenge:
      "A fast-growing online retailer was invisible beyond page three of search results, and their dated storefront leaked trust at checkout.",
    approach:
      "We rebuilt the storefront on a modern stack, ran a full technical SEO cleanup, and layered a content and backlink strategy targeting commercial keywords.",
    results: [
      { value: "+30%", label: "online sales" },
      { value: "+20%", label: "customer satisfaction" },
      { value: "3.2x", label: "organic traffic" },
    ],
    body: "ShopNaija Retail needed a stronger digital presence in a competitive market. Through targeted SEO including content optimization, backlink building, and keyword strategy, we delivered a 30% increase in online sales and a 20% boost in customer satisfaction.",
  },
  {
    slug: "edulearn-academy",
    client: "EduLearn Academy",
    categories: ["Paid Media", "PPC", "Digital Marketing"],
    country: "Kenya",
    challenge:
      "An online academy needed to fill cohorts with qualified students at a sustainable acquisition cost before the next enrollment window.",
    approach:
      "We launched tightly themed paid search and social campaigns with dedicated landing pages, then iterated weekly on creative, audiences, and bids.",
    results: [
      { value: "3x", label: "more leads" },
      { value: "-45%", label: "cost per acquisition" },
      { value: "6.1x", label: "return on ad spend" },
    ],
    body: "EduLearn wanted to fill its cohorts with qualified students at a sustainable cost. A full-funnel mix of paid search, landing page optimization, and content marketing generated 3x more leads while cutting cost per acquisition by 45%.",
  },
  {
    slug: "sterlingtrust-insurance",
    client: "SterlingTrust Insurance",
    categories: ["Brand Design", "Web Development", "SEO"],
    country: "Nigeria",
    challenge:
      "An established insurer looked dated next to fintech challengers, and their digital journey confused prospects into dropping off.",
    approach:
      "We repositioned the brand with a refreshed identity system, rebuilt the website around a clear quote journey, and supported the launch with SEO and PR.",
    results: [
      { value: "+60%", label: "organic traffic" },
      { value: "+25%", label: "qualified quote requests" },
      { value: "-38%", label: "bounce rate" },
    ],
    body: "SterlingTrust came to us with an outdated brand and a site that leaked trust. We rebuilt the identity, redesigned the experience, and repositioned their content — organic traffic grew 60% and qualified quote requests rose by a quarter.",
  },
  {
    slug: "medicare-plus",
    client: "Medicare Plus Clinics",
    categories: ["Social Media Marketing", "Content Marketing", "Online Reputation"],
    country: "Ghana",
    challenge:
      "A private clinic group had excellent care but a quiet online voice, with a handful of old reviews shaping public perception.",
    approach:
      "We launched an educational content program, a consistent social presence, and a review generation system across all locations.",
    results: [
      { value: "4.8★", label: "average rating" },
      { value: "+220%", label: "review volume" },
      { value: "+85%", label: "booking enquiries" },
    ],
    body: "Medicare Plus had strong word-of-mouth but a weak digital reputation. A steady stream of authentic reviews, response management, and educational content lifted their average rating to 4.8 stars and pushed booking enquiries up 85% year over year.",
  },
  {
    slug: "paywave-fintech",
    client: "PayWave Fintech",
    categories: ["AI Marketing", "PPC", "Email & SMS Marketing"],
    country: "United Kingdom",
    challenge:
      "A payments startup needed rapid user acquisition across two markets with a hard cap on blended cost per signup.",
    approach:
      "We deployed predictive audience models, AI-assisted creative testing, and lifecycle email flows that reactivated stalled signups.",
    results: [
      { value: "52K+", label: "new signups" },
      { value: "-31%", label: "blended CPA" },
      { value: "2.4x", label: "activation rate" },
    ],
    body: "PayWave needed to scale signups without scaling costs. Predictive targeting and continuous creative testing cut blended acquisition cost by a third while AI-driven lifecycle flows doubled the activation rate of new users.",
  },
  {
    slug: "terrafield-properties",
    client: "Terrafield Properties",
    categories: ["Website Design & Development", "Digital Marketing", "Video & Animation"],
    country: "United States",
    challenge:
      "A real estate developer relied on walk-ins and referrals while competitors captured every online enquiry in their prime markets.",
    approach:
      "We launched a cinematic brand film, a lead-generating property portal, and geo-targeted campaigns around every active listing.",
    results: [
      { value: "+140%", label: "qualified enquiries" },
      { value: "18 days", label: "avg. time to close" },
      { value: "1.2M", label: "video views" },
    ],
    body: "Terrafield was losing online visibility to faster competitors. A cinematic brand film and a new property portal fed by geo-targeted campaigns increased qualified enquiries by 140% and shortened their average sales cycle to just over two weeks.",
  },
];

/* ================= Blog ================= */

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "upgrade-small-business-space",
    title: "5 Simple Yet Impactful Ways You Can Upgrade Your Small Business Space",
    date: "July 21, 2026",
    category: "Business Growth",
    excerpt:
      "Your workspace shapes how customers and employees feel about your brand. These five affordable upgrades deliver outsized returns.",
    image: "/images/blog-1.jpg",
    readTime: "6 min read",
    body: [
      "First impressions form in seconds, and for most small businesses the premises are the first thing a customer experiences. A fresh coat of paint in your brand palette, better lighting, and decluttered sightlines cost little but change how long visitors stay and how much they trust you.",
      "Second, invest in signage — both physical and digital. A clean, well-lit sign and a simple screen showing offers or testimonials make the space feel alive and guide buying decisions without a salesperson saying a word.",
      "Third, create a dedicated content corner. A small area with good lighting for product photos and short videos turns your space into a content studio, feeding your social channels week after week.",
      "Fourth, optimize for comfort and flow. Rearrange furniture so customers move naturally toward your best products, add a waiting nook with water or Wi-Fi, and keep accessibility in mind — it widens your customer base immediately.",
      "Finally, brand the details: receipts, packaging, uniforms, even the playlist. Consistency across small touches is what separates a business people remember from one they forget.",
    ],
  },
  {
    slug: "online-visibility-competitive-markets",
    title: "Online Visibility Tactics for Competitive Markets",
    date: "June 27, 2026",
    category: "Industries",
    excerpt:
      "When every competitor bids on the same keywords, visibility requires a smarter play. Here is the framework we use to break through.",
    image: "/images/blog-2.jpg",
    readTime: "8 min read",
    body: [
      "In crowded markets the temptation is to outspend rivals on ads. That rarely works. The sustainable path is to own demand that competitors ignore: long-tail searches, comparison queries, and local intent terms with real buying signals behind them.",
      "Start with a keyword gap analysis. Map every term your competitors rank for, then identify the questions their content answers poorly. Those gaps become your content roadmap for the next two quarters.",
      "Layer in authority building. Digital PR, expert commentary, and original data studies earn the kind of links that move competitive rankings. One strong data story often outperforms months of directory submissions.",
      "Finally, convert better instead of just ranking more. Small lifts in landing page conversion compound with traffic gains, and better conversion data actually improves your ad rankings by raising quality scores.",
    ],
  },
  {
    slug: "seo-services-cost-guide",
    title: "How Much Do SEO Services Cost? (+ Free Cost Calculator)",
    date: "June 25, 2026",
    category: "SEO",
    excerpt:
      "SEO pricing is opaque on purpose. We break down real ranges by project type, what drives them, and how to budget with confidence.",
    image: "/images/blog-3.jpg",
    readTime: "10 min read",
    body: [
      "Ask five agencies what SEO costs and you will get five very different numbers. The honest answer is that pricing follows scope: a local service business needs a different engagement than a national e-commerce brand.",
      "For most growing businesses, a realistic monthly retainer covers technical maintenance, content production, and authority building. Anything dramatically cheaper usually means automated shortcuts that eventually cost more to undo.",
      "Project-based SEO suits site migrations, audits, and one-off recoveries. Ongoing retainers suit competitive growth. The right model depends on how fast you need results and how dynamic your market is.",
      "Whichever route you take, insist on transparency: what hours buy, what deliverables land each month, and how success is measured in traffic and revenue — not just rankings.",
    ],
  },
  {
    slug: "impact-of-ai-on-telecommunications",
    title: "The Impact of AI on the Telecommunications Industry",
    date: "June 20, 2026",
    category: "Digital Marketing, Technology",
    excerpt:
      "Telcos are sitting on oceans of data. AI is finally turning it into smarter networks, sharper marketing, and stickier customers.",
    image: "/images/blog-1.jpg",
    readTime: "7 min read",
    body: [
      "Telecommunications is an industry of scale: millions of customers, petabytes of usage data, networks that never sleep. AI thrives exactly in these conditions, and telcos are now deploying it across both network operations and customer experience.",
      "On the marketing side, predictive churn models flag dissatisfied subscribers weeks before they defect, letting retention teams act with targeted offers instead of blanket discounts.",
      "Conversational assistants now resolve the majority of routine enquiries — data top-ups, bill explanations, plan changes — freeing human agents for complex, high-value conversations.",
      "The lesson for every industry: the winners are not the companies with the most data, but the ones that wire AI into daily decisions fastest.",
    ],
  },
  {
    slug: "social-media-strategy-that-sells",
    title: "Building a Social Media Strategy That Actually Sells",
    date: "June 12, 2026",
    category: "Social Media",
    excerpt:
      "Likes do not pay salaries. Here is how we structure social programs around pipeline instead of vanity metrics.",
    image: "/images/blog-2.jpg",
    readTime: "6 min read",
    body: [
      "Most social strategies start with content ideas and end with impressions. Ours start with a revenue target and work backwards to the posts, offers, and community touchpoints that produce it.",
      "The core shift is treating social as a funnel, not a billboard. Awareness content earns attention; proof content — testimonials, demos, behind-the-scenes — builds belief; and offer content converts the warm audience that engages most.",
      "Measure relentlessly. Track saves and shares over likes, click-throughs over follower count, and attribute revenue with UTM discipline so the channel earns its budget with numbers, not vibes.",
    ],
  },
  {
    slug: "landing-pages-that-convert",
    title: "Anatomy of a Landing Page That Converts",
    date: "June 5, 2026",
    category: "CRO",
    excerpt:
      "A high-converting landing page is engineered, not decorated. We break down the seven elements every page needs.",
    image: "/images/blog-3.jpg",
    readTime: "5 min read",
    body: [
      "Traffic is expensive; conversion is free by comparison. Yet most businesses send paid clicks to generic homepages and wonder why acquisition costs keep climbing.",
      "A converting landing page opens with a headline that mirrors the ad's promise, proves it with social proof above the fold, and makes one — exactly one — call to action unmissable.",
      "Speed is a feature: every extra second of load time measurably bleeds conversions. Strip heavy scripts, compress images, and design mobile-first, because most of your paid traffic lives there.",
      "Then iterate. Heatmaps, session recordings, and A/B tests turn a decent page into a compounding asset that keeps lowering your acquisition costs quarter after quarter.",
    ],
  },
];

/* ================= Testimonials ================= */

export const testimonials = [
  {
    quote:
      "Working with this team changed the trajectory of our business. Within six months our organic traffic tripled and online sales followed. They communicate clearly, report honestly, and genuinely care about our results.",
    name: "Adaeze Okafor",
    role: "Founder",
    company: "ShopNaija Retail",
    rating: 5,
  },
  {
    quote:
      "They rebuilt our website and our confidence. Enquiries that used to trickle now arrive daily, and the new brand finally matches the quality of our care. Best marketing decision we have made.",
    name: "Dr. Kwame Mensah",
    role: "Medical Director",
    company: "Medicare Plus Clinics",
    rating: 5,
  },
  {
    quote:
      "What impressed us most was the strategy. Every campaign ties to a number we agreed on, and their weekly reports are the clearest we have seen from any agency. Our cost per signup dropped by a third.",
    name: "James Whitfield",
    role: "Head of Growth",
    company: "PayWave Fintech",
    rating: 5,
  },
  {
    quote:
      "The team feels like an extension of ours. They took time to understand our industry, challenged our assumptions, and delivered a rebrand our customers immediately noticed and loved.",
    name: "Ngozi Eze",
    role: "Marketing Manager",
    company: "SterlingTrust Insurance",
    rating: 5,
  },
  {
    quote:
      "From the first workshop, it was clear we were working with professionals. Our enrolment campaigns now fill every cohort ahead of deadline, at nearly half the old acquisition cost.",
    name: "Brian Otieno",
    role: "Director of Admissions",
    company: "EduLearn Academy",
    rating: 5,
  },
  {
    quote:
      "Our new property portal and brand film transformed how buyers see us. Qualified enquiries more than doubled, and the sales team finally spends time with serious clients only.",
    name: "Melissa Grant",
    role: "Sales Director",
    company: "Terrafield Properties",
    rating: 5,
  },
];

/* ================= Locations ================= */

export const locations = [
  {
    slug: "usa",
    country: "USA",
    name: "United States of America",
    city: "Wilmington, Delaware",
    image: "/images/loc-usa.jpg",
    phone: "+1 (302) 555-0147",
    email: "us@icondigitaledge.com",
    blurb:
      "From coast to coast, our US team helps startups and enterprises scale with data-driven marketing and world-class digital products.",
  },
  {
    slug: "uk",
    country: "UK",
    name: "United Kingdom",
    city: "London, England",
    image: "/images/loc-uk.jpg",
    phone: "+44 20 7946 0958",
    email: "uk@icondigitaledge.com",
    blurb:
      "Our London studio serves brands across the UK and Europe with performance marketing, brand design, and engineering excellence.",
  },
  {
    slug: "canada",
    country: "Canada",
    name: "Canada",
    city: "Toronto, Ontario",
    image: "/images/loc-canada.jpg",
    phone: "+1 (416) 555-0192",
    email: "ca@icondigitaledge.com",
    blurb:
      "From Toronto to Vancouver, we help Canadian businesses grow sustainably across search, social, and every digital touchpoint.",
  },
  {
    slug: "nigeria",
    country: "Nigeria",
    name: "Nigeria",
    city: "Lagos, Nigeria",
    image: "/images/loc-nigeria.jpg",
    phone: "+234 915 146 0000",
    email: "ng@icondigitaledge.com",
    blurb:
      "Our headquarters in Lagos drives some of Africa's boldest growth stories, serving clients across every major industry.",
  },
  {
    slug: "ghana",
    country: "Ghana",
    name: "Ghana",
    city: "Accra, Ghana",
    image: "/images/loc-ghana.jpg",
    phone: "+233 30 274 1234",
    email: "gh@icondigitaledge.com",
    blurb:
      "Our Accra team partners with Ghanaian brands and NGOs to build digital presence that converts attention into lasting impact.",
  },
  {
    slug: "kenya",
    country: "Kenya",
    name: "Kenya",
    city: "Nairobi, Kenya",
    image: "/images/loc-kenya.jpg",
    phone: "+254 20 790 4455",
    email: "ke@icondigitaledge.com",
    blurb:
      "From Nairobi's Silicon Savannah, we power East African businesses with marketing, technology, and design that performs.",
  },
];

/* ================= Industries ================= */

export const industries = [
  {
    slug: "technology",
    name: "Technology",
    blurb:
      "Developer-minded marketing for SaaS, platforms, and startups — positioning, product-led content, and funnels that turn trials into revenue.",
    points: ["Product-led content & SEO", "Trial & demo funnel optimization", "Developer & CTO audience targeting"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb:
      "We put your listings in front of serious buyers with cinematic content, geo-targeted campaigns, and portals that convert browsers into viewings.",
    points: ["Listing pages built to convert", "Geo-targeted paid campaigns", "Cinematic property video"],
  },
  {
    slug: "finance",
    name: "Finance",
    blurb:
      "Trust-first marketing for banks, insurers, and fintechs — compliant campaigns that still move the needle on acquisitions and AUM.",
    points: ["Compliance-aware creative", "Lead quality engineering", "Trust & authority building"],
  },
  {
    slug: "health",
    name: "Health",
    blurb:
      "Ethical, patient-focused marketing for clinics and health brands that grows bookings while protecting your reputation and standards.",
    points: ["Reputation & review systems", "Patient education content", "Local search dominance"],
  },
  {
    slug: "nonprofits",
    name: "Nonprofits",
    blurb:
      "Mission-driven campaigns that turn empathy into donations, volunteers, and lasting awareness — with budgets respected at every step.",
    points: ["Donation funnel optimization", "Story-driven campaign content", "Grant-friendly reporting"],
  },
  {
    slug: "education",
    name: "Education",
    blurb:
      "Enrollment engines for schools and academies — from parent-focused websites to campaigns that fill cohorts ahead of every intake.",
    points: ["Enrollment campaign systems", "Parent journey optimization", "Program page SEO"],
  },
  {
    slug: "transportation",
    name: "Transportation",
    blurb:
      "We keep logistics and mobility brands moving with local search, fleet-grade web platforms, and B2B lead generation that delivers.",
    points: ["Local & route-based SEO", "B2B lead generation", "Fleet & booking platforms"],
  },
  {
    slug: "cryptocurrency",
    name: "Cryptocurrency",
    blurb:
      "Cutting through the noise with credible content, community growth, and compliant campaigns that build real adoption.",
    points: ["Community growth programs", "Educational content engines", "Compliant paid media"],
  },
  {
    slug: "web-3",
    name: "Web 3.0",
    blurb:
      "Positioning and go-to-market for protocols, wallets, and dApps — token launches, community design, and narratives that stick.",
    points: ["Token & launch marketing", "Discord & community systems", "Protocol narrative design"],
  },
];

/* ================= Careers ================= */

export const openRoles = [
  {
    title: "Senior SEO Specialist",
    team: "Marketing",
    location: "Lagos / Remote",
    type: "Full-time",
  },
  {
    title: "Frontend Engineer (Next.js)",
    team: "Technology",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Brand Designer",
    team: "Design",
    location: "Lagos",
    type: "Full-time",
  },
  {
    title: "PPC Manager",
    team: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Content Strategist",
    team: "Marketing",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "Motion Graphics Designer",
    team: "Design",
    location: "Lagos / Remote",
    type: "Full-time",
  },
];
