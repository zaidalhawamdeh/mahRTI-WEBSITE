import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Ad Space */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="h-24 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
            مساحة إعلانية - AdSense
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-bg rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">آفاق التعليمية</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              بوابتك لاحتراف المستقبل الرقمي. نقدم محتوى تعليمي عالي الجودة لتطوير مهاراتك 
              في التسويق الرقمي، البرمجة، التصميم، وتحليل البيانات باللغة العربية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="p-2 bg-maharati-blue rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-maharati-blue rounded-lg hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-maharati-blue rounded-lg hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-maharati-blue rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-maharati-orange">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">
                  المهارات
                </Link>
              </li>
              <li>
                <Link to="/skills/digital-marketing" className="text-gray-300 hover:text-white transition-colors">
                  التسويق الرقمي
                </Link>
              </li>
              <li>
                <Link to="/skills/programming" className="text-gray-300 hover:text-white transition-colors">
                  البرمجة
                </Link>
              </li>
              <li>
                <Link to="/skills/design" className="text-gray-300 hover:text-white transition-colors">
                  التصميم
                </Link>
              </li>
              <li>
                <Link to="/skills/data-analysis" className="text-gray-300 hover:text-white transition-colors">
                  تحليل البيانات
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-maharati-orange">الدعم والقانونية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  عن الموقع
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  سياسة ملفات تعريف الارتباط
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <Mail className="w-5 h-5 text-maharati-orange" />
              <span className="text-gray-300">jerashii@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <Phone className="w-5 h-5 text-maharati-orange" />
              <span className="text-gray-300">00971569649000</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <MapPin className="w-5 h-5 text-maharati-orange" />
              <span className="text-gray-300">الإمارات العربية المتحدة</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            جميع الحقوق محفوظة © {currentYear} آفاق التعليمية. تطوير مهاراتك الرقمية معنا.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            آفاق انترناشيونال لخدمات قبول الجامعات والمعاهد - ذ.م.م | رقم الرخصة: 501-2024-200016203
          </p>
          <p className="text-gray-500 text-sm mt-1">
            هذا الموقع يستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم
          </p>
        </div>
      </div>
    </footer>
  );
}
