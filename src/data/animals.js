export const categories = [
  'Chiens',
  'Chats',
  'Lapins',
  'Oiseaux',
  'Autres',
];

export const animals = [
  {
    id: 1,
    name: 'Max',
    species: 'Chien',
    category: 'Chiens',
    breed: 'Labrador',
    age: '2 ans',
    sex: 'Mâle',
    location: 'Tunis',
    city: 'Tunis',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    description:
      'Max est un chien joueur, très affectueux et habitué aux promenades en ville. Il adore les familles actives et les enfants calmes.',
    traits: ['Joueur', 'Sociable', 'Calme', 'Très gentil'],
    characteristics: ['Vacciné', 'Stérilisé', 'Entièrement dressé'],
    contact: {
      name: 'Safa Ben Ali',
      phone: '+216 22 540 110',
      email: 'safa@vetdiaries.tn',
    },
  },
  {
    id: 2,
    name: 'Luna',
    species: 'Chat',
    category: 'Chats',
    breed: 'Siamois',
    age: '1 an',
    sex: 'Femelle',
    location: 'Ariana',
    city: 'Ariana',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    description:
      'Luna est douce, attentive et très indépendante. Elle s’adapte bien aux appartements et aime les lieux paisibles.',
    traits: ['Curieuse', 'Calme', 'Peu exigeante', 'Affectueuse'],
    characteristics: ['Vaccinée', 'Microchippée', 'Très propre'],
    contact: {
      name: 'Amine Haddad',
      phone: '+216 98 201 420',
      email: 'amine@vetdiaries.tn',
    },
  },
  {
    id: 3,
    name: 'Pip',
    species: 'Lapin',
    category: 'Lapins',
    breed: 'Mini lapin nain',
    age: '8 mois',
    sex: 'Mâle',
    location: 'Sousse',
    city: 'Sousse',
    status: 'En attente',
    image:
      'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80',
    description:
      'Pip est un petit lapin calme, très doux et très facile à apprivoiser. Il aime le jardin et les environnements tranquilles.',
    traits: ['Doux', 'Calme', 'Peut vivre en intérieur', 'Affectueux'],
    characteristics: ['Très sociable', 'Peu de soins', 'Propre'],
    contact: {
      name: 'Yasmine Khemiri',
      phone: '+216 21 333 665',
      email: 'yasmine@vetdiaries.tn',
    },
  },
  {
    id: 4,
    name: 'Coco',
    species: 'Oiseau',
    category: 'Oiseaux',
    breed: 'Perruche',
    age: '10 mois',
    sex: 'Femelle',
    location: 'Nabeul',
    city: 'Nabeul',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80',
    description:
      'Coco est vive, curieuse et adore les interactions humaines. Idéale pour un foyer qui veut un animal dynamique.',
    traits: ['Active', 'Joyeuse', 'Bavarde', 'Sociable'],
    characteristics: ['Très éveillée', 'À l’aise en maison', 'Adaptable'],
    contact: {
      name: 'Chiraz Ben Youssef',
      phone: '+216 23 198 870',
      email: 'chiraz@vetdiaries.tn',
    },
  },
  {
    id: 5,
    name: 'Milo',
    species: 'Chien',
    category: 'Chiens',
    breed: 'Berger allemand',
    age: '3 ans',
    sex: 'Mâle',
    location: 'Ben Arous',
    city: 'Ben Arous',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    description:
      'Milo est intelligent, discipliné et très loyal. Il est parfait pour un foyer recherchant un compagnon attaché.',
    traits: ['Protecteur', 'Intelligent', 'Loyal', 'Très doux'],
    characteristics: ['Dressé', 'Vacciné', 'Très obéissant'],
    contact: {
      name: 'Rania Soltani',
      phone: '+216 24 540 190',
      email: 'rania@vetdiaries.tn',
    },
  },
  {
    id: 6,
    name: 'Nina',
    species: 'Chat',
    category: 'Chats',
    breed: 'Chaton européen',
    age: '7 mois',
    sex: 'Femelle',
    location: 'La Marsa',
    city: 'La Marsa',
    status: 'Adopté',
    image:
      'https://images.unsplash.com/photo-1495360010541-f48522b34f7d?auto=format&fit=crop&w=900&q=80',
    description:
      'Nina est un petit chaton très joueur, avec une personnalité charmante et un besoin constant d’attention.',
    traits: ['Joyeuse', 'Curieuse', 'Très affectueuse', 'Active'],
    characteristics: ['Sociable', 'Pleasant à vivre', 'Sortie de quarantaine'],
    contact: {
      name: 'Hanen Berrima',
      phone: '+216 98 110 308',
      email: 'hanen@vetdiaries.tn',
    },
  },
  {
    id: 7,
    name: 'Mimosa',
    species: 'Lapin',
    category: 'Lapins',
    breed: 'Lapin angora',
    age: '2 ans',
    sex: 'Femelle',
    location: 'Sfax',
    city: 'Sfax',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=900&q=80',
    description:
      'Mimosa est calme, douce et très souple. Elle apprécie les espaces ouverts et les gens respectueux.',
    traits: ['Calme', 'Douce', 'Agréable', 'Facile'],
    characteristics: ['Très douce', 'Adaptée au jardin', 'Bien socialisée'],
    contact: {
      name: 'Leila Rebaï',
      phone: '+216 20 520 007',
      email: 'leila@vetdiaries.tn',
    },
  },
  {
    id: 8,
    name: 'Oscar',
    species: 'Oiseau',
    category: 'Oiseaux',
    breed: 'Canari',
    age: '1 an',
    sex: 'Mâle',
    location: 'Monastir',
    city: 'Monastir',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=900&q=80',
    description:
      'Oscar chante de manière joyeuse et attire immédiatement l’attention. Il vit bien dans un foyer dynamique.',
    traits: ['Chanteur', 'Joyeux', 'Observateur', 'Lumineux'],
    characteristics: ['Très vif', 'Doux', 'Bien équipé'],
    contact: {
      name: 'Nabil Jaziri',
      phone: '+216 27 600 550',
      email: 'nabil@vetdiaries.tn',
    },
  },
  {
    id: 9,
    name: 'Bella',
    species: 'Chien',
    category: 'Chiens',
    breed: 'Cocker spaniel',
    age: '4 ans',
    sex: 'Femelle',
    location: 'Bizerte',
    city: 'Bizerte',
    status: 'En attente',
    image:
      'https://images.unsplash.com/photo-1534351450181-ea7f7fddf5f2?auto=format&fit=crop&w=900&q=80',
    description:
      'Bella est élégante, gentille et très sociable. Elle adore les câlins et les promenades tranquilles.',
    traits: ['Affectueuse', 'Gentille', 'Énergique', 'Sociable'],
    characteristics: ['Vaccinée', 'Très douce', 'Apprivoisée'],
    contact: {
      name: 'Mouna Ferjani',
      phone: '+216 21 070 042',
      email: 'mouna@vetdiaries.tn',
    },
  },
  {
    id: 10,
    name: 'Zaza',
    species: 'Chat',
    category: 'Chats',
    breed: 'Chartreux',
    age: '3 ans',
    sex: 'Femelle',
    location: 'Tunis',
    city: 'Tunis',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    description:
      'Zaza est un chat très doux et rassurant, avec une présence apaisante et une vraie convivialité.',
    traits: ['Doux', 'Apaisant', 'Calme', 'Affectueux'],
    characteristics: ['Très propre', 'À l’aise en appartement', 'Facile'],
    contact: {
      name: 'Ibrahim Chabbi',
      phone: '+216 58 543 145',
      email: 'ibrahim@vetdiaries.tn',
    },
  },
  {
    id: 11,
    name: 'Bibi',
    species: 'Lapin',
    category: 'Lapins',
    breed: 'Lop eared',
    age: '6 mois',
    sex: 'Femelle',
    location: 'Ariana',
    city: 'Ariana',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80',
    description:
      'Bibi est un petit lapin très curieux, plein de vie et très facile à intégrer dans un foyer familial.',
    traits: ['Curieuse', 'Aime l’attention', 'Joyeuse', 'Douce'],
    characteristics: ['Très apprivoisée', 'Propre', 'Sociable'],
    contact: {
      name: 'Sonia Gharbi',
      phone: '+216 99 301 224',
      email: 'sonia@vetdiaries.tn',
    },
  },
  {
    id: 12,
    name: 'Fifi',
    species: 'Oiseau',
    category: 'Oiseaux',
    breed: 'Calopsitte',
    age: '11 mois',
    sex: 'Femelle',
    location: 'Sousse',
    city: 'Sousse',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1534183134885-1b78b634d3bd?auto=format&fit=crop&w=900&q=80',
    description:
      'Fifi est vive et très expressive. Son environnement calme et ses interactions douces la rendent très agréable à vivre.',
    traits: ['Expressive', 'Vive', 'Aime les jeux', 'Curieuse'],
    characteristics: ['Très adaptable', 'Délicate', 'Joyeuse'],
    contact: {
      name: 'Karim Bensaid',
      phone: '+216 22 671 888',
      email: 'karim@vetdiaries.tn',
    },
  },
  {
    id: 13,
    name: 'Rex',
    species: 'Chien',
    category: 'Chiens',
    breed: 'Bouledogue',
    age: '5 ans',
    sex: 'Mâle',
    location: 'Sfax',
    city: 'Sfax',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    description:
      'Rex est calme, extrêmement fidèle et très patient. Il convient aux foyers en quête d’un compagnon rassurant.',
    traits: ['Calme', 'Loyal', 'Patient', 'Affectueux'],
    characteristics: ['Bien dressé', 'Très calme', 'Très fiable'],
    contact: {
      name: 'Dorra Boubakri',
      phone: '+216 50 909 477',
      email: 'dorra@vetdiaries.tn',
    },
  },
  {
    id: 14,
    name: 'Tom',
    species: 'Chat',
    category: 'Chats',
    breed: 'Persan',
    age: '2 ans',
    sex: 'Mâle',
    location: 'Monastir',
    city: 'Monastir',
    status: 'En attente',
    image:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80',
    description:
      'Tom est un chat très élégant et paisible, souvent à l’affût de câlins et de moments de calme.',
    traits: ['Paisible', 'Doux', 'Affectueux', 'Léger'],
    characteristics: ['Très calme', 'Apprivoisé', 'Adaptable'],
    contact: {
      name: 'Ouijdane Brahmi',
      phone: '+216 21 880 013',
      email: 'ouijdane@vetdiaries.tn',
    },
  },
  {
    id: 15,
    name: 'Kiko',
    species: 'Autre',
    category: 'Autres',
    breed: 'Furet',
    age: '1 an',
    sex: 'Mâle',
    location: 'Bizerte',
    city: 'Bizerte',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    description:
      'Kiko est curieux, intelligent et très vivant. Il a besoin d’un lieu adapté avec beaucoup d’attention.',
    traits: ['Joueur', 'Curieux', 'Très vif', 'Sociable'],
    characteristics: ['Très intelligent', 'Vif', 'Adapté à des familles actives'],
    contact: {
      name: 'Lina Trabelsi',
      phone: '+216 98 430 112',
      email: 'lina@vetdiaries.tn',
    },
  },
  {
    id: 16,
    name: 'Biscuit',
    species: 'Autre',
    category: 'Autres',
    breed: 'Hamster',
    age: '8 mois',
    sex: 'Femelle',
    location: 'Sousse',
    city: 'Sousse',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1425082661705-1834bfd998a3?auto=format&fit=crop&w=900&q=80',
    description:
      'Biscuit est très douce et pleine de curiosité. Elle aime les espaces confortables et le calme.',
    traits: ['Douce', 'Curieuse', 'Calme', 'Joyeuse'],
    characteristics: ['Très facile', 'Petit espace', 'Affectueuse'],
    contact: {
      name: 'Walid Mansouri',
      phone: '+216 97 101 045',
      email: 'walid@vetdiaries.tn',
    },
  },
  {
    id: 17,
    name: 'Nemo',
    species: 'Poisson',
    category: 'Autres',
    breed: 'Poisson rouge',
    age: '1 an',
    sex: 'Mâle',
    location: 'La Marsa',
    city: 'La Marsa',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=80',
    description:
      'Nemo est calme et agréable à observer. Une belle option pour les foyers qui recherchent un animal paisible.',
    traits: ['Calme', 'Plaisant', 'Décoratif', 'Doux'],
    characteristics: ['Très décoratif', 'Entretien simple', 'Calme'],
    contact: {
      name: 'Aicha Mezhoud',
      phone: '+216 20 335 441',
      email: 'aicha@vetdiaries.tn',
    },
  },
  {
    id: 18,
    name: 'Daisy',
    species: 'Chien',
    category: 'Chiens',
    breed: 'Jack Russell',
    age: '2 ans',
    sex: 'Femelle',
    location: 'Tunis',
    city: 'Tunis',
    status: 'Disponible',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    description:
      'Daisy est énergique, gentille et très attentive. Elle adore les balades et les familles actives.',
    traits: ['Énergique', 'Vive', 'Attentive', 'Affectueuse'],
    characteristics: ['Très active', 'Calme en famille', 'Dressée'],
    contact: {
      name: 'Youssef Miled',
      phone: '+216 29 117 009',
      email: 'youssef@vetdiaries.tn',
    },
  },
];

