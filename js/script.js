/* ============ REGENCY site scripts ============ */

/* ---- Contact configuration ----
   NOTE: confirm the email address before going live — it is a guess
   based on the company domain (regencyc.co). */
const CONTACT = {
  email: "info@regencyc.co",
  whatsapp: "966561503424", // +966 56 150 3424
};

/* ============ Services data (EN + AR) ============ */
const GROUPS = [
  { id: "a1", sector: "a", code: "A.1", en: "Construction & Buildings", ar: "الإنشاءات والمباني" },
  { id: "a2", sector: "a", code: "A.2", en: "Roads & Infrastructure Projects", ar: "مشاريع الطرق والبنية التحتية" },
  { id: "b1", sector: "b", code: "B.1", en: "IT & Infrastructure", ar: "تقنية المعلومات والبنية التحتية" },
  { id: "b2", sector: "b", code: "B.2", en: "Security & Surveillance", ar: "الأمن والمراقبة" },
  { id: "b3", sector: "b", code: "B.3", en: "Communication & Business Systems", ar: "الاتصالات وتقنيات الأعمال" },
  { id: "b4", sector: "b", code: "B.4", en: "Smart & Automation", ar: "الأنظمة الذكية والأتمتة" },
  { id: "b5", sector: "b", code: "B.5", en: "Power & Renewable Energy", ar: "الطاقة والدعم الفني" },
];

