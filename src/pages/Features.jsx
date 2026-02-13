import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Features() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ru') ? 'ru' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 lg:px-40 py-20 text-center">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Precision Agriculture</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Intelligent Technology for <span className="text-primary">Healthy Crops</span>
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              Agrovision leverages advanced neural networks and orbital satellite data to detect diseases
              before they spread, providing actionable recovery plans for farmers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-[#e7f4e7] dark:bg-[#1a331a] px-4 py-2 rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-primary">verified</span>
                99% Detection Accuracy
              </div>
              <div className="flex items-center gap-2 bg-[#fff1e6] dark:bg-[#332115] px-4 py-2 rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-accent-orange">language</span>
                Multilingual Support
              </div>
            </div>
          </div>
        </section>
        {/* Feature Grid */}
        <section className="px-6 lg:px-40 py-16 bg-white/50 dark:bg-black/10">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">camera_enhance</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Diagnosis</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  Identify plant stressors in seconds. Our AI analyzes photos to pinpoint infections,
                  nutrient deficiencies, and pests.
                </p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              {/* Card 2 */}
              <div className="group p-8 rounded-xl border border-[#fbd3b0] dark:border-[#332115] bg-background-light dark:bg-background-dark hover:border-accent-orange transition-all duration-300">
                <div className="size-14 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">medication</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Recovery Paths</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  Get precise recommendations. Whether you prefer organic solutions or chemical
                  treatments, we provide the right cure.
                </p>
                <span className="text-accent-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Samples <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              {/* Card 3 */}
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Community</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  Access a global network of agronomists and experienced farmers. Share images and get
                  verified professional advice.
                </p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Join Now <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
              {/* Card 4 */}
              <div className="group p-8 rounded-xl border border-[#cee8ce] dark:border-[#1a331a] bg-background-light dark:bg-background-dark hover:border-primary transition-all duration-300">
                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">satellite_alt</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Satellite Sync</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  Monitor vast fields using NDVI indexing and high-res satellite imagery to spot invisible
                  threats from space.
                </p>
                <span className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Data <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Detailed Tech Section */}
        <section className="px-6 lg:px-40 py-24">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-black">
                Powered by Advanced <span className="text-accent-orange">Neural Networks</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">network_intelligence</span>
                  <div>
                    <h4 className="font-bold text-lg">Continuous Learning</h4>
                    <p className="opacity-70 text-sm">
                      Our AI is trained on over 5 million botanical data points, improving its accuracy with every scan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">lock</span>
                  <div>
                    <h4 className="font-bold text-lg">Encrypted Privacy</h4>
                    <p className="opacity-70 text-sm">
                      Your field data and scan history are fully encrypted and private to your account.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">cloud_sync</span>
                  <div>
                    <h4 className="font-bold text-lg">Real-time Syncing</h4>
                    <p className="opacity-70 text-sm">
                      Instant synchronization between your desktop dashboard and mobile scanner app.
                    </p>
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
                    <p className="font-bold text-xl">The Field-First Interface</p>
                    <p className="text-sm opacity-80">Designed for low-light conditions and outdoor use.</p>
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
