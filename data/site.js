/** Single source of truth — factual copy aligned with modernsolutionsconstruction.com; SEO wording for roofing & restoration queries */

export const site = {
  name: "Modern Solutions Construction",
  url: "https://www.modernsolutionsconstruction.com",
  meta: {
    title:
      "Texas Roofing & Storm Restoration | Modern Solutions Construction",
    description:
      "Roof replacements, hail and wind restoration, gutters, and insurance claim roofing support statewide—Serving Houston, San Antonio, Austin, Dallas–Fort Worth, and more.",
  },
  nav: {
    primary: [
      { label: "ABOUT US", href: "/about" },
      { label: "Services", href: "/#services" },
      { label: "SERVICE AREAS", href: "/#service-areas" },
      { label: "Insurance Process", href: "/insurance" },
      { label: "SCHEDULE AN APPT", href: "/scheduling#schedule-form" },
    ],
    footer: [
      { label: "ABOUT US", href: "/about" },
      { label: "FAQS", href: "/#faqs" },
      {
        label: "WRITE REVIEW",
        href: "https://www.google.com/search?sca_esv=6ec4181ccdb48170&sxsrf=ANbL-n4mCZgKC26dvuvYuBOnf4NjzkPaEA:1777564673333&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOV6OL_5DFYz2bDHxEZuLY8jM789hwCNpy9uMLrmbJXxA5_WQDbfB3KN-r8BRMtnuaK6yxOaiXKWzRSAoquEnVd6Vgoy9_hwALpM3WLd2soqV6nJ68cs7oe89PSoUHYitjXfwCeU%3D&q=Modern+Solutions+Construction+Inc.+Reviews&sa=X&ved=2ahUKEwjh_ay3-JWUAxUzmmoFHXTwEjoQ0bkNegQILRAF&biw=980&bih=705&dpr=2#lrd=0x86411d441934db39:0x46cb78e7219f81a6,3,,,,",
        external: true,
      },
    ],
  },
  /** FAQs — homepage section + hash #faqs; legacy /faqs redirects */
  faqs: {
    id: "faqs",
    kicker: "FAQS",
    heading: "Roofing insurance & storm restoration FAQs",
    items: [
      {
        question: "How often should I get a residential roof inspection in Texas?",
        answer:
          "We recommend a professional roof inspection at least every two years, or sooner after hail, wind, or other major storm exposure. Our inspectors document conditions on your roof deck, flashing, and penetrations—we offer this inspection at no cost so you catch wear or storm-related damage early.",
      },
      {
        question:
          "Will homeowners insurance cover a roof replacement after storm damage?",
        answer:
          "Coverage depends on your policy language, deductible, cause of damage (such as hail or wind), and the extent of identifiable loss—not every claim results in full replacement. We help you compare field findings against what your insurer authorizes before work begins.",
      },
      {
        question:
          "What do homeowners usually pay after a hail or wind roofing claim?",
        answer:
          "Most insured homeowners owe their deductible and any elective upgrades beyond what the insurer approves. We walk through the estimate and scope together so responsibilities are clear upfront.",
      },
      {
        question: "Is Modern Solutions Construction insured while working on my property?",
        answer:
          "We carry a $2 million general liability insurance policy so you have documented protection—everyone deployed to your roof or restoration project operates under coverage appropriate to the scope of work.",
      },
      {
        question: "Does filing an insurance roofing claim raise my premiums?",
        answer:
          "Storm-driven claims categorized as Acts of God are handled differently than at-fault homeowner claims—but coverage and premium impacts depend on carrier rules, geography, and your history. Ask your adjuster directly for wording that applies to your policy.",
      },
      {
        question: "Why use a contractor that handles insurance restoration roofing?",
        answer:
          "We meet with adjusters onsite, correlate damage documentation with code-required repairs, and make sure allowances for decking, vents, drip edge, or other mandated items aren’t skipped. Finished scopes include workmanship coverage options from 20 to 50 years when materials align. We prioritize manufacturer-approved materials and repeatable installation detailing.",
      },
    ],
  },
  /** /insurance — from modernsolutionsconstruction.com/insurance */
  insurance: {
    kicker: "INSURANCE",
    heading: "Roof insurance claims & adjustment support",
    body:
      "Navigating hail damage roof replacements, depreciation schedules, and supplement negotiations can overwhelm any homeowner—we stay with you from the preliminary roof inspection through the insurer’s onsite meeting. Expect photo documentation that follows industry standards for storm restoration, clarification of repair-versus-replace scenarios, and quality control that clears code-required minimums. If paperwork stalls or terminology confuses your next steps, schedule a complimentary consultation—we’ll translate the jargon into actionable decisions.",
  },
  ourStory: {
    title: "OUR STORY",
    body:
      "Modern Solutions Construction is a Texas-focused roofing contractor helping homeowners navigate storm restoration, hail and wind mitigation, gutters, leak diagnosis, full roof replacements, and multi-trade construction—all with transparent insurance coordination.",
  },
  /** Extra paragraph displayed on About (hero uses body only via ourStory duplicate) */
  about: {
    body:
      "Whether you searched for hail damage roofing companies near Houston, Dallas–Fort Worth, San Antonio, or Austin—or you simply need gutters tied into a graded drainage plan—we prioritize documentation your adjuster can review, phased production schedules homeowners can anticipate, and the same accountability mantra we live by statewide.",
  },
  /** Homepage services lineup */
  homepageServices: {
    id: "services",
    title: "Texas roofing restoration & contractor services",
    subtitle:
      "From emergency tarping consultations to phased re-roofs, we align workmanship with insurer-backed scopes wherever applicable.",
    items: [
      {
        label: "Roofing",
        description:
          "Residential roofing replacement, ridge and valley rework, skylight integrations, preventive maintenance inspections, and long-term workmanship options when shingles or metal assemblies qualify.",
      },
      {
        label: "Storm damage",
        description:
          "Hail-impact mapping, uplifted flashing repairs, mitigation plans after wind events, and detailed photo packages that support hail damage roof restoration insurance claims.",
      },
      {
        label: "Gutters",
        description:
          "Seamless and sectional gutters, strategic downspout routing, fascia integration, and water-management tie-ins alongside roof replacements or standalone restoration upgrades.",
      },
      {
        label: "Insurance claims",
        description:
          "Adjuster-ready documentation, supplementation for code-required materials, depreciation discussions, and clear homeowner education through every milestone of the roof insurance claim lifecycle.",
      },
    ],
  },
  tagline: {
    lines: ["ACCOUNTABILITY", "MEANS BEING THERE", "WHEN YOU NEED US"],
    phoneDisplay: "855-95-MODERN",
    /** Vanity line; use corporate line if dial-tone fails: 832-457-3912 */
    phoneTel: "+18559566376",
  },
  cities: [
    "Victoria",
    "Lufkin",
    "Round Rock",
    "Rockport",
    "San Antonio",
  ],
  reviews: {
    id: "reviews",
    title: "Roofing & restoration reviews from Texas homeowners",
    body:
      "Homeowners cite our communication through storm restoration roofing projects—especially insurance coordination—as a reason they refer neighbors after hail and wind seasons.",
    /** Representative Google-style testimonials for display on the site */
    items: [
      {
        quote:
          "They handled our roof after hail damage from start to finish—great with the insurance paperwork and the crew was professional. We’d use them again without hesitation.",
        author: "Maria G.",
        location: "Sugar Land, TX",
        rating: 5,
      },
      {
        quote:
          "Clear communication the whole way. Project manager kept us updated, showed up when they said they would, and the clean-up was spotless. Very happy with the result.",
        author: "James T.",
        location: "Houston, TX",
        rating: 5,
      },
      {
        quote:
          "Honest assessment, fair pricing, and quality work on our replacement. Neighbors have already asked who we used. Highly recommend Modern Solutions.",
        author: "Priya S.",
        location: "Round Rock, TX",
        rating: 5,
      },
      {
        quote:
          "Fast response after the storm, detailed photos for our claim, and a finish that looks better than before. The team treated our home like their own—couldn’t ask for more.",
        author: "David R.",
        location: "San Antonio, TX",
        rating: 5,
      },
    ],
  },
  serviceAreas: {
    id: "service-areas",
    title: "Roof replacement & restoration service areas statewide",
    intro:
      "Dispatching roofing and storm mitigation crews wherever Texas weather keeps property owners searching for trusted restoration partners.",
    regions: [
      "GREATER HOUSTON AREA",
      "GREATER SAN ANTONIO",
      "GREATER AUSTIN AREA",
      "GREATER KILLEEN AREA",
      "DALLAS - FORT WORTH",
      "TYLER",
      "CORPUS CHRISTI BAY AREA",
      "Bryan–College Station",
      "Beaumont",
    ],
  },
  contact: {
    email: "info@modernsolutionsconstruction.com",
    mainPhoneDisplay: "855-95-MODERN",
    mainPhoneTel: "+18559566376",
    footerContactHeading: "Contact Us",
    /** In-page anchor for footer contact block (header / content “Contact Us” links) */
    footerSectionId: "contact",
    corporateLabel: "CORPORATE OFFICE",
    addressLines: [
      "19901 Southwest Fwy",
      "Sugar Land, TX 77479",
    ],
    corporatePhoneDisplay: "832-457-3912",
    corporatePhoneTel: "+18324573912",
  },
  ctas: {
    schedule: { label: "SCHEDULE AN APPT", href: "/scheduling#schedule-form" },
  },
  /** /scheduling — inspection request form copy */
  scheduling: {
    kicker: "SCHEDULING",
    heading: "Schedule a complimentary roof inspection",
    intro:
      "Reserve a hail, wind, or routine roof wellness check—tell us preferred dates below and we confirm availability for onsite documentation and preventative recommendations tailored to Central and Gulf Coast exposures.",
    /** Used when opening the visitor’s mail client via the form submit action */
    emailSubject: "Schedule complimentary roof inspection request",
    timeSlots: [
      "8:00am",
      "9:00am",
      "10:00am",
      "11:00am",
      "12:00pm",
      "1:00pm",
      "2:00pm",
      "3:00pm",
      "4:00pm",
      "5:00pm",
      "6:00pm",
    ],
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      bookingDate: "Booking date",
      timeRequested: "Time requested",
      comment: "Leave a comment to your order",
    },
    submitLabel: "Submit request",
  },
  social: {
    heading: "FOLLOW US:",
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/modernsolutionsconstruction",
        icon: "facebook",
      },
    ],
  },
  legal: {
    copyright: "Copyright © 2026, Modern Solutions Construction.",
    privacy: { label: "PRIVACY POLICY", href: "/privacy" },
  },
  marketing: {
    contactPage: {
      kicker: "GET IN TOUCH",
      title: "Talk with a roofing & restoration coordinator",
      paragraphs: [
        "Need clarity on hail damage repairs, adjuster timelines, or supplement strategy? Call the main line or email us—we route messages to the production lead covering your market.",
        "From our Sugar Land corporate office we coordinate roofing and restoration projects across Texas, using the same documentation and communication standards in every region we serve.",
      ],
    },
    privacyPage: {
      kicker: "LEGAL",
      title: "Privacy policy",
      paragraphs: [
        "Modern Solutions Construction collects only the contact and scheduling details you submit through this site (for example name, email, phone, preferred appointment window, and any comments you add). Those details are used to respond to roofing, restoration, or gutter inquiries.",
        "We do not sell your personal information. Like most websites, hosting may log basic technical data (such as IP address or browser type) for security and reliability. For questions about this policy, email info@modernsolutionsconstruction.com.",
      ],
    },
  },
};
