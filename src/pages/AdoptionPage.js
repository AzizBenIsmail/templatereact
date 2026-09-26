import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animals } from '../data/animals';
import { useTranslation } from '../i18n/LanguageContext';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  animalId: '',
  housing: '',
  experience: '',
  message: '',
};

export default function AdoptionPage() {
  const { animalId } = useParams();
  const { t, isRTL } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ...initialForm,
    animalId: animalId || '',
  });

  const animalOptions = useMemo(() => animals, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8 ${isRTL ? 'rtl' : ''}`}>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('nav.adoption')}</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{t('adoption.title')}</h2>
        <p className="mt-2 text-slate-600">{t('adoption.subtitle')}</p>
      </div>

      {submitted ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-700">
          <h3 className="text-xl font-bold">Demande envoyée</h3>
          <p className="mt-2">{t('adoption.success')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.firstName')}</span>
            <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.lastName')}</span>
            <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.email')}</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.phone')}</span>
            <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.city')}</span>
            <input name="city" value={form.city} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">{t('adoption.fields.animal')}</span>
            <select name="animalId" value={form.animalId} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300">
              <option value="">Sélectionner un animal</option>
              {animalOptions.map((animal) => (
                <option key={animal.id} value={animal.id}>{animal.name}</option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            <span className="mb-2 block">{t('adoption.fields.housing')}</span>
            <input name="housing" value={form.housing} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            <span className="mb-2 block">{t('adoption.fields.experience')}</span>
            <textarea name="experience" value={form.experience} onChange={handleChange} rows={4} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            <span className="mb-2 block">{t('adoption.fields.message')}</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-300" />
          </label>

          <div className="md:col-span-2">
            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500">
              {t('adoption.submit')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
