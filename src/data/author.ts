// Single source of truth for the studio's people (author bios, team page, schema).
export interface Member {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  linkedin: string;
  memoji: string;
  photo: string;
  /** object-position for the real photo inside the circular avatar */
  photoPosition?: string;
  bioShort: string;
  bio: string[];
  facts: { icon: string; label: string; value: string }[];
}

export const ralph: Member = {
  slug: 'ralph',
  name: 'Ralph Marino',
  role: 'Co-founder & Technical SEO Specialist',
  // Short line used on compact cards
  tagline: 'Founder & operator of Growth Local',
  linkedin: 'https://www.linkedin.com/in/ralphmarino/',
  // Avatars live in /public/team. The memoji shows by default and crossfades
  // to the real photo on hover (see AuthorAvatar.astro).
  memoji: '/team/ralph-memoji-true.png',
  photo: '/team/ralph-no-ring.png',
  photoPosition: 'center',
  bioShort:
    'Ralph is the founder and operator of Growth Local, an experienced Technical SEO specialist who has spent 8+ years turning search into measurable growth for local businesses, international brands, and enterprise clients.',
  bio: [
    'Ralph Marino is an experienced and accomplished Technical SEO Specialist and co-founder of Growth Local. With over 8 years of proven experience in digital marketing, Ralph has a strong track record of delivering measurable results while leading marketing efforts in a constantly evolving digital environment.',
    'He has extensive knowledge in Search Engine Optimization and other digital marketing strategies, and has worked with a range of clients including small local businesses, international brands, and enterprise-level clients. In addition to his experience at agencies, in-house, and as a freelancer, Ralph also has a computer science degree and specialized certifications in the marketing field.',
    'As the founder and operator of Growth Local, Ralph leads the studio day to day, setting the standard for the work and staying hands-on with clients. He is a total nerd when it comes to SEO and is always up-to-date on the latest search engine algorithms while actively engaging in the digital marketing community.',
  ],
  // The fun stuff — rendered as the "Off the clock" grid.
  facts: [
    { icon: '🎖️', label: 'Service', value: 'US Army Veteran' },
    { icon: '🗽', label: 'Born & Raised', value: 'Staten Island, NY' },
    { icon: '🎂', label: 'Birthday', value: 'May 28 · Gemini ♊' },
    { icon: '🐱', label: 'Family', value: 'Married + 4 cats' },
    { icon: '🤖', label: 'Obsession', value: 'Claude + Claude Code' },
    { icon: '🥊', label: 'Fanatic', value: 'UFC / MMA' },
    { icon: '🏀', label: 'Teams', value: 'NY Knicks · Yankees · Giants · Rangers' },
    { icon: '🍕', label: 'Favorite food', value: 'Pizza or sushi (impossible to choose)' },
    { icon: '🎬', label: 'Favorite movies', value: 'The Godfather Trilogy' },
    { icon: '📺', label: 'Favorite show', value: 'The Sopranos (The Office is a close second)' },
    { icon: '🟢', label: 'Favorite color', value: 'Green, obviously' },
    { icon: '✈️', label: 'Loves', value: 'Traveling anywhere + live music' },
    { icon: '🧱', label: 'Hobbies', value: 'Legos, trading cards & sports data' },
    { icon: '🏎️', label: 'Garage', value: '2011 Shelby GT500 & 2026 Tesla Model Y' },
    { icon: '🎮', label: 'Team', value: 'Xbox · iPhone' },
    { icon: '🧸', label: 'Weird flex', value: '120+ Funko Pops and counting' },
  ],
};

export const john: Member = {
  slug: 'john',
  name: 'John C. Kennedy',
  role: 'Digital Growth Strategist · Technical SEO & Web Operations',
  tagline: 'Digital growth strategist at Growth Local',
  linkedin: 'https://www.linkedin.com/in/john-kennedy-seo/',
  memoji: '/team/john-kennedy-memoji.png',
  photo: '/team/john-kennedy.jpeg',
  photoPosition: 'center 18%',
  bioShort:
    'John is a technical SEO and digital growth strategist with 9+ years helping businesses build, optimize, and scale high-performing websites that drive measurable results.',
  bio: [
    'John Kennedy is a technical SEO and digital growth strategist with more than 9 years of experience helping businesses build, optimize, and scale high-performing websites that drive measurable results. Throughout his career, he has worked with organizations ranging from growing local businesses to established brands, developing strategies that increase organic visibility, improve website performance, and support long-term business growth. His approach combines technical expertise with a strong understanding of how search, user experience, and digital marketing contribute to overall business success.',
    'John specializes in technical SEO, website development, conversion rate optimization, and web analytics across platforms including WordPress, Shopify, and enterprise CMS environments. He has extensive experience performing technical audits, resolving complex indexing and crawlability issues, improving Core Web Vitals, optimizing site architecture, and implementing structured data to help websites perform better in search engines while delivering a seamless experience for users.',
    'Beyond technical implementation, John focuses on turning data into actionable business insights. He leverages analytics, user behavior, and performance metrics to identify opportunities that improve conversion rates, increase qualified traffic, and maximize return on investment. By combining SEO best practices with thoughtful website optimization, he helps organizations make informed decisions that support both marketing objectives and revenue growth.',
    'John is known for bridging the gap between technical execution and business strategy by collaborating closely with marketing, sales, finance, product, and executive leadership teams. He communicates complex technical concepts in a way that stakeholders can understand, ensuring alignment across departments while driving projects from planning through execution. His ability to balance technical precision with strategic thinking has enabled businesses to strengthen their online presence, improve operational efficiency, and achieve sustainable digital growth.',
  ],
  facts: [
    { icon: '🍼', label: 'Born', value: 'Concord, New Hampshire' },
    { icon: '🌽', label: 'Raised', value: 'Des Moines, Iowa' },
    { icon: '🎂', label: 'Birthday', value: 'May 28 · Gemini ♊' },
    { icon: '🐕', label: 'Family', value: 'Two dogs' },
    { icon: '📧', label: 'Obsession', value: 'Replying to emails fast' },
    { icon: '🏈', label: 'Fanatic', value: 'Football' },
    { icon: '🧀', label: 'Teams', value: "Green Bay Packers · anyone playing Ralph's teams" },
    { icon: '🐌', label: 'Favorite food', value: 'Escargot or Uncrustables' },
    { icon: '🎬', label: 'Favorite movies', value: 'Minions & Law Abiding Citizen' },
    { icon: '📺', label: 'Favorite show', value: 'Curb Your Enthusiasm' },
    { icon: '🟢', label: 'Favorite color', value: 'Green' },
    { icon: '🎸', label: 'Loves', value: 'Jam band concerts' },
    { icon: '🐶', label: 'Hobbies', value: 'Walking his bloodhound & collecting watches' },
    { icon: '🛵', label: 'Garage', value: '1974 VW Thing · 1963 Vespa 150 · 1975 Vespa P (sidecar)' },
    { icon: '🎮', label: 'Team', value: 'Xbox · iPhone · Packers' },
    { icon: '👟', label: 'Weird flex', value: "A serious shoe collection (no match for Ralph's Funkos)" },
  ],
};

export const team: Member[] = [ralph, john];

export type Author = Member;