export const shelters = [
  {
    id: 1,
    name: 'Société Tunisienne pour la Protection Animale',
    city: 'Tunis',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    description:
      'Association engagée dans la protection des animaux errants, la sensibilisation et l’adoption responsable.',
    animalsCount: 24,
    phone: '+216 71 239 865',
    email: 'contact@stpa.tn',
  },
  {
    id: 2,
    name: 'Refuge des Cœurs',
    city: 'Ariana',
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    description:
      'Refuge familial spécialisé dans le sauvetage des chiens et chats abandonnés à travers le Grand Tunis.',
    animalsCount: 18,
    phone: '+216 20 442 880',
    email: 'coeur@refuge.tn',
  },
  {
    id: 3,
    name: 'Pet Haven Sousse',
    city: 'Sousse',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    description:
      'Maison de refuge pour animaux avec programmes de soins, d’éducation et d’adoption positive.',
    animalsCount: 15,
    phone: '+216 73 704 421',
    email: 'sousse@pethaven.tn',
  },
  {
    id: 4,
    name: 'Amitié Animale Sfax',
    city: 'Sfax',
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    description:
      'Structure locale active dans la préparation des animaux à l’adoption et la sensibilisation citoyenne.',
    animalsCount: 20,
    phone: '+216 74 321 099',
    email: 'sfax@amitieanimale.tn',
  },
];

