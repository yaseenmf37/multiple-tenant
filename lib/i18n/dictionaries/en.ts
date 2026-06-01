// English dictionary — the single source of truth for the Dictionary shape.
// The Armenian dictionary (hy.ts) is typed as `typeof en`, so every key here
// must be mirrored there.

export const en = {
  common: {
    photo: "photo",
  },

  brand: {
    name: "Suvio",
    tagline: "hotel platform",
  },

  nav: {
    features: "Features",
    solutions: "Solutions",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    login: "Log in",
    startFree: "Start Free",
    homeAria: "Suvio home",
    primaryAria: "Primary",
    openMenu: "Open menu",
    language: "Language",
  },

  cta: {
    startFree: "Start Free",
    requestDemo: "Request a Demo",
    talkToSales: "Talk to sales",
    getInTouch: "Get in touch",
    seePricing: "See pricing",
    seeSolutions: "See solutions",
  },

  footer: {
    tagline:
      "One platform that gives every hotel its own branded booking site, a powerful admin dashboard, and a shared, reliable infrastructure.",
    productTitle: "Product",
    companyTitle: "Company",
    newsletterTitle: "Newsletter",
    newsletterDesc:
      "One email a month — direct-booking tactics and hotel management know-how.",
    emailPlaceholder: "you@hotel.com",
    emailAria: "Email address",
    join: "Join",
    subscribed: "Thanks — you are subscribed.",
    copyright: "Suvio, Inc. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    status: "Status",
    links: {
      features: "Features",
      solutions: "Solutions",
      pricing: "Pricing",
      requestDemo: "Request a Demo",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      careers: "Careers",
    },
  },

  home: {
    meta: {
      title: "Suvio — One platform, every hotel its own booking site",
      description:
        "Suvio is a multi-tenant hotel platform. Give every property its own branded booking website, manage them all from one dashboard, and grow commission-free direct bookings.",
    },
    hero: {
      eyebrow: "Multi-tenant hotel platform",
      titleLine1: "One platform.",
      titleLine2: "Every hotel its own site.",
      lead: "Give each property a beautiful, branded booking website — run them all from a single dashboard on one shared, reliable infrastructure. Grow direct bookings, commission-free.",
      bullets: ["14-day free trial", "No credit card", "Live in a day"],
    },
    mock: {
      url: "thecedarhouse.suvio.site",
      hotel: "The Cedar House",
      navRooms: "Rooms",
      navAmenities: "Amenities",
      navContact: "Contact",
      lobbyPhoto: "// hotel lobby photo",
      checkIn: "Check-in",
      checkOut: "Check-out",
      checkInDate: "Jun 12",
      checkOutDate: "Jun 15",
      search: "Search",
      deluxePhoto: "// deluxe room",
      deluxeName: "Deluxe King",
      deluxePrice: "$180 / night",
      suitePhoto: "// suite",
      suiteName: "Garden Suite",
      suitePrice: "$290 / night",
      newBooking: "New booking",
      newBookingDetail: "3 nights · confirmed",
      directBookings: "Direct bookings this month",
      growth: "▲ growth",
    },
    trust: {
      label: "Trusted by independent hotels & growing groups",
      logo: "// logo",
      stats: [
        { num: "240+", label: "Active properties" },
        { num: "1.8M", label: "Room-nights booked" },
        { num: "99.9%", label: "Platform uptime" },
        { num: "+38%", label: "Avg. direct-booking lift" },
      ],
    },
    features: {
      eyebrow: "Why Suvio",
      title: "Everything you need to run a modern hotel",
      lead: "From a branded booking site to financial reporting — one connected platform that replaces a stack of disconnected tools.",
      items: [
        {
          title: "Online reservation engine",
          body: "Real-time availability, dynamic rates, and secure payment — direct bookings with zero double-booking.",
        },
        {
          title: "Brandable website builder",
          body: "Your domain, your colors, your logo — a luxury booking site that goes live without writing a line of code.",
        },
        {
          title: "Multiple properties, one account",
          body: "Run every hotel, lodge, and resort you operate from a single login with shared team access.",
        },
        {
          title: "Analytics & reporting",
          body: "Track occupancy, revenue, and channel performance in real time — and act on it with confidence.",
        },
      ],
      exploreAll: "Explore all features",
    },
    how: {
      eyebrow: "In three steps",
      title: "From sign-up to your first booking",
      steps: [
        {
          n: "01",
          title: "Create your account",
          body: "Sign up in minutes, add your property and rooms, and pick a template that fits your brand.",
        },
        {
          n: "02",
          title: "Brand your site",
          body: "Customize your domain, colors, and logo, then connect a payment gateway. Your booking site is ready.",
        },
        {
          n: "03",
          title: "Take direct bookings",
          body: "Share your link and manage every reservation from the dashboard — no middleman commissions.",
        },
      ],
    },
    gallery: {
      eyebrow: "Sample sites",
      title: "A website worthy of every property",
      lead: "Ready-made luxury templates that adapt to your brand — from an urban boutique to a beachfront resort.",
      items: [
        { photo: "// urban boutique hotel", name: "The Cedar House", tag: "Boutique" },
        { photo: "// beachfront resort", name: "Azure Bay Resort", tag: "Resort" },
        { photo: "// eco-lodge", name: "Willow Creek Lodge", tag: "Eco-lodge" },
      ],
    },
    dash: {
      eyebrow: "Admin dashboard",
      title: "Every property, at a glance",
      lead: "See occupancy, daily revenue, upcoming reservations, and per-property performance in one unified panel — and manage it all.",
      bullets: [
        "Dynamic pricing by demand and season",
        "Financial reports and automated payouts",
        "Team access with roles and permissions",
      ],
      explore: "Explore the dashboard",
      panelTitle: "Suvio Dashboard",
      activeProps: "3 active properties",
      occupancy: "Occupancy",
      todayRevenue: "Today's revenue",
      upcoming: "Upcoming",
      revenue7d: "Revenue · last 7 days",
    },
    testimonials: {
      eyebrow: "Customer stories",
      title: "Trusted by hosts who got results",
      items: [
        {
          quote:
            "Since launching our own booking site, direct reservations jumped from 20% to nearly 60%. We're no longer hostage to OTA commissions.",
          name: "Nadia Rahimi",
          role: "GM, The Cedar House",
        },
        {
          quote:
            "I manage five lodges from one account. The unified financial reports gave my team hours back every week.",
          name: "Daniel Okoro",
          role: "Founder, Willow Creek Group",
        },
        {
          quote:
            "Setup took a single day and the support is outstanding. The template captures the feel of our resort perfectly.",
          name: "Sofia Marin",
          role: "Director, Azure Bay Resort",
        },
      ],
    },
    pricing: {
      eyebrow: "Transparent pricing",
      title: "A plan for every size",
      lead: "No hidden fees. Upgrade or cancel whenever you like.",
      compareAll: "Compare all plans",
      basic: {
        name: "Basic",
        desc: "For small properties",
        price: "$49",
        per: " / month",
        features: ["1 property · up to 15 rooms", "Branded booking site", "Core reservation engine"],
        cta: "Choose Basic",
      },
      pro: {
        name: "Pro",
        desc: "For growing hotels",
        price: "$129",
        per: " / month",
        badge: "Most popular",
        features: ["Up to 5 properties · unlimited rooms", "Dynamic pricing & channels", "Advanced analytics"],
        cta: "Choose Pro",
      },
      enterprise: {
        name: "Enterprise",
        desc: "For chains & resorts",
        price: "Custom",
        features: ["Unlimited properties", "SLA & dedicated support", "Custom API integrations"],
        cta: "Talk to sales",
      },
    },
    finalCta: {
      eyebrow: "Ready to start?",
      title: "Take your hospitality business further",
      lead: "Start free today, or book a tailored demo for your property.",
    },
  },

  features: {
    meta: {
      title: "Features",
      description:
        "Suvio features: online reservation engine, brandable website builder, multi-property management, analytics, room & pricing management, and payment & channel integrations.",
    },
    hero: {
      eyebrow: "Features",
      title: "Everything a modern hotel needs, in one platform",
      lead: "Replace your patchwork of tools with a single connected system — booking, branding, operations, and insight.",
    },
    grid: [
      {
        title: "Online reservation engine",
        body: "Real-time availability, instant confirmation, and secure checkout. Calendar sync prevents double-bookings across every channel.",
        list: ["Live availability & instant confirmation", "Promo codes & length-of-stay rules", "Mobile-first guest checkout"],
      },
      {
        title: "Brandable website builder",
        body: "Launch a polished booking site on your own domain — your colors, your logo, your photography. No code required.",
        list: ["Custom domain & SSL included", "Luxury templates & theme controls", "SEO-ready, fast-loading pages"],
      },
      {
        title: "Multi-property management",
        body: "Operate every hotel, lodge, and resort from one account. Switch properties in a click; share teams and settings.",
        list: ["One login for all properties", "Per-property branding & settings", "Roles & granular permissions"],
      },
      {
        title: "Analytics & reports",
        body: "Understand occupancy, ADR, RevPAR, and channel mix at a glance. Export financial reports in a click.",
        list: ["Occupancy, ADR & RevPAR dashboards", "Channel & source attribution", "Scheduled financial exports"],
      },
      {
        title: "Room & pricing management",
        body: "Define room types, rate plans, and inventory. Let dynamic pricing adjust rates to demand and seasonality.",
        list: ["Room types & rate plans", "Dynamic, demand-based pricing", "Seasonal calendars & restrictions"],
      },
      {
        title: "Payments & integrations",
        body: "Connect leading payment gateways and sales channels so every booking and payout flows into one place.",
        list: ["Stripe, PayPal & local gateways", "OTA & channel-manager sync", "Automated payouts & reconciliation"],
      },
    ],
    deepDive: {
      eyebrow: "Built for direct bookings",
      title: "Keep more of every reservation",
      lead: "Every booking through your Suvio site is commission-free. Convert lookers into guests with a fast, trustworthy checkout that works on any device.",
      stat1Num: "0%",
      stat1Label: "OTA commission on direct bookings",
      stat2Num: "<2s",
      stat2Label: "Median page load on guest sites",
      photo: "// guest checkout screen",
    },
    cta: {
      title: "See every feature in action",
    },
  },

  solutions: {
    meta: {
      title: "Solutions",
      description:
        "Suvio for boutique hotels, hotel chains, guesthouses & eco-lodges, and resorts — tailored benefits for every kind of hospitality business.",
    },
    hero: {
      eyebrow: "Solutions",
      title: "Built for every kind of property",
      lead: "One platform, tailored to how you host — whether you run a single boutique or a portfolio of resorts.",
      chips: ["Boutique hotels", "Hotel chains", "Guesthouses & eco-lodges", "Resorts"],
    },
    boutique: {
      chip: "Boutique hotels",
      title: "A site as distinctive as your hotel",
      lead: "Stand out with a design-forward booking site that captures your character — and convert direct guests who keep coming back.",
      list: [
        "Designer templates that feel custom-made",
        "Direct bookings with no OTA commission",
        "Guest profiles for personalized stays",
        "Up-sells: late checkout, breakfast, transfers",
      ],
      photo: "// boutique hotel storefront",
      cta: "Start Free",
    },
    chain: {
      chip: "Hotel chains",
      title: "Every property, one command center",
      lead: "Standardize your brand across locations while giving each property the autonomy it needs — all reported in one place.",
      list: [
        "Centralized control with per-site branding",
        "Consolidated revenue & occupancy reporting",
        "Team roles across regions and properties",
        "Group-wide promotions and rate strategy",
      ],
      photo: "// multi-property dashboard",
      cta: "Talk to sales",
    },
    lodge: {
      chip: "Guesthouses & eco-lodges",
      title: "Simple to run, lovely to book",
      lead: "Lightweight tools that fit a small team — get online fast, take secure payments, and tell your story beautifully.",
      list: [
        "Live in a day, no technical setup",
        "Storytelling pages for place & experience",
        "Flexible rates for seasonal demand",
        "Affordable pricing that scales with you",
      ],
      photo: "// eco-lodge landscape",
      cta: "Start Free",
    },
    resort: {
      chip: "Resorts",
      title: "Sell the full resort experience",
      lead: "Go beyond rooms — bundle packages, amenities, and activities into a premium booking flow that lifts every stay.",
      list: [
        "Packages, add-ons & activity bookings",
        "Multi-room and group reservations",
        "Dynamic pricing for peak seasons",
        "Dedicated support and onboarding",
      ],
      photo: "// resort booking experience",
      cta: "Request a Demo",
    },
    cta: {
      title: "Not sure which fits? Let's talk.",
      lead: "Tell us about your property and we'll show you exactly how Suvio works for you.",
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "The Suvio story, mission, and values — and the team building one platform for independent hotels, chains, lodges, and resorts.",
    },
    hero: {
      eyebrow: "Our story",
      title: "We believe every hotel deserves its own front door",
      lead: "Suvio began when a group of hoteliers and engineers grew tired of handing the guest relationship — and a slice of every booking — to faceless marketplaces.",
      photo: "// team / office photo",
    },
    story: {
      p1: "In 2021 we ran a small boutique hotel. Guests loved the stay — but most of them arrived through online travel agencies that owned the relationship and took up to 20% of every reservation.",
      p2: "We wanted a way to give every property a beautiful website of its own, the tools to run it, and the freedom to grow direct bookings — without rebuilding the same infrastructure for each one. So we built a multi-tenant platform: one shared, reliable backbone serving every hotel its own branded storefront and dashboard. Today, Suvio powers hundreds of properties across boutique hotels, growing chains, eco-lodges, and resorts.",
      stats: [
        { num: "2021", label: "Founded" },
        { num: "240+", label: "Properties" },
        { num: "18", label: "Countries" },
        { num: "52", label: "Team members" },
      ],
    },
    mission: {
      eyebrow: "Our mission",
      statement:
        "To put independent hospitality back in control of its guests, its brand, and its revenue.",
    },
    values: {
      eyebrow: "What we value",
      title: "Principles we build on",
      items: [
        {
          title: "Hospitality first",
          body: "Every decision starts with the guest experience and the host who creates it.",
        },
        {
          title: "Earn trust daily",
          body: "Reliable uptime, fair pricing, and data you own — trust is the product.",
        },
        {
          title: "Keep it simple",
          body: "Powerful underneath, effortless on top. Anyone on your team can use it.",
        },
      ],
    },
    team: {
      eyebrow: "The team",
      title: "People behind the platform",
      portrait: "// portrait",
      members: [
        { name: "Lina Haddad", role: "Co-founder & CEO" },
        { name: "Marcus Reed", role: "Co-founder & CTO" },
        { name: "Priya Nair", role: "Head of Product" },
        { name: "Tom Okafor", role: "Head of Customer Success" },
      ],
    },
    cta: {
      title: "Come build the future of hospitality",
      openRoles: "See open roles",
    },
  },

  pricing: {
    meta: {
      title: "Pricing",
      description:
        "Simple, transparent pricing for Suvio. Basic, Pro, and Enterprise plans with monthly or annual billing, a full feature comparison, and FAQ.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Simple pricing that grows with you",
      lead: "Start free for 14 days. No credit card, no hidden fees, cancel anytime.",
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 20%",
    },
    plans: {
      perMonth: " / month",
      billedAnnually: "Billed annually",
      perYear: "/yr",
      basic: {
        name: "Basic",
        desc: "For a single small property",
        cta: "Start Free",
        list: [
          "1 property · up to 15 rooms",
          "Branded booking website",
          "Core reservation engine",
          "1 payment gateway",
          "Email support",
        ],
      },
      pro: {
        name: "Pro",
        desc: "For growing hotels & small groups",
        badge: "Most popular",
        cta: "Start Free",
        list: [
          "Up to 5 properties · unlimited rooms",
          "Everything in Basic, plus:",
          "Dynamic pricing & channel sync",
          "Advanced analytics & reports",
          "Multiple gateways & payouts",
          "Priority support",
        ],
      },
      enterprise: {
        name: "Enterprise",
        desc: "For chains & resorts",
        price: "Custom",
        tailored: "Tailored to your portfolio",
        cta: "Talk to sales",
        list: [
          "Unlimited properties & rooms",
          "Everything in Pro, plus:",
          "Custom API integrations",
          "SSO & advanced security",
          "Dedicated success manager",
          "99.9% uptime SLA",
        ],
      },
    },
    compare: {
      eyebrow: "Compare plans",
      title: "Every detail, side by side",
      colFeatures: "Features",
      colBasic: "Basic",
      colPro: "Pro",
      colEnterprise: "Enterprise",
      groupProps: "Properties & rooms",
      groupBooking: "Booking & website",
      groupInsight: "Insight & support",
      rows: {
        properties: "Properties",
        roomsPerProperty: "Rooms per property",
        teamMembers: "Team members",
        brandedSite: "Branded booking site",
        customDomain: "Custom domain & SSL",
        dynamicPricing: "Dynamic pricing",
        channelSync: "Channel manager sync",
        analytics: "Analytics & reports",
        api: "API integrations",
        support: "Support",
        sla: "Uptime SLA",
      },
      values: {
        unlimited: "Unlimited",
        basicAnalytics: "Basic",
        advanced: "Advanced",
        advancedCustom: "Advanced + custom",
        email: "Email",
        priority: "Priority",
        dedicatedCsm: "Dedicated CSM",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered",
      items: [
        {
          q: "Is there really a free trial?",
          a: "Yes — every plan starts with a 14-day free trial. No credit card required, and you can cancel any time before it ends.",
        },
        {
          q: "Do you charge commission on bookings?",
          a: "No. Bookings made through your Suvio site are commission-free. You only pay your plan's subscription and your payment processor's standard transaction fees.",
        },
        {
          q: "Can I manage more than one property?",
          a: "Absolutely. Pro supports up to five properties from one account, and Enterprise is unlimited — each with its own branding and reporting.",
        },
        {
          q: "What happens if I switch from monthly to annual?",
          a: "You can switch billing at any time. Annual billing saves 20%, and we'll prorate the difference automatically.",
        },
        {
          q: "Which payment gateways do you support?",
          a: "Stripe, PayPal, and a range of regional gateways. Enterprise customers can add custom gateways through our API.",
        },
      ],
    },
    cta: {
      title: "Start free — be live this week",
    },
  },

  contact: {
    meta: {
      title: "Request a Demo",
      description:
        "Request a Suvio demo or get in touch. Tell us about your property and our team will show you how to launch your branded booking site.",
    },
    eyebrow: "Request a Demo",
    title: "Let's get your hotel online",
    lead: "Tell us a little about your property. We'll walk you through Suvio and help you launch a branded booking site — usually within a day.",
    emailLabel: "Email",
    email: "hello@suvio.com",
    phoneLabel: "Phone",
    phone: "+1 (800) 555-0100",
    officeLabel: "Office",
    office: "128 Harbor Lane, Suite 400 · Lisbon",
    bookTitle: "Prefer to book a meeting?",
    bookDesc: "Grab a 30-minute slot with our team.",
    bookCta: "Book a time",
    form: {
      name: "Full name",
      namePlaceholder: "Alex Morgan",
      hotel: "Hotel name",
      hotelPlaceholder: "The Cedar House",
      email: "Work email",
      emailPlaceholder: "you@hotel.com",
      phone: "Phone",
      phonePlaceholder: "+1 (555) 000-0000",
      propertyType: "Property type",
      types: ["Boutique hotel", "Hotel chain", "Guesthouse / eco-lodge", "Resort", "Other"],
      message: "Message",
      messagePlaceholder: "Tell us about your property and what you'd like to achieve…",
      submit: "Request my demo",
      submitting: "Sent ✓",
      consent: "By submitting, you agree to our",
      privacyPolicy: "Privacy Policy",
      noSpam: ". No spam, ever.",
      successTitle: "Thank you!",
      successBody:
        "We've received your request and will be in touch within one business day.",
    },
  },

  blog: {
    meta: {
      title: "Blog",
      description:
        "The Suvio blog: practical guides on increasing direct bookings, hotel management, and hospitality marketing.",
    },
    hero: {
      eyebrow: "The Suvio blog",
      title: "Ideas for filling more rooms, directly",
      lead: "Practical guides on direct bookings, hotel operations, and hospitality marketing.",
      filters: ["All", "Direct bookings", "Hotel management", "Marketing"],
    },
    cover: "// article cover",
    featuredCover: "// featured article cover",
    readSuffix: "min read",
    minSuffix: "min",
    featured: {
      tag: "Direct bookings",
      readTime: "8 min read",
      title: "7 ways to grow direct bookings and cut OTA commissions",
      excerpt:
        "From a faster checkout to a smart loyalty offer — the highest-leverage changes that move guests from marketplaces to your own site.",
      author: "Priya Nair",
      date: "May 28, 2026",
    },
    posts: [
      {
        tag: "Marketing",
        readTime: "5 min",
        title: "The hotel website photos that actually convert",
        excerpt: "What to shoot, what to skip, and how to sequence images so visitors hit \"book\" sooner.",
        meta: "Apr 30, 2026 · Tom Okafor",
      },
      {
        tag: "Hotel management",
        readTime: "6 min",
        title: "A simple weekly revenue routine for small hotels",
        excerpt: "Thirty minutes every Monday to read the right numbers and adjust rates with confidence.",
        meta: "Apr 18, 2026 · Lina Haddad",
      },
      {
        tag: "Marketing",
        readTime: "7 min",
        title: "Email that brings past guests back",
        excerpt: "Three campaigns every property should run — and the timing that makes them work.",
        meta: "Apr 06, 2026 · Priya Nair",
      },
      {
        tag: "Direct bookings",
        readTime: "4 min",
        title: "Why your booking flow is losing guests at checkout",
        excerpt: "The friction points that quietly cost you reservations — and how to remove them today.",
        meta: "Mar 22, 2026 · Marcus Reed",
      },
      {
        tag: "Hotel management",
        readTime: "9 min",
        title: "Running multiple properties without losing your weekends",
        excerpt: "Systems and habits that let a small team manage a growing portfolio calmly.",
        meta: "Mar 09, 2026 · Lina Haddad",
      },
      {
        tag: "Marketing",
        readTime: "6 min",
        title: "Local SEO for hotels: a starter playbook",
        excerpt: "Get found by guests searching your area — without an agency or a big budget.",
        meta: "Feb 24, 2026 · Tom Okafor",
      },
    ],
    loadMore: "Load more articles",
  },

  blogArticle: {
    meta: {
      title: "7 ways to grow direct bookings",
      description:
        "A practical guide to growing direct bookings and cutting OTA commissions for independent hotels.",
    },
    allArticles: "All articles",
    tag: "Direct bookings",
    readTime: "8 min read",
    title: "7 ways to grow direct bookings and cut OTA commissions",
    author: "Priya Nair",
    authorMeta: "Head of Product · May 28, 2026",
    heroImage: "// article hero image",
    lede: "For most independent hotels, the single biggest lever on profit isn't rate or occupancy — it's the mix between direct bookings and the marketplaces that charge up to 20% commission. Shifting even a few points toward direct can fund a whole season's improvements.",
    intro: "Below are seven changes we see move the needle fastest. None of them require a big budget; all of them compound.",
    sections: [
      {
        h: "1. Make your own site the obvious place to book",
        p: "Guests will book where it's easiest and feels safest. If your website is slow, hard to navigate on a phone, or asks for too much information, they'll bounce back to the marketplace they trust. A fast, focused booking flow on your own domain is the foundation everything else builds on.",
      },
      {
        h: "2. Match the price, then add something they can't get elsewhere",
        p: "Rate parity matters, but you don't have to win on price alone. A free upgrade when available, early check-in, a welcome drink, or a small loyalty credit are perks marketplaces can't replicate — and they cost you far less than the commission you save.",
      },
      {
        h: "3. Remove friction at checkout",
        p: "Every extra field and every unexpected step loses a percentage of guests. Ask only for what you need, show the total price clearly, and let people pay with the methods they already use.",
      },
      {
        h: "4. Capture the email — then use it well",
        p: "A guest's email address is the most valuable thing a direct booking gives you. With permission, a short sequence before arrival and a thoughtful note after departure turns a one-time stay into a returning guest who books you directly next time.",
      },
      {
        h: "5. Show, don't tell",
        p: "Photography sells rooms. Lead with your strongest images, keep them current, and make sure they load quickly. A handful of honest, beautiful photos converts better than a gallery of mediocre ones.",
      },
      {
        h: "6. Win your own name in search",
        p: "When someone searches your hotel by name, your site should be the first and most compelling result. Keep your listings accurate, your page titles clear, and your direct offer visible above the fold.",
      },
      {
        h: "7. Measure what matters and adjust",
        p: "You can't grow what you don't watch. Track your direct-to-OTA ratio every month, note what changed, and double down on what works. Small, consistent adjustments outperform occasional big bets.",
      },
    ],
    blockquote:
      "The best rate guarantee only works if the booking experience is at least as good as the OTA's. Speed and clarity beat discounts.",
    checkoutList: [
      "Default to fewer form fields and autofill where possible",
      "Show taxes and fees up front, not on the final step",
      "Offer the payment options your guests actually prefer",
    ],
    conclusion:
      "Put together, these moves routinely lift direct bookings by double digits within a season — money that stays with the property instead of leaving as commission.",
    callout: {
      title: "Want this built in?",
      body: "Suvio gives every property a fast, branded booking site and the tools to grow direct reservations — commission-free.",
      cta: "Start Free",
    },
    share: "Share",
    shareTags: ["Direct bookings", "OTA strategy"],
    shareXAria: "Share on X",
    shareLinkedInAria: "Share on LinkedIn",
    keepReading: "Keep reading",
    related: [
      { tag: "Marketing", title: "The hotel website photos that actually convert" },
      { tag: "Hotel management", title: "A simple weekly revenue routine for small hotels" },
      { tag: "Direct bookings", title: "Why your booking flow is losing guests at checkout" },
    ],
  },
};

export type Dictionary = typeof en;
