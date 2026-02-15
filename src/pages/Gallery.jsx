import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Gallery() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.startsWith('/az') ? 'az' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2">{t('gallery.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t('gallery.subtitle')}</p>
          <div className="mt-8 relative max-w-3xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input
              className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-surface-light dark:bg-surface-dark shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400"
              placeholder={t('gallery.searchPlaceholder')}
              type="text"
            />
            <button className="absolute right-2.5 top-2.5 bg-primary text-background-dark font-bold px-6 py-1.5 rounded-lg hover:brightness-90 transition-all">
              {t('gallery.search')}
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                {t('gallery.categories')}
              </h3>
              <div className="space-y-1">
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold" href="#">
                  <span className="material-symbols-outlined">eco</span>
                  <span>{t('gallery.allPlants')}</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                  <span className="material-symbols-outlined">nutrition</span>
                  <span>{t('gallery.vegetables')}</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                  <span className="material-symbols-outlined">restaurant</span>
                  <span>{t('gallery.fruits')}</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
                  <span className="material-symbols-outlined">grass</span>
                  <span>{t('gallery.grains')}</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                {t('gallery.pathogenType')}
              </h3>
              <div className="space-y-3 px-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                  <span className="text-sm group-hover:text-primary transition-colors">{t('gallery.fungal')}</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                  <span className="text-sm group-hover:text-primary transition-colors">{t('gallery.bacterial')}</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                  <span className="text-sm group-hover:text-primary transition-colors">{t('gallery.viral')}</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                  <span className="text-sm group-hover:text-primary transition-colors">{t('gallery.pests')}</span>
                </label>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-accent-orange/10 border border-accent-orange/20">
              <div className="flex items-center gap-2 text-accent-orange mb-2">
                <span className="material-symbols-outlined">warning</span>
                <span className="font-bold text-sm uppercase">{t('gallery.highRiskZone')}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('gallery.highRiskDesc')}</p>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500">{t('gallery.showingCount')}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">{t('gallery.sortBy')}</span>
                <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer">
                  <option>{t('gallery.mostCommon')}</option>
                  <option>{t('gallery.alphabetical')}</option>
                  <option>{t('gallery.severity')}</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500">{t('gallery.diseaseCardsPlaceholder')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
