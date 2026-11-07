// Fichiers locaux : public/assets/images/<id>  (téléchargés par scripts/download-assets.mjs)
export const img = (id: string) => `/assets/images/${id.replace('~mv2', '')}`;

export const site = {
  name: 'LMJ Enterprise',
  title: 'LMJ Enterprise | French Polishing | 164 Lowry Crescent, Mitcham CR4 3QU, United Kingdom',
  description:
    'Welcome to LMJ Enterprise, your premier destination for French polishing and a range of complementary services. With a commitment to excellence and attention to detail, we specialize in providing top-tier French polishing services alongside a suite of related offerings. From furniture restoration to wood finishing, our skilled artisans bring decades of experience and expertise to every project.',
  logo: img('726b923d08144f8c94f7e7b2188a4141~mv2.jpg'),
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
  image: img('3a5e8d3bc97d4d21b3bb5078e16afe21~mv2.jpg'),
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
    img('e699bdc172f441d6a2ae517ea9dc021a~mv2.jpg'),
    img('0d8ab45600e74c4eba6a7a9c0597c459~mv2.jpg'),
    img('33bf79ae6b5d4144ba4a6e9abb47b14a~mv2.jpg'),
  ],
};

export const services = [
  { title: 'French polishing / Furniture Restoration', image: '365f6e5e2090494c8eeeddbe0bf32569~mv2.jpg',
    text: 'Our flagship service, French polishing, is a time-honored technique that brings out the natural beauty of wood surfaces.' },
  { title: 'Dry Lining Painting and Decorating', image: '1c1ae23f6cf34351aa98c706b516158a~mv2.jpg',
    text: 'Metal Stud and Demountable Partitions, Metal Framing and Lay-in Grid Ceilings (metal & fiber), Fire Protection Services, Steel Framed Systems, GRG Encasement, Tape & Jointing, Painting & Decorating (interior/exterior, wallpaper, finishes).' },
  { title: 'Carpentry and Joinery', image: 'd617059c80ed463eb2176e741e348112~mv2.jpg',
    text: 'The Carpentry and joinery specialists listed in our directory are much more than traders; they are skilled artisans.' },
  { title: 'Cleaning Services', image: 'bdd0a65b4f724a68837c92f2e016b8cf~mv2.jpg',
    text: 'Experience spotless perfection with our professional cleaning services. Trust us to make your environment shine.' },
  { title: 'Handyman / M&E Services', image: '02ca52d3d3d848569fdfe622f667f1d8~mv2.jpg',
    text: 'Handyman Services provides expert home maintenance and repairs, including plumbing, electrical work, painting, carpentry, and general fixes.' },
  { title: 'Cladding installation', image: '3fa05dde37764a3c9a7d7ca28b1e6069~mv2.jpg',
    text: 'Various Cladding Systems: Curtain Walling, Rainscreen system, Sandwich Panels.' },
  { title: 'Void Refurbishment', image: 'ed724289dd1d478eb0a3dd6287605ae4~mv2.jpg',
    text: 'LMJ specializes in restoring and renovating vacant properties, providing efficient and high-quality refurbishment services. They ensure spaces are ready for immediate occupancy, offering tailored solutions that meet both residential and commercial needs.' },
  { title: 'Passive Fire Protection Solutions', image: 'ea73df4a35c14425bb1fd1543d92ee55~mv2.jpg',
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
    { img: img('5217aaffec864a9b9e000d9da060f986~mv2.png'), pdf: '/assets/files/certificate-1.pdf' },
    { img: img('ca48266ab9f4495fb42835bbb73465fd~mv2.png'), pdf: '/assets/files/certificate-2.pdf' },
  ],
  logos: ['0ad6acd8d71b4c3599c3586c5c76a15c~mv2.jpg', '0644c9fb971644bf93c19738d9660e59~mv2.jpg', 'e4e8c930e8ab4771973454727a6bde35~mv2.jpg'].map(img),
  responsibilities:
    'Will provide and maintain as far as possible: a safe working environment; safe systems of work; plant and substances in safe condition; information, instruction, training and supervision that is reasonably necessary to ensure that each employee is safe from injury and risks to health; a commitment to consult and co-operate with employees in all matters relating to health and safety in the workplace; a commitment to continually improve our performance through effective safety management.',
  safetyImage: img('519b69daafd442bfb55ec2f67e977842~mv2.webp'),
};

export const gallery = [
  '5fd50b91006f42588f46b055029b7440~mv2.jpg','02ca52d3d3d848569fdfe622f667f1d8~mv2.jpg','cfe4e061e5354652955ad950b339252d~mv2.jpg',
  'dfe038918cc1495f98c51919a0971d9c~mv2.jpg','1832c1b9856e4bb0af6a7b8a8f3e0fd5~mv2.jpg','b2448d5046594f378b03a375aa9878fb~mv2.jpg',
  'a0f8cbdf6c994f62b67d454702cd2d8c~mv2.jpg','c7188e14e950457cad2503adadfd1df7~mv2.jpg','0f6ceb1d14bd4f258249c9a5397e69b8~mv2.jpg',
  '22f2277d2f60456e8478c57c7535bf3d~mv2.jpg','1c1ae23f6cf34351aa98c706b516158a~mv2.jpg','75aec80f43d945698cc9d4565d4ab1b3~mv2.jpg',
  '8abb3cbc8b9841dbb7a4ed2fb0acc1b4~mv2.jpg','329766c66ab64518808333c498a9e16f~mv2.webp','89d9953c809f455c98b7ceb0edc0c8fe~mv2.webp',
  'ade88ec6a68f42d9b1e5211cc7f7a2da~mv2.jpg','ecf4f3d86e614e26b106ff4a32dd0eae~mv2.webp','ed724289dd1d478eb0a3dd6287605ae4~mv2.jpg',
  'c55f90821ca84ed18c8647da92248412~mv2.jpg',
].map(img);
