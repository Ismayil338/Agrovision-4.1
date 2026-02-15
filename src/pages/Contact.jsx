import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.startsWith('/az') ? 'az' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-20 py-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">{t('contact.title')}</h2>
            <p className="max-w-2xl text-lg text-[#499c49] dark:text-[#88c088]">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <section>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold uppercase tracking-wider opacity-70">
                      {t('contact.fullName')}
                    </label>
                    <input
                      className="w-full rounded-lg border border-[#cee8ce] dark:border-[#2d4d2d] bg-white dark:bg-[#162a16] p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:opacity-50"
                      placeholder={t('contact.fullNamePlaceholder')}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold uppercase tracking-wider opacity-70">
                      {t('contact.email')}
                    </label>
                    <input
                      className="w-full rounded-lg border border-[#cee8ce] dark:border-[#2d4d2d] bg-white dark:bg-[#162a16] p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:opacity-50"
                      placeholder={t('contact.emailPlaceholder')}
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider opacity-70">
                    {t('contact.subject')}
                  </label>
                  <select className="w-full rounded-lg border border-[#cee8ce] dark:border-[#2d4d2d] bg-white dark:bg-[#162a16] p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option>{t('contact.generalInquiry')}</option>
                    <option>{t('contact.technicalSupport')}</option>
                    <option>{t('contact.partnership')}</option>
                    <option>{t('contact.feedback')}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider opacity-70">
                    {t('contact.message')}
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-[#cee8ce] dark:border-[#2d4d2d] bg-white dark:bg-[#162a16] p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:opacity-50"
                    placeholder={t('contact.messagePlaceholder')}
                    rows="5"
                  ></textarea>
                </div>
                <button
                  className="w-full md:w-auto min-w-[200px] h-14 rounded-lg bg-brand-orange text-white font-bold text-lg hover:brightness-110 shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined">send</span>
                  {t('contact.sendMessage')}
                </button>
              </form>
            </section>
            <aside className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-primary/10 dark:bg-primary/5 border border-primary/20">
                  <span className="material-symbols-outlined text-primary mb-3">location_on</span>
                  <h4 className="font-bold text-lg mb-1">{t('contact.ourOffices')}</h4>
                  <p className="text-sm opacity-80">123 Green Ave, Silicon Valley, CA</p>
                  <p className="text-sm opacity-80">Ulitsa Lenina 45, Moscow, RU</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/10 dark:bg-primary/5 border border-primary/20">
                  <span className="material-symbols-outlined text-primary mb-3">call</span>
                  <h4 className="font-bold text-lg mb-1">{t('contact.callUs')}</h4>
                  <p className="text-sm opacity-80">+1 (555) 000-1234</p>
                  <p className="text-sm opacity-80">+7 (495) 123-4567</p>
                </div>
              </div>
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-[#cee8ce] dark:border-[#2d4d2d] shadow-inner bg-slate-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://placeholder.pics/svg/300')"
                  }}
                >
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-1/3 size-6 bg-brand-orange rounded-full border-4 border-white animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 size-6 bg-primary rounded-full border-4 border-white animate-pulse"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 dark:bg-black/80 backdrop-blur rounded-lg flex items-center justify-between">
                  <span className="text-xs font-bold uppercase">{t('contact.liveLocation')}</span>
                  <button className="text-xs font-bold text-primary underline">{t('contact.openInMaps')}</button>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] opacity-60">
                  {t('contact.followUpdates')}
                </h4>
                <div className="flex gap-4">
                  <a
                    className="size-12 rounded-lg bg-[#e7f4e7] dark:bg-[#1d3d1d] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    className="size-12 rounded-lg bg-[#e7f4e7] dark:bg-[#1d3d1d] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    className="size-12 rounded-lg bg-[#e7f4e7] dark:bg-[#1d3d1d] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.011-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
