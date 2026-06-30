// Single source of truth for the site's author / founder.
export const ralph = {
  slug: 'ralph',
  name: 'Ralph Marino',
  role: 'Co-founder & Technical SEO Specialist',
  // Short line used on compact cards
  tagline: 'Founder & operator of Growth Local',
  linkedin: 'https://www.linkedin.com/in/ralphmarino/',
  // Avatars live in /public/team. The memoji shows by default and crossfades
  // to the real photo on hover (see AuthorAvatar.astro).
  memoji: '/team/ralph-memoji-true.png',
  photo: '/team/ralph-true.jpeg',
  bioShort:
    'Ralph is the founder and operator of Growth Local — an experienced Technical SEO specialist who has spent 8+ years turning search into measurable growth for local businesses, international brands, and enterprise clients.',
  bio: [
    'Ralph Marino is an experienced and accomplished Technical SEO Specialist and co-founder of Growth Local. With over 8 years of proven experience in digital marketing, Ralph has a strong track record of delivering measurable results while leading marketing efforts in a constantly evolving digital environment.',
    'He has extensive knowledge in Search Engine Optimization and other digital marketing strategies, and has worked with a range of clients including small local businesses, international brands, and enterprise-level clients. In addition to his experience at agencies, in-house, and as a freelancer, Ralph also has a computer science degree and specialized certifications in the marketing field.',
    'As the founder and operator of Growth Local, Ralph leads the studio day to day — setting the standard for the work and staying hands-on with clients. He is a total nerd when it comes to SEO and is always up-to-date on the latest search engine algorithms while actively engaging in the digital marketing community.',
  ],
};

export type Author = typeof ralph;
