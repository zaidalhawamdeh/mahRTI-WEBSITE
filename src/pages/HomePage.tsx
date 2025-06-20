import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Award, 
  Target,
  TrendingUp,
  Code,
  PaintBucket,
  BarChart3,
  Star,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { VideoPlayer } from '../components/common/VideoPlayer';
import { coursesData, welcomeVideo, siteStats } from '../data/coursesData';

export function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maharati-blue via-maharati-green to-maharati-orange text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                بوابتك لاحتراف
                <br />
                <span className="text-yellow-300">المستقبل الرقمي</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                تعلم أحدث المهارات الرقمية باللغة العربية مع خبراء متخصصين. 
                ابدأ رحلتك اليوم واصنع مستقبلك المهني في عالم التكنولوجيا.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/skills" 
                  className="bg-white text-maharati-blue font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse shadow-glow"
                >
                  <Target className="w-5 h-5" />
                  <span>ابدأ التعلم مجاناً</span>
                </Link>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-maharati-blue transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse">
                  <Play className="w-5 h-5" />
                  <span>شاهد الفيديو التعريفي</span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{siteStats.students}</div>
                  <div className="text-gray-200">طالب نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{siteStats.lessons}</div>
                  <div className="text-gray-200">درس تفاعلي</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{siteStats.satisfaction}</div>
                  <div className="text-gray-200">معدل الرضا</div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="/images/hero-learning.png" 
                alt="التعلم الرقمي" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                مرحباً بك في آفاق التعليمية
              </h2>
              <p className="text-xl text-gray-600">
                شاهد هذا الفيديو لتتعرف على منصتنا ورحلتك التعليمية معنا
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlayer
                src={welcomeVideo.videoUrl}
                title={welcomeVideo.title}
                poster="/images/hero-learning.png"
                className="w-full h-auto"
              />
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-600 mb-6">
                {welcomeVideo.description}
              </p>
              <Link 
                to="/skills"
                className="btn-primary inline-flex items-center space-x-2 space-x-reverse"
              >
                <Target className="w-5 h-5" />
                <span>ابدأ رحلتك التعليمية الآن</span>
              </Link>
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

      {/* Skills Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              المهارات التي ستغير مستقبلك
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتسب المهارات الأكثر طلباً في سوق العمل الرقمي مع محتوى عملي ومشاريع حقيقية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coursesData.map((course) => {
              const iconMap: Record<string, any> = {
                'TrendingUp': TrendingUp,
                'Code': Code,
                'PaintBucket': PaintBucket,
                'BarChart3': BarChart3
              };
              const IconComponent = iconMap[course.icon];
              
              return (
                <Link key={course.id} to={`/skills/${course.id}`} className="group">
                  <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 card-hover border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {course.description.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{course.students} طالب</span>
                    </div>
                    <div className="flex items-center text-maharati-blue font-semibold">
                      <span>ابدأ التعلم</span>
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/images/students-learning.jpg" 
                alt="طلاب يتعلمون" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                لماذا تختار آفاق التعليمية؟
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-maharati-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">محتوى عربي أصيل</h3>
                    <p className="text-gray-600">
                      جميع المواد التعليمية مصممة خصيصاً للجمهور العربي مع مراعاة الثقافة المحلية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-maharati-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">خبراء متخصصون</h3>
                    <p className="text-gray-600">
                      فريق من المدربين المعتمدين مع خبرة عملية في أكبر الشركات العالمية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-maharati-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">شهادات معتمدة</h3>
                    <p className="text-gray-600">
                      احصل على شهادات إنجاز معترف بها من قبل أهم الشركات في المنطقة
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn-primary inline-flex items-center space-x-2 space-x-reverse">
                <span>اعرف المزيد عنا</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ماذا يقول طلابنا
            </h2>
            <p className="text-xl text-gray-600">
              آراء حقيقية من متعلمين حققوا نجاحات مذهلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "آفاق التعليمية غيرت حياتي المهنية تماماً. تعلمت التسويق الرقمي وأصبحت أعمل في شركة دولية براتب ممتاز!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  أ
                </div>
                <div className="mr-4">
                  <div className="font-semibold text-gray-900">أحمد محمد</div>
                  <div className="text-gray-500">مختص تسويق رقمي</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "المحتوى باللغة العربية ساعدني كثيراً في فهم البرمجة. الآن أطور تطبيقات الجوال بثقة كاملة."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  ف
                </div>
                <div className="mr-4">
                  <div className="font-semibold text-gray-900">فاطمة العلي</div>
                  <div className="text-gray-500">مطورة تطبيقات</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "دورة تحليل البيانات أعطتني المهارات التي احتجتها للحصول على ترقية في عملي. شكراً آفاق التعليمية!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  م
                </div>
                <div className="mr-4">
                  <div className="font-semibold text-gray-900">محمد الزهراني</div>
                  <div className="text-gray-500">محلل بيانات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لبدء رحلتك التعليمية؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين طوروا مهاراتهم وحققوا أهدافهم المهنية معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/skills" 
              className="bg-white text-maharati-blue font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <Target className="w-5 h-5" />
              <span>ابدأ التعلم الآن</span>
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-maharati-blue transition-all duration-300 inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