export const dashboardStats = [
  { label: 'Animaux disponibles', value: 48, trend: '+12%' },
  { label: 'Demandes', value: 26, trend: '+5%' },
  { label: 'Adoptions', value: 132, trend: '+18%' },
  { label: 'Utilisateurs', value: 920, trend: '+9%' },
];

export const recentApplications = [
  { id: '#AD-2041', animal: 'Max', applicant: 'Salma M.', city: 'Tunis', status: 'En cours' },
  { id: '#AD-2039', animal: 'Luna', applicant: 'Nabil H.', city: 'Ariana', status: 'Validée' },
  { id: '#AD-2032', animal: 'Milo', applicant: 'Rim D.', city: 'Ben Arous', status: 'En cours' },
  { id: '#AD-2029', animal: 'Bella', applicant: 'Hedi S.', city: 'Bizerte', status: 'À revoir' },
];

export const recentActivity = [
  'Max a été mis en avant sur la page d’accueil.',
  'Nouvelle demande pour Luna validée par l’équipe.',
  'Une visite de suivi a été programmée pour Bella.',
  'Trois nouveaux animaux ont été ajoutés sur la plateforme.',
];

export const users = [
  { name: 'Sonia B.', role: 'Administratrice', city: 'Tunis' },
  { name: 'Rami J.', role: 'Coordinateur', city: 'Ariana' },
  { name: 'Meriem K.', role: 'Volunteer', city: 'Sousse' },
  { name: 'Yassine T.', role: 'Adoptant', city: 'Sfax' },
];

export const defaultFilters = {
  search: '',
  species: 'Toutes',
  age: 'Tous',
  sex: 'Tous',
  location: 'Toutes',
  status: 'Tous',
};

export const ageOptions = ['Tous', '0-1 an', '1-3 ans', '3-5 ans', '5+ ans'];
export const speciesOptions = ['Toutes', ...new Set(animals.map((animal) => animal.species))];
export const locationOptions = ['Toutes', ...new Set(animals.map((animal) => animal.location))];
export const statusOptions = ['Tous', 'Disponible', 'En attente', 'Adopté'];
export const sexOptions = ['Tous', 'Mâle', 'Femelle'];
