import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ru') ? 'ru' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary dark:text-primary">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  TRUSTED BY 5,000+ FARMERS WORLDWIDE
                </div>
                <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white lg:text-7xl">
                  Protect Your Harvest with <span className="text-primary">Precision AI</span>
                </h1>
                <p className="max-w-[540px] text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Identify plant diseases instantly using advanced computer vision. Agrovision provides
                  accurate, fast diagnostics to ensure your crops thrive and your yields maximize.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/${lang}/login`}
                    className="flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-background-dark hover:scale-105 transition-transform"
                  >
                    <span className="material-symbols-outlined">rocket_launch</span>
                    Get Started
                  </Link>
                  <Link
                    to={`/${lang}/analysis`}
                    className="flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-accent/20"
                  >
                    <span className="material-symbols-outlined">query_stats</span>
                    Try Analysis
                  </Link>
                </div>
              </div>
              {/* Hero Image / Analysis Preview */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 opacity-20 blur group-hover:opacity-30 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyKRxv1rcgXNb5b5ezZDGsFROwgfgsteZeTAfNa2hCUmzrGog07dKG-vCJNG1lkvIwKLx-yJiEzc42vuMlmnr5AsYuA5lgLG57tngW6m8b2f1xplE8pIGm1_cKMEOvnyRcCg0vPHen_3wJp7mGxHp6GetSKw33XIN---zIEZzzW3ESSQI9BVLz5grUp4_J-5n_GgBSgsmchjk9jQhXac1teaWUYXHsj0M-qQAVGYo1dPGbTgs5ijkVq3eJdJ7YnuCPXp-z_R94Vvg')"
                    }}
                  ></div>
                  {/* Floating Analysis UI */}
                  <div className="absolute bottom-6 right-6 w-64 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">AI Scan Status</span>
                      <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/20">
                        <div className="h-full w-[94%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">Healthy Crop</span>
                        <span className="text-sm font-bold">99.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold dark:text-white">Advanced Agrotech Features</h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                We combine decades of botanical research with cutting-edge neural networks to provide the most reliable diagnostics on the market.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white">AI Precision</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our models are trained on over 2 million labeled images of crop diseases with 99.4% field accuracy.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">speed</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white">Instant Diagnostics</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Upload a photo and get a detailed health report including treatment suggestions in under 3 seconds.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                  <span className="material-symbols-outlined text-3xl">language</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white">Global Reach</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Full native support for English and Russian, including local crop varieties and regional disease strains.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="mx-auto max-w-[1280px] px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl bg-background-dark px-8 py-16 text-center shadow-2xl">
            {/* Abstract Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #0df20d 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl font-black text-white lg:text-5xl">Ready to secure your next harvest?</h2>
              <p className="max-w-2xl text-lg text-slate-400">
                Join the thousands of smart farmers using Agrovision to detect issues before they spread. Start your first analysis today for free.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link
                  to={`/${lang}/login`}
                  className="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-background-dark hover:brightness-110"
                >
                  Create Account
                </Link>
                <Link
                  to={`/${lang}/contact`}
                  className="rounded-xl border border-slate-700 bg-slate-800/50 px-10 py-4 text-lg font-bold text-white backdrop-blur hover:bg-slate-700"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
