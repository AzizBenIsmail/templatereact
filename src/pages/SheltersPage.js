import { Mail, MapPin, Phone } from 'lucide-react';
import { shelters } from '../data/animals';
import { useTranslation } from '../i18n/LanguageContext';

export default function SheltersPage() {
  const { t, isRTL } = useTranslation();

  return (
    <div className={`space-y-8 ${isRTL ? 'rtl' : ''}`}>
      <section className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('nav.shelters')}</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{t('sheltersPage.title')}</h2>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {shelters.map((shelter) => (
          <article key={shelter.id} className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
            <img src={shelter.image} alt={shelter.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{shelter.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="text-orange-500" /> {shelter.city}
                  </div>
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
                  {shelter.animalsCount} animaux
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{shelter.description}</p>

              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Phone size={16} className="text-orange-500" /> {shelter.phone}</div>
                <div className="flex items-center gap-2"><Mail size={16} className="text-orange-500" /> {shelter.email}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
