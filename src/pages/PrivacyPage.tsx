import { Shield, Eye, Lock, Database, Globe, Users, AlertTriangle, Mail, MapPin } from 'lucide-react';

export function PrivacyPage() {
  const lastUpdated = "20 يونيو 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
            <p className="text-xl leading-relaxed">
              نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. تعرف على كيفية جمع واستخدام وحماية معلوماتك.
            </p>
            <p className="text-lg mt-4 opacity-90">
              آخر تحديث: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">المحتويات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a href="#introduction" className="block text-maharati-blue hover:underline">1. مقدمة</a>
                <a href="#data-collection" className="block text-maharati-blue hover:underline">2. البيانات التي نجمعها</a>
                <a href="#data-usage" className="block text-maharati-blue hover:underline">3. كيفية استخدام البيانات</a>
                <a href="#data-sharing" className="block text-maharati-blue hover:underline">4. مشاركة البيانات</a>
              </div>
              <div className="space-y-2">
                <a href="#cookies" className="block text-maharati-blue hover:underline">5. ملفات تعريف الارتباط</a>
                <a href="#data-protection" className="block text-maharati-blue hover:underline">6. حماية البيانات</a>
                <a href="#user-rights" className="block text-maharati-blue hover:underline">7. حقوق المستخدم</a>
                <a href="#contact" className="block text-maharati-blue hover:underline">8. التواصل معنا</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div id="introduction" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-blue rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. مقدمة</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مرحباً بك في موقع "آفاق التعليمية" (maharati.com). نحن نقدر ثقتك بنا ونلتزم بحماية خصوصيتك 
                  وأمان بياناتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي نحصل عليها منك 
                  عند استخدامك لموقعنا الإلكتروني وخدماتنا التعليمية.
                </p>
                <p>
                  باستخدامك لموقعنا، فإنك توافق على شروط هذه السياسة. إذا كنت لا توافق على أي من هذه الشروط، 
                  يرجى عدم استخدام موقعنا.
                </p>
                <p>
                  تنطبق هذه السياسة على جميع المستخدمين، بما في ذلك الزوار والطلاب المسجلين والشركاء.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div id="data-collection" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-green rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. البيانات التي نجمعها</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">أ. المعلومات التي تقدمها لنا مباشرة:</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>الاسم الكامل والبريد الإلكتروني عند التسجيل</li>
                    <li>رقم الهاتف (اختياري)</li>
                    <li>تاريخ الميلاد (لأغراض إحصائية)</li>
                    <li>المدينة والدولة (لتخصيص المحتوى)</li>
                    <li>المعلومات التي تشاركها في نماذج الاتصال</li>
                    <li>التعليقات والمراجعات التي تكتبها</li>
                    <li>تفضيلات التعلم والاهتمامات</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">ب. المعلومات التي نجمعها تلقائياً:</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>عنوان IP ومعلومات الجهاز</li>
                    <li>نوع المتصفح ونظام التشغيل</li>
                    <li>الصفحات التي تزورها ووقت الزيارة</li>
                    <li>مصدر حركة المرور (كيف وصلت إلى موقعنا)</li>
                    <li>التفاعل مع المحتوى والدروس</li>
                    <li>تقدم التعلم ونتائج الاختبارات</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">ج. المعلومات من مصادر خارجية:</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>معلومات تسجيل الدخول عبر Google أو Facebook (عند الاختيار)</li>
                    <li>بيانات تحليلية من Google Analytics</li>
                    <li>معلومات من شركائنا التعليميين (بإذنك)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div id="data-usage" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-maharati-orange rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. كيفية استخدام البيانات</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">الخدمات الأساسية:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>إنشاء وإدارة حسابك</li>
                      <li>تقديم المحتوى التعليمي</li>
                      <li>تتبع تقدمك التعليمي</li>
                      <li>إصدار الشهادات</li>
                      <li>تقديم الدعم التقني</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">التحسين والتطوير:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>تحسين تجربة المستخدم</li>
                      <li>تطوير محتوى جديد</li>
                      <li>تحليل أداء الموقع</li>
                      <li>إجراء البحوث التعليمية</li>
                      <li>منع الاحتيال والحماية</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">التسويق والإعلانات:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>إرسال رسائل تعليمية ونصائح مفيدة</li>
                    <li>إشعارات حول دورات جديدة قد تهمك</li>
                    <li>عرض إعلانات مخصصة عبر Google AdSense</li>
                    <li>تحليل فعالية حملاتنا التسويقية</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    يمكنك إلغاء الاشتراك في الرسائل التسويقية في أي وقت من خلال الرابط الموجود في نهاية كل رسالة.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div id="data-sharing" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. مشاركة البيانات</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية فقط:
                </p>
                
                <div className="space-y-4">
                  <div className="border-r-4 border-maharati-blue pr-4">
                    <h3 className="font-semibold text-gray-900 mb-2">مقدمو الخدمات:</h3>
                    <p className="text-sm">
                      نشارك البيانات مع مقدمي الخدمات الموثوقين (مثل خدمات الاستضافة، التحليلات، الدفع) 
                      لتقديم خدماتنا بفعالية.
                    </p>
                  </div>
                  
                  <div className="border-r-4 border-maharati-green pr-4">
                    <h3 className="font-semibold text-gray-900 mb-2">الشركاء التعليميون:</h3>
                    <p className="text-sm">
                      قد نشارك بيانات محدودة مع شركائنا التعليميين لتقديم محتوى وشهادات معتمدة 
                      (بموافقتك المسبقة).
                    </p>
                  </div>
                  
                  <div className="border-r-4 border-maharati-orange pr-4">
                    <h3 className="font-semibold text-gray-900 mb-2">المتطلبات القانونية:</h3>
                    <p className="text-sm">
                      قد نكشف عن معلوماتك إذا كان ذلك مطلوباً قانونياً أو لحماية حقوقنا أو حقوق الآخرين.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Google AdSense:</h3>
                      <p className="text-sm text-gray-700">
                        نستخدم Google AdSense لعرض الإعلانات. قد تستخدم Google ملفات تعريف الارتباط 
                        لعرض إعلانات مخصصة بناءً على زياراتك السابقة لموقعنا ومواقع أخرى. 
                        يمكنك إدارة تفضيلات الإعلانات من خلال إعدادات Google.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div id="cookies" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. ملفات تعريف الارتباط (Cookies)</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. هذه الملفات الصغيرة تُخزن على جهازك 
                  وتساعدنا في فهم كيفية استخدامك للموقع.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">أنواع ملفات تعريف الارتباط:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>الضرورية:</strong> لتشغيل الموقع الأساسي</li>
                      <li><strong>الوظيفية:</strong> لحفظ تفضيلاتك</li>
                      <li><strong>التحليلية:</strong> لفهم استخدام الموقع</li>
                      <li><strong>الإعلانية:</strong> لعرض إعلانات ذات صلة</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">إدارة ملفات تعريف الارتباط:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>يمكنك تعطيلها من إعدادات المتصفح</li>
                      <li>بعض الوظائف قد لا تعمل بشكل صحيح</li>
                      <li>يمكنك حذفها في أي وقت</li>
                      <li>نحترم إعدادات "عدم التتبع"</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">ملفات تعريف الارتباط الخاصة بالطرف الثالث:</h3>
                  <p className="text-sm text-gray-700">
                    نستخدم خدمات الطرف الثالث مثل Google Analytics و Google AdSense، والتي قد تضع 
                    ملفات تعريف الارتباط الخاصة بها. هذه الخدمات لها سياسات خصوصية منفصلة.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div id="data-protection" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. حماية البيانات</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">الحماية التقنية:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>تشفير SSL لجميع البيانات المنقولة</li>
                      <li>تشفير قواعد البيانات</li>
                      <li>جدران حماية متقدمة</li>
                      <li>نسخ احتياطية منتظمة</li>
                      <li>مراقبة أمنية على مدار الساعة</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">الحماية الإدارية:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>وصول محدود للموظفين المصرح لهم</li>
                      <li>تدريب منتظم على الأمن السيبراني</li>
                      <li>مراجعات أمنية دورية</li>
                      <li>سياسات كلمة مرور قوية</li>
                      <li>إجراءات الاستجابة للحوادث</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">الامتثال والمعايير:</h3>
                  <p className="text-sm text-gray-700">
                    نلتزم بأفضل الممارسات الدولية في حماية البيانات ونتبع معايير الأمان المعترف بها عالمياً. 
                    نقوم بمراجعة وتحديث إجراءاتنا الأمنية بانتظام لضمان أعلى مستوى من الحماية.
                  </p>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div id="user-rights" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. حقوق المستخدم</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  لديك عدة حقوق فيما يتعلق ببياناتك الشخصية. يمكنك ممارسة هذه الحقوق عن طريق التواصل معنا.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-r-4 border-blue-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">الوصول:</h3>
                      <p className="text-sm">طلب نسخة من بياناتك الشخصية المحفوظة لدينا</p>
                    </div>
                    
                    <div className="border-r-4 border-green-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">التصحيح:</h3>
                      <p className="text-sm">طلب تصحيح أو تحديث المعلومات غير الدقيقة</p>
                    </div>
                    
                    <div className="border-r-4 border-orange-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">الحذف:</h3>
                      <p className="text-sm">طلب حذف بياناتك في ظروف معينة</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-r-4 border-purple-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">التحكم:</h3>
                      <p className="text-sm">إدارة إعدادات الخصوصية والإشعارات</p>
                    </div>
                    
                    <div className="border-r-4 border-pink-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">النقل:</h3>
                      <p className="text-sm">طلب نقل بياناتك إلى خدمة أخرى</p>
                    </div>
                    
                    <div className="border-r-4 border-red-500 pr-4">
                      <h3 className="font-semibold text-gray-900 mb-2">الاعتراض:</h3>
                      <p className="text-sm">الاعتراض على معالجة بياناتك لأغراض معينة</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">كيفية ممارسة حقوقك:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>راسلنا على: privacy@maharati.com</li>
                    <li>استخدم إعدادات الحساب لإدارة بياناتك</li>
                    <li>اتصل بنا هاتفياً للمساعدة</li>
                    <li>سنرد على طلبك خلال 30 يوماً</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. التواصل معنا</h2>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا في التعامل مع البيانات، 
                  يرجى التواصل معنا:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">معلومات التواصل:</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Mail className="w-4 h-4 text-maharati-blue" />
                        <span>privacy@maharati.com</span>
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Phone className="w-4 h-4 text-maharati-blue" />
                        <span>+966 50 123 4567</span>
                      </div>
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <MapPin className="w-4 h-4 text-maharati-blue mt-1" />
                        <span>الرياض، المملكة العربية السعودية</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">أوقات الاستجابة:</h3>
                    <div className="space-y-2 text-sm">
                      <p>• استفسارات الخصوصية: 48 ساعة</p>
                      <p>• طلبات الوصول للبيانات: 10 أيام عمل</p>
                      <p>• طلبات الحذف: 30 يوماً</p>
                      <p>• الشكاوى العاجلة: 24 ساعة</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">التحديثات على هذه السياسة:</h3>
                  <p className="text-sm text-gray-700">
                    قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات مهمة عبر البريد الإلكتروني 
                    أو إشعار بارز على موقعنا. استمرار استخدامك للموقع بعد هذه التغييرات يعني موافقتك على السياسة المحدثة.
                  </p>
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
    </div>
  );
}

// Helper component for Phone icon
function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
