import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toggleTheme } from '../utils/theme';

function Login() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.startsWith('/az') ? 'az' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-background-dark">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCniXFZEPTVeFQyY9ED48KtSKc1M7dGidez0gdQKvj8JMw2ZYjFhoU167lGgk3K783UdFke8ud1u3N-DEsrO69zCDdQX89fGbXTyuVZyTLoaJLM9Z7M30xh1x-_TjcTD05Owm57Uon7dCObFLd35mFxxPne1EDFVf2Y6rSvR7PNsV9r40HchqW8sOiEuSyl_jYXlEnxBrIlILZ__cJiQyaYkWzouiTZ2dScVTtw5FeQ8MSXIHLN9xVVSYxKb8GDKk2OVAdynrGGO_c')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          <div className="relative z-10 p-12 max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                <span className="material-symbols-outlined font-bold">agriculture</span>
              </div>
              <h1 className="text-white text-4xl font-bold tracking-tight">Agrovision</h1>
            </div>
            <h2 className="text-white text-5xl font-bold leading-tight mb-6">
              {t('login.tagline')}
            </h2>
            <p className="text-primary/90 text-xl font-medium">
              {t('login.subtagline')}
            </p>
            <div className="mt-12 flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">98%</span>
                <span className="text-sm text-slate-300">{t('login.accuracyRate')}</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-slate-300">{t('login.cropTypes')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 bg-background-light dark:bg-background-dark">
          <div className="absolute top-8 right-8 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors"
            >
              <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined hidden dark:block">light_mode</span>
            </button>
            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg">
              <button className="px-3 py-1 rounded text-xs font-bold bg-primary text-background-dark">EN</button>
              <button className="px-3 py-1 rounded text-xs font-bold text-slate-500 dark:text-slate-400">AZ</button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
                <span className="material-symbols-outlined text-lg font-bold">agriculture</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Agrovision</h2>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t('login.welcomeBack')}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t('login.enterDetails')}
              </p>
            </div>
            <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8">
              <button className="pb-4 px-6 text-sm font-bold border-b-2 border-primary text-slate-900 dark:text-white">
                {t('login.loginTab')}
              </button>
              <button className="pb-4 px-6 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                {t('login.signupTab')}
              </button>
            </div>
            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm font-semibold">GitHub</span>
              </button>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500">
                  {t('login.orContinueWith')}
                </span>
              </div>
            </div>
            {/* Main Form */}
            <form action="#" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                  {t('login.emailAddress')}
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-3 px-4 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="email"
                    name="email"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="password">
                    {t('login.password')}
                  </label>
                  <a className="text-sm font-bold text-primary hover:text-primary/80" href="#">
                    {t('login.forgotPassword')}
                  </a>
                </div>
                <div className="mt-1 relative">
                  <input
                    autoComplete="current-password"
                    className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-3 px-4 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="password"
                    name="password"
                    required
                    type="password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </div>
                <p className="mt-2 text-xs text-secondary-orange hidden">Invalid password. Please try again.</p>
              </div>
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">
                  {t('login.rememberMe')}
                </label>
              </div>
              <button
                className="flex w-full justify-center items-center rounded-lg bg-primary py-3 px-4 text-sm font-bold text-background-dark shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-[0.98]"
                type="submit"
              >
                {t('login.signIn')}
              </button>
            </form>
            <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-500">
              {t('login.termsAgree')}
              <a className="font-bold text-slate-700 dark:text-slate-300 hover:underline" href="#">
                {' '}{t('login.termsOfService')}
              </a>
              {' '}{t('login.and')}{' '}
              <a className="font-bold text-slate-700 dark:text-slate-300 hover:underline" href="#">
                {t('login.privacyPolicy')}
              </a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
