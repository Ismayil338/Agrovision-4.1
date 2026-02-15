import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toggleTheme } from '../utils/theme';

function Dashboard() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.startsWith('/az') ? 'az' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-black/20 flex flex-col justify-between py-6">
          <div className="flex flex-col gap-8">
            <div className="px-6 flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-black">
                <span className="material-symbols-outlined font-bold">potted_plant</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-none tracking-tight">Agrovision</h1>
                <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">{t('dashboard.plantIntelligence')}</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1 px-3">
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg active-nav text-primary" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">{t('nav.dashboard')}</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" href="#">
                <span className="material-symbols-outlined">center_focus_strong</span>
                <span className="text-sm font-medium">{t('dashboard.scans')}</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" href="#">
                <span className="material-symbols-outlined">map</span>
                <span className="text-sm font-medium">{t('dashboard.fieldMap')}</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" href="#">
                <span className="material-symbols-outlined">description</span>
                <span className="text-sm font-medium">{t('dashboard.reports')}</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">{t('dashboard.settings')}</span>
              </a>
            </nav>
          </div>
          <div className="px-4">
            <button className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-sm">{t('dashboard.startNewScan')}</span>
            </button>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Dashboard Body */}
          <div className="p-8 space-y-8">
            {/* Alerts Section */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined fill-1">warning</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-sm">{t('dashboard.criticalAlert')}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {t('dashboard.criticalAlertDesc')}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                {t('dashboard.viewDetails')}
              </button>
            </div>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">scan</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+12.5%</span>
                </div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t('dashboard.totalScans')}</p>
                <h4 className="text-3xl font-bold mt-1">1,240</h4>
              </div>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+4.2%</span>
                </div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t('dashboard.healthyPlants')}</p>
                <h4 className="text-3xl font-bold mt-1">982</h4>
              </div>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <span className="material-symbols-outlined">coronavirus</span>
                  </div>
                  <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">-2.1%</span>
                </div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t('dashboard.diseasesDetected')}</p>
                <h4 className="text-3xl font-bold mt-1 text-secondary">15</h4>
              </div>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">Stable</span>
                </div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t('dashboard.generalRiskLevel')}</p>
                <h4 className="text-3xl font-bold mt-1">{t('dashboard.low')}</h4>
              </div>
            </div>
            {/* Charts & Maps Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Health Trend Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-lg">{t('dashboard.plantHealthTrend')}</h3>
                    <p className="text-xs text-slate-500">{t('dashboard.weeklyHealth')}</p>
                  </div>
                  <select className="bg-slate-100 dark:bg-white/5 border-none rounded-lg text-xs font-bold py-1 px-3 focus:ring-primary">
                    <option>{t('dashboard.last30Days')}</option>
                    <option>{t('dashboard.last3Months')}</option>
                  </select>
                </div>
                <div className="h-[240px] w-full relative">
                  {/* SVG Chart Visualization */}
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 240">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0df20d" stopOpacity="0.3"></stop>
                        <stop offset="100%" stopColor="#0df20d" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,180 Q100,160 200,120 T400,140 T600,60 T800,40 L800,240 L0,240 Z" fill="url(#chartGradient)"></path>
                    <path d="M0,180 Q100,160 200,120 T400,140 T600,60 T800,40" fill="none" stroke="#0df20d" strokeWidth="3"></path>
                    {/* Points */}
                    <circle cx="200" cy="120" fill="#0df20d" r="4"></circle>
                    <circle cx="400" cy="140" fill="#0df20d" r="4"></circle>
                    <circle cx="600" cy="60" fill="#0df20d" r="4"></circle>
                  </svg>
                  {/* X Axis Labels */}
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                    <span>{t('dashboard.week1')}</span>
                    <span>{t('dashboard.week2')}</span>
                    <span>{t('dashboard.week3')}</span>
                    <span>{t('dashboard.week4')}</span>
                  </div>
                </div>
              </div>
              {/* Map Widget */}
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-lg">{t('dashboard.fieldLocations')}</h3>
                  <p className="text-xs text-slate-500">{t('dashboard.liveScanning')}</p>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden relative bg-slate-200 dark:bg-slate-800 min-h-[200px]">
                  {/* Mock Map */}
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale dark:invert opacity-80"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9PW2_zLrpU3UZS_pyJQy-cOCy4CqyWcOMLtb9AWAHDZE_NzYmVoQYP0atXeOFlnpLaMkLEAo1GOEb442wxo_33t_LP7ydIcK6cumH-Sj96DEi1C7r7YJ7tCbNWjYsU94UTT7aTnfiFnKuSxG6P43ikzwfuFicFT51uTtr_Ewu9c5XX4E0jFVzx-KlVMZ6mH6Cno27eDYJFd5ePXW1R_1NkTv3_yLGZGfb_VVG9QriZClcck2EjbtpEI4yChyVTNVtmsSlyT8ZExo')"
                    }}
                  ></div>
                  {/* Map Markers */}
                  <div className="absolute top-1/4 left-1/3 size-3 bg-primary rounded-full border-2 border-white animate-pulse"></div>
                  <div className="absolute top-2/3 right-1/4 size-3 bg-secondary rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-1/3 left-1/4 size-3 bg-primary rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 p-2 rounded shadow-lg text-[10px] font-bold flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-primary rounded-full"></span> {t('dashboard.healthy')}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-secondary rounded-full"></span> {t('dashboard.alert')}
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full text-xs font-bold text-primary hover:underline flex items-center justify-center gap-1">
                  {t('dashboard.expandMapView')} <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>
            {/* Recent Activity Table */}
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-lg">{t('dashboard.recentFieldActivity')}</h3>
                <button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                  {t('dashboard.viewAllHistory')}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-white/5 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    <tr>
                      <th className="px-6 py-4">{t('dashboard.timestamp')}</th>
                      <th className="px-6 py-4">{t('dashboard.cropType')}</th>
                      <th className="px-6 py-4">{t('dashboard.fieldSector')}</th>
                      <th className="px-6 py-4">{t('dashboard.healthStatus')}</th>
                      <th className="px-6 py-4">{t('dashboard.detection')}</th>
                      <th className="px-6 py-4 text-right">{t('dashboard.action')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                    <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">2 {t('dashboard.minsAgo')}</td>
                      <td className="px-6 py-4 font-bold">{t('dashboard.winterWheat')}</td>
                      <td className="px-6 py-4">{t('dashboard.northFieldA')}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">{t('dashboard.100Healthy')}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 italic">{t('dashboard.noneDetected')}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">15 {t('dashboard.minsAgo')}</td>
                      <td className="px-6 py-4 font-bold">{t('dashboard.goldenPotato')}</td>
                      <td className="px-6 py-4">{t('dashboard.eastFieldB')}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold">{t('dashboard.criticalIssue')}</span>
                      </td>
                      <td className="px-6 py-4 text-secondary font-medium">{t('dashboard.lateBlight')}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">1 {t('dashboard.hourAgo')}</td>
                      <td className="px-6 py-4 font-bold">{t('dashboard.sweetCorn')}</td>
                      <td className="px-6 py-4">{t('dashboard.southFieldC')}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">{t('dashboard.92Healthy')}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{t('dashboard.earlyLeafSpot')}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">3 {t('dashboard.hoursAgo')}</td>
                      <td className="px-6 py-4 font-bold">{t('dashboard.soybean')}</td>
                      <td className="px-6 py-4">{t('dashboard.westFieldD')}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold">{t('dashboard.100Healthy')}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 italic">{t('dashboard.noneDetected')}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
