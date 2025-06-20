import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Code, 
  PaintBucket, 
  BarChart3, 
  Clock, 
  Users, 
  Star,
  ArrowLeft,
  Filter,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { coursesData } from '../data/coursesData';

export function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // تحويل بيانات الدورات لتتوافق مع التصفية
  const skills = coursesData.map(course => {
    const iconMap: Record<string, any> = {
      'TrendingUp': TrendingUp,
      'Code': Code,
      'PaintBucket': PaintBucket,
      'BarChart3': BarChart3
    };
    
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      icon: iconMap[course.icon],
      color: course.color,
      level: course.level,
      duration: course.duration,
      students: course.students,
      rating: course.rating,
      image: course.image,
      topics: course.skills.slice(0, 5), // أول 5 مهارات كمواضيع
      category: course.category
    };
  });

  const categories = [
    { id: 'all', name: 'جميع المهارات' },
    { id: 'marketing', name: 'التسويق' },
    { id: 'programming', name: 'البرمجة' },
    { id: 'design', name: 'التصميم' },
    { id: 'data', name: 'البيانات' }
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              اكتشف المهارات الرقمية
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              طور مهاراتك في أسرع المجالات نمواً واصنع مستقبلك المهني
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-glow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="ابحث عن المهارة..."
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-maharati-blue focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-maharati-blue text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="h-24 bg-white rounded-lg shadow-soft flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
            مساحة إعلانية - Google AdSense
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              المهارات المتاحة ({filteredSkills.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Link
                  key={skill.id}
                  to={`/skills/${skill.id}`}
                  className="group bg-white rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="mr-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-maharati-blue transition-colors">
                            {skill.title}
                          </h3>
                          <div className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{skill.rating}</span>
                            <span>•</span>
                            <span>{skill.students} طالب</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {skill.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {skill.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                        {skill.topics.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            +{skill.topics.length - 3} المزيد
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Clock className="w-4 h-4" />
                            <span>{skill.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Users className="w-4 h-4" />
                            <span>{skill.level}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-maharati-blue font-semibold group-hover:translate-x-1 transition-transform">
                          <span>ابدأ التعلم</span>
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار مهاراتنا؟
            </h2>
            <p className="text-xl text-gray-600">
              تعلم بطريقة عملية ومؤثرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-maharati-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">مدربون خبراء</h3>
              <p className="text-gray-600">
                تعلم من أفضل المختصين في المجال مع خبرة عملية واسعة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-maharati-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">مشاريع عملية</h3>
              <p className="text-gray-600">
                طبق ما تتعلمه على مشاريع حقيقية تضيف قيمة لسيرتك الذاتية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-maharati-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">شهادات معتمدة</h3>
              <p className="text-gray-600">
                احصل على شهادات إنجاز معترف بها في سوق العمل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            جاهز لبدء رحلة التطوير؟
          </h2>
          <p className="text-xl mb-8">
            اختر المهارة التي تناسب أهدافك وابدأ التعلم اليوم
          </p>
          <Link
            to="/contact"
            className="bg-white text-maharati-blue font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
          >
            <span>تحتاج مساعدة في الاختيار؟</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
