import { useParams } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/animals';

export default function CategoryAnimalsPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const categoryAnimals = animals.filter((animal) => animal.category === decodedCategory);

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Catégorie</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{decodedCategory}</h2>
      </section>

      {categoryAnimals.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
          Aucun animal trouvé dans cette catégorie.
        </div>
      )}
    </div>
  );
}
