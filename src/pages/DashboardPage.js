import { dashboardStats, recentActivity, recentApplications, users } from '../data/animals';
import StatCard from '../components/StatCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} trend={stat.trend} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Dernières demandes</h3>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Animal</th>
                  <th className="px-4 py-3 font-semibold">Demandeur</th>
                  <th className="px-4 py-3 font-semibold">Ville</th>
                  <th className="px-4 py-3 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((item) => (
                  <tr key={item.id} className="border-t border-slate-200">
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">{item.animal}</td>
                    <td className="px-4 py-3">{item.applicant}</td>
                    <td className="px-4 py-3">{item.city}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Utilisateurs</h3>
          <div className="mt-5 space-y-4">
            {users.map((user) => (
              <div key={user.name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                <div>
                  <p className="font-semibold text-slate-900">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.role}</p>
                </div>
                <span className="text-sm text-slate-500">{user.city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Activités récentes</h3>
          <ul className="mt-5 space-y-4">
            {recentActivity.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                <span className="text-sm text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Vue d’ensemble</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Animaux disponibles</p>
              <p className="mt-2 text-3xl font-bold text-emerald-800">48</p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm text-orange-700">Demandes en cours</p>
              <p className="mt-2 text-3xl font-bold text-orange-800">26</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-sm text-sky-700">Animaux adoptés</p>
              <p className="mt-2 text-3xl font-bold text-sky-800">132</p>
            </div>
            <div className="rounded-2xl bg-violet-50 p-4">
              <p className="text-sm text-violet-700">Associations partenaires</p>
              <p className="mt-2 text-3xl font-bold text-violet-800">15</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
