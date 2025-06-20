import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  Play, 
  Download, 
  CheckCircle,
  TrendingUp,
  Code,
  PaintBucket,
  BarChart3,
  BookOpen,
  Award,
  Target,
  PlayCircle
} from 'lucide-react';
import { VideoPlayer } from '../components/common/VideoPlayer';
import { coursesData } from '../data/coursesData';

export function SkillDetailPage() {
  const { skillId } = useParams();

  // العثور على الدورة باستخدام البيانات الحقيقية
  const skill = coursesData.find(course => course.id === skillId);

  // إذا لم توجد الدورة، إعادة توجيه إلى صفحة المهارات
  if (!skill) {
    return <Navigate to="/skills" replace />;
  }

  // خريطة الأيقونات
  const iconMap: Record<string, any> = {
    'TrendingUp': TrendingUp,
    'Code': Code,
    'PaintBucket': PaintBucket,
    'BarChart3': BarChart3
  };
  
  const IconComponent = iconMap[skill.icon];

  // الدورات المقترحة (باقي الدورات ما عدا الحالية)
  const relatedSkills = coursesData.filter(course => course.id !== skillId).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Link 
                to="/skills"
                className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة إلى المهارات
              </Link>
              
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">{skill.title}</h1>
                  <p className="text-xl text-gray-300 mt-2">{skill.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {skill.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{skill.level}</div>
                  <div className="text-gray-300 text-sm">المستوى</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{skill.duration}</div>
                  <div className="text-gray-300 text-sm">المدة الكلية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{skill.students}</div>
                  <div className="text-gray-300 text-sm">طالب مسجل</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 space-x-reverse">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-yellow-400">{skill.rating}</span>
                  </div>
                  <div className="text-gray-300 text-sm">التقييم</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-maharati-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                ابدأ التعلم مجاناً
              </button>
            </div>

            {/* Video Preview */}
            <div className="lg:pr-8">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <VideoPlayer
                  src={skill.introVideo}
                  title={`مقدمة عن ${skill.title}`}
                  poster={skill.image}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 ml-3 text-maharati-blue" />
                  ماذا ستتعلم؟
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skill.skills.map((skillItem, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{skillItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 ml-3 text-maharati-blue" />
                  منهج الدورة
                </h2>
                <div className="space-y-4">
                  {skill.modules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {index + 1}. {module.title}
                          </h3>
                          <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                            <span className="flex items-center space-x-1 space-x-reverse">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </span>
                            <span>{module.lessons.length} درس</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <div className="space-y-3">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center space-x-3 space-x-reverse">
                              {lesson.videoUrl ? (
                                <PlayCircle className="w-5 h-5 text-maharati-blue" />
                              ) : (
                                <BookOpen className="w-5 h-5 text-gray-400" />
                              )}
                              <span className="text-gray-700">{lesson.title}</span>
                              {lesson.duration && (
                                <span className="text-sm text-gray-500">({lesson.duration})</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">المواضيع المشمولة:</h4>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <span 
                                key={topicIndex}
                                className="px-3 py-1 bg-maharati-blue/10 text-maharati-blue text-sm rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 ml-3 text-maharati-blue" />
                  الأدوات والتقنيات
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skill.tools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="font-semibold text-gray-900">{tool}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-gray-900 mb-6">المدرب</h3>
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-maharati-blue to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{skill.instructor.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{skill.instructor}</h4>
                    <p className="text-gray-600">{skill.instructorTitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {skill.instructorBio}
                </p>
              </div>

              {/* Course Info */}
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-gray-900 mb-6">معلومات الدورة</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">الجمهور المستهدف:</span>
                    <span className="font-semibold text-gray-900">جميع المستويات</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المتطلبات:</span>
                    <span className="font-semibold text-gray-900">لا توجد</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الشهادة:</span>
                    <span className="font-semibold text-green-600">متوفرة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">السعر:</span>
                    <span className="font-semibold text-maharati-orange">{skill.price}</span>
                  </div>
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
                <div className="text-gray-500 mb-2">مساحة إعلانية</div>
                <div className="text-sm text-gray-400">300 × 250</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مهارات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedSkills.map((relatedSkill) => {
              const RelatedIconComponent = iconMap[relatedSkill.icon];
              return (
                <Link key={relatedSkill.id} to={`/skills/${relatedSkill.id}`} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 card-hover border border-gray-100">
                    <div className={`w-12 h-12 bg-gradient-to-br ${relatedSkill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <RelatedIconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedSkill.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedSkill.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{relatedSkill.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{relatedSkill.students}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
