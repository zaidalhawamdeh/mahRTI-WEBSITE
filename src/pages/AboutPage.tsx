import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Heart,
  Globe,
  BookOpen,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">عن آفاق التعليمية</h1>
            <p className="text-xl leading-relaxed">
              نحن نؤمن بأن التعليم الجيد يجب أن يكون متاحاً للجميع. مهمتنا هي تمكين الشباب العربي 
              من اكتساب المهارات الرقمية التي يحتاجونها لبناء مستقبل مهني ناجح.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/images/team.jpg" 
                alt="فريق آفاق التعليمية" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-maharati-blue rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">رؤيتنا</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  أن نكون المصدر الأول والأكثر ثقة لتعليم المهارات الرقمية في العالم العربي، 
                  ونساهم في بناء جيل قادر على قيادة التحول الرقمي في المنطقة.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-maharati-green rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">مهمتنا</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  تقديم تعليم رقمي عالي الجودة باللغة العربية، يمكن الوصول إليه من أي مكان وفي أي وقت، 
                  مع التركيز على التطبيق العملي والمهارات المطلوبة في سوق العمل.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-maharati-orange rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">قيمنا</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">الجودة في المحتوى والتقديم</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">إمكانية الوصول للجميع</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">التطبيق العملي والمشاريع الحقيقية</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">المتابعة والدعم المستمر</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              أرقام تتحدث عن إنجازاتنا
            </h2>
            <p className="text-xl text-gray-600">
              نفخر بما حققناه من نجاحات مع طلابنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">طالب مسجل</div>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">درس تفاعلي</div>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <div className="text-gray-600">شهادة إنجاز</div>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">معدل رضا الطلاب</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-xl text-gray-600">
                رحلة بدأت بحلم وتحولت إلى واقع يخدم آلاف الطلاب
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">البداية (2020)</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  بدأت فكرة آفاق التعليمية من ملاحظة النقص الواضح في المحتوى التعليمي التقني باللغة العربية. 
                  كان الطلاب العرب يواجهون صعوبة في الوصول إلى تعليم عالي الجودة في مجال التكنولوجيا والتسويق الرقمي، 
                  مما دفعنا لإطلاق هذه المنصة لسد هذه الفجوة.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">النمو والتطوير (2021-2022)</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  خلال هذه الفترة، توسعنا في المحتوى وأضفنا مجالات جديدة مثل البرمجة والتصميم وتحليل البيانات. 
                  انضم إلينا فريق من أفضل المختصين في المنطقة، وبدأنا في تطوير منهجية تعليمية فريدة تركز على التطبيق العملي.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المستقبل (2023 وما بعدها)</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نهدف إلى الوصول إلى 100,000 طالب بحلول نهاية 2025، وإطلاق برامج تخصصية متقدمة، 
                  وشراكات مع أهم الشركات التقنية في المنطقة لتوفير فرص عمل مباشرة لخريجينا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="h-32 bg-white rounded-lg shadow-soft flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            مساحة إعلانية - Google AdSense
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              لماذا آفاق التعليمية؟
            </h2>
            <p className="text-xl text-gray-600">
              ما يميزنا عن غيرنا من منصات التعليم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">محتوى باللغة العربية</h3>
              <p className="text-gray-600">
                جميع المواد مصممة خصيصاً للجمهور العربي مع مراعاة الثقافة المحلية والأمثلة ذات الصلة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">خبراء متخصصون</h3>
              <p className="text-gray-600">
                فريق من المدربين المعتمدين مع خبرة عملية في أكبر الشركات العالمية والمحلية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">تطبيق عملي</h3>
              <p className="text-gray-600">
                التركيز على المشاريع الحقيقية والتطبيق العملي بدلاً من النظريات فقط
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">شهادات معتمدة</h3>
              <p className="text-gray-600">
                شهادات إنجاز معترف بها من قبل أهم الشركات في المنطقة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">دعم مستمر</h3>
              <p className="text-gray-600">
                متابعة ودعم الطلاب حتى بعد انتهاء الدورة لضمان تطبيق ما تعلموه
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">مواكبة التطورات</h3>
              <p className="text-gray-600">
                تحديث المحتوى باستمرار لمواكبة أحدث التطورات في عالم التكنولوجيا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فريق آفاق التعليمية
            </h2>
            <p className="text-xl text-gray-600">
              نخبة من الخبراء والمتخصصين في مختلف المجالات التقنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-soft">
              <div className="w-20 h-20 bg-gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                أ
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">د. أحمد الزهراني</h3>
              <p className="text-maharati-blue font-medium mb-2">خبير التسويق الرقمي</p>
              <p className="text-gray-600 text-sm">
                خبرة 10+ سنوات في التسويق الرقمي مع شركات عالمية
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-soft">
              <div className="w-20 h-20 bg-gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                س
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">م. سارة أحمد</h3>
              <p className="text-maharati-green font-medium mb-2">مطورة تطبيقات كبيرة</p>
              <p className="text-gray-600 text-sm">
                مختصة في تطوير التطبيقات والمواقع بخبرة 8+ سنوات
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-soft">
              <div className="w-20 h-20 bg-gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                ف
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">أ. فاطمة العلي</h3>
              <p className="text-maharati-orange font-medium mb-2">مصممة UI/UX كبيرة</p>
              <p className="text-gray-600 text-sm">
                خبيرة في تصميم واجهات المستخدم وتجربة المستخدم
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-soft">
              <div className="w-20 h-20 bg-gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                م
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">د. محمد الشهري</h3>
              <p className="text-purple-600 font-medium mb-2">خبير تحليل البيانات</p>
              <p className="text-gray-600 text-sm">
                دكتوراه في علوم البيانات مع خبرة في الذكاء الاصطناعي
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Legal Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                معلومات الشركة القانونية
              </h2>
              <p className="text-xl text-gray-600">
                شركة مرخصة ومسجلة رسمياً في دولة الإمارات العربية المتحدة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الاسم القانوني</h3>
                <p className="text-gray-700 text-lg">
                  آفاق انترناشيونال لخدمات قبول الجامعات والمعاهد - ذ.م.م
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  AFAQ INTERNATIONAL UNIVERSITIES AND INSTITUTIONS ADMISSION SERVICES - L.L.C - S.P.C
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">رقم الرخصة</h3>
                <p className="text-gray-700 text-lg">501-2024-200016203</p>
                <p className="text-gray-500 text-sm mt-2">رقم التسجيل الموحد: 101-2024-200022451</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">النشاط المرخص</h3>
                <p className="text-gray-700 text-lg">خدمات قبول الجامعات والمعاهد</p>
                <p className="text-gray-500 text-sm mt-2">Universities And Institutions Admission Services</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">تاريخ التأسيس</h3>
                <p className="text-gray-700 text-lg">15 ديسمبر 2024</p>
                <p className="text-gray-500 text-sm mt-2">مؤسسة اقتصادية ناشئة</p>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-xl shadow-soft text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">للتحقق من الرخصة</h3>
              <p className="text-gray-700 mb-4">
                يمكنك التحقق من صحة رخصتنا الاقتصادية من خلال زيارة خدمة "تحقق" الرسمية
              </p>
              <a 
                href="https://www.tamm.abudhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maharati-blue hover:text-maharati-green font-semibold"
              >
                www.tamm.abudhabi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            هل لديك أسئلة؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار المسار التعليمي المناسب
          </p>
          <a 
            href="/contact" 
            className="bg-white text-maharati-blue font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
          >
            <span>تواصل معنا</span>
          </a>
        </div>
      </section>
    </div>
  );
}