const SERVICES = [
  /* ---------- Sector A — Contracting ---------- */
  { group: "a1", num: "A/01", img: "svc-construction",
    en: { t: "General Construction & Urban Development",
      d: "Comprehensive construction services delivering high-quality, sustainable projects across commercial, residential, and industrial sectors.",
      pts: ["Engineering plans designed with accredited consulting offices", "Direct supervision by specialized engineering teams", "Execution with the latest equipment and technologies"] },
    ar: { t: "الإنشاءات العامة والتطوير العمراني",
      d: "خدمات إنشاء متكاملة تنفّذ مشاريع عالية الجودة ومستدامة في القطاعات التجارية والسكنية والصناعية.",
      pts: ["دراسة وتصميم المخططات الهندسية بالتعاون مع مكاتب استشارية معتمدة", "إشراف مباشر من فرق هندسية متخصصة لضمان الجودة والدقة", "تنفيذ الأعمال الإنشائية بأحدث المعدات والتقنيات"] } },
  { group: "a1", num: "A/02", img: "svc-renovation",
    en: { t: "Renovation & Maintenance Works",
      d: "Restoration and maintenance services that extend the lifespan and efficiency of existing structures.",
      pts: ["Structural and architectural restoration", "Crack treatment and thermal & waterproof insulation", "Upgrading electrical and plumbing systems", "Updating façades and interiors to the latest designs"] },
    ar: { t: "أعمال الترميم والصيانة",
      d: "خدمات ترميم وصيانة شاملة تهدف إلى إطالة عمر المباني وتحسين كفاءتها التشغيلية.",
      pts: ["إعادة تأهيل الهياكل الخرسانية", "معالجة التشققات والعزل الحراري والمائي", "تحسين كفاءة أنظمة الكهرباء والسباكة", "تحديث الواجهات والديكورات بما يتماشى مع أحدث التصاميم"] } },
  { group: "a1", num: "A/03", img: "svc-project-mgmt",
    en: { t: "Project Management",
      d: "We manage projects professionally, based on international best practices.",
      pts: ["Pre-planning and scheduling", "Monitoring execution and coordinating between teams", "Managing budgets and resources with high efficiency", "On-time delivery within the specified budget"] },
    ar: { t: "إدارة المشاريع",
      d: "ندير المشاريع بأسلوب احترافي يعتمد على أفضل الممارسات العالمية.",
      pts: ["التخطيط المسبق ووضع الجداول الزمنية", "متابعة تنفيذ الأعمال والتنسيق بين الفرق المختلفة", "إدارة الميزانيات والموارد بكفاءة عالية", "ضمان تسليم المشروع في الوقت المحدد ووفق الميزانية المحددة"] } },
  { group: "a1", num: "A/04", img: "svc-support",
    en: { t: "Support Works",
      d: "Integrated support services that keep construction and infrastructure operations running smoothly.",
      pts: ["Finest local & imported marble with cutting and installation", "Sanitary ware from accredited suppliers", "High-quality plumbing and electrical materials", "Fully equipped workshop for metal works (aluminium, stainless steel, glass partitions)"] },
    ar: { t: "أعمال مساندة",
      d: "خدمات مساندة متكاملة تدعم عمليات الإنشاء والبنية التحتية لضمان سير العمل بسلاسة.",
      pts: ["أجود أنواع الرخام المحلي والمستورد مع خدمات القص والتركيب", "جميع الأدوات الصحية من موردين معتمدين", "كافة مواد السباكة والكهرباء عالية الجودة", "ورشة متكاملة للأعمال المعدنية (ألومنيوم، ستانلس ستيل، قواطع زجاجية)"] } },
  { group: "a1", num: "A/05", img: "svc-architectural",
    en: { t: "Architectural Works",
      d: "Creative architectural designs blending aesthetics with functionality to meet modern standards.",
      pts: ["Interior & exterior paints using eco-friendly products", "Advanced thermal and sound insulation", "Floor finishes (marble, ceramic, parquet)", "Modern color designs aligned with the project identity"] },
    ar: { t: "الأعمال المعمارية",
      d: "تصاميم معمارية تجمع بين الجمال والوظيفية وفق أحدث معايير التصميم والهندسة.",
      pts: ["الدهانات الداخلية والخارجية بمنتجات صديقة للبيئة وعالية الجودة", "حلول عزل حراري وصوتي متقدمة", "تشطيبات الأرضيات (رخام، سيراميك، باركيه)", "تصاميم ألوان عصرية تتماشى مع هوية المشروع"] } },
  { group: "a1", num: "A/06", img: "svc-electromech",
    en: { t: "Electromechanical Works",
      d: "Integrated electrical and plumbing solutions built to the highest international safety and quality standards.",
      pts: ["Electrical networks for residential, commercial & industrial buildings", "Water and sanitary drainage systems", "Interior and exterior lighting systems", "Tanks, pumps, and irrigation networks", "Energy-saving systems and smart solutions"] },
    ar: { t: "أعمال الإلكتروميكانيك",
      d: "حلول متكاملة في مجال الكهرباء والسباكة وفق أعلى المعايير العالمية للسلامة والجودة.",
      pts: ["تصميم وتنفيذ الشبكات الكهربائية للمباني السكنية والتجارية والصناعية", "أنظمة المياه والصرف الصحي", "أنظمة الإنارة الداخلية والخارجية", "تركيب الخزانات والمضخات وشبكات الري", "أنظمة ترشيد الطاقة والحلول الذكية الموفرة"] } },
  { group: "a1", num: "A/07", img: "svc-interior",
    en: { t: "Interior & Exterior Design",
      d: "We combine innovation and aesthetics to provide décor that reflects the identity of the project.",
      pts: ["Modern suspended and gypsum ceilings", "Decorative walls and wooden & stone cladding", "Modern façades — cladding and glass systems", "Designs balancing luxury with practical functionality"] },
    ar: { t: "الديكورات الداخلية والخارجية",
      d: "نجمع بين الابتكار والجمال في تقديم ديكورات تعكس هوية المشروع.",
      pts: ["الأسقف المعلقة والجبسية بأشكال عصرية", "الجدران الديكورية والكسوات الخشبية والحجرية", "الواجهات الخارجية بأنظمة حديثة مثل الكلادينج والزجاج", "تصميم متكامل يوازن بين الفخامة والوظيفة العملية"] } },
  { group: "a1", num: "A/08", img: "svc-carpentry",
    en: { t: "Carpentry & Furniture Manufacturing",
      d: "Custom-made furniture and woodwork designed to combine durability and elegance.",
      pts: ["High-quality doors and windows", "Kitchen and wardrobe cabinets with precise measurements", "Custom luxury furniture matching the identity of the space", "Products that add aesthetic value to the building"] },
    ar: { t: "أعمال النجارة وصناعة الأثاث",
      d: "أعمال نجارة وأثاث مصممة خصيصاً تجمع بين المتانة والفخامة في التفاصيل.",
      pts: ["تصنيع وتركيب الأبواب والنوافذ بجودة عالية", "خزائن المطبخ والملابس بمقاييس دقيقة", "صناعة الأثاث الفاخر حسب الطلب ليتناسب مع هوية المكان", "منتجات تمزج بين المتانة والجمال وتضيف قيمة جمالية للمبنى"] } },
  { group: "a2", num: "A.2/09", img: "svc-asphalt",
    en: { t: "Road Construction & Asphalt Works",
      d: "Roadways, parking areas, and paved surfaces built with high-quality materials and advanced machinery.",
      pts: ["Subgrade preparation, filling, and compaction", "Base course and sub-base construction", "Asphalt paving (binder & wearing course)", "Road marking and traffic signage", "Road rehabilitation and resurfacing"] },
    ar: { t: "أعمال الطرق والسفلتة",
      d: "تنفيذ مشاريع الطرق والساحات والمواقف باستخدام مواد عالية الجودة ومعدات حديثة.",
      pts: ["تنفيذ طبقات الإحلال والردم والدك الهندسي", "تنفيذ طبقات الأساس والبيس كورس", "أعمال السفلتة بجميع أنواعها", "تخطيط الطرق والعلامات الأرضية", "صيانة وإعادة تأهيل الطرق"] } },
  { group: "a2", num: "A.2/10", img: "svc-excavation",
    en: { t: "Infrastructure Excavation Works",
      d: "Professional excavation and trenching carried out with precision, safety, and protection of existing utilities.",
      pts: ["Utility trench excavation", "Deep excavation for major projects", "Site grading and preparation", "Engineered backfilling and compaction", "Excavated material removal"] },
    ar: { t: "حفريات البنية التحتية",
      d: "تنفيذ أعمال الحفر وتجهيز المسارات الأرضية بدقة عالية مع الالتزام بإجراءات السلامة وحماية الخدمات القائمة.",
      pts: ["حفر خنادق لخطوط المياه والصرف والكهرباء", "أعمال الحفر العميق للمشاريع الكبرى", "تسوية وتجهيز المواقع", "أعمال الردم والدك باستخدام معدات متخصصة", "نقل وإزالة نواتج الحفر"] } },
  { group: "a2", num: "A.2/11", img: "svc-sanitary",
    en: { t: "Sanitary & Water Pipeline Installations",
      d: "Water supply and sewage networks installed to approved technical standards for efficiency and long service life.",
      pts: ["Main and branch sewage networks", "Water supply pipeline systems", "House connection works", "Pressure and leakage testing", "Maintenance and replacement works"] },
    ar: { t: "تمديدات المواسير الصحية",
      d: "تنفيذ شبكات المياه والصرف الصحي وفق المواصفات الفنية المعتمدة لضمان الكفاءة التشغيلية وطول العمر الافتراضي.",
      pts: ["تمديد شبكات الصرف الصحي الرئيسية والفرعية", "تمديد شبكات المياه الباردة والساخنة", "تركيب وصلات المنازل", "اختبار الضغط والتسريب", "صيانة واستبدال الشبكات القديمة"] } },
  { group: "a2", num: "A.2/12", img: "svc-utility-lines",
    en: { t: "Public Utility Lines Installation",
      d: "Construction and integration of public water and sewage lines in coordination with the relevant authorities.",
      pts: ["Main water transmission lines in various diameters", "Public sewer line construction", "Connection to municipal networks", "Junction and control chambers", "Testing and commissioning"] },
    ar: { t: "الخطوط العامة للمياه والصرف",
      d: "تنفيذ وربط الخطوط العامة للمياه والصرف وفق اشتراطات الجهات المعنية لضمان استمرارية الخدمة وسلامة التشغيل.",
      pts: ["تنفيذ خطوط المياه الرئيسية بأقطار مختلفة", "تنفيذ خطوط الصرف الصحي العامة", "أعمال الربط بالشبكات الحكومية", "تنفيذ غرف الربط والتحكم", "اختبار واعتماد الشبكات قبل التشغيل"] } },
  { group: "a2", num: "A.2/13", img: "svc-control-rooms",
    en: { t: "Control Rooms Construction",
      d: "Design and construction of control rooms for infrastructure networks, to the highest safety and quality standards.",
      pts: ["Reinforced concrete control rooms per approved drawings", "Monitoring and control systems", "Internal & external waterproofing and insulation", "Electrical & mechanical control panels", "Rehabilitation of existing control rooms"] },
    ar: { t: "غرف التحكم",
      d: "تصميم وتنفيذ غرف التحكم الخاصة بشبكات البنية التحتية بكفاءة عالية ووفق أعلى معايير السلامة والجودة.",
      pts: ["إنشاء غرف تحكم خرسانية مسلحة وفق المخططات المعتمدة", "تجهيز الغرف بأنظمة المراقبة والتحكم", "تنفيذ أعمال العزل المائي والحراري", "تركيب لوحات التحكم الكهربائية والميكانيكية", "صيانة وتأهيل غرف التحكم القائمة"] } },

  /* ---------- Sector B — Technology ---------- */
  { group: "b1", num: "B.1/01", img: "svc-network",
    en: { t: "Network Design & Implementation",
      d: "A solid, scalable network is the backbone of modern business — end-to-end design, implementation, and optimization.",
      pts: ["Custom LAN/WAN solutions for all environments", "Secure, high-performance wireless networking", "Network optimization and ongoing maintenance"] },
    ar: { t: "تصميم وتنفيذ الشبكات",
      d: "الشبكة القوية والمرنة أساس نجاح أي عمل حديث — حلول متكاملة للتصميم والتنفيذ والتحسين.",
      pts: ["شبكات LAN/WAN مخصصة لكل بيئة تشغيلية", "شبكات لاسلكية آمنة وعالية الأداء", "تحسين أداء الشبكات وصيانتها المستمرة"] } },
  { group: "b1", num: "B.1/02", img: "svc-dataroom",
    en: { t: "Data Room Design & Implementation",
      d: "World-class data rooms with advanced cooling, monitoring, and power systems for operational continuity and data integrity.",
      pts: ["Engineering design for optimal data and power flow", "Advanced cooling and humidity control", "Full protection against outages and operational risks"] },
    ar: { t: "تصميم وتنفيذ غرف البيانات",
      d: "غرف بيانات احترافية وفق معايير عالمية تضمن حماية المعلومات واستمرارية العمل.",
      pts: ["تصميم هندسي يضمن تدفقاً مثالياً للطاقة والبيانات", "أنظمة تبريد وتحكم في الرطوبة متقدمة", "حماية ضد الانقطاع والمخاطر التشغيلية"] } },
  { group: "b1", num: "B.1/03", img: "svc-cabling",
    en: { t: "Structured Cabling Systems",
      d: "Comprehensive internal cabling systems supporting fast, reliable, and flexible communication.",
      pts: ["High-quality cabling minimizing interference and loss", "Flexible design for future scalability", "Compliant with the latest international standards"] },
    ar: { t: "أنظمة الكابلات الهيكلية",
      d: "أنظمة الكابلات الهيكلية تشكّل الأساس لأي بنية تحتية حديثة لتقنية المعلومات.",
      pts: ["كابلات عالية الجودة تقلل التداخل والفقد", "مرونة في التوسع والتحديث المستقبلي", "متوافقة مع أحدث المعايير العالمية"] } },
  { group: "b1", num: "B.1/04", img: "svc-lowcurrent",
    en: { t: "Low Current Systems",
      d: "Integrated low current systems designed for security, communication, and control.",
      pts: ["Intercom, alarm, and access systems", "High efficiency and easy integration", "Centralized monitoring capability"] },
    ar: { t: "أنظمة التيار الخفيف",
      d: "أنظمة تيار خفيف متكاملة تشمل الأمن والاتصال والتحكم.",
      pts: ["أنظمة الاتصال الداخلي والإنذار والتحكم", "كفاءة عالية وسهولة الدمج مع الأنظمة الأخرى", "إمكانية مراقبة مركزية موحدة"] } },
  { group: "b1", num: "B.1/05", img: "svc-outside-plant",
    en: { t: "Outside Plant Solutions",
      d: "End-to-end design and deployment of outdoor communication and fiber networks.",
      pts: ["Underground and overhead installations", "Weather-resistant infrastructure", "High-capacity fiber optic links"] },
    ar: { t: "حلول الشبكات الخارجية",
      d: "حلول متكاملة للشبكات الخارجية تشمل الألياف البصرية والتمديدات الميدانية.",
      pts: ["تمديدات أرضية وهوائية متكاملة", "بنية مقاومة للعوامل البيئية", "وصلات ألياف بصرية عالية السعة"] } },
  { group: "b2", num: "B.2/06", img: "svc-cctv",
    en: { t: "Surveillance & Security Solutions",
      d: "Advanced CCTV and security systems for 24/7 protection of assets and personnel.",
      pts: ["HD/4K surveillance cameras", "Remote access and control", "Intelligent motion and face detection"] },
    ar: { t: "حلول المراقبة والأمان",
      d: "أنظمة مراقبة متطورة تضمن الأمان الكامل للأفراد والممتلكات على مدار الساعة.",
      pts: ["كاميرات مراقبة بدقة عالية HD/4K", "تحكم ومراقبة عن بُعد", "كشف ذكي للحركة والوجوه"] } },
  { group: "b2", num: "B.2/07", img: "svc-access",
    en: { t: "Access Control Solutions",
      d: "Smart access management for secure and organized facilities.",
      pts: ["Card, biometric, and mobile access", "Integrated attendance tracking", "Centralized system management"] },
    ar: { t: "حلول التحكم في الدخول",
      d: "أنظمة دخول ذكية لإدارة الصلاحيات والتحكم في الوصول داخل المنشآت.",
      pts: ["دخول عبر البطاقة أو البصمة أو الجوال", "تتبع الحضور والانصراف", "إدارة مركزية موحدة"] } },
  { group: "b2", num: "B.2/08", img: "svc-adv-security",
    en: { t: "Advanced Security Systems",
      d: "High-end security automation for parking, barriers, and perimeter control.",
      pts: ["Smart parking management systems", "Automatic road blockers and bollards", "Integrated video analytics"] },
    ar: { t: "أنظمة الأمان المتقدمة",
      d: "أنظمة أمان متقدمة لإدارة المواقف والتحكم في المداخل والمصدّات الأرضية.",
      pts: ["أنظمة إدارة مواقف ذكية", "مصدّات وبلوكيرات أرضية مؤتمتة", "تحليل مرئي متكامل"] } },
  { group: "b2", num: "B.2/09", img: "svc-cyber",
    en: { t: "Cybersecurity Services",
      d: "Protecting your digital assets through proactive monitoring and advanced defense.",
      pts: ["Firewall and intrusion prevention systems", "Endpoint and data encryption", "Security audits and incident response"] },
    ar: { t: "خدمات الأمن السيبراني",
      d: "حماية شاملة للأصول الرقمية عبر مراقبة استباقية وتقنيات دفاع متقدمة.",
      pts: ["أنظمة جدران حماية ومنع اختراق", "تشفير شامل للأجهزة والبيانات", "تدقيق أمني واستجابة فورية للحوادث"] } },
  { group: "b3", num: "B.3/10", img: "svc-ipphone",
    en: { t: "IP Phone Solutions",
      d: "Seamless communication through advanced IP-based voice systems.",
      pts: ["HD voice and video calls", "Centralized VoIP systems", "Integration with CRM tools"] },
    ar: { t: "حلول الهواتف عبر بروتوكول الإنترنت",
      d: "حلول اتصال احترافية تعتمد على بروتوكول الإنترنت لتواصل آمن وفعّال.",
      pts: ["مكالمات صوتية ومرئية عالية الجودة", "أنظمة VOIP مركزية", "تكامل مع أدوات إدارة العملاء"] } },
  { group: "b3", num: "B.3/11", img: "svc-callcenter",
    en: { t: "Call Center Solutions",
      d: "Customized call center systems for better customer engagement.",
      pts: ["Multi-channel communication platform", "AI-powered call routing", "Detailed analytics and reports"] },
    ar: { t: "حلول مراكز الاتصال",
      d: "أنظمة متكاملة لإدارة المكالمات وتحسين تجربة العملاء.",
      pts: ["منصات اتصال متعددة القنوات", "توجيه مكالمات مدعوم بالذكاء الاصطناعي", "تقارير تحليلية مفصلة"] } },
  { group: "b3", num: "B.3/12", img: "svc-ipclock",
    en: { t: "IP Clock Systems",
      d: "Accurate time synchronization for institutions and facilities.",
      pts: ["Centralized control and management", "Network-based synchronization", "Energy-efficient digital displays"] },
    ar: { t: "أنظمة الساعات الرقمية عبر الإنترنت",
      d: "أنظمة توقيت رقمية دقيقة للمؤسسات والمنشآت.",
      pts: ["تحكم مركزي موحد", "مزامنة عبر الشبكة", "شاشات رقمية موفرة للطاقة"] } },
  { group: "b3", num: "B.3/13", img: "svc-av",
    en: { t: "Audio & Video Solutions",
      d: "Professional A/V systems for meetings, presentations, and events.",
      pts: ["High-definition displays and sound", "Wireless presentation systems", "User-friendly control panels"] },
    ar: { t: "حلول الصوت والصورة",
      d: "أنظمة صوت وصورة احترافية للمؤتمرات والاجتماعات.",
      pts: ["عرض صوتي ومرئي عالي الجودة", "أنظمة عرض لاسلكية", "لوحات تحكم سهلة الاستخدام"] } },
  { group: "b4", num: "B.4/14", img: "svc-smarthome",
    en: { t: "Smart Home & Automation",
      d: "Smart environments designed for comfort, efficiency, and control.",
      pts: ["Mobile and voice control", "Integration with IoT devices", "User-friendly control panels"] },
    ar: { t: "أنظمة المنازل الذكية والأتمتة",
      d: "أنظمة ذكية للتحكم الكامل في الإضاءة والتكييف والأمان.",
      pts: ["تحكم عبر الجوال أو الأوامر الصوتية", "تكامل مع أجهزة إنترنت الأشياء", "لوحات تحكم سهلة الاستخدام"] } },
  { group: "b4", num: "B.4/15", img: "svc-tvdist",
    en: { t: "Television Distribution Systems",
      d: "High-quality digital broadcasting systems for modern facilities.",
      pts: ["Multi-channel MATV/IPTV setup", "Central management system", "24/7 operation and support"] },
    ar: { t: "أنظمة توزيع التلفزيون",
      d: "أنظمة بث رقمية مركزية بجودة عالية تناسب المنشآت الحديثة.",
      pts: ["أنظمة MATV/IPTV متعددة القنوات", "إدارة مركزية مرنة", "تشغيل ودعم مستمران"] } },
  { group: "b4", num: "B.4/16", img: "svc-led",
    en: { t: "LED Screen Solutions",
      d: "LED display systems for indoor and outdoor applications, professionally designed.",
      pts: ["High brightness and resolution", "Weather-resistant design", "Full installation & maintenance"] },
    ar: { t: "حلول الشاشات الرقمية",
      d: "شاشات LED للعرض الداخلي والخارجي بتصميمات احترافية.",
      pts: ["دقة وإضاءة عالية", "تصميم مقاوم للعوامل الجوية", "تركيب وصيانة متكاملة"] } },
  { group: "b5", num: "B.5/17", img: "svc-ups",
    en: { t: "Uninterruptible Power Supply",
      d: "Reliable backup power systems ensuring business continuity.",
      pts: ["Advanced UPS technology", "Battery management and monitoring", "Preventive maintenance services"] },
    ar: { t: "مزودات الطاقة غير المنقطعة",
      d: "أنظمة طاقة احتياطية موثوقة لضمان استمرارية العمل.",
      pts: ["تقنية UPS متطورة", "إدارة ومراقبة البطاريات", "صيانة وقائية مستمرة"] } },
  { group: "b5", num: "B.5/18", img: "svc-solar",
    en: { t: "Solar Energy Solutions",
      d: "Sustainable solar energy systems that reduce costs and dependency on traditional grids.",
      pts: ["Design and installation of complete solar systems", "Load studies and performance analysis", "Supply of panels, inverters, and batteries"] },
    ar: { t: "حلول الطاقة الشمسية",
      d: "حلول طاقة شمسية مستدامة تقلل التكاليف وتعزز الكفاءة التشغيلية.",
      pts: ["تصميم وتركيب أنظمة طاقة شمسية متكاملة", "دراسات أحمال وتحليل أداء هندسي", "توريد الألواح والعواكس والبطاريات عالية الجودة"] } },
];

