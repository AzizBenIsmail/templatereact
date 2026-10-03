import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, MapPin, PawPrint, Search, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { animals, categories } from '../data/animals';
import AnimalCard from '../components/AnimalCard';
import StatCard from '../components/StatCard';

const steps = [
  { icon: Search, title: 'Recherche', text: 'Trouvez votre compagnon idéal selon votre ville, votre budget et vos besoins.' },
  { icon: Heart, title: 'Adoption', text: 'Remplissez une demande simple et rencontrez les associations concernées.' },
  { icon: ShieldCheck, title: 'Suivi', text: 'Bénéficiez d’un accompagnement et d’un suivi après l’adoption.' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { t, isRTL } = useTranslation();
  const featuredAnimals = animals.slice(0, 3);
  const availableAnimals = animals.filter((animal) => animal.status === 'Disponible');
  const [quickSearch, setQuickSearch] = useState('');

  const handleSearch = () => {
    navigate('/animals', { state: { search: quickSearch } });
  };

  return (
    <div className={`space-y-12 ${isRTL ? 'rtl' : ''}`}>
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-50 via-white to-rose-50 p-6 shadow-sm ring-1 ring-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:ring-slate-700 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-sm font-medium text-orange-600 dark:border-orange-500/30 dark:bg-slate-800 dark:text-orange-300">
              <Sparkles size={16} />
              Adoption responsable en Tunisie
            </div>
            <h2 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
              {t('home.heroTitle')}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-slate-600 dark:text-slate-300">{t('home.heroSubtitle')}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder={t('animalsPage.searchPlaceholder')}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-orange-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
              />
              <button type="button" onClick={handleSearch} className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400">
                {t('common.search')}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16} /> 3 200+ animaux sauvés</span>
              <span className="inline-flex items-center gap-2"><MapPin className="text-orange-500" size={16} /> 20+ villes</span>
            </div> 
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-4 h-24 w-24 rounded-full bg-orange-200/70 blur-3xl" />
            <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-rose-200/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <img
                src="https://supawork.ai/examples/gif-batch-page/animated-gif/gifs/demo1.gif"
                alt="Animal adoption"
                className="h-[420px] w-full rounded-[24px] object-cover"
              />
              <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:bg-slate-900/90">
                <p className="text-sm text-slate-500 dark:text-slate-300">Adoption ce mois</p>
                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">312</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label={t('home.stats.animals')} value="1.2K" trend="+12%" />
        <StatCard label={t('home.stats.adoptions')} value="842" trend="+18%" accent="from-emerald-500 to-teal-500" />
        <StatCard label={t('home.stats.shelters')} value="32" trend="+6%" accent="from-sky-500 to-cyan-500" />
        <StatCard label={t('home.stats.satisfaction')} value="96%" trend="+4%" accent="from-violet-500 to-purple-500" />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('home.recentAnimals')}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">{t('home.viewAnimals')}</h3>
          </div>
          <Link to="/animals" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-orange-500">
            {t('common.more')} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('home.availableAnimals')}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">{t('nav.animals')}</h3>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {availableAnimals.slice(0, 8).map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('home.categoriesTitle')}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{t('nav.categories')}</h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category, index) => (
            <Link key={category} to={`/categories/${encodeURIComponent(category)}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                {index % 2 === 0 ? <PawPrint size={20} /> : <Star size={20} />}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{category}</h4>
              <p className="mt-2 text-sm text-slate-500">{animals.filter((animal) => animal.category === category).length} animaux</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] bg-slate-900 p-6 text-white md:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">{t('home.howItWorks')}</p>
          <h3 className="mt-2 text-3xl font-bold text-white">{t('home.howItWorks')}</h3>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
                <Icon size={20} />
              </div>
              <p className="mb-2 text-sm text-orange-300">Étape {index + 1}</p>
              <h4 className="text-xl font-bold">{title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-white shadow-lg md:p-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">{t('home.ourMission')}</p>
            <h3 className="mt-2 text-3xl font-bold">{t('home.ctaTitle')}</h3>
            <p className="mt-3 max-w-xl text-orange-50">{t('home.ctaText')}</p>
          </div>
          <Link to="/animals" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-slate-100">
            {t('home.ctaButton')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
