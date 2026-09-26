import { Link } from 'react-router-dom';
import { categories, animals } from '../data/animals';
import { useTranslation } from '../i18n/LanguageContext';

export default function CategoriesPage() {
  const { t, isRTL } = useTranslation();

  return (
    <div className={`space-y-8 ${isRTL ? 'rtl' : ''}`}>
      <section className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{t('categoriesPage.title')}</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{t('categoriesPage.subtitle')}</h2>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const categoryAnimals = animals.filter((animal) => animal.category === category);

          return (
            <Link
              key={category}
              to={`/categories/${encodeURIComponent(category)}`}
              className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-orange-50 px-3 py-2 text-orange-600">{categoryAnimals.length} animaux</div>
              <h3 className="text-2xl font-bold text-slate-900">{category}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Découvrez les animaux {category.toLowerCase()} disponibles pour l’adoption dans votre région.
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
