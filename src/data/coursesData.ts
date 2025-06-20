// بيانات الدورات الحقيقية لموقع آفاق التعليمية
export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  instructorBio: string;
  level: string;
  duration: string;
  students: string;
  rating: number;
  image: string;
  introVideo: string;
  price: string;
  skills: string[];
  tools: string[];
  modules: Module[];
  targetAudience: string;
  prerequisites: string;
  certification: string;
  category: string;
  color: string;
  icon: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
  duration: string;
  topics: string[];
}

export interface Lesson {
  id: number;
  title: string;
  objectives: string[];
  videoUrl?: string;
  duration?: string;
}

export const coursesData: Course[] = [
  {
    id: 'digital-marketing',
    title: 'التسويق الرقمي',
    subtitle: 'دورة التسويق الرقمي الشاملة: من الصفر إلى الاحتراف',
    description: 'انطلق في رحلة متكاملة لتعلم التسويق الرقمي من أساسياته وحتى استراتيجياته المتقدمة. هذه الدورة مصممة لتزويدك بالمعرفة والأدوات اللازمة للنجاح في عالم التسويق الرقمي المتغير، سواء كنت تسعى لبناء مسيرة مهنية جديدة أو تطوير مشروعك الخاص.',
    instructor: 'أحمد عبد الله',
    instructorTitle: 'خبير التسويق الرقمي',
    instructorBio: 'خبير تسويق رقمي معتمد بخبرة تزيد عن 8 سنوات في إدارة الحملات الرقمية للشركات الناشئة والكبرى في منطقة الشرق الأوسط. متخصص في تحسين محركات البحث والتسويق عبر وسائل التواصل الاجتماعي.',
    level: 'من مبتدئ إلى متقدم',
    duration: '60 ساعة',
    students: '25,000+',
    rating: 4.8,
    image: '/images/digital-marketing.jpg',
    introVideo: '/videos/course_intro/digital_marketing_intro.mp4',
    price: 'مجاني',
    category: 'marketing',
    color: 'from-blue-500 to-blue-600',
    icon: 'TrendingUp',
    skills: [
      'بناء استراتيجيات التسويق الرقمي',
      'تحسين محركات البحث (SEO)',
      'التسويق عبر محركات البحث (SEM)',
      'التسويق عبر وسائل التواصل الاجتماعي',
      'التسويق بالمحتوى',
      'التسويق عبر البريد الإلكتروني',
      'تحليل البيانات وقياس الأداء',
      'إدارة الحملات الإعلانية المدفوعة'
    ],
    tools: ['Google Ads', 'Facebook Business Manager', 'Google Analytics', 'SEMrush', 'Canva', 'Mailchimp'],
    targetAudience: 'الطلاب، الخريجون الجدد، رواد الأعمال، أصحاب المشاريع الصغيرة، المسوقون التقليديون، وكل من يرغب في دخول عالم التسويق الرقمي.',
    prerequisites: 'لا توجد متطلبات مسبقة. كل ما تحتاجه هو جهاز كمبيوتر واتصال بالإنترنت ورغبة قوية في التعلم.',
    certification: 'شهادة إتمام معتمدة من "آفاق التعليمية" بعد اجتياز الاختبار النهائي وتقديم المشاريع العملية.',
    modules: [
      {
        id: 1,
        title: 'مقدمة إلى عالم التسويق الرقمي',
        duration: '12 ساعة',
        topics: ['أساسيات التسويق الرقمي', 'القنوات الرئيسية', 'بناء شخصية العميل'],
        lessons: [
          {
            id: 1,
            title: 'ما هو التسويق الرقمي وأهميته؟',
            objectives: ['فهم مفهوم التسويق الرقمي', 'التعرف على الفرق بين التسويق الرقمي والتقليدي'],
            duration: '45 دقيقة'
          },
          {
            id: 2,
            title: 'القنوات الرئيسية للتسويق الرقمي',
            objectives: ['استعراض قنوات التسويق المختلفة', 'فهم دور كل قناة في الاستراتيجية التسويقية'],
            duration: '60 دقيقة'
          },
          {
            id: 3,
            title: 'بناء شخصية العميل (Buyer Persona)',
            objectives: ['تعلم كيفية تحديد وتحليل الجمهور المستهدف', 'إنشاء شخصية عميل متكاملة لمشروع عملي'],
            videoUrl: '/videos/lessons/buyer_persona_lesson.mp4',
            duration: '75 دقيقة'
          }
        ]
      },
      {
        id: 2,
        title: 'تحسين محركات البحث (SEO)',
        duration: '15 ساعة',
        topics: ['أساسيات محركات البحث', 'البحث عن الكلمات المفتاحية', 'التحسين الداخلي والخارجي'],
        lessons: [
          {
            id: 1,
            title: 'أساسيات عمل محركات البحث',
            objectives: ['فهم كيفية عمل عناكب البحث والفهرسة والترتيب'],
            duration: '50 دقيقة'
          },
          {
            id: 2,
            title: 'البحث عن الكلمات المفتاحية',
            objectives: ['استخدام أدوات البحث عن الكلمات المفتاحية', 'تحليل الكلمات المفتاحية واختيار الأنسب'],
            duration: '90 دقيقة'
          }
        ]
      }
    ]
  },
  {
    id: 'programming',
    title: 'البرمجة',
    subtitle: 'دورة البرمجة للمبتدئين: Python و JavaScript',
    description: 'خطوتك الأولى نحو عالم البرمجة وتطوير البرمجيات. تبدأ هذه الدورة من الصفر لتعليمك أساسيات التفكير المنطقي والبرمجي باستخدام لغة Python، ثم تنتقل بك إلى أساسيات JavaScript التي لا غنى عنها في تطوير مواقع الويب التفاعلية.',
    instructor: 'سارة أحمد',
    instructorTitle: 'مطورة تطبيقات كبيرة',
    instructorBio: 'مطورة برمجيات متمرسة بخبرة 10+ سنوات في تطوير التطبيقات والمواقع. متخصصة في Python وJavaScript مع شغف كبير لتعليم البرمجة للمبتدئين.',
    level: 'مبتدئ إلى متوسط',
    duration: '80 ساعة',
    students: '18,000+',
    rating: 4.9,
    image: '/images/programming.webp',
    introVideo: '/videos/course_intro/programming_intro.mp4',
    price: 'مجاني',
    category: 'programming',
    color: 'from-green-500 to-green-600',
    icon: 'Code',
    skills: [
      'أساسيات البرمجة (المتغيرات، الحلقات، الشروط، الدوال)',
      'التفكير الخوارزمي وحل المشكلات',
      'البرمجة كائنية التوجه (OOP) في Python',
      'التعامل مع الملفات والبيانات في Python',
      'أساسيات JavaScript (DOM Manipulation, Events)',
      'بناء تطبيقات كونسول بسيطة',
      'القدرة على تعلم أي لغة برمجة أخرى بسهولة'
    ],
    tools: ['Python', 'VS Code', 'Git', 'GitHub', 'Node.js', 'Chrome DevTools'],
    targetAudience: 'الأشخاص الذين ليس لديهم أي خبرة برمجية سابقة، الطلاب في المجالات التقنية، وكل من يرغب في تعلم أساسيات البرمجة لبناء مستقبل مهني في تطوير البرمجيات أو تحليل البيانات.',
    prerequisites: 'لا توجد أي متطلبات برمجية مسبقة. معرفة أساسية باستخدام الكمبيوتر واللغة الإنجليزية.',
    certification: 'شهادة إتمام معتمدة من "آفاق التعليمية" تثبت إتقانك لأساسيات البرمجة بعد تسليم المشاريع النهائية.',
    modules: [
      {
        id: 1,
        title: 'مدخل إلى البرمجة وبايثون',
        duration: '20 ساعة',
        topics: ['أساسيات البرمجة', 'المتغيرات وأنواع البيانات', 'العمليات والشروط', 'الحلقات التكرارية'],
        lessons: [
          {
            id: 1,
            title: 'ما هي البرمجة ولماذا نتعلمها؟',
            objectives: ['فهم دور البرمجة في عالمنا اليوم', 'تثبيت Python وإعداد بيئة العمل'],
            videoUrl: '/videos/lessons/python_intro_lesson.mp4',
            duration: '60 دقيقة'
          },
          {
            id: 2,
            title: 'المتغيرات وأنواع البيانات',
            objectives: ['التعرف على المتغيرات، الأرقام، النصوص، والقوائم'],
            duration: '75 دقيقة'
          }
        ]
      },
      {
        id: 2,
        title: 'هياكل البيانات والدوال في بايثون',
        duration: '25 ساعة',
        topics: ['القواميس والمجموعات', 'الدوال', 'البرمجة كائنية التوجه'],
        lessons: [
          {
            id: 1,
            title: 'القواميس (Dictionaries) والمجموعات (Sets)',
            objectives: ['استخدام هياكل بيانات متقدمة لتخزين البيانات'],
            duration: '90 دقيقة'
          }
        ]
      }
    ]
  },
  {
    id: 'design',
    title: 'التصميم',
    subtitle: 'دورة تصميم الجرافيك والهوية البصرية المتكاملة',
    description: 'أطلق العنان لإبداعك وتعلم فن تحويل الأفكار إلى تصاميم بصرية مؤثرة. هذه الدورة تأخذك من أساسيات التصميم الجرافيكي إلى بناء هوية بصرية متكاملة للعلامات التجارية، باستخدام أشهر الأدوات العالمية مثل Adobe Photoshop و Illustrator.',
    instructor: 'فاطمة العلي',
    instructorTitle: 'مصممة UI/UX كبيرة',
    instructorBio: 'مصممة جرافيك وUI/UX متخصصة بخبرة 7+ سنوات في تصميم الهويات البصرية وواجهات المستخدم. عملت مع عشرات العلامات التجارية في المنطقة العربية.',
    level: 'مبتدئ إلى متقدم',
    duration: '50 ساعة',
    students: '12,000+',
    rating: 4.7,
    image: '/images/design.jpg',
    introVideo: '/videos/course_intro/graphic_design_intro.mp4',
    price: 'مجاني',
    category: 'design',
    color: 'from-orange-500 to-orange-600',
    icon: 'PaintBucket',
    skills: [
      'فهم نظريات الألوان والخطوط والتكوين البصري',
      'إتقان أساسيات Adobe Photoshop و Illustrator',
      'تصميم الشعارات (Logos) وبطاقات العمل',
      'تصميم إعلانات وسائل التواصل الاجتماعي والبنرات الرقمية',
      'بناء دليل الهوية البصرية (Brand Style Guide)',
      'تحرير ومعالجة الصور باحترافية',
      'تجهيز الملفات للطباعة والويب'
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'Adobe InDesign'],
    targetAudience: 'الهواة والمبتدئين في مجال التصميم، رواد الأعمال الذين يرغبون في بناء هوية بصرية لمشاريعهم، طلاب الفنون والتصميم، وكل من يمتلك شغفًا بالإبداع البصري.',
    prerequisites: 'لا توجد متطلبات فنية مسبقة. يفضل وجود حس فني أساسي ورغبة في تعلم برامج التصميم.',
    certification: 'شهادة إتمام معتمدة من "آفاق التعليمية" مع معرض أعمال (Portfolio) للمشاريع المنجزة.',
    modules: [
      {
        id: 1,
        title: 'أساسيات التصميم الجرافيكي',
        duration: '12 ساعة',
        topics: ['مبادئ التصميم', 'نظرية الألوان', 'الخطوط والتيبوغرافي'],
        lessons: [
          {
            id: 1,
            title: 'ما هو التصميم الجرافيكي وما هي مجالاته؟',
            objectives: ['التعرف على أهمية التصميم في التسويق والأعمال'],
            duration: '45 دقيقة'
          },
          {
            id: 2,
            title: 'عناصر ومبادئ التصميم',
            objectives: ['فهم كيفية استخدام العناصر والمبادئ الأساسية لبناء تصميم متوازن وجذاب'],
            videoUrl: '/videos/lessons/color_basics_lesson.mp4',
            duration: '90 دقيقة'
          }
        ]
      },
      {
        id: 2,
        title: 'إتقان Adobe Photoshop',
        duration: '15 ساعة',
        topics: ['واجهة البرنامج', 'أدوات التحديد والقطع', 'الطبقات والتأثيرات'],
        lessons: [
          {
            id: 1,
            title: 'التعرف على واجهة Photoshop',
            objectives: ['إعداد مساحة العمل', 'فهم الأدوات الأساسية'],
            duration: '60 دقيقة'
          }
        ]
      }
    ]
  },
  {
    id: 'data-analysis',
    title: 'تحليل البيانات',
    subtitle: 'دورة تحليل البيانات وإكسل المتقدم: من البيانات إلى القرار',
    description: 'حوّل البيانات المعقدة إلى رؤى واضحة وقرارات ذكية. هذه الدورة المكثفة تعلمك كيفية استخدام الإمكانيات المتقدمة في Microsoft Excel لتحليل البيانات وتصويرها بشكل احترافي، بالإضافة إلى تزويدك بالأساسيات النظرية لعلم تحليل البيانات.',
    instructor: 'محمد الشهري',
    instructorTitle: 'خبير تحليل البيانات',
    instructorBio: 'محلل بيانات ومستشار أعمال بخبرة 12+ سنة في مجال التحليل والإحصاء. حاصل على دكتوراه في علوم البيانات ومتخصص في Excel وPower BI.',
    level: 'متوسط إلى متقدم',
    duration: '40 ساعة',
    students: '8,500+',
    rating: 4.6,
    image: '/images/data-analysis.jpg',
    introVideo: '/videos/course_intro/data_analysis_intro.mp4',
    price: 'مجاني',
    category: 'data',
    color: 'from-purple-500 to-purple-600',
    icon: 'BarChart3',
    skills: [
      'تنظيف وتجهيز البيانات للتحليل',
      'استخدام الدوال المتقدمة (VLOOKUP, INDEX, MATCH, IFs)',
      'إنشاء واستخدام الجداول المحورية (PivotTables) لتحليل البيانات',
      'تصوير البيانات بشكل فعال باستخدام المخططات المتقدمة',
      'بناء لوحات معلومات تفاعلية (Dashboards) في إكسل',
      'فهم أساسيات الإحصاء الوصفي وتطبيقه',
      'تحليل "ماذا لو" (What-If Analysis) لاتخاذ القرارات',
      'أتمتة المهام المتكررة باستخدام وحدات الماكرو'
    ],
    tools: ['Microsoft Excel', 'Power BI', 'Google Sheets', 'Tableau', 'SQL أساسيات'],
    targetAudience: 'المحللون الماليون، المسوقون، موظفو المبيعات، مديرو المشاريع، الباحثون، وأي شخص يتعامل مع كميات كبيرة من البيانات ويرغب في تحسين مهاراته لاتخاذ قرارات مبنية على الأدلة.',
    prerequisites: 'معرفة أساسية ببرنامج Microsoft Excel. لا توجد متطلبات مسبقة في تحليل البيانات.',
    certification: 'شهادة إتمام معتمدة من "آفاق التعليمية" تثبت كفاءتك في تحليل البيانات باستخدام إكسل المتقدم.',
    modules: [
      {
        id: 1,
        title: 'أساسيات تحليل البيانات وإعداد بيئة العمل',
        duration: '10 ساعات',
        topics: ['مفهوم تحليل البيانات', 'تنظيف البيانات', 'الدوال المتقدمة'],
        lessons: [
          {
            id: 1,
            title: 'ما هو تحليل البيانات ودورة حياته؟',
            objectives: ['فهم أهمية تحليل البيانات في الأعمال', 'التعرف على خطوات عملية التحليل'],
            duration: '45 دقيقة'
          },
          {
            id: 2,
            title: 'تنظيف وتجهيز البيانات (Data Cleaning)',
            objectives: ['تعلم تقنيات تنظيف البيانات', 'التعامل مع البيانات المفقودة والمكررة'],
            videoUrl: '/videos/lessons/excel_functions_lesson.mp4',
            duration: '90 دقيقة'
          }
        ]
      },
      {
        id: 2,
        title: 'الجداول المحورية والمخططات المتقدمة',
        duration: '15 ساعة',
        topics: ['PivotTables', 'المخططات التفاعلية', 'لوحات المعلومات'],
        lessons: [
          {
            id: 1,
            title: 'إنشاء الجداول المحورية (PivotTables)',
            objectives: ['تعلم إنشاء وتخصيص الجداول المحورية', 'تحليل البيانات بطرق متقدمة'],
            duration: '120 دقيقة'
          }
        ]
      }
    ]
  }
];

// بيانات الفيديوهات التعليمية
export const welcomeVideo = {
  title: 'مرحباً بك في آفاق التعليمية',
  description: 'تعرف على منصة آفاق التعليمية ورحلتك التعليمية معنا',
  videoUrl: '/videos/lessons/welcome_maharati.mp4',
  duration: '3 دقائق'
};

// بيانات إضافية للموقع
export const siteStats = {
  students: '50,000+',
  courses: '4',
  lessons: '500+',
  satisfaction: '95%',
  certificates: '15,000+'
};
