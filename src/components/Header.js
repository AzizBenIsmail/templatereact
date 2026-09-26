import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, PawPrint, Globe2, Moon, SunMedium } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../i18n/ThemeContext';

const navItems = [
  { to: '/', label: 'nav.home' },
  { to: '/animals', label: 'nav.animals' },
  { to: '/categories', label: 'nav.categories' },
  { to: '/shelters', label: 'nav.shelters' },
  { to: '/dashboard', label: 'nav.dashboard' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, setLocale, isRTL, localeOptions } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const navClasses = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-sm">
            <PawPrint size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Vetdiaries</p>
            <h1 className="text-lg font-bold text-slate-900">{t('siteName')}</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClasses}>
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-orange-200 hover:text-orange-500"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative hidden sm:block">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="appearance-none rounded-full border border-slate-200 bg-slate-50 px-3 py-2 pr-9 text-sm text-slate-700 outline-none ring-0 transition focus:border-orange-300"
              aria-label={t('common.language')}
            >
              {localeOptions.map((option) => (
                <option value={option.code} key={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
            <Globe2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>

          <Link
            to="/animals"
            className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 md:inline-flex"
          >
            {t('common.adopt')}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-slate-200 p-2.5 text-slate-700 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mb-3">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-700 outline-none"
            >
              {localeOptions.map((option) => (
                <option value={option.code} key={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <nav className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
