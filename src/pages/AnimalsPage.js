import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import AnimalCard from '../components/AnimalCard';
import FiltersBar from '../components/FiltersBar';
import { animals, defaultFilters } from '../data/animals';
import { useTranslation } from '../i18n/LanguageContext';
import { filterAnimals } from '../utils/helpers';

export default function AnimalsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, isRTL } = useTranslation();
  const initialQuery = location.state?.search || '';

  const [filters, setFilters] = useState({ ...defaultFilters, search: initialQuery });

  useEffect(() => {
    if (location.state?.search) {
      setFilters((prev) => ({ ...prev, search: location.state.search }));
    }
  }, [location.state]);

  const filteredAnimals = useMemo(() => filterAnimals(animals, filters), [filters]);

  const handleFieldChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    navigate('/animals', { replace: true });
  };

  return (
    <div className={`space-y-6 ${isRTL ? 'rtl' : ''}`}>
      <section className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('nav.animals')}</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">{t('animalsPage.title')}</h2>
          </div>

          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => handleFieldChange('search', e.target.value)}
              placeholder={t('animalsPage.searchPlaceholder')}
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-300"
            />
          </label>
        </div>
      </section>

      <FiltersBar filters={filters} onChange={handleFieldChange} onReset={handleReset} isRTL={isRTL} />

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          {filteredAnimals.length} {t('common.results')}
        </p>
      </div>

      {filteredAnimals.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold text-slate-700">{t('animalsPage.noResults')}</p>
        </div>
      )}
    </div>
  );
}