/* ============ State ============ */
let lang = localStorage.getItem("regency-lang") || "en";
let activeSector = "a";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ============ Language toggle ============ */
function applyLang() {
  const ar = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = ar ? "rtl" : "ltr";
  document.title = ar
    ? "ريجنسي للمقاولات — حلول متكاملة للإنشاءات والتقنية"
    : "Regency Contracting — Integrated Contracting & Technology Solutions";

  $$("[data-ar]").forEach((el) => {
    if (!el.dataset.en) el.dataset.en = el.innerHTML;
    el.innerHTML = ar ? el.dataset.ar : el.dataset.en;
  });
  $$("[data-ar-placeholder]").forEach((el) => {
    if (!el.dataset.enPlaceholder) el.dataset.enPlaceholder = el.placeholder;
    el.placeholder = ar ? el.dataset.arPlaceholder : el.dataset.enPlaceholder;
  });

  $("#langToggle").textContent = ar ? "EN" : "عربي";
  renderServices();
  fillServiceSelect();
}

/* ============ Services rendering ============ */
function renderServices() {
  const root = $("#servicesRoot");
  const ar = lang === "ar";
  const groups = GROUPS.filter((g) => g.sector === activeSector);

  root.innerHTML = groups
    .map((g) => {
      const cards = SERVICES.filter((s) => s.group === g.id)
        .map((s) => {
          const L = ar ? s.ar : s.en;
          return `
          <article class="svc-card reveal in">
            <div class="svc-media">
              <img src="assets/img/${s.img}.jpg" alt="${L.t}" loading="lazy">
              <span class="svc-num">${s.num}</span>
            </div>
            <div class="svc-body">
              <h4>${L.t}</h4>
              <p class="svc-desc">${L.d}</p>
              <ul class="svc-points">${L.pts.map((p) => `<li>${p}</li>`).join("")}</ul>
            </div>
          </article>`;
        })
        .join("");
      return `
      <div class="svc-group sector-${g.sector}">
        <div class="svc-group-head">
          <span class="svc-group-code">${g.code}</span>
          <h3>${ar ? g.ar : g.en}</h3>
        </div>
        <div class="svc-grid">${cards}</div>
      </div>`;
    })
    .join("");
}

