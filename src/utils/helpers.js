export const formatStatusClass = (status) => {
  switch (status) {
    case 'Disponible':
      return 'bg-emerald-100 text-emerald-700';
    case 'En attente':
      return 'bg-amber-100 text-amber-700';
    case 'Adopté':
      return 'bg-slate-200 text-slate-700';
    default:
      return 'bg-sky-100 text-sky-700';
  }
};

export const filterAnimals = (animals, filters) => {
  return animals.filter((animal) => {
    const matchesSearch =
      !filters.search ||
      animal.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      animal.breed.toLowerCase().includes(filters.search.toLowerCase()) ||
      animal.location.toLowerCase().includes(filters.search.toLowerCase());

    const matchesSpecies = filters.species === 'Toutes' || animal.species === filters.species;

    const matchesSex = filters.sex === 'Tous' || animal.sex === filters.sex;
    const matchesStatus = filters.status === 'Tous' || animal.status === filters.status;
    const matchesLocation = filters.location === 'Toutes' || animal.location === filters.location;

    let matchesAge = true;
    if (filters.age !== 'Tous') {
      const ageValues = animal.age.replace(/\s+ans?/, '').trim();
      const numericAge = Number.parseInt(ageValues, 10);

      if (filters.age === '0-1 an') matchesAge = numericAge <= 1;
      if (filters.age === '1-3 ans') matchesAge = numericAge >= 1 && numericAge <= 3;
      if (filters.age === '3-5 ans') matchesAge = numericAge >= 3 && numericAge <= 5;
      if (filters.age === '5+ ans') matchesAge = numericAge >= 5;
    }

    return matchesSearch && matchesSpecies && matchesAge && matchesSex && matchesStatus && matchesLocation;
  });
};
