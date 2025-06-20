import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Shield, Users, BookOpen } from 'lucide-react';

export function TermsPage() {
  const lastUpdated = "20 يونيو 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">شروط الاستخدام</h1>
            <p className="text-xl leading-relaxed">
              يرجى قراءة هذه الشروط بعناية قبل استخدام موقع آفاق التعليمية وخدماتنا التعليمية
            </p>
            <p className="text-lg mt-4 opacity-90">
              آخر تحديث: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3 space-x-reverse">
                <FileText className="w-6 h-6 text-maharati-blue" />
                <span>ملخص سريع</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">يمكنك الوصول إلى جميع الدورات مجاناً</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">احترم حقوق الملكية الفكرية</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">استخدم المحتوى للأغراض التعليمية فقط</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">لا تشارك محتوى مقرصن أو مسروق</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">لا تستخدم الموقع لأغراض تجارية غير مصرح بها</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">لا تنتهك قوانين بلدك أو بلدان أخرى</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Acceptance */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-blue rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. قبول الشروط</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  باستخدامك لموقع "آفاق التعليمية" (maharati.com) أو أي من خدماتنا، فإنك توافق على الالتزام 
                  بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام موقعنا.
                </p>
                <p>
                  هذه الشروط تشكل اتفاقاً قانونياً ملزماً بينك وبين شركة آفاق التعليمية. نحتفظ بالحق في تعديل 
                  هذه الشروط في أي وقت، وسيتم إشعارك بأي تغييرات جوهرية.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      إذا كنت تحت سن 18 عاماً، يجب الحصول على موافقة ولي الأمر قبل استخدام الموقع.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-green rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. وصف الخدمة</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  آفاق التعليمية هي منصة تعليمية إلكترونية تقدم دورات ومحتوى تعليمي في مجال المهارات الرقمية، 
                  تشمل على سبيل المثال لا الحصر:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>دورات التسويق الرقمي وتحسين محركات البحث</li>
                  <li>تعليم البرمجة وتطوير المواقع والتطبيقات</li>
                  <li>تصميم الجرافيك وواجهات المستخدم</li>
                  <li>تحليل البيانات والإحصائيات</li>
                  <li>مقالات ومواد تعليمية مكتوبة ومرئية</li>
                  <li>اختبارات وتقييمات تفاعلية</li>
                  <li>شهادات إنجاز وإتمام</li>
                </ul>
                <p>
                  نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت دون إشعار مسبق، مع بذل جهودنا 
                  لتوفير بدائل مناسبة كلما أمكن ذلك.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-orange rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. حسابات المستخدمين</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">إنشاء الحساب:</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>يجب تقديم معلومات دقيقة وكاملة عند التسجيل</li>
                    <li>أنت مسؤول عن الحفاظ على سرية كلمة المرور</li>
                    <li>إشعارنا فوراً في حالة الاشتباه في اختراق حسابك</li>
                    <li>لا يجوز إنشاء أكثر من حساب واحد لكل شخص</li>
                    <li>يحق لنا تعليق أو إغلاق الحسابات المخالفة</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">مسؤوليات المستخدم:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">المسموح:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• استخدام المحتوى للتعلم الشخصي</li>
                        <li>• تحميل الشهادات والمواد التعليمية</li>
                        <li>• المشاركة في المناقشات بطريقة محترمة</li>
                        <li>• تقديم تقييمات صادقة ومفيدة</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">الممنوع:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• إعادة توزيع المحتوى تجارياً</li>
                        <li>• انتحال شخصية أخرى</li>
                        <li>• نشر محتوى مضلل أو ضار</li>
                        <li>• محاولة اختراق النظام</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. الملكية الفكرية</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">حقوق الموقع:</h3>
                  <p className="mb-4">
                    جميع المحتويات الموجودة على موقع آفاق التعليمية، بما في ذلك النصوص والصور والفيديوهات 
                    والتصاميم والشعارات والأكواد البرمجية، محمية بموجب قوانين حقوق الطبع والنشر والملكية الفكرية.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>المحتوى مملوك لشركة آفاق التعليمية أو مرخص لها</li>
                    <li>يُمنع نسخ أو توزيع المحتوى دون إذن مكتوب</li>
                    <li>يمكن استخدام المحتوى للأغراض التعليمية الشخصية فقط</li>
                    <li>الشهادات والمؤهلات هي ملك للمتلقي للاستخدام المهني</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">المحتوى المُنشأ من المستخدمين:</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="mb-4">
                      عند نشر أي محتوى على موقعنا (تعليقات، مراجعات، مشاريع)، فإنك:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>تمنحنا ترخيصاً لاستخدام وعرض هذا المحتوى</li>
                      <li>تؤكد أنك المالك الشرعي لهذا المحتوى</li>
                      <li>تتحمل المسؤولية الكاملة عن دقة وقانونية المحتوى</li>
                      <li>توافق على مراقبة وتعديل المحتوى عند الضرورة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. الاستخدامات المحظورة</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  يُمنع استخدام موقع آفاق التعليمية للأغراض التالية:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">الأنشطة غير القانونية:</h3>
                    <ul className="text-sm space-y-2">
                      <li>• انتهاك أي قوانين محلية أو دولية</li>
                      <li>• الاحتيال أو التضليل</li>
                      <li>• غسيل الأموال أو التمويل غير المشروع</li>
                      <li>• انتهاك حقوق الآخرين</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">الأنشطة الضارة:</h3>
                    <ul className="text-sm space-y-2">
                      <li>• نشر فيروسات أو برمجيات خبيثة</li>
                      <li>• محاولة اختراق النظام</li>
                      <li>• التحايل على الحماية الأمنية</li>
                      <li>• استخدام أدوات آلية غير مصرح بها</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">المحتوى المحظور:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1">
                      <li>• المحتوى المسيء أو المهين</li>
                      <li>• خطاب الكراهية أو التمييز</li>
                      <li>• المحتوى الإباحي أو غير اللائق</li>
                      <li>• التهديدات أو التحريض على العنف</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• المعلومات الخاطئة أو المضللة</li>
                      <li>• الإعلانات غير المصرح بها</li>
                      <li>• انتحال الشخصية</li>
                      <li>• المحتوى المنسوخ بشكل غير قانوني</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. الخصوصية والبيانات</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  حماية خصوصيتك أولوية قصوى بالنسبة لنا. يرجى مراجعة 
                  <a href="/privacy" className="text-maharati-blue hover:underline mx-1">سياسة الخصوصية</a>
                  للحصول على معلومات تفصيلية حول:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>البيانات التي نجمعها وكيفية استخدامها</li>
                  <li>ملفات تعريف الارتباط والتقنيات المماثلة</li>
                  <li>مشاركة البيانات مع أطراف ثالثة</li>
                  <li>حقوقك في التحكم في بياناتك</li>
                  <li>الإجراءات الأمنية لحماية معلوماتك</li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>ملاحظة:</strong> نستخدم Google AdSense لعرض الإعلانات، والذي قد يستخدم ملفات تعريف الارتباط 
                    لتخصيص الإعلانات بناءً على اهتماماتك. يمكنك إدارة تفضيلات الإعلانات من خلال إعدادات Google.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. إخلاء المسؤولية والضمانات</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">طبيعة الخدمة:</h3>
                  <p className="mb-4">
                    يتم تقديم خدماتنا التعليمية "كما هي" و"كما هو متاح". نبذل قصارى جهدنا لضمان:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>دقة وحداثة المحتوى التعليمي</li>
                    <li>استمرارية الخدمة وتوفرها</li>
                    <li>جودة التجربة التعليمية</li>
                    <li>الدعم التقني والأكاديمي</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">القيود والاستثناءات:</h3>
                  <ul className="text-sm space-y-2">
                    <li>• لا نضمن تحقيق نتائج مهنية أو مالية محددة</li>
                    <li>• المحتوى للأغراض التعليمية ولا يشكل استشارة مهنية</li>
                    <li>• قد تحدث انقطاعات مؤقتة في الخدمة للصيانة</li>
                    <li>• الشهادات الصادرة هي شهادات إنجاز وليست شهادات أكاديمية معتمدة</li>
                    <li>• قد تتغير مناهج الدورات لمواكبة التطورات التقنية</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">حدود المسؤولية:</h3>
                  <p>
                    في أقصى الحدود المسموح بها قانونياً، لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة 
                    أو عرضية أو تبعية أو خاصة ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا.
                  </p>
                </div>
              </div>
            </div>

            {/* Modifications and Termination */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. التعديلات والإنهاء</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">تعديل الشروط:</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>نحتفظ بالحق في تعديل هذه الشروط في أي وقت</li>
                    <li>سيتم إشعارك بالتعديلات المهمة عبر البريد الإلكتروني أو الموقع</li>
                    <li>استمرار استخدامك للموقع يعني قبولك للشروط المعدلة</li>
                    <li>إذا لم توافق على التعديلات، يمكنك إيقاف استخدام الخدمة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">إنهاء الحساب:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">من جانبك:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• يمكنك إغلاق حسابك في أي وقت</li>
                        <li>• ستحتفظ بالشهادات المكتسبة</li>
                        <li>• ستفقد الوصول للمحتوى المتميز</li>
                        <li>• يمكن استرداد البيانات لمدة 30 يوماً</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">من جانبنا:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• في حالة انتهاك الشروط</li>
                        <li>• عدم النشاط لفترة طويلة (سنتان)</li>
                        <li>• الاستخدام المسيء للموقع</li>
                        <li>• سنحاول التواصل قبل الإغلاق</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. القانون الحاكم وحل المنازعات</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية، دون الإخلال بمبادئ 
                  تنازع القوانين.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">حل المنازعات:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>نسعى أولاً لحل أي خلاف بالطرق الودية</li>
                    <li>التواصل المباشر مع فريق الدعم لمدة 30 يوماً</li>
                    <li>الوساطة من خلال جهة محايدة إذا لزم الأمر</li>
                    <li>اللجوء للمحاكم المختصة في المملكة العربية السعودية كحل أخير</li>
                  </ol>
                </div>
                <p>
                  نلتزم بالتعامل مع جميع المنازعات بحسن نية وبما يحقق مصلحة جميع الأطراف.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-blue rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">10. معلومات التواصل</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  للأسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">بيانات الشركة:</h3>
                    <div className="text-sm space-y-2">
                      <p><strong>الاسم:</strong> شركة آفاق التعليمية للتدريب والتطوير</p>
                      <p><strong>الموقع:</strong> maharati.com</p>
                      <p><strong>البريد الإلكتروني:</strong> legal@maharati.com</p>
                      <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">أوقات الاستجابة:</h3>
                    <div className="text-sm space-y-2">
                      <p>• الاستفسارات العامة: 24-48 ساعة</p>
                      <p>• المسائل القانونية: 3-5 أيام عمل</p>
                      <p>• الشكاوى العاجلة: 24 ساعة</p>
                      <p>• أوقات العمل: الأحد-الخميس 9ص-6م</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="h-32 bg-gray-50 rounded-lg shadow-soft flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            مساحة إعلانية - Google AdSense
          </div>
        </div>
      </section>

      {/* Final Notice */}
      <section className="py-12 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            شكراً لاختيارك آفاق التعليمية
          </h2>
          <p className="text-lg mb-6">
            نقدر ثقتك بنا ونلتزم بتقديم أفضل تجربة تعليمية ممكنة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-maharati-blue font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              تواصل معنا
            </a>
            <a 
              href="/privacy" 
              className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-maharati-blue transition-all duration-300"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
