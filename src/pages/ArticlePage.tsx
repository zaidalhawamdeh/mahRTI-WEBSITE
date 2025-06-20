import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark, 
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  Tag,
  BookOpen,
  CheckCircle
} from 'lucide-react';

export function ArticlePage() {
  const { articleId } = useParams();

  // Mock article data - في التطبيق الحقيقي، ستأتي من API
  const article = {
    id: articleId,
    title: 'دليل شامل لتحسين محركات البحث SEO في 2025',
    subtitle: 'تعلم أحدث استراتيجيات SEO وكيفية تطبيقها بفعالية',
    content: `
      <p>تحسين محركات البحث (SEO) هو فن وعلم زيادة ظهور موقعك الإلكتروني في نتائج البحث الطبيعية. في هذا الدليل الشامل، سنتعرف على أحدث استراتيجيات SEO التي ستساعدك في تحقيق نتائج ملموسة في عام 2025.</p>

      <h2>أساسيات تحسين محركات البحث</h2>
      <p>قبل الغوص في الاستراتيجيات المتقدمة، من المهم فهم الأساسيات. تحسين محركات البحث يتضمن ثلاثة جوانب رئيسية:</p>
      
      <ul>
        <li><strong>التحسين التقني (Technical SEO):</strong> تحسين الجوانب التقنية للموقع</li>
        <li><strong>تحسين المحتوى (On-Page SEO):</strong> تحسين محتوى الصفحات</li>
        <li><strong>التحسين الخارجي (Off-Page SEO):</strong> بناء السلطة والثقة</li>
      </ul>

      <h2>البحث عن الكلمات المفتاحية</h2>
      <p>البحث عن الكلمات المفتاحية هو حجر الأساس في أي استراتيجية SEO ناجحة. إليك خطوات فعالة:</p>
      
      <ol>
        <li>حدد موضوعات موقعك الرئيسية</li>
        <li>استخدم أدوات البحث مثل Google Keyword Planner</li>
        <li>حلل منافسيك وكلماتهم المفتاحية</li>
        <li>ركز على الكلمات طويلة الذيل (Long-tail keywords)</li>
      </ol>

      <h2>تحسين المحتوى</h2>
      <p>المحتوى عالي الجودة هو ما يميز المواقع الناجحة. تأكد من:</p>
      
      <ul>
        <li>كتابة محتوى أصلي ومفيد للقارئ</li>
        <li>استخدام الكلمات المفتاحية بطريقة طبيعية</li>
        <li>تنظيم المحتوى بعناوين فرعية واضحة</li>
        <li>إضافة الصور والوسائط المتعددة</li>
      </ul>

      <h2>التحسين التقني</h2>
      <p>الجوانب التقنية لا تقل أهمية عن المحتوى:</p>
      
      <ul>
        <li><strong>سرعة الموقع:</strong> تأكد من تحميل الصفحات بسرعة</li>
        <li><strong>التصميم المتجاوب:</strong> موقع يعمل بشكل مثالي على جميع الأجهزة</li>
        <li><strong>الأمان:</strong> استخدم شهادة SSL</li>
        <li><strong>خريطة الموقع:</strong> ساعد محركات البحث في فهم هيكل موقعك</li>
      </ul>

      <h2>قياس النتائج</h2>
      <p>لا يمكن تحسين ما لا يمكن قياسه. استخدم هذه الأدوات:</p>
      
      <ul>
        <li>Google Analytics لتتبع حركة المرور</li>
        <li>Google Search Console لمراقبة أداء البحث</li>
        <li>أدوات SEO المتخصصة مثل SEMrush أو Ahrefs</li>
      </ul>

      <h2>خلاصة</h2>
      <p>تحسين محركات البحث عملية مستمرة تتطلب الصبر والمثابرة. طبق هذه الاستراتيجيات بانتظام وستلاحظ تحسناً ملموساً في ترتيب موقعك ونتائجه.</p>
    `,
    author: 'د. أحمد الزهراني',
    authorTitle: 'خبير التسويق الرقمي',
    publishDate: '2025-06-15',
    readTime: '12 دقيقة',
    category: 'التسويق الرقمي',
    tags: ['SEO', 'تحسين محركات البحث', 'تسويق رقمي', 'جوجل'],
    views: 1250,
    likes: 89,
    comments: 23,
    image: '/images/digital-marketing.jpg'
  };

  const relatedArticles = [
    {
      id: 'google-ads-guide',
      title: 'دليل شامل لإعلانات جوجل Google Ads',
      excerpt: 'تعلم كيفية إنشاء وإدارة حملات إعلانية ناجحة على جوجل',
      readTime: '8 دقائق',
      image: '/images/digital-marketing.jpg'
    },
    {
      id: 'content-marketing-strategy',
      title: 'استراتيجية التسويق بالمحتوى للشركات الصغيرة',
      excerpt: 'اكتشف كيفية بناء استراتيجية محتوى فعالة بميزانية محدودة',
      readTime: '10 دقائق',
      image: '/images/digital-marketing.jpg'
    },
    {
      id: 'social-media-marketing',
      title: 'التسويق عبر وسائل التواصل الاجتماعي',
      excerpt: 'أفضل الممارسات للتسويق على فيسبوك وإنستغرام وتويتر',
      readTime: '15 دقيقة',
      image: '/images/digital-marketing.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-maharati-blue">الرئيسية</Link>
              <span>/</span>
              <Link to="/articles" className="hover:text-maharati-blue">المقالات</Link>
              <span>/</span>
              <span className="text-gray-900">{article.category}</span>
            </nav>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <span className="px-3 py-1 bg-maharati-blue text-white text-sm rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishDate).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <BookOpen className="w-4 h-4" />
                    <span>{article.views} مشاهدة</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {article.subtitle}
              </p>

              {/* Author and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                    أ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{article.author}</div>
                    <div className="text-sm text-gray-500">{article.authorTitle}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <button className="flex items-center space-x-1 space-x-reverse px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">حفظ</span>
                  </button>
                  <button className="flex items-center space-x-1 space-x-reverse px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">مشاركة</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover rounded-xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>

                {/* Tags */}
                <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2 space-x-reverse">
                    <Tag className="w-5 h-5 text-maharati-blue" />
                    <span>الكلمات المفتاحية</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-maharati-blue hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Actions */}
                <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 space-x-reverse">
                      <button className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-maharati-blue transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                        <span>{article.likes} إعجاب</span>
                      </button>
                      <button className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-maharati-blue transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{article.comments} تعليق</span>
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      {article.views} مشاهدة
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white rounded-xl p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">التعليقات</h3>
                  
                  {/* Comment Form */}
                  <div className="mb-8">
                    <textarea
                      placeholder="اكتب تعليقك هنا..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent resize-none"
                      rows={4}
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                      <button className="btn-primary">
                        نشر التعليق
                      </button>
                    </div>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                          م
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 space-x-reverse mb-2">
                            <span className="font-semibold text-gray-900">محمد العلي</span>
                            <span className="text-sm text-gray-500">منذ يومين</span>
                          </div>
                          <p className="text-gray-700">
                            مقال ممتاز ومفيد جداً! طبقت بعض النصائح وبدأت أرى تحسناً في ترتيب موقعي. شكراً لك.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                          س
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 space-x-reverse mb-2">
                            <span className="font-semibold text-gray-900">سارة أحمد</span>
                            <span className="text-sm text-gray-500">منذ 3 أيام</span>
                          </div>
                          <p className="text-gray-700">
                            هل يمكن أن تشرح أكثر عن التحسين التقني؟ أواجه صعوبة في تطبيق هذا الجزء.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Table of Contents */}
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">محتويات المقال</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#" className="block text-gray-600 hover:text-maharati-blue transition-colors">أساسيات تحسين محركات البحث</a>
                      <a href="#" className="block text-gray-600 hover:text-maharati-blue transition-colors">البحث عن الكلمات المفتاحية</a>
                      <a href="#" className="block text-gray-600 hover:text-maharati-blue transition-colors">تحسين المحتوى</a>
                      <a href="#" className="block text-gray-600 hover:text-maharati-blue transition-colors">التحسين التقني</a>
                      <a href="#" className="block text-gray-600 hover:text-maharati-blue transition-colors">قياس النتائج</a>
                    </nav>
                  </div>

                  {/* Ad Space */}
                  <div className="h-64 bg-white rounded-xl shadow-soft flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                    مساحة إعلانية - Google AdSense
                  </div>

                  {/* Related Course */}
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">دورة ذات صلة</h3>
                    <Link to="/skills/digital-marketing" className="block">
                      <img 
                        src="/images/digital-marketing.jpg" 
                        alt="دورة التسويق الرقمي"
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 mb-2">دورة التسويق الرقمي الشاملة</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        تعلم جميع جوانب التسويق الرقمي من الصفر حتى الاحتراف
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-maharati-blue font-semibold">مجاني</span>
                        <span className="text-gray-500">40 ساعة</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              مقالات ذات صلة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className="group bg-white rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden"
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-maharati-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center text-maharati-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            احصل على أحدث المقالات والنصائح التعليمية مباشرة في بريدك الإلكتروني
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-maharati-blue font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
              اشتراك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
