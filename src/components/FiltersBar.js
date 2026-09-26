import { SlidersHorizontal } from 'lucide-react';
import { ageOptions, locationOptions, sexOptions, speciesOptions, statusOptions } from '../data/animals';

export default function FiltersBar({ filters, onChange, onReset, isRTL }) {
  const handleChange = (field) => (event) => {
    onChange(field, event.target.value);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-slate-900">
        <SlidersHorizontal size={18} className="text-orange-500" />
        <h3 className="text-lg font-semibold">Filtres</h3>
      </div>

      <div className={`grid gap-3 md:grid-cols-2 xl:grid-cols-6 ${isRTL ? 'rtl' : ''}`}>
        <label className="block text-sm font-medium text-slate-600">
          <span className="mb-2 block">Espèce</span>
          <select value={filters.species} onChange={handleChange('species')} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-orange-300">
            {speciesOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-600">
          <span className="mb-2 block">Âge</span>
          <select value={filters.age} onChange={handleChange('age')} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-orange-300">
            {ageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-600">
          <span className="mb-2 block">Sexe</span>
          <select value={filters.sex} onChange={handleChange('sex')} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-orange-300">
            {sexOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-600">
          <span className="mb-2 block">Localisation</span>
          <select value={filters.location} onChange={handleChange('location')} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-orange-300">
            {locationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-600">
          <span className="mb-2 block">Statut</span>
          <select value={filters.status} onChange={handleChange('status')} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-orange-300">
            {statusOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <div className="flex items-end">
          <button type="button" onClick={onReset} className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500">
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
