import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AnimalDetailPage from './pages/AnimalDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryAnimalsPage from './pages/CategoryAnimalsPage';
import SheltersPage from './pages/SheltersPage';
import AdoptionPage from './pages/AdoptionPage';
import DashboardPage from './pages/DashboardPage';
import UserManagement from './components/UserManagement';
import NotFoundPage from './pages/NotFoundPage';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './i18n/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/animals" element={<AnimalsPage />} />
              <Route path="/animals/:id" element={<AnimalDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:category" element={<CategoryAnimalsPage />} />
              <Route path="/shelters" element={<SheltersPage />} />
              <Route path="/adoption/:animalId" element={<AdoptionPage />} />
              <Route path="/adoption" element={<AdoptionPage />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="animals" element={<AnimalsPage />} />
              <Route path="applications" element={<DashboardPage />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="settings" element={<DashboardPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
