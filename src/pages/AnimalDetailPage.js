import { Link, useParams } from 'react-router-dom';
import { Heart, MapPin, MessageCircle, Phone, ShieldCheck, UserRound } from 'lucide-react';
import { animals } from '../data/animals';
import { useTranslation } from '../i18n/LanguageContext';
import { formatStatusClass } from '../utils/helpers';

export default function AnimalDetailPage() {
  const { id } = useParams();
  const { t, isRTL } = useTranslation();
  const animal = animals.find((item) => String(item.id) === String(id));

  if (!animal) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">{t('common.notFound')}</h2>
        <Link to="/animals" className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-orange-500">
          {t('common.backHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${isRTL ? 'rtl' : ''}`}>
      <div className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
        <div className="grid gap-0 lg:grid-cols-2">
          <img src={animal.image} alt={animal.name} className="h-full max-h-[520px] w-full object-cover" />
          <div className="p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{animal.category}</p>
                <h2 className="mt-2 text-4xl font-black text-slate-900">{animal.name}</h2>
              </div>
              <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${formatStatusClass(animal.status)}`}>
                {animal.status}
              </span>
            </div>

            <div className="mb-5 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>{animal.species}</span>
              <span>·</span>
              <span>{animal.breed}</span>
              <span>·</span>
              <span>{animal.age}</span>
              <span>·</span>
              <span>{animal.sex}</span>
            </div>

            <div className="mb-5 flex items-center gap-2 text-slate-600">
              <MapPin size={18} className="text-orange-500" />
              {animal.location}
            </div>

            <p className="text-base leading-7 text-slate-600">{animal.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={`/adoption/${animal.id}`} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-orange-500">
                {t('detail.adoption')}
              </Link>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-orange-200 hover:text-orange-500">
                <MessageCircle size={16} /> {t('detail.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="rounded-[30px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-2xl font-bold text-slate-900">{t('detail.traits')}</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {animal.traits.map((trait) => (
              <span key={trait} className="rounded-full bg-orange-50 px-3 py-2 text-sm font-medium text-orange-700">
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-900">{t('common.description')}</h4>
            <ul className="mt-4 space-y-3 text-slate-600">
              {animal.characteristics.map((characteristic) => (
                <li key={characteristic} className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" size={18} />
                  {characteristic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-[30px] bg-slate-900 p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold">{t('detail.status')}</h3>
          <p className="mt-4 text-lg font-semibold text-orange-300">{animal.status}</p>

          <div className="mt-8 space-y-4 border-t border-slate-700 pt-6">
            <div className="flex items-center gap-3">
              <UserRound size={18} className="text-orange-300" />
              <span>{animal.contact.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-orange-300" />
              <span>{animal.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart size={18} className="text-orange-300" />
              <span>{animal.contact.email}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
