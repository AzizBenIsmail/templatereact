import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className={`mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
              <Heart size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Vetdiaries</p>
              <h3 className="text-lg font-bold text-white">{t('siteName')}</h3>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Une plateforme tunisienne qui met en relation les animaux en attente d’adoption et des familles responsables.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">{t('nav.animals')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link to="/animals">{t('home.availableAnimals')}</Link></li>
            <li><Link to="/categories">{t('nav.categories')}</Link></li>
            <li><Link to="/shelters">{t('nav.shelters')}</Link></li>
            <li><Link to="/dashboard">{t('nav.dashboard')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">{t('common.contactInfo')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-orange-400" /> Tunis, Tunisie</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-orange-400" /> +216 71 000 000</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-orange-400" /> hello@vetdiaries.tn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
