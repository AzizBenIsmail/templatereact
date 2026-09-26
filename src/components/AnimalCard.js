import { Link } from 'react-router-dom';
import { Heart, MapPin, PawPrint } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { formatStatusClass } from '../utils/helpers';

export default function AnimalCard({ animal }) {
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={animal.image} alt={animal.name} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
        <span className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-xs font-semibold ${formatStatusClass(animal.status)}`}>
          {animal.status}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{animal.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{animal.species} · {animal.breed}</p>
          </div>
          <button className="rounded-full border border-slate-200 p-2 text-slate-400 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500" aria-label="Ajouter aux favoris">
            <Heart size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-orange-500" />
          {animal.location}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{animal.age}</span>
          <span>{animal.sex}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {animal.traits.slice(0, 2).map((trait) => (
            <span key={trait} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <PawPrint size={16} className="text-orange-500" />
            {animal.category}
          </div>

          <Link to={`/animals/${animal.id}`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500">
            {t('common.details')}
          </Link>
        </div>
      </div>
    </article>
  );
}
