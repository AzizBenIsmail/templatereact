import { Outlet, NavLink } from 'react-router-dom';
import { BarChart3, Cat, HeartHandshake, Settings, ShieldCheck, Users } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const navItems = [
  { to: '/dashboard', label: 'dashboard.overview', icon: BarChart3 },
  { to: '/dashboard/animals', label: 'dashboard.animals', icon: Cat },
  { to: '/dashboard/applications', label: 'dashboard.applications', icon: HeartHandshake },
  { to: '/dashboard/users', label: 'dashboard.users', icon: Users },
  { to: '/dashboard/settings', label: 'dashboard.settings', icon: Settings },
];

export default function DashboardLayout() {
  const { t, isRTL } = useTranslation();

  return (
    <div className={`flex min-h-[80vh] flex-col gap-6 lg:flex-row ${isRTL ? 'rtl' : ''}`}>
      <aside className="w-full rounded-3xl border border-slate-200 bg-slate-900 p-4 text-white shadow-lg lg:w-72">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Vetdiaries</p>
            <h2 className="text-lg font-bold">{t('dashboard.title')}</h2>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-orange-500 text-white' : 'text-slate-200 hover:bg-slate-800'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {t(label)}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