/* ============ Sector tabs ============ */
function setSector(sector) {
  activeSector = sector;
  $("#tabA").classList.toggle("active", sector === "a");
  $("#tabB").classList.toggle("active", sector === "b");
  $("#tabA").setAttribute("aria-selected", sector === "a");
  $("#tabB").setAttribute("aria-selected", sector === "b");
  renderServices();
}
$("#tabA").addEventListener("click", () => setSector("a"));
$("#tabB").addEventListener("click", () => setSector("b"));

/* ============ Quote form ============ */
function fillServiceSelect() {
  const ar = lang === "ar";
  const sel = $("#qService");
  const sector = $("#qSector").value === "technology" ? "b" : "a";
  const general = ar ? "استشارة عامة / غير محدد" : "General inquiry / not sure";
  sel.innerHTML =
    `<option value="general">${general}</option>` +
    GROUPS.filter((g) => g.sector === sector)
      .map(
        (g) =>
          `<optgroup label="${ar ? g.ar : g.en}">` +
          SERVICES.filter((s) => s.group === g.id)
            .map((s) => `<option value="${s.num}">${ar ? s.ar.t : s.en.t}</option>`)
            .join("") +
          `</optgroup>`
      )
      .join("");
}
$("#qSector").addEventListener("change", fillServiceSelect);

