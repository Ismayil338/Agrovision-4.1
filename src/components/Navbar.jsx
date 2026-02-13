import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Extract language and route from pathname
  const lang = pathname.startsWith('/ru') ? 'ru' : 'en';
  const currentRoute = pathname.replace(`/${lang}`, '') || '/home';
  
  const routes = [
    { path: '/home', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/analysis', label: 'Analysis' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <Link to={`/${lang}/home`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-background-dark">
            <span className="material-symbols-outlined text-2xl font-bold">potted_plant</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Agrovision</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={`/${lang}${route.path}`}
              className={`text-sm font-semibold transition-colors ${
                currentRoute === route.path
                  ? 'text-primary'
                  : 'hover:text-primary'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-slate-200/50 dark:bg-slate-800 p-1">
            <Link
              to={pathname.replace(/^\/(en|ru)/, '/en')}
              className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                lang === 'en'
                  ? 'bg-white dark:bg-slate-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              EN
            </Link>
            <Link
              to={pathname.replace(/^\/(en|ru)/, '/ru')}
              className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                lang === 'ru'
                  ? 'bg-white dark:bg-slate-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              RU
            </Link>
          </div>
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">dark_mode</span>
          </button>
          {/* Login Button */}
          <Link
            to={`/${lang}/login`}
            className="hidden lg:flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-bold text-background-dark hover:brightness-110 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
