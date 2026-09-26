import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[60vh] items-center justify-center rounded-[32px] bg-white p-10 shadow-sm ring-1 ring-slate-200">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">404</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">{t('common.notFound')}</h1>
        <p className="mt-3 text-slate-600">{t('errors.notFound')}</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500">
          {t('common.backHome')}
        </Link>
      </div>
    </div>
  );
}
