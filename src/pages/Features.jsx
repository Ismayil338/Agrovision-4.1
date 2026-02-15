import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Features() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.startsWith('/az') ? 'az' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 lg:px-40 py-20 text-center">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">{t('features.badge')}</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              {t('features.title')} <span className="text-primary">{t('features.titleHighlight')}</span>
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">{t('features.intro')}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-[#e7f4e7] dark:bg-[#1a331a] px-4 py-2 rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-primary">verified</span>
                {t('features.accuracyBadge')}
              </div>
              <div className="flex items-center gap-2 bg-[#fff1e6] dark:bg-[#332115] px-4 py-2 rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-accent-orange">language</span>
                {t('features.multilingualBadge')}
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-40 py-16 bg-white/50 dark:bg-black/10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">camera_enhance</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('features.instantTitle')}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{t('features.instantDesc')}</p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('features.learnMore')} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              <div className="group p-8 rounded-xl border border-[#fbd3b0] dark:border-[#332115] bg-background-light dark:bg-background-dark hover:border-accent-orange transition-all duration-300">
                <div className="size-14 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">medication</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('features.recoveryTitle')}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{t('features.recoveryDesc')}</p>
                <span className="text-accent-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('features.viewSamples')} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('features.expertTitle')}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{t('features.expertDesc')}</p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('features.joinNow')} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">satellite_alt</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t('features.satelliteTitle')}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{t('features.satelliteDesc')}</p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('features.exploreData')} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 lg:px-40 py-24">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">
                {t('features.techTitle')} <span className="text-accent-orange">{t('features.techTitleHighlight')}</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">network_intelligence</span>
                  <div>
                    <h4 className="font-bold text-lg">{t('features.continuousLearning')}</h4>
                    <p className="opacity-70 text-sm">{t('features.continuousDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">lock</span>
                  <div>
                    <h4 className="font-bold text-lg">{t('features.encryptedPrivacy')}</h4>
                    <p className="opacity-70 text-sm">{t('features.encryptedDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">cloud_sync</span>
                  <div>
                    <h4 className="font-bold text-lg">{t('features.realtimeSync')}</h4>
                    <p className="opacity-70 text-sm">{t('features.realtimeDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  alt="AI diagnostic interface on a smartphone"
                  className="w-full h-[400px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUDffVI57QgxDniBVsAt5GCCBQrQNqgH7X0P4XZHIJRD603UT5HktZgwNxiK_bgi_Ar8D9Ta58osf07Ez-ZEn3ak9b3IgZc6Od18TrUCBeU77WmwGgfd8LPRmsS_sqzfm7OQcTDeiYdCRTN_MIffqNcUMrG1tZUf0JRbGYaVOTgvZSdJKo7_6KnUWsSrP6rMQtO0ZrsyaJ4DtIOUnDNC2nxsTaQQZMxYPvOPrnlQQusI94PEyN9u5KeyT33c4xZ-Wqp8D7_Txiwu4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c0d]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">{t('features.fieldFirstTitle')}</p>
                    <p className="text-sm opacity-80">{t('features.fieldFirstDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Features;
