import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  HelpCircle,
  Briefcase
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactReason: 'general'
      });
    }, 2000);
  };

  const contactReasons = [
    { value: 'general', label: 'استفسار عام' },
    { value: 'course', label: 'سؤال عن دورة معينة' },
    { value: 'technical', label: 'مشكلة تقنية' },
    { value: 'partnership', label: 'شراكة أو تعاون' },
    { value: 'media', label: 'استفسار إعلامي' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maharati-blue to-maharati-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl leading-relaxed">
              نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنرد عليك في أسرع وقت ممكن
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">الدعم العام</h3>
              <p className="text-gray-600 text-sm mb-4">للاستفسارات العامة والدعم التقني</p>
              <a href="mailto:للاستفسارات العامة والدعم" className="text-maharati-blue font-semibold hover:underline">
                للاستفسارات العامة والدعم
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">المبيعات</h3>
              <p className="text-gray-600 text-sm mb-4">للاستفسار عن الدورات والباقات</p>
              <a href="mailto:jerashii@gmail.com" className="text-maharati-blue font-semibold hover:underline">
                jerashii@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">الشراكات</h3>
              <p className="text-gray-600 text-sm mb-4">للتعاون والشراكات التجارية</p>
              <a href="mailto:jerashii@gmail.com" className="text-maharati-blue font-semibold hover:underline">
                jerashii@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">المساعدة</h3>
              <p className="text-gray-600 text-sm mb-4">للمساعدة في استخدام المنصة</p>
              <a href="mailto:jerashii@gmail.com" className="text-maharati-blue font-semibold hover:underline">
                jerashii@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">تم الإرسال بنجاح!</h3>
                  <p className="text-gray-600">
                    شكراً لك على رسالتك. سنرد عليك خلال 24 ساعة.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-primary"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors"
                        placeholder="+966 50 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                        سبب التواصل *
                      </label>
                      <select
                        id="contactReason"
                        name="contactReason"
                        required
                        value={formData.contactReason}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors"
                      >
                        {contactReasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      موضوع الرسالة *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors"
                      placeholder="اكتب موضوع رسالتك"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      نص الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maharati-blue focus:border-transparent transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>إرسال الرسالة</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-maharati-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-600">jerashii@gmail.com</p>
                      <p className="text-gray-600">للاستفسارات العامة والدعم</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-maharati-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">الهاتف</h4>
                      <p className="text-gray-600">00971569649000</p>
                      <p className="text-gray-600">للاستفسارات والدعم الفني</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-maharati-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">العنوان</h4>
                      <p className="text-gray-600">أبوظبي، الإمارات العربية المتحدة</p>
                      <p className="text-gray-600">مقر منصة آفاق التعليمية</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">أوقات العمل</h4>
                      <p className="text-gray-600">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                      <p className="text-gray-600">الجمعة - السبت: مغلق</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ad Space */}
              <div className="h-64 bg-white rounded-lg shadow-soft flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                مساحة إعلانية - Google AdSense
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">كم تستغرق الدورة؟</h4>
                    <p className="text-gray-600 text-sm">
                      تختلف مدة الدورات، لكن معظمها يتراوح بين 20-80 ساعة تعليمية.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">هل الدورات مجانية؟</h4>
                    <p className="text-gray-600 text-sm">
                      نعم، نوفر محتوى مجاني عالي الجودة للجميع.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">هل أحصل على شهادة؟</h4>
                    <p className="text-gray-600 text-sm">
                      نعم، تحصل على شهادة إنجاز معتمدة عند إتمام الدورة بنجاح.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 bg-gradient-to-r from-maharati-blue to-maharati-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            نعدك بالرد السريع
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-lg">ساعة للرد على الاستفسارات العامة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg">ساعات للمشاكل التقنية العاجلة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48</div>
              <div className="text-lg">ساعة للشراكات والتعاون</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