function buildMessage() {
  const ar = lang === "ar";
  const f = $("#quoteForm");
  const svcSel = $("#qService");
  const svcText = svcSel.options[svcSel.selectedIndex]?.text || "";
  const sectorText = $("#qSector").options[$("#qSector").selectedIndex]?.text || "";
  const L = ar
    ? { subj: "طلب عرض سعر — ", name: "الاسم", co: "الشركة", ph: "الجوال", em: "البريد", sec: "القطاع", svc: "الخدمة", msg: "تفاصيل المشروع" }
    : { subj: "Quotation Request — ", name: "Name", co: "Company", ph: "Phone", em: "Email", sec: "Sector", svc: "Service", msg: "Project details" };
  const lines = [
    `${L.name}: ${f.name.value.trim()}`,
    f.company.value.trim() ? `${L.co}: ${f.company.value.trim()}` : "",
    `${L.ph}: ${f.phone.value.trim()}`,
    f.email.value.trim() ? `${L.em}: ${f.email.value.trim()}` : "",
    `${L.sec}: ${sectorText}`,
    `${L.svc}: ${svcText}`,
    "",
    `${L.msg}:`,
    f.message.value.trim(),
  ].filter(Boolean);
  return { subject: L.subj + f.name.value.trim(), body: lines.join("\n") };
}

