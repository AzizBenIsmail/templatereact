import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
