// Fichiers locaux : public/assets/images/<nom de fichier>.
export const img = (filename: string) =>
  `/assets/images/${encodeURIComponent(filename).replace(/[!'()*]/g, (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`)}`;

export const site = {
  name: 'LMJ Enterprise',
  title: 'LMJ Enterprise | French Polishing | 164 Lowry Crescent, Mitcham CR4 3QU, United Kingdom',
  description:
    'Welcome to LMJ Enterprise, your premier destination for French polishing and a range of complementary services. With a commitment to excellence and attention to detail, we specialize in providing top-tier French polishing services alongside a suite of related offerings. From furniture restoration to wood finishing, our skilled artisans bring decades of experience and expertise to every project.',
  logo: img('IMG_0216.jpg'),
  address: 'United Kingdom, London, Merton, 164 Lowry Crescent, CR4 3QU',
  email: 'Lmjenterpriseltd@gmail.com',
  phone: '+447552791324',
  linkedin: 'https://www.linkedin.com/company/lmj-enterprise-ltd?trk=public_profile_topcard-current-company',
  facebook: 'https://www.facebook.com/profile.php?id=61561817093498',
};

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export const hero = {
  title: 'Because Quality Matters!',
  image: img('925c0b_0cf384fafe56c29ed35d07cf832e1fca.webp'),
  video: '/assets/files/hero.mp4',
};

export const about = {
  paragraphs: [
    'LMJ was established to provide a high quality construction services, We are available to carry out projects from small-scale construction sites to large scale industrial contracts.',
    'Specialization:',
    'French polishing, dry lining, carpentry, M&E, cladding installation, fire stopping, professional cleaning and interior systems solutions. Our staff are highly skilled, experienced and pride themselves on their professional and reliable approach. Our aim is to provide high quality workmanship and complete customer satisfaction in all aspects.',
    'Explore our website to discover how we can transform your vision in to reality.',
  ],
  images: [
    img('IMG-20241119-WA0000.jpg'),
    img('IMG-20241119-WA0001.jpg'),
    img('IMG-20241121-WA0005.jpg'),
  ],
};

export const services = [
  { title: 'French polishing / Furniture Restoration', image: '925c0b_da78faf0ef7bac3d98770d6bc7d8a431.webp',
    text: 'Our flagship service, French polishing, is a time-honored technique that brings out the natural beauty of wood surfaces.' },
  { title: 'Dry Lining Painting and Decorating', image: '925c0b_df3f986e557c61a59bdaaac76e18ade9.webp',
    text: 'Metal Stud and Demountable Partitions, Metal Framing and Lay-in Grid Ceilings (metal & fiber), Fire Protection Services, Steel Framed Systems, GRG Encasement, Tape & Jointing, Painting & Decorating (interior/exterior, wallpaper, finishes).' },
  { title: 'Carpentry and Joinery', image: 'SiteCarpenterHR.jpg',
    text: 'The Carpentry and joinery specialists listed in our directory are much more than traders; they are skilled artisans.' },
  { title: 'Cleaning Services', image: 'OIP (3).jpg',
    text: 'Experience spotless perfection with our professional cleaning services. Trust us to make your environment shine.' },
  { title: 'Handyman / M&E Services', image: 'shutterstock_1082270918-scaled.jpg',
    text: 'Handyman Services provides expert home maintenance and repairs, including plumbing, electrical work, painting, carpentry, and general fixes.' },
  { title: 'Cladding installation', image: 'WhatsApp Image 2024-09-13 at 17.59.55_7c010ca2.jpg',
    text: 'Various Cladding Systems: Curtain Walling, Rainscreen system, Sandwich Panels.' },
  { title: 'Void Refurbishment', image: 'WhatsApp Image 2024-09-02 at 08.52.02_a8d34371.jpg',
    text: 'LMJ specializes in restoring and renovating vacant properties, providing efficient and high-quality refurbishment services. They ensure spaces are ready for immediate occupancy, offering tailored solutions that meet both residential and commercial needs.' },
  { title: 'Passive Fire Protection Solutions', image: '925c0b_382f20c147d9c29ad9c3104db9a56095.webp',
    text: 'Specializing in fire stopping and penetration sealing, we provide cost-effective solutions to prevent fire, smoke, and gas spread, ensuring building safety and compliance.' },
].map((s) => ({ ...s, image: img(s.image) }));

export const certifications = {
  intro:
    'We employ a professional team fully experienced in all interior aspects of the construction industry. Ongoing training ensures the team is updated to ensure full compliance with the requirements of CDM Construction (Design and Management) Regulations 2015. Discover the standards and accreditations that define our excellence.',
  management: [
    'CSCS (Construction Skills Certification Scheme)', 'Relevant NVQ', 'PASMA Trained',
    'SMSTS Qualified (Site Management Safety Training Scheme)', 'First Aid Qualified',
    'Risk Assessment and Method Statement Preparation',
  ],
  operatives: ['CSCS (Construction Skills Certification Scheme)', 'IPAF Training'],
  certs: [
    { img: img('download (1).jpg'), pdf: '/assets/files/certificate-1.pdf' },
    { img: img('R.jpg'), pdf: '/assets/files/certificate-2.pdf' },
  ],
  logos: [
    'w-900_h-500_m-cover_s-any__Chas-Logo2.jpg',
    'download (1).jpg',
    'R.jpg',
  ].map(img),
  responsibilities:
    'Will provide and maintain as far as possible: a safe working environment; safe systems of work; plant and substances in safe condition; information, instruction, training and supervision that is reasonably necessary to ensure that each employee is safe from injury and risks to health; a commitment to consult and co-operate with employees in all matters relating to health and safety in the workplace; a commitment to continually improve our performance through effective safety management.',
  safetyImage: img('IMG-20241111-WA0001.jpg'),
};

export const gallery = [
  'IMG-20241014-WA0023.jpg','IMG-20241014-WA0024.jpg','IMG-20241111-WA0001.jpg',
  'IMG-20241111-WA0002.jpg','IMG-20241111-WA0003.jpg','IMG-20241111-WA0004.jpg',
  'IMG-20241119-WA0000.jpg','IMG-20241119-WA0001.jpg','IMG-20241121-WA0005.jpg',
  'WhatsApp Image 2024-09-13 at 17.59.55_590af16f.jpg',
  'WhatsApp Image 2024-09-13 at 17.59.55_7c010ca2.jpg',
  'WhatsApp Image 2024-09-13 at 17.59.55_a9d7ab3f.jpg',
  'WhatsApp Image 2024-09-13 at 17.59.55_bd91b5ae.jpg',
  'WhatsApp Image 2024-09-13 at 17.59.55_e5bdda9d.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.28_d6db93eb.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.28_d7f57680.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.50_885a8e86.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.51_32d55b6a.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.51_3d2cb422.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.51_5c647471.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.51_852c9bb6.jpg',
  'WhatsApp Image 2024-09-13 at 18.00.51_a463a7d9.jpg',
].map(img);