$("#quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (!f.reportValidity()) return;
  const { subject, body } = buildMessage();
  window.location.href =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const note = $("#formNote");
  note.hidden = false;
  note.textContent =
    lang === "ar"
      ? "تم فتح تطبيق البريد لديك لإرسال الطلب — أو تواصل معنا مباشرة عبر واتساب."
      : "Your email app has been opened to send the request — or contact us directly via WhatsApp.";
});

$("#whatsappBtn").addEventListener("click", () => {
  const f = $("#quoteForm");
  const { body } = buildMessage();
  const greeting =
    lang === "ar" ? "مرحباً، أرغب بطلب عرض سعر:\n" : "Hello, I would like to request a quotation:\n";
  const text = f.name.value.trim() ? greeting + body : greeting.replace(":\n", ".");
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

/* ============ Mobile nav ============ */
const burger = $("#navBurger");
burger.addEventListener("click", () => {
  const nav = $("#mainNav");
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("#mainNav a").forEach((a) =>
  a.addEventListener("click", () => $("#mainNav").classList.remove("open"))
);

/* ============ Reveal on scroll ============ */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => io.observe(el));

/* ============ Init ============ */
$("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("regency-lang", lang);
  applyLang();
});
$("#year").textContent = new Date().getFullYear();
applyLang();
