import { useState, useEffect, FormEvent } from 'react';
import { 
  BarChart3, 
  ChevronRight, 
  Database, 
  LayoutDashboard, 
  Lock, 
  LogOut, 
  Mail, 
  Menu, 
  Plus, 
  Search, 
  Settings, 
  Shield, 
  Star, 
  Trash2, 
  User as UserIcon, 
  X,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  TrendingUp,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthService, User } from './lib/storage';

// --- TYPES ---
type Page = 'landing' | 'login' | 'signup' | 'forgot-password' | 'dashboard' | 'admin';

// --- COMPONENTS ---

const Navbar = ({ onNavigate, currentUser }: { onNavigate: (p: Page) => void, currentUser: User | null }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">N</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Nexus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">المميزات</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">الأسعار</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">الأسئلة الشائعة</a>
        </div>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <button 
              onClick={() => onNavigate('dashboard')}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 border-none"
            >
              لوحة التحكم
            </button>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('login')}
                className="text-sm font-semibold text-slate-700 hover:text-indigo-600 px-3 bg-transparent border-none cursor-pointer"
              >
                تسجيل الدخول
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 border-none"
              >
                إنشاء حساب
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 border-t pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6 cursor-pointer">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">N</div>
          <span className="text-xl font-bold text-slate-900">Nexus</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          بناء الجيل القادم من البنية التحتية الرقمية للفرق عالية الأداء في جميع أنحاء العالم.
        </p>
        <div className="flex gap-4">
          <Twitter className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
          <Github className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">المنتج</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li className="hover:text-indigo-600 cursor-pointer">المميزات</li>
          <li className="hover:text-indigo-600 cursor-pointer">التكاملات</li>
          <li className="hover:text-indigo-600 cursor-pointer">سجل التغييرات</li>
          <li className="hover:text-indigo-600 cursor-pointer">خارطة الطريق</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">المصادر</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li className="hover:text-indigo-600 cursor-pointer">الوثائق</li>
          <li className="hover:text-indigo-600 cursor-pointer">مرجع API</li>
          <li className="hover:text-indigo-600 cursor-pointer">المجتمع</li>
          <li className="hover:text-indigo-600 cursor-pointer">مركز المساعدة</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">النشرة الإخبارية</h4>
        <p className="text-sm text-slate-500 mb-4">احصل على آخر التحديثات مباشرة إلى بريدك الوارد.</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="عنوان البريد الإلكتروني" 
            className="bg-white border text-sm px-4 py-2 rounded-lg w-full outline-none focus:ring-2 ring-indigo-100"
          />
          <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 border-none cursor-pointer">
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between text-slate-400 text-xs">
      <p>&copy; 2026 منصة نكسوس SaaS. جميع الحقوق محفوظة.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-slate-600 cursor-pointer">سياسة الخصوصية</span>
        <span className="hover:text-slate-600 cursor-pointer">شروط الخدمة</span>
        <span className="hover:text-slate-600 cursor-pointer">إعدادات الكوكيز</span>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const LandingPage = ({ onNavigate, currentUser }: { onNavigate: (p: Page) => void, currentUser: User | null }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar onNavigate={onNavigate} currentUser={currentUser} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              الإصدار 2.0 متاح الآن
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              أدِر إمبراطورية الـ <span className="text-indigo-600">SaaS</span> الخاصة بك بدقة.
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              المنصة المثالية لتوسع الشركات الناشئة. إدارة المستخدمين، التحليلات، والنمو لا يجب أن تكون عائقاً لك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all hover:scale-[1.02] shadow-xl shadow-indigo-200 border-none cursor-pointer"
              >
                ابدأ الآن مجاناً <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer">
                عرض العرض التوضيحي
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <span className="font-bold text-xl uppercase tracking-tighter">STRIPE</span>
              <span className="font-bold text-xl uppercase tracking-tighter">MICROSOFT</span>
              <span className="font-bold text-xl uppercase tracking-tighter">SHOPIFY</span>
              <span className="font-bold text-xl uppercase tracking-tighter">META</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/900" 
                alt="Nexus Dashboard Preview" 
                className="rounded-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border w-64 hidden xl:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Growth</p>
                  <p className="text-xl font-bold">+124%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold text-right">Target reached</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">لماذا نكسوس؟</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">مصممة لخدمة الويب الحديثة.</h3>
            <p className="text-lg text-slate-500">كل ما تحتاجه لإطلاق منتجاتك بشكل أسرع وأكثر موثوقية وبكفاءة عالية.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'أمان افتراضي', desc: 'بروتوكولات أمان من درجة المؤسسات مدمجة في كل طبقة من بنيتك التحتية.' },
              { icon: BarChart3, title: 'تحليلات عميقة', desc: 'افهم كل تفاعل للمستخدم من خلال تتبع الأحداث والتقارير عالية الدقة.' },
              { icon: Database, title: 'بنية تحتية قوية', desc: 'شبكة حافة عالمية فائقة السرعة مع اتفاقية مستوى خدمة 99.99% لتطبيقاتك الحساسة.' },
              { icon: Users, title: 'تعاون الفريق', desc: 'أنظمة أذونات مدمجة متعددة المستأجرين للمؤسسات من أي حجم.' },
              { icon: Lock, title: 'وصول متقدم', desc: 'ضوابط RBAC دقيقة وتكامل SSO مع GitHub و Google و Okta.' },
              { icon: LayoutDashboard, title: 'إدارة بديهية', desc: 'مركز قيادة يمنحك تحكماً كاملاً في إدارة المستخدمين والفوترة.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">خطط الأسعار</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">توسع بسيط وشفاف.</h3>
            <p className="text-lg text-slate-500">ابدأ مجانًا، ثم قم بالترقية مع نمو عملك. لا توجد رسوم خفية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'البداية', price: '0', desc: 'مثالي للمشاريع الجانبية.', features: ['حتى 1000 مستخدم', 'تحليلات أساسية', 'دعم المجتمع'] },
              { name: 'المحترف', price: '49', desc: 'للشركات المتنامية.', features: ['حتى 10 آلاف مستخدم', 'تحليلات عميقة', 'دعم ذو أولوية', 'نطاقات مخصصة'], recommended: true },
              { name: 'المؤسسات', price: 'مخصص', desc: 'حلول مخصصة للمؤسسات الكبيرة.', features: ['مستخدمون غير محدودين', 'اتفاقية مستوى خدمة مخصصة', 'مدير حساب مخصص', 'SSO وسجلات التدقيق'] },
            ].map((tier, i) => (
              <div 
                key={i}
                className={`relative p-10 rounded-3xl border ${tier.recommended ? 'border-indigo-600 ring-4 ring-indigo-50 bg-white' : 'border-slate-200 bg-white'} flex flex-col`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    موصى به
                  </div>
                )}
                <h4 className="text-lg font-bold text-slate-900 mb-2">{tier.name}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  {tier.price !== 'Custom' && <span className="text-4xl font-extrabold text-slate-900 leading-none">$</span>}
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight leading-none">{tier.price}</span>
                  {tier.price !== 'مخصص' && <span className="text-slate-500 text-sm font-medium">/شهرياً</span>}
                </div>
                <p className="text-sm text-slate-500 mb-8">{tier.desc}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 ml-3" /> {f}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all border-none cursor-pointer ${tier.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                  {tier.price === 'مخصص' ? 'اتصل بالمبيعات' : 'ابدأ الآن'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-4xl font-extrabold text-slate-900 mb-6">الأسئلة الشائعة</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: 'هل هناك حد لعدد مكالمات واجهة البرمجيات (API)؟', a: 'في باقة المحترفين، تحصل على ما يصل إلى 500,000 مكالمة API شهريًا. يمكن لمستخدمي المؤسسات الاستمتاع بحجم غير محدود مع تحديد معدل مخصص.' },
              { q: 'ما مدى أمان بياناتي؟', a: 'يستخدم نكسوس تشفير AES-256 للبيانات المخزنة وتشفير TLS 1.3 للبيانات المنتقلة. بنيتنا التحتية متوافقة مع SOC 2 Type II و GDPR.' },
              { q: 'هل يمكنني الإلغاء في أي وقت؟', a: 'بالتأكيد. نقدم دورة فوترة شهرية يمكنك إنهاؤها في نهاية أي فترة دون غرامة.' },
              { q: 'هل تقدمون تكاملات مخصصة؟', a: 'نعم، يمكن لفريق دعم المؤسسات لدينا المساعدة في بناء موصلات مخصصة لأدواتك الداخلية ومصادر بياناتك المتخصصة.' },
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-slate-900">{item.q}</span>
                  <Plus className="w-5 h-5 text-slate-400 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_120%,#FFFFFF,transparent)]"></div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative">هل أنت جاهز لتسريع <br />تطويرك؟</h3>
            <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto relative opacity-90 leading-relaxed">
              انضم إلى أكثر من 5000 شركة تبني مستقبلها بالفعل على نكسوس. ابدأ في أقل من 5 دقائق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
               <button 
                onClick={() => onNavigate('signup')}
                className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-lg shadow-xl border-none cursor-pointer"
              >
                اشترك الآن <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const LoginPage = ({ onNavigate, onLogin }: { onNavigate: (p: Page) => void, onLogin: (u: User) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const result = AuthService.login(email, password);
    if (result.success && result.user) {
      onLogin(result.user);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-slate-100"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 cursor-pointer" onClick={() => onNavigate('landing')}>N</div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">مرحباً بك مجدداً</h1>
          <p className="text-slate-500 mt-2">أدخل بيانات اعتمادك للوصول إلى حسابك</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl border border-red-100 text-center">{error}</div>}
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">عنوان البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 px-1">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">كلمة المرور</label>
              <button 
                type="button"
                onClick={() => onNavigate('forgot-password')}
                className="text-xs font-bold text-indigo-600 hover:underline bg-transparent border-none cursor-pointer"
              >
                هل نسيت كلمة المرور؟
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 border-none cursor-pointer"
          >
            الدخول إلى لوحة التحكم
          </button>
        </form>

        <p className="mt-10 text-center text-slate-500 text-sm">
          ليس لديك حساب؟ <button onClick={() => onNavigate('signup')} className="text-indigo-600 font-bold hover:underline bg-transparent border-none cursor-pointer">أنشئ حساباً</button>
        </p>
      </motion.div>
    </div>
  );
};

const SignupPage = ({ onNavigate }: { onNavigate: (p: Page) => void }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const result = AuthService.signup(fullName, email, password);
    if (result.success) {
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => onNavigate('login'), 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-slate-100"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 cursor-pointer" onClick={() => onNavigate('landing')}>N</div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">إنشاء حساب</h1>
          <p className="text-slate-500 mt-2">انضم إلى أكثر من 5000 مطور على نكسوس</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl border border-red-100 text-center">{error}</div>}
          {success && <div className="p-3 bg-emerald-50 text-emerald-600 text-sm font-bold rounded-xl border border-emerald-100 text-center">{success}</div>}
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">الاسم الكامل</label>
            <div className="relative">
              <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="فلان الفلاني" 
                className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">عنوان البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1 block">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 border-none cursor-pointer"
          >
            إنشاء حسابي
          </button>
        </form>

        <p className="mt-10 text-center text-slate-500 text-sm">
          هل لديك حساب بالفعل؟ <button onClick={() => onNavigate('login')} className="text-indigo-600 font-bold hover:underline bg-transparent border-none cursor-pointer">تسجيل الدخول</button>
        </p>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }: { user: User, onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [updateMsg, setUpdateMsg] = useState('');

  const handleUpdateProfile = (e: FormEvent) => {
    e.preventDefault();
    const res = AuthService.updateProfile(user.id, { fullName, email });
    if (res.success) {
      setUpdateMsg(res.message);
      setTimeout(() => setUpdateMsg(''), 3000);
    }
  };

  const navItems = [
    { id: 'home', label: 'نظرة عامة', icon: LayoutDashboard },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'profile', label: 'الملف الشخصي', icon: UserIcon },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r h-screen sticky top-0 flex flex-col transition-all overflow-hidden z-20"
      >
        <div className="p-6 flex items-center justify-between mb-8">
          {isSidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="font-bold text-slate-900">Nexus</span>
            </div>
          ) : (
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto">N</div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-slate-100 rounded text-slate-400 bg-transparent border-none cursor-pointer">
            {isSidebarOpen ? <X className="w-5 h-5 mx-auto" /> : <Menu className="w-5 h-5 mx-auto" />}
          </button>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all border-none cursor-pointer ${activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 bg-transparent hover:bg-slate-50 hover:text-slate-600'}`}
            >
              <item.icon className={`w-6 h-6 flex-shrink-0 ${!isSidebarOpen && 'mx-auto'}`} />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button 
            onClick={onLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all bg-transparent border-none cursor-pointer`}
          >
            <LogOut className={`w-6 h-6 flex-shrink-0 ${!isSidebarOpen && 'mx-auto'}`} />
            {isSidebarOpen && <span>تسجيل الخروج</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeTab === 'home' && `مرحباً بك، ${user.fullName.split(' ')[0]}!`}
              {activeTab === 'analytics' && 'التحليلات'}
              {activeTab === 'profile' && 'الملف الشخصي'}
              {activeTab === 'settings' && 'الإعدادات'}
            </h1>
            <p className="text-slate-400 mt-1">إليك ما يحدث في مشاريعك حالياً.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative hidden md:block border-none">
               <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
               <input type="text" placeholder="بحث..." className="bg-white border rounded-full px-10 py-2 text-sm text-slate-600 outline-none focus:ring-2 ring-indigo-50 w-64" />
             </div>
             <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold uppercase overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100 cursor-pointer">
                {user.fullName.charAt(0)}
             </div>
          </div>
        </header>

        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'إجمالي الطلبات', val: '43.2k', change: '+12%', icon: BarChart3, color: 'indigo' },
                { label: 'معدل النجاح', val: '99.98%', change: '+0.1%', icon: CheckCircle2, color: 'emerald' },
                { label: 'المشاريع النشطة', val: '12', change: '+2', icon: Database, color: 'amber' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl ${stat.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{stat.change}</span>
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">{stat.label}</p>
                  <p className="text-3xl font-extrabold text-slate-900">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-extrabold text-slate-900">الأداء الأسبوعي</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div> الطلبات
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div> زمن الاستجابة
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-end gap-3 md:gap-4 lg:gap-6">
                 {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                   <div key={i} className="flex-grow flex flex-col items-center h-full">
                     <div className="w-full bg-slate-50 rounded-t-xl relative overflow-hidden h-full">
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="absolute bottom-0 w-full bg-indigo-600/90 rounded-t-xl"
                       ></motion.div>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-slate-400 mt-4">{['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'][i]}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
             <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mb-6">
                <TrendingUp className="w-10 h-10" />
             </div>
             <h3 className="text-2xl font-extrabold text-slate-900 mb-2">التحليلات المتقدمة الاحترافية</h3>
             <p className="text-slate-400 max-w-sm mb-8">قم بترقية خطتك لفتح خرائط حرارة المستخدم في الوقت الفعلي، وتحليل المسار، وتتبع الأحداث المخصصة.</p>
             <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all border-none cursor-pointer">استكشف ميزات المحترفين</button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-sm p-10 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 pb-10 border-b">
               <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold uppercase shadow-xl ring-8 ring-indigo-50">
                  {user.fullName.charAt(0)}
               </div>
               <div className="text-center sm:text-right">
                  <h3 className="text-2xl font-extrabold text-slate-900">{user.fullName}</h3>
                  <p className="text-slate-400">حساب شخصي &bull; عضو منذ {new Date(user.createdAt).toLocaleDateString('ar-EG')}</p>
                  <div className="flex gap-2 mt-3 justify-center sm:justify-start">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider">خطة البداية</span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold uppercase tracking-wider">نشط</span>
                  </div>
               </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-6">
              {updateMsg && <div className="p-3 bg-emerald-50 text-emerald-600 text-sm font-bold rounded-xl border border-emerald-100 mb-6">{updateMsg}</div>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 mr-1">الاسم الكامل</label>
                    <input 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 mr-1">عنوان البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
                    />
                 </div>
              </div>
              <div className="pt-4">
                 <button type="submit" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 border-none cursor-pointer">
                   حفظ التغييرات
                 </button>
              </div>
            </form>
          </div>
        )}

        {(activeTab === 'settings') && (
           <div className="max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-sm p-10">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">إعدادات الأمان</h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div>
                       <p className="font-bold text-slate-900">المصادقة الثنائية</p>
                       <p className="text-xs text-slate-500">قم بتأمين حسابك بطبقة إضافية من الأمان.</p>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div>
                       <p className="font-bold text-slate-900">رموز وصول API</p>
                       <p className="text-xs text-slate-500">إدارة المفاتيح لبناء التكاملات الخاصة بك.</p>
                    </div>
                    <button className="text-indigo-600 text-xs font-bold font-sans bg-transparent border-none cursor-pointer uppercase tracking-widest">إدارة</button>
                 </div>
                 <button className="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold text-sm hover:bg-red-100 transition-all border-none cursor-pointer">
                    إلغاء تنشيط الحساب
                 </button>
              </div>
           </div>
        )}

      </main>
    </div>
  );
};

const AdminPanel = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (isAdminLoggedIn) {
      setUsers(AuthService.getUsers());
    }
  }, [isAdminLoggedIn]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAdminLoggedIn(true);
    } else {
      setError('Invalid admin credentials.');
    }
  };

  const handleDeleteUser = (id: string) => {
    if (window.confirm('هل أنت متأكد أنك تريد حذف هذا المستخدم؟')) {
      AuthService.deleteUser(id);
      setUsers(AuthService.getUsers());
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-mono">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-slate-800 rounded-3xl border border-slate-700 p-10 text-white shadow-[0_0_50px_rgba(79,70,229,0.1)]"
        >
          <div className="flex flex-col items-center mb-8">
            <Shield className="w-12 h-12 text-indigo-500 mb-4" />
            <h1 className="text-2xl font-bold tracking-tighter uppercase mb-2">محطة نكسوس الإدارية</h1>
            <p className="text-slate-400 text-xs">مطلوب وصول مرتفع [ADMIN_ROOT]</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="p-3 bg-red-900/50 border border-red-700 text-red-200 text-xs font-bold rounded-lg text-center">{error}</div>}
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="اسم المستخدم" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-indigo-400 placeholder:text-slate-700 outline-none focus:border-indigo-500 transition-all font-mono"
              />
              <input 
                type="password" 
                placeholder="كلمة المرور الجذرية" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-indigo-400 placeholder:text-slate-700 outline-none focus:border-indigo-500 transition-all font-mono"
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all border-none cursor-pointer">
              بدء الجلسة
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">مركز تحكم الإدارة</h1>
            <p className="text-slate-400 mt-1">إدارة كافة مستخدمي نظام نكسوس</p>
          </div>
          <button 
            onClick={() => setIsAdminLoggedIn(false)}
            className="px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold border-none cursor-pointer"
          >
            تسجيل الخروج من المحطة
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
           {[
             { label: 'إجمالي المستخدمين', val: users.length, color: 'text-slate-900' },
             { label: 'الأنظمة النشطة', val: '4', color: 'text-slate-900' },
             { label: 'حالة الشبكة', val: 'تعمل كالمعتاد', color: 'text-emerald-500' },
             { label: 'وقت التشغيل', val: '99.992%', color: 'text-slate-900' }
           ].map((card, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{card.label}</p>
                <p className={`text-2xl font-extrabold ${card.color}`}>{card.val}</p>
             </div>
           ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-xl font-extrabold text-slate-900">إدارة المستخدمين</h3>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="تصفية المستخدمين..." className="w-full pr-10 pl-4 py-2 bg-slate-50 rounded-lg text-sm outline-none border focus:ring-2 ring-indigo-50" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase font-bold tracking-[0.1em] text-slate-400">
                  <th className="px-8 py-4">المستخدم</th>
                  <th className="px-8 py-4">الحالة</th>
                  <th className="px-8 py-4">تاريخ التسجيل</th>
                  <th className="px-8 py-4 text-left">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-10 text-center text-slate-400 font-medium italic">لا يوجد مستخدمون مسجلون في قاعدة بيانات النظام.</td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs uppercase">{u.fullName.charAt(0)}</div>
                          <div className="overflow-hidden">
                            <p className="font-bold text-slate-900 truncate">{u.fullName}</p>
                            <p className="text-xs text-slate-400 truncate">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-[10px] font-bold uppercase tracking-wider">تم التحقق</span>
                      </td>
                      <td className="px-8 py-4 text-slate-500 whitespace-nowrap">{new Date(u.createdAt).toLocaleDateString('ar-EG')}</td>
                      <td className="px-8 py-4 text-left">
                        <button 
                          onClick={() => handleDeleteUser(u.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all bg-transparent border-none cursor-pointer"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForgotPasswordPage = ({ onNavigate }: { onNavigate: (p: Page) => void }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-slate-100"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 cursor-pointer" onClick={() => onNavigate('landing')}>N</div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">استعادة كلمة المرور</h1>
          <p className="text-slate-500 mt-2 text-center">أدخل بريدك الإلكتروني وسنرسل لك تعليمات الاستعادة.</p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 mr-1">عنوان البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full pr-12 pl-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 outline-none focus:ring-2 ring-indigo-100 transition-all font-sans"
                  required
                />
              </div>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all border-none cursor-pointer shadow-lg shadow-indigo-100">
              إرسال رابط إعادة التعيين
            </button>
          </form>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <p className="text-slate-600 font-bold mb-8">لقد تم إرسال رابط التحقق إلى بريدك الإلكتروني.</p>
            <button onClick={() => onNavigate('login')} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold border-none cursor-pointer">
              العودة لتسجيل الدخول
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [page, setPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(AuthService.getCurrentUser());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setPage('admin');
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    setPage('dashboard');
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setPage('landing');
  };

  const navigate = (p: Page) => {
    if (p !== 'admin') {
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      window.history.pushState({}, '', url);
    }
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white" dir="rtl">
      <AnimatePresence mode="wait">
        {page === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LandingPage onNavigate={navigate} currentUser={user} />
          </motion.div>
        )}
        {page === 'login' && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LoginPage onNavigate={navigate} onLogin={handleLogin} />
          </motion.div>
        )}
        {page === 'signup' && (
           <motion.div key="signup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <SignupPage onNavigate={navigate} />
           </motion.div>
        )}
        {page === 'forgot-password' && (
           <motion.div key="forgot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <ForgotPasswordPage onNavigate={navigate} />
           </motion.div>
        )}
        {page === 'dashboard' && user && (
           <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <Dashboard user={user} onLogout={handleLogout} />
           </motion.div>
        )}
        {page === 'admin' && (
           <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AdminPanel />
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
