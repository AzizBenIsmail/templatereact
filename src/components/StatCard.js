export default function StatCard({ label, value, trend, accent = 'from-orange-500 to-pink-500' }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${accent} px-2.5 py-1 text-xs font-semibold text-white`}>
        {trend}
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
