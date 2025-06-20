import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Target, Users, MessageCircle, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  const skillsMenu = [
    { name: 'التسويق الرقمي', path: '/skills/digital-marketing' },
    { name: 'البرمجة', path: '/skills/programming' },
    { name: 'التصميم', path: '/skills/design' },
    { name: 'تحليل البيانات', path: '/skills/data-analysis' },
  ];

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      {/* Top banner for ads */}
      <div className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          تطوير مهاراتك الرقمية يبدأ هنا - ابدأ رحلتك مع آفاق التعليمية
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 space-x-reverse text-2xl font-bold"
          >
            <div className="w-10 h-10 bg-gradient-bg rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-gradient">آفاق التعليمية</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActiveLink('/') 
                  ? 'text-maharati-blue font-semibold' 
                  : 'text-gray-700 hover:text-maharati-blue'
              }`}
            >
              الرئيسية
            </Link>
            
            {/* Skills Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 space-x-reverse text-gray-700 hover:text-maharati-blue transition-colors"
                onMouseEnter={() => setIsSkillsOpen(true)}
                onMouseLeave={() => setIsSkillsOpen(false)}
              >
                <span>المهارات</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isSkillsOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-glow border z-50"
                  onMouseEnter={() => setIsSkillsOpen(true)}
                  onMouseLeave={() => setIsSkillsOpen(false)}
                >
                  <div className="py-2">
                    <Link 
                      to="/skills" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-maharati-blue transition-colors font-semibold"
                    >
                      جميع المهارات
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    {skillsMenu.map((skill) => (
                      <Link 
                        key={skill.path}
                        to={skill.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-maharati-blue transition-colors"
                      >
                        {skill.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`transition-colors ${
                isActiveLink('/about') 
                  ? 'text-maharati-blue font-semibold' 
                  : 'text-gray-700 hover:text-maharati-blue'
              }`}
            >
              عن الموقع
            </Link>
            
            <Link 
              to="/contact" 
              className={`transition-colors ${
                isActiveLink('/contact') 
                  ? 'text-maharati-blue font-semibold' 
                  : 'text-gray-700 hover:text-maharati-blue'
              }`}
            >
              اتصل بنا
            </Link>

            {/* CTA Button */}
            <Link 
              to="/skills" 
              className="btn-primary flex items-center space-x-2 space-x-reverse"
            >
              <Target className="w-4 h-4" />
              <span>ابدأ التعلم</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-maharati-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              
              <div>
                <div className="text-gray-700 font-semibold mb-2">المهارات</div>
                <div className="pr-4 space-y-2">
                  {skillsMenu.map((skill) => (
                    <Link 
                      key={skill.path}
                      to={skill.path}
                      className="block text-gray-600 hover:text-maharati-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {skill.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-maharati-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                عن الموقع
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-maharati-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              
              <Link 
                to="/skills" 
                className="btn-primary inline-flex items-center justify-center space-x-2 space-x-reverse"
                onClick={() => setIsMenuOpen(false)}
              >
                <Target className="w-4 h-4" />
                <span>ابدأ التعلم</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
