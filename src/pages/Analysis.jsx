import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Analysis() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ru') ? 'ru' : 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar: Recent Scans */}
      <aside className="w-80 flex-shrink-0 border-r border-[#cee8ce] dark:border-[#2a4d2a] bg-surface-light dark:bg-surface-dark flex flex-col">
        <div className="p-6 border-b border-[#cee8ce] dark:border-[#2a4d2a] flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined font-bold">potted_plant</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Agrovision</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#499c49]">
              Recent Scans
            </span>
            <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">history</span>
          </div>
          {/* History Items */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/20 transition-all">
              <div
                className="size-12 rounded-lg bg-cover bg-center shrink-0"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmYjXur7cMEMEQppbKoLPSZtoNnvef0omsWCxLqtrpApGK52cEITc8gwy-MRBZQhpbFzWhpYFCZt4gVo40LJIXw7W7sWST-USqRGxMdm6cWe6MAJY3Tj8uQDoMxXgr8v1TFwsMM-JkzMOR6mnRsOCt_UV_7CRwPT--xzfKGpm1mlIm9qgsozYZxMsZETm4-sjk0DQnIpRA4BEBWWPQ_AmMQA_a24J0tRNRXnauwM5-kdcnhzoedFWTlq9YE3zashVTK1EXh05xj1I')"
                }}
              ></div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Tomato Leaf - Healthy</p>
                <p className="text-xs text-[#499c49]">12-05-2023 • 14:20</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-all border border-transparent">
              <div
                className="size-12 rounded-lg bg-cover bg-center shrink-0 grayscale"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaJXw0gz4hkIdpsrgdNdQEkLPr4Q0cbzEEreugpM0wPlme_E_-8tZutG4fU6_m0robkUFSIIbE7W6cF2CgkaPnDFP2vLe661jt1wuD6U5BL60W6vBq6CUfztEINF82IG_LSM3aKqv7r5dxgdd1JpokzGbsMQaH9CgVibQkLiHicdWsIFHRdnn-dxXw58L5ijrWynW9Ar1NDHOsI5GwTYa7lJPcYBQ3Egx3n6YVpqCjrLTjxTFjTOmRidJhwxNePsYcmjVmwtXqJt4')"
                }}
              ></div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Potato Leaf - Late Blight</p>
                <p className="text-xs text-[#499c49]">11-05-2023 • 09:15</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-all border border-transparent">
              <div
                className="size-12 rounded-lg bg-cover bg-center shrink-0 grayscale"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMJLcNF6l87yj01ljrZQWH_sid-dCpQQGCmeV-nGfKnexx8_5uDb76R4an7Rg5_AM6dPW5zZ5hy4_QN80PIY9CSOHWwKvKI3SK0ZzL2S-XssGntbloYN-wlcfy5vK6uDtrYNga87WxRi4-bRfq0Llex2mvh1am1MbXDnHymcUvm70dd7P4UxxBnFok0m9L109pVFHn-I64AC2_m2qYQGNBAOe1afh50xChmh_kv1UmiForFHElXYd7Y8UhBJ64Pe3aEoQ6fBfFclU')"
                }}
              ></div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Apple Leaf - Cedar Rust</p>
                <p className="text-xs text-[#499c49]">10-05-2023 • 17:45</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-[#cee8ce] dark:border-[#2a4d2a]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img
                alt="User Avatar"
                className="size-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQs-EW4hP9LOAMNKhrY7AaSiMrIJalGyMxZMYkExmYjTygmsOrDWJQtdbRL_br_dakstjHMcTEYwx3v2Z0z9hu1LOI1t5wU9P28Hl4LSxvhjlHVNhsUSP2buQ1uCpfICD9rZxZBm-MpUg0kesjBzk1wxiJDRgrKvSdw9BbborMdA6q5LBOufFP9KYiO6HeOVUcgU4VbpD1sukuoPjai5BqXHR-S2Htfckt6Pqiy1TBOx4YwAVqE_CHgs1yiCbnUW59hdNh_VXdNAw"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Dr. Alex Green</p>
              <p className="text-xs text-[#499c49]">Premium Plan</p>
            </div>
            <span className="material-symbols-outlined text-[#499c49] cursor-pointer">settings</span>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Analysis Workspace */}
        <div className="p-8 max-w-5xl mx-auto w-full flex flex-col gap-8">
          <section className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight">Plant Disease Analysis</h1>
            <p className="text-[#499c49] text-lg max-w-2xl">
              Leverage AI-driven computer vision to identify crop diseases instantly. Upload high-resolution
              photos for the best accuracy.
            </p>
          </section>
          {/* Central Upload Zone */}
          <div className="relative group">
            <div className="flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-[#cee8ce] dark:border-[#2a4d2a] rounded-3xl bg-surface-light dark:bg-surface-dark hover:border-primary transition-all p-12 text-center">
              {/* Initial State */}
              <div className="flex flex-col items-center gap-6">
                <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined !text-5xl">cloud_upload</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Upload Image to Begin</h3>
                  <p className="text-[#499c49] max-w-md mx-auto">
                    Drag and drop your plant photo here or click to browse files. Supports JPEG, PNG
                    (Max 10MB).
                  </p>
                </div>
                <button className="mt-4 px-8 py-3 bg-primary text-background-dark font-bold rounded-xl hover:shadow-[0_0_20px_rgba(13,242,13,0.3)] transition-all">
                  Select File
                </button>
              </div>
            </div>
          </div>
          {/* Detect Button Area */}
          <div className="flex flex-col items-center gap-6 pb-12">
            <button className="w-full max-w-md py-5 bg-accent-orange text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-[#e67e00] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined !text-3xl">biotech</span>
              Detect Disease
            </button>
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#499c49]/60">
              AI Analysis powered by Agrovision Core™
            </p>
          </div>
          {/* Feature Grid (Secondary Content) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-[#cee8ce] dark:border-[#2a4d2a] space-y-3">
              <span className="material-symbols-outlined text-primary !text-3xl">shutter_speed</span>
              <h4 className="font-bold">Fast Detection</h4>
              <p className="text-sm text-[#499c49]">Results in under 2 seconds using edge-computing AI models.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-[#cee8ce] dark:border-[#2a4d2a] space-y-3">
              <span className="material-symbols-outlined text-primary !text-3xl">verified_user</span>
              <h4 className="font-bold">98.4% Accuracy</h4>
              <p className="text-sm text-[#499c49]">Trained on over 2 million plant samples across 40+ species.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-[#cee8ce] dark:border-[#2a4d2a] space-y-3">
              <span className="material-symbols-outlined text-primary !text-3xl">medical_services</span>
              <h4 className="font-bold">Treatment Guide</h4>
              <p className="text-sm text-[#499c49]">Receive instant biological and chemical control suggestions.</p>
            </div>
          </div>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}

export default Analysis;
