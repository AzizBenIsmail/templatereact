import { useEffect, useState } from 'react';

const statusClasses = {
  Actif: 'bg-emerald-100 text-emerald-700',
  'En attente': 'bg-amber-100 text-amber-700',
  Inactif: 'bg-slate-200 text-slate-700',
};

const statusCycle = ['Actif', 'En attente', 'Inactif'];
const activityCycle = ['Il y a 10 min', 'Il y a 2 h', 'Hier', 'Il y a 3 jours'];

function mapUsers(rawUsers) {
  return rawUsers.map((user, index) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.company?.name || 'Utilisateur',
    status: statusCycle[index % statusCycle.length],
    lastActive: activityCycle[index % activityCycle.length],
  }));
}

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Impossible de charger les utilisateurs');
        }

        const data = await response.json();
        setUsers(mapUsers(data));
      } catch (err) {
        setError(err.message || 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('La suppression a échoué');
      }

      setUsers((currentUsers) => currentUsers.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la suppression');
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === 'Actif').length;
  const adminUsers = users.filter((user) => user.role.toLowerCase().includes('admin')).length;
  const recentUsers = users.filter((user) => user.status !== 'Inactif').length;

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">Gestion</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Utilisateurs</h2>
        </div>
        <button
          type="button"
          className="rounded-2xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          + Ajouter un utilisateur
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Total</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{totalUsers}</p>
        </div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Actifs</p>
          <p className="mt-2 text-3xl font-bold text-emerald-700">{activeUsers}</p>
        </div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Administrateurs</p>
          <p className="mt-2 text-3xl font-bold text-sky-700">{adminUsers}</p>
        </div>
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Nouveaux</p>
          <p className="mt-2 text-3xl font-bold text-violet-700">{recentUsers}</p>
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-slate-900">Liste des utilisateurs</h3>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            {loading ? 'Chargement...' : `${totalUsers} utilisateurs répertoriés`}
          </div>
        </div>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Nom</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Rôle</th>
                  <th className="px-4 py-3 font-semibold">Statut</th>
                  <th className="px-4 py-3 font-semibold">Dernière activité</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{user.name}</td>
                    <td className="px-4 py-3 text-slate-600">{user.email}</td>
                    <td className="px-4 py-3 text-slate-600">{user.role}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[user.status] || 'bg-slate-100 text-slate-600'}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{user.lastActive}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Voir
                        </button>
                        <button
                          type="button"
                          className="rounded-xl bg-orange-500 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-orange-600"
                        >
                          Modifier
                        </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteUser(user.id)}
                            className="rounded-xl border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100"
                          >
                            Supprimer
                          </button>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </div>
  );
}
