// Verified Performance Data & Portfolio Constants
// Sourced from Meta Marketing API v21.0 (Audited 08 September 2026)

export const operatorInfo = {
  name: "Mohamed Elsayed Hafez Adam",
  nameAr: "محمد السيد حافظ آدم",
  title: "Head of Performance Marketing · SaaS Founder",
  titleAr: "رئيس التسويق الرقمي ومسؤول شراء الوسائط · مؤسس منصة SaaS",
  location: "Cairo, Egypt",
  locationAr: "القاهرة، مصر",
  phone: "+20 100 629 9068",
  email: "m.adam@buildincairo.com",
  saasUrl: "https://meta.buildincairo.com",
  agencyUrl: "https://buildincairo.com",
  github: "https://github.com/adamit20002",
  auditDate: "08 September 2026",
  metaApiVersion: "v21.0"
};

export const careerGlance = {
  totalSpendUsd: 256515,
  spendEgp: "8,340,733",
  spendQar: "162,250",
  spendDirectUsd: "25,007",
  adAccounts: 112,
  adAccountsWithSpend: 80,
  brands: 85,
  industriesCount: 16,
  yearsOperating: 8,
  firstAccountDate: "2018-03",
  impressions: "260.5M",
  impressionsRaw: 260500000,
  peopleReached: "86.7M",
  clicksDriven: "10.1M",
  blendedCtr: "3.89%",
  campaignsBuilt: 3514,
  businessManagers: 26,
  pagesManaged: 74,
  totalFollowers: "678,702",
  messagingConversations: "676,124",
  leadsTotal: "20,511",
  purchasesOmni: "10,120",
  currentMonthlyBudget: "EGP 500K+"
};

export const industriesData = [
  {
    id: "food",
    name: "Food & Beverage",
    nameAr: "الأغذية والمشروبات والمطاعم",
    spend: 67894,
    share: "28.6%",
    brands: 13,
    accounts: 24,
    campaigns: 287,
    impressions: "60,307,225",
    clicks: "2,044,242",
    description: "High-volume direct response campaigns for chocolate confectionery, quick-service restaurant chains, seafood, artisan bakeries, and gourmet retail.",
    descriptionAr: "حملات استجابة مباشرة عالية الحجم للحلويات والشوكولاتة الفاخرة، سلاسل المطاعم السريعة، المأكولات البحرية والمخابز.",
    topBrands: ["Lusso Chocolate", "Q Burger", "Action Pizza", "El Khema Restaurant", "Tarh El Bahr Seafood", "Thebes Pastry"],
    photos: ["/industries/food-1.jpg", "/industries/food-2.jpg"]
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    nameAr: "الأزياء والملابس الفاخرة",
    spend: 41331,
    share: "17.4%",
    brands: 17,
    accounts: 19,
    campaigns: 314,
    impressions: "34,911,288",
    clicks: "2,446,973",
    description: "E-commerce and social catalog selling across luxury footwear, boutique womenswear, modest fashion, kids apparel, and specialized sizing.",
    descriptionAr: "مبيعات التجارة الإلكترونية والكتالوج للأحذية الفاخرة، الأزياء النسائية، الملابس المحتشمة وملابس الأطفال.",
    topBrands: ["Dakhly Luxury Footwear", "JOJA Store", "Cute Girl Women's Wear", "Salma Boutique", "Big Size Triple", "Salsabella"],
    photos: ["/industries/fashion-1.jpg", "/industries/fashion-2.jpg"]
  },
  {
    id: "furniture",
    name: "Furniture, Interiors & Home",
    nameAr: "الأثاث والديكور والتصميم الداخلي",
    spend: 30731,
    share: "13.0%",
    brands: 13,
    accounts: 15,
    campaigns: 248,
    impressions: "33,985,816",
    clicks: "1,428,109",
    description: "High-ticket lead generation and messaging campaigns for luxury furniture showrooms, custom modular kitchens, and contemporary home decor.",
    descriptionAr: "توليد عملاء محتملين وحملات رسائل للمفروشات الراقية، المطابخ المودرن والديكور المنزلي المتكامل.",
    topBrands: ["Meubles", "ROOMZ", "Efrish Beitak", "Egyptian Office Furniture", "Cucina Art Kitchens", "Formence Design Solutions"],
    photos: ["/industries/furniture-1.jpg", "/industries/furniture-2.jpg"]
  },
  {
    id: "industrial",
    name: "Industrial & Manufacturing",
    nameAr: "الصناعة والتصنيع وحلول B2B",
    spend: 19869,
    share: "8.4%",
    brands: 10,
    accounts: 12,
    campaigns: 121,
    impressions: "31,136,938",
    clicks: "935,094",
    description: "B2B client acquisition for polyurethane foam manufacturers, heavy steel fabrication, precision pressure systems, and industrial equipment.",
    descriptionAr: "استقطاب عملاء الشركات لمصانع الفوم العازل، تشكيل الصلب، أنظمة الضغط ومعدات التصنيع الثقيلة.",
    topBrands: ["Foam Experts", "Blask Finishing Solutions", "Foamco Group", "New Star / Al Motaheda", "International Pressure Systems", "HydroRacks"],
    photos: ["/industries/industrial-1.jpg", "/industries/industrial-2.jpg"]
  },
  {
    id: "property",
    name: "Real Estate & Property",
    nameAr: "العقارات والاستثمار العقاري",
    spend: 18257,
    share: "7.7%",
    brands: 3,
    accounts: 4,
    campaigns: 41,
    impressions: "5,143,140",
    clicks: "89,078",
    description: "High-value investor lead acquisition for major commercial property brokerages, residential developments, and coastal compounds.",
    descriptionAr: "توليد استفسارات مستثمرين ومشترين للمشروعات السكنية والتجارية والاستثمار العقاري الفاخر.",
    topBrands: ["I.Investment / SANAD", "Housing / Home Unit", "Coregate Property"],
    photos: ["/industries/property-1.jpg", "/industries/property-2.jpg"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    nameAr: "الرعاية الصحية والمراكز الطبية",
    spend: 16091,
    share: "6.8%",
    brands: 5,
    accounts: 9,
    campaigns: 80,
    impressions: "28,815,089",
    clicks: "927,127",
    description: "Qualified patient bookings and outreach for international diagnostic laboratories, specialist clinics, and in-home medical nursing services.",
    descriptionAr: "حجوزات واستشارات طبية لمعامل التحاليل الدولية، عيادات الاستشاريين وخدمات التمريض المنزلي.",
    topBrands: ["Arabs International Labs", "Dr Mohamed / Tamer Safwat", "Dr Heba Metwally", "House Nursing", "Dr Samir Ahmed Kamel Clinic"],
    photos: ["/industries/healthcare-1.jpg", "/industries/healthcare-2.jpg"]
  },
  {
    id: "travel",
    name: "Travel, Hospitality & Events",
    nameAr: "السياحة والضيافة والفنادق",
    spend: 7968,
    share: "3.4%",
    brands: 2,
    accounts: 7,
    campaigns: 36,
    impressions: "3,771,212",
    clicks: "52,841",
    description: "Direct reservation acquisition and holiday booking inquiries for premium travel agencies and luxury airport transit hotels.",
    descriptionAr: "حجوزات رحلات العطلات وباقات السفر الخارجي وإشغال الغرف للفنادق ومنتجعات الضيافة.",
    topBrands: ["Kady Holidays", "Le Ciel / Le Passage Hotels"],
    photos: ["/industries/travel-1.jpg", "/industries/travel-2.jpg"]
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    nameAr: "متاجر التجزئة والتجارة الإلكترونية",
    spend: 7504,
    share: "3.2%",
    brands: 5,
    accounts: 7,
    campaigns: 39,
    impressions: "7,081,080",
    clicks: "215,946",
    description: "Omnichannel retail driving online checkouts and footfall for regional shopping centers, specialty pet care, and consumer goods.",
    descriptionAr: "تنشيط مبيعات المتاجر الإلكترونية وحركة الزوار للمراكز التجارية، مستلزمات الحيوانات ومنتجات التجزئة.",
    topBrands: ["ALAHD Store", "Cairo Zoo", "Sajda", "City Mall Al-Qanater", "Nokhba"],
    photos: ["/industries/retail-1.jpg", "/industries/retail-2.jpg"]
  },
  {
    id: "construction",
    name: "Construction & Building Materials",
    nameAr: "المقاولات ومواد البناء والتشييد",
    spend: 7242,
    share: "3.1%",
    brands: 2,
    accounts: 4,
    campaigns: 43,
    impressions: "6,815,923",
    clicks: "212,740",
    description: "Contractor lead generation for ready-mix concrete production, precast structural components, and architectural finishing systems.",
    descriptionAr: "عقود توريد وتوليد عملاء للخرسانة الجاهزة، المنتجات الأسمنتية وحلول البناء المتطورة.",
    topBrands: ["Tree Core", "Egyptian-Italian Concrete"],
    photos: ["/industries/construction-1.jpg", "/industries/construction-2.jpg"]
  },
  {
    id: "arts",
    name: "Arts, Entertainment & Events",
    nameAr: "الفنون والفعاليات الثقافية",
    spend: 5724,
    share: "2.4%",
    brands: 1,
    accounts: 1,
    campaigns: 34,
    impressions: "6,728,186",
    clicks: "221,424",
    description: "Ticket sales and engagement campaigns for cultural initiatives, fine art exhibitions, and music festival programming.",
    descriptionAr: "تسويق الفعاليات الثقافية، مبيعات التذاكر، والمهرجانات الفنية والمعارض الإبداعية.",
    topBrands: ["She Arts"],
    photos: ["/industries/arts-1.jpg", "/industries/arts-2.jpg"]
  },
  {
    id: "marketing",
    name: "Marketing & Business Services",
    nameAr: "خدمات التسويق واستشارات الأعمال",
    spend: 5377,
    share: "2.3%",
    brands: 2,
    accounts: 10,
    campaigns: 56,
    impressions: "3,933,982",
    clicks: "52,699",
    description: "B2B client acquisition for digital marketing agencies and enterprise consulting services.",
    descriptionAr: "استقطاب عملاء الشركات للوكالات الإعلانية والحلول التسويقية المتكاملة.",
    topBrands: ["Build in Cairo Agency", "CanGrow Group"],
    photos: ["/industries/marketing-1.jpg", "/industries/marketing-2.jpg"]
  },
  {
    id: "energy",
    name: "Energy, Water & HVAC",
    nameAr: "الطاقة الشمسية وتكييف الهواء والمياه",
    spend: 3483,
    share: "1.5%",
    brands: 3,
    accounts: 3,
    campaigns: 34,
    impressions: "1,665,686",
    clicks: "80,526",
    description: "Inbound quote requests for residential and industrial solar power installations, industrial water purification, and commercial HVAC.",
    descriptionAr: "طلبات عروض أسعار للطاقة الشمسية، محطات معالجة المياه، وأنظمة التكييف والتهوية المركزية.",
    topBrands: ["Watex Egypt", "Taqatna Solar", "Power Plus HVAC"],
    photos: ["/industries/energy-1.jpg", "/industries/energy-2.jpg"]
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    nameAr: "التجميل والعناية الشخصية والعطور",
    spend: 3068,
    share: "1.3%",
    brands: 5,
    accounts: 6,
    campaigns: 36,
    impressions: "2,860,041",
    clicks: "91,004",
    description: "Direct-to-consumer cosmetic orders and clinic bookings for aesthetic dermatology, luxury oud fragrances, and skincare formulations.",
    descriptionAr: "طلبات استهلاكية مباشرة لمنتجات العناية بالبشرة، العطور الشرقية الفاخرة، وجلسات العيادات التجميلية.",
    topBrands: ["Perla Beirut Clinics", "Ganna Perfumes", "King of Oud", "Care Zone Cosmetics", "Derma Clinics"],
    photos: ["/industries/beauty-1.jpg", "/industries/beauty-2.jpg"]
  },
  {
    id: "technology",
    name: "Technology & SaaS",
    nameAr: "البرمجيات وتكنولوجيا الإعلانات SaaS",
    spend: 1165,
    share: "0.5%",
    brands: 1,
    accounts: 2,
    campaigns: 28,
    impressions: "7,730,686",
    clicks: "93,128",
    description: "User acquisition and product testing campaigns for Adams Analytics (Meta Ads management and reporting SaaS platform).",
    descriptionAr: "حملات تسجيل واكتساب مستخدمين لمنصة Adams Analytics لإدارة إعلانات ميتا وتحليل البيانات.",
    topBrands: ["Adams Analytics"],
    photos: ["/screens/p01-home.jpg", "/screens/a04-account-detail.jpg"]
  },
  {
    id: "finance",
    name: "Financial & Professional Services",
    nameAr: "الخدمات المالية والاستشارات الضريبية",
    spend: 681,
    share: "0.3%",
    brands: 1,
    accounts: 1,
    campaigns: 8,
    impressions: "453,852",
    clicks: "14,425",
    description: "Lead generation for corporate tax preparation, accounting compliance, and business advisory services.",
    descriptionAr: "استشارات ضريبية، خدمات محاسبية وتأسيس شركات لرواد الأعمال والمؤسسات.",
    topBrands: ["HMT Group"],
    photos: ["/industries/finance-1.jpg", "/industries/finance-2.jpg"]
  },
  {
    id: "automotive",
    name: "Automotive",
    nameAr: "السيارات وقطع الغيار وخدمات الإطارات",
    spend: 678,
    share: "0.3%",
    brands: 3,
    accounts: 3,
    campaigns: 15,
    impressions: "1,063,002",
    clicks: "45,102",
    description: "Specialized vehicle security solutions, aftermarket tyre sales, and workshop service appointments.",
    descriptionAr: "حلول أمن المركبات، تجارة الإطارات، وحجوزات الصيانة ومراكز الخدمة.",
    topBrands: ["Armoured Group", "Tire Trade", "Rio Car"],
    photos: ["/industries/automotive-1.jpg", "/industries/automotive-2.jpg"]
  }
];

export const topEngagements = [
  {
    id: "lusso",
    name: "Lusso Chocolate",
    industry: "Food & Beverage",
    spend: "$41,137",
    campaigns: 89,
    impressions: "11.9M",
    clicks: "94.9K",
    messages: "6,665",
    ctr: "0.80%",
    cpm: "$3.47",
    cpc: "$0.433",
    accounts: 2,
    badge: "Highest Single Brand Spend",
    summary: "Large-scale luxury confectionery branding and seasonal gifting campaign driving thousands of WhatsApp order flows.",
    summaryAr: "أكبر علامة تجارية من حيث الإنفاق بحملات موسمية للشوكولاتة الفاخرة وتدفق طلبات الشراء عبر واتساب."
  },
  {
    id: "sanad",
    name: "I.Investment / SANAD",
    industry: "Real Estate & Property",
    spend: "$17,788",
    campaigns: 31,
    impressions: "4.7M",
    clicks: "59.5K",
    messages: "1,331",
    ctr: "1.26%",
    cpm: "$3.77",
    cpc: "$0.299",
    accounts: 2,
    badge: "High-Ticket Real Estate Leads",
    summary: "Targeted investor acquisition in prime commercial and residential developments across Egypt with tight qualification criteria.",
    summaryAr: "استقطاب مشترين ومستثمرين في المشروعات العقارية الكبرى بتكلفة اكتساب منضبطة وجودة عالية."
  },
  {
    id: "meubles",
    name: "Meubles",
    industry: "Furniture, Interiors & Home",
    spend: "$15,468",
    campaigns: 149,
    impressions: "18.4M",
    clicks: "830.3K",
    messages: "64,848",
    ctr: "4.50%",
    cpm: "$0.84",
    cpc: "$0.019",
    accounts: 1,
    badge: "64K+ Messaging Inquiries",
    summary: "Massive conversational scale delivering 64,848 verified customer conversations for custom bespoke furniture at just $0.019 CPC.",
    summaryAr: "حجم محادثات ضخم حقق 64,848 محادثة عميل لشراء الأثاث بتكلفة نقرة قياسية بلغت 0.019 دولار فقط."
  },
  {
    id: "dakhly",
    name: "Dakhly Luxury Footwear",
    industry: "Fashion & Apparel",
    spend: "$14,742",
    campaigns: 50,
    impressions: "9.3M",
    clicks: "335.2K",
    messages: "4,270",
    ctr: "3.60%",
    cpm: "$1.58",
    cpc: "$0.044",
    accounts: 1,
    badge: "Direct E-commerce Scaling",
    summary: "Full-funnel creative testing and catalog sales scaling a premier handcrafted footwear label to national scale.",
    summaryAr: "توسيع مبيعات التجارة الإلكترونية لعلامة أحذية جلدية فاخرة بنظام اختبار إبداعي متواصل."
  },
  {
    id: "joja",
    name: "JOJA Store",
    industry: "Fashion & Apparel",
    spend: "$6,706",
    campaigns: 19,
    impressions: "6.2M",
    clicks: "992.2K",
    messages: "66,712",
    ctr: "16.06%",
    cpm: "$1.09",
    cpc: "$0.007",
    accounts: 2,
    badge: "Exceptional 16.06% CTR",
    summary: "Phenomenal audience resonance yielding nearly 1 million clicks and 66,712 direct messages with a $0.007 CPC benchmark.",
    summaryAr: "معدل نقر قياسي استثنائي 16.06% حقق قرابة مليون نقرة و66,712 محادثة طلب بتكلفة 0.007 دولار للنقرة."
  },
  {
    id: "arabs-lab",
    name: "Arabs International Labs",
    industry: "Healthcare & Medical",
    spend: "$5,941",
    campaigns: 21,
    impressions: "11.7M",
    clicks: "315.7K",
    messages: "17,026",
    ctr: "2.71%",
    cpm: "$0.51",
    cpc: "$0.019",
    accounts: 2,
    badge: "17K+ Medical Bookings",
    summary: "High-trust patient acquisition across diagnostic checkup packages with low CPM ($0.51) and strong branch attendance.",
    summaryAr: "حملات باقات الفحوصات والتحاليل الطبية حققت 17,026 حجزاً مع تكلفة ظهور منخفضة 0.51 دولار للألف."
  },
  {
    id: "she-arts",
    name: "She Arts",
    industry: "Arts, Entertainment & Events",
    spend: "$5,724",
    campaigns: 34,
    impressions: "6.7M",
    clicks: "221.4K",
    messages: "12,151",
    ctr: "3.29%",
    cpm: "$0.85",
    cpc: "$0.026",
    accounts: 1,
    badge: "12K+ Festival Inquiries",
    summary: "Omnipresent cultural campaign mobilizing vibrant artistic communities and concert attendees in Cairo.",
    summaryAr: "حملات واسعة للمهرجانات والفعاليات الفنية جذبت أكثر من 12 ألف استفسار وحضوراً جماهيرياً كبيراً."
  },
  {
    id: "tree-core",
    name: "Tree Core",
    industry: "Construction & Building Materials",
    spend: "$5,296",
    campaigns: 20,
    impressions: "5.4M",
    clicks: "176.2K",
    messages: "5,909",
    ctr: "3.28%",
    cpm: "$0.98",
    cpc: "$0.030",
    accounts: 3,
    badge: "B2B Contractor Contracts",
    summary: "Targeted industrial contractors and engineers for precast architectural installations with high conversion to quote.",
    summaryAr: "استهداف المقاولين والمهندسين لتوريدات وحلول البناء المعمارية بنسبة تحويل مرتفعة لعروض الأسعار."
  }
];

export const resultsMatrix = [
  { action: "Messaging conversations started", actionAr: "بدء محادثات رسائل تسويقية", volume: "676,124", cpr: "$0.37", category: "Conversational Commerce" },
  { action: "Total messaging connections", actionAr: "إجمالي الاتصالات عبر الرسائل", volume: "667,921", cpr: "$0.37", category: "Conversational Commerce" },
  { action: "Leads generated (total)", actionAr: "إجمالي العملاء المحتملين (Leads)", volume: "20,511", cpr: "$12.15", category: "Lead Generation" },
  { action: "Registrations completed", actionAr: "التسجيلات المكتملة", volume: "20,507", cpr: "$12.15", category: "Lead Generation" },
  { action: "Purchases (omni-channel)", actionAr: "عمليات الشراء (Omni-channel)", volume: "10,120", cpr: "$24.63", category: "E-Commerce & Sales" },
  { action: "Purchases (website direct)", actionAr: "عمليات الشراء على الموقع الإلكتروني", volume: "8,193", cpr: "$30.42", category: "E-Commerce & Sales" },
  { action: "Add to cart events", actionAr: "إضافة منتجات لسلة الشراء", volume: "44,444", cpr: "$5.61", category: "E-Commerce & Sales" },
  { action: "Checkouts initiated", actionAr: "بدء إجراءات الدفع والشراء", volume: "21,121", cpr: "$11.80", category: "E-Commerce & Sales" },
  { action: "Link clicks", actionAr: "نقرات الروابط", volume: "2,935,119", cpr: "$0.08", category: "Traffic & Engagement" },
  { action: "Landing page views", actionAr: "مشاهدات صفحات الهبوط", volume: "337,863", cpr: "$0.74", category: "Traffic & Engagement" },
  { action: "Video views (3s+)", actionAr: "مشاهدات الفيديو (3 ثوان فأكثر)", volume: "27,961,287", cpr: "$0.01", category: "Brand Awareness" },
  { action: "Post engagements", actionAr: "التفاعلات مع المنشورات", volume: "33,715,611", cpr: "$0.01", category: "Brand Awareness" },
  { action: "Page likes gained", actionAr: "تسجيلات الإعجاب بالصفحات", volume: "307,306", cpr: "$0.81", category: "Audience Building" },
  { action: "Post reactions", actionAr: "ردود الفعل على المنشورات", volume: "530,394", cpr: "$0.47", category: "Brand Awareness" },
  { action: "Comments generated", actionAr: "التعليقات والمشاركات التفاعلية", volume: "129,146", cpr: "$1.93", category: "Brand Awareness" },
  { action: "Calls placed from ads", actionAr: "مكالمات هاتفية مباشرة من الإعلانات", volume: "792", cpr: "$314.70", category: "Direct Sales" },
  { action: "On-Facebook instant leads", actionAr: "نماذج العملاء الفورية على فيسبوك", volume: "6,449", cpr: "$38.65", category: "Lead Generation" }
];

export const annualSpend = [
  { year: "2023", spendUsd: "$40,264", spendEgp: "781,392", accounts: 47, impressions: "44,679,120", clicks: "1,976,642", cpm: "$0.90", cpc: "$0.020" },
  { year: "2024", spendUsd: "$70,613", spendEgp: "2,243,796", accounts: 41, impressions: "91,279,542", clicks: "3,889,672", cpm: "$0.77", cpc: "$0.018" },
  { year: "2025", spendUsd: "$70,567", spendEgp: "2,380,092", accounts: 42, impressions: "65,609,240", clicks: "2,220,981", cpm: "$1.08", cpc: "$0.032" },
  { year: "2026", spendUsd: "$67,798", spendEgp: "2,753,797", accounts: 38, impressions: "58,912,076", clicks: "2,040,328", cpm: "$1.15", cpc: "$0.033" }
];

export const marketsDistribution = [
  { country: "Egypt", countryAr: "مصر", spend: 161649, share: "68.2%" },
  { country: "Qatar", countryAr: "قطر", spend: 45282, share: "19.1%" },
  { country: "Kuwait", countryAr: "الكويت", spend: 23914, share: "10.1%" },
  { country: "Saudi Arabia", countryAr: "المملكة العربية السعودية", spend: 13890, share: "5.9%" },
  { country: "United States", countryAr: "الولايات المتحدة", spend: 2429, share: "1.0%" },
  { country: "United Arab Emirates", countryAr: "الإمارات العربية المتحدة", spend: 1246, share: "0.5%" },
  { country: "Other 108 Countries", countryAr: "108 دول أخرى حول العالم", spend: 817, share: "0.3%" }
];

export const placementSplit = [
  { channel: "Facebook", share: 60.0, color: "#1877F2" },
  { channel: "Instagram", share: 38.0, color: "#E1306C" },
  { channel: "Audience Network", share: 0.8, color: "#00B2FF" },
  { channel: "Messenger", share: 0.7, color: "#0084FF" },
  { channel: "WhatsApp", share: 0.1, color: "#25D366" },
  { channel: "Other", share: 0.4, color: "#64748B" }
];

export const campaignObjectives = [
  { name: "Engagement & messaging", count: 1187, pct: 33.8 },
  { name: "Messages (legacy)", count: 1165, pct: 33.2 },
  { name: "Sales / Conversions", count: 320, pct: 9.1 },
  { name: "Link clicks (legacy)", count: 237, pct: 6.7 },
  { name: "Post engagement (legacy)", count: 168, pct: 4.8 },
  { name: "Awareness / Reach", count: 118, pct: 3.4 },
  { name: "Traffic", count: 98, pct: 2.8 },
  { name: "Page likes (legacy)", count: 82, pct: 2.3 },
  { name: "Lead generation", count: 69, pct: 2.0 },
  { name: "Reach (legacy)", count: 25, pct: 0.7 },
  { name: "Video views (legacy)", count: 20, pct: 0.6 },
  { name: "App installs (legacy)", count: 15, pct: 0.4 }
];

export const careerTimeline = [
  {
    period: "2025 – Present",
    periodAr: "2025 – حتى الآن",
    role: "Founder & SaaS Product Lead",
    roleAr: "مؤسس وقائد منتج SaaS",
    company: "Adams Analytics",
    companyUrl: "https://meta.buildincairo.com",
    badge: "Official Meta Tech Provider",
    location: "Cairo, Egypt · Global SaaS",
    bullets: [
      "Built and launched a Meta Ads management SaaS end-to-end in nine months as a solo founder, using AI-assisted development with Claude Code.",
      "Secured official Meta Tech Provider status with approved Marketing API permissions (ads_read, ads_management, business_management, read_insights).",
      "Architected the full stack — Next.js, TypeScript, Prisma/MySQL — with robust Meta OAuth and per-user token rotation.",
      "Engineered agency-grade reporting over ~730 mapped Meta Ads fields with daily metric ingestion and cross-account reconciliation.",
      "Shipped a bilingual English/Arabic product experience with full RTL support and high-performance financial reporting."
    ],
    bulletsAr: [
      "بناء وإطلاق منصة SaaS متكاملة لإدارة إعلانات ميتا من البداية حتى الإطلاق في 9 أشهر كمؤسس منفرد بالاستعانة بالذكاء الاصطناعي (Claude Code).",
      "الحصول على اعتماد Meta Tech Provider الرسمي مع صلاحيات Marketing API المعتمدة من شركة Meta العالمية.",
      "تصميم البنية البرمجية المتكاملة: Next.js وTypeScript وPrisma وMySQL مع Meta OAuth ونظام إدارة الرموز لكل مستخدم.",
      "تطوير محرك تقارير احترافي للوكالات يغطي قرابة 730 حقلاً بيانياً لإعلانات ميتا مع سحب البيانات يومياً والتوفيق بين الحسابات.",
      "تقديم تجربة مستخدم ثنائية اللغة (عربي / إنجليزي) تدعم اتجاه RTL بالكامل وتقارير مالية دقيقة."
    ]
  },
  {
    period: "2024 – Present",
    periodAr: "2024 – حتى الآن",
    role: "Head of Advertising Department",
    roleAr: "رئيس قسم الإعلانات وشراء الوسائط",
    company: "Confidential — Leading Marketing Group",
    badge: "EGP 500K+ Monthly Ad Spend",
    location: "Cairo, Egypt",
    bullets: [
      "Lead the media buying department across campaign strategy, multi-brand budget allocation, and strict CPA/ROAS targets.",
      "Directly manage and own EGP 500K+ in monthly ad spend across high-competition enterprise accounts in Egypt and the GCC.",
      "Mentor and manage a team of media buyers; established agency-wide SOPs for campaign structure, creative fatigue testing, and automated bid optimization.",
      "Report growth metrics, financial efficiency, and customer acquisition unit economics directly to the executive board."
    ],
    bulletsAr: [
      "قيادة فريق شراء الوسائط عبر استراتيجيات الحملات، وتوزيع الميزانيات على العلامات التجارية المتعددة، وتحقيق مستهدفات العائد ROAS.",
      "الإشراف المباشر على ميزانيات تفوق 500,000 جنيه مصري شهرياً عبر حسابات إعلانية كبرى في مصر ودول الخليج.",
      "توجيه وتدريب فريق المشترين ووضع معايير قياسية لبناء الحملات واختبار المحتوى الإبداعي وإدارة المزايدات الذكية.",
      "تقديم تقارير الأداء الاستراتيجي والنمو المالي وربحية الاستحواذ مباشرة لمجلس الإدارة التنفيذي."
    ]
  },
  {
    period: "2021 – Present",
    periodAr: "2021 – حتى الآن",
    role: "Founder & Performance Marketing Director",
    roleAr: "مؤسس ومدير التسويق الرقمي والأداء",
    company: "Build in Cairo Agency",
    companyUrl: "https://buildincairo.com",
    badge: "Full-Funnel Agency",
    location: "Cairo, Egypt",
    bullets: [
      "Lead performance media buying and growth strategy across Meta, Google Ads, TikTok, Snapchat, LinkedIn, and YouTube for enterprise and D2C clients.",
      "Develop full-funnel media plans, multi-scenario EGP/USD marketing budgets, and investor-grade pitch performance dossiers.",
      "Built proprietary client reporting infrastructure: quarterly business reviews, cross-channel brand equity dashboards, and bilingual trackers.",
      "Deliver native Arabic keyword research, cultural copywriting, and competitive positioning tailored to Egypt and Gulf markets (KSA, Qatar, Kuwait, UAE)."
    ],
    bulletsAr: [
      "قيادة استراتيجيات النمو وشراء الوسائط عبر منصات Meta وGoogle وTikTok وSnapchat وLinkedIn وYouTube لعملاء التجارة والخدمات.",
      "تطوير خطط تسويق كاملة المراحل، ميزانيات متعددة السيناريوهات، وملفات أداء مهيأة للمستثمرين وأصحاب الأعمال.",
      "تأسيس منظومة تقارير ومتابعة دورية: لوحات قياس ثنائية اللغة، تقارير ربع سنوية، وتحليلات عوائد الحملات.",
      "إجراء أبحاث الكلمات المفتاحية باللغة العربية وصياغة الإعلانات الإبداعية المناسبة لثقافة السوق المصري والخليجي."
    ]
  },
  {
    period: "2018 – 2021",
    periodAr: "2018 – 2021",
    role: "Performance Marketing Specialist / Media Buyer",
    roleAr: "أخصائي تسويق رقمي ومشتري إعلانات",
    company: "Freelance & Agency Projects",
    location: "Cairo, Egypt",
    bullets: [
      "Executed performance acquisition campaigns on Meta, Google, TikTok, and Snapchat, growing from tactical ad management to full budget ownership.",
      "Scaled lead generation and conversion campaigns for local retail, educational entities, and service businesses across Egypt."
    ],
    bulletsAr: [
      "إدارة وتنفيذ حملات الأداء الإعلاني عبر Meta وGoogle وTikTok وSnapchat مع التدرج نحو تولي استراتيجيات الحسابات والميزانيات الكبرى.",
      "تنمية مبيعات المتاجر الإلكترونية وعملاء الشركات المحلية في قطاعات التعليم والتجزئة والخدمات."
    ]
  },
  {
    period: "2016 – 2018",
    periodAr: "2016 – 2018",
    role: "Web Developer — WordPress & Shopify",
    roleAr: "مطور مواقع ومتاجر إلكترونية",
    company: "Freelance",
    location: "Cairo, Egypt",
    bullets: [
      "Designed, coded, and launched e-commerce stores and corporate websites, specializing in high-performance bilingual builds with full RTL support."
    ],
    bulletsAr: [
      "تصميم وبرمجة مواقع الشركات والمتاجر الإلكترونية مع التركيز على البنية ثنائية اللغة ودعم اللغة العربية RTL وسرعة التحميل."
    ]
  }
];

export const skillsList = [
  { category: "Paid Media Buying", categoryAr: "شراء الوسائط الإعلانية", items: ["Meta Ads Manager (Facebook & Instagram)", "Google Ads (Search, Display, Performance Max, YouTube)", "TikTok Ads Manager", "Snapchat Ads", "LinkedIn Campaign Manager"] },
  { category: "Strategy & Operations", categoryAr: "الاستراتيجية وإدارة الأداء", items: ["Full-Funnel Growth Architecture", "Multi-Scenario Media Planning & Budgeting", "Conversion Rate Optimization (CRO)", "A/B Creative Fatigue Testing", "Attribution & Unit Economics (CAC, ROAS, LTV)"] },
  { category: "Product & Engineering", categoryAr: "البرمجيات وتكنولوجيا الإعلانات", items: ["Next.js & React", "TypeScript", "Prisma & MySQL", "Meta Graph & Marketing API (v21.0)", "OAuth 2.0 & Token Architecture", "AI-Assisted Engineering (Claude Code)"] },
  { category: "Analytics & Creative Tools", categoryAr: "التحليلات والأدوات", items: ["Advanced Excel & Google Sheets", "Google Analytics 4 & Tag Manager", "CapCut, Midjourney, Canva", "PowerPoint / Keynote Pitch Decks"] },
  { category: "Market & Linguistic Mastery", categoryAr: "الأسواق واللغات", items: ["Egypt Domestic Market Mastery", "GCC Expansion (KSA, Qatar, Kuwait, UAE)", "Native Arabic (SEO, Copywriting, RTL UX)", "Professional English Fluency"] }
];

export const credentialsData = [
  { title: "Bachelor's Degree — Information Systems & Management", issuer: "Higher Institute of Computer Science (2013)", badge: "Degree" },
  { title: "Official Meta Tech Provider Status", issuer: "Meta for Developers (Approved Marketing API permissions)", badge: "Tech Accreditation" },
  { title: "Google Digital Marketing Certifications", issuer: "Google Digital Garage / Skillshop", badge: "Certified" },
  { title: "Digital Marketing Challenger Track", issuer: "Udacity", badge: "Accredited" }
];

export const provenanceNotes = [
  {
    title: "100% Machine-Verifiable API Query",
    titleAr: "بيانات مستخرجة وموثقة عبر API بنسبة 100%",
    text: "Every metric in this dossier was extracted on 08 September 2026 using an authenticated Meta Marketing API v21.0 token holding ads_read, ads_management, business_management, and read_insights permissions. Zero numbers are self-reported or remembered from memory.",
    textAr: "كل رقم في هذا الملف تم سحبه بتاريخ 08 سبتمبر 2026 عبر Meta Marketing API v21.0 بصلاحيات معتمدة رسمياً. لا توجد أي أرقام تقديرية أو غير موثقة برقم حساب إعلاني رسمي."
  },
  {
    title: "Month-Accurate Currency Normalization",
    titleAr: "معالجة تقلبات العملة بأسعار الصرف الشهرية الدقيقة",
    text: "Because the Egyptian Pound fluctuated from 15.7 EGP/USD in 2021 to over 50.9 EGP/USD today, converting historical EGP at current rates would diminish historical media value by ~65%. Every single month's spend was converted using that month's historical exchange rate before summation.",
    textAr: "نظراً لتغير سعر صرف الجنيه المصري أمام الدولار، فإن تحويل الإنفاق السابق بالأسعار الحالية كان سيهدر ثلثي قيمة العمل الفعلي. لذلك تم تحويل كل شهر على حدة بسعر الصرف الحقيقي الخاص به في حينه."
  },
  {
    title: "Exact Campaign-Level Brand Attribution",
    titleAr: "تنسيب الإنفاق بدقة على مستوى الحملات الإعلانية",
    text: "Because many agency ad accounts were reused across clients, account-level attribution would be inaccurate. 85.1% of all spend is tied directly to brands by campaign-level naming conventions. 7.6% ($19,452 across 9 accounts) with inconclusive evidence is openly classified as Unattributed rather than estimated.",
    textAr: "نظراً لاستخدام بعض الحسابات الإعلانية لأكثر من عميل، تم تنسيب 85.1% من الميزانيات استناداً لاسم الحملة الفعلي. وتم عزل 7.6% من الميزانيات كغير منسوبة بكل شفافية بدلاً من التخمين."
  },
  {
    title: "37-Month Meta Insights Boundary",
    titleAr: "سقف استرجاع تقارير ميتا الزمني (37 شهراً)",
    text: "Meta's Insights API limits detailed delivery queries to 37 months (August 2023 – September 2026). $249,241 (97.2%) of the $256,515 lifetime total falls within this detailed window, with the residual $7,274 accurately verified from cumulative account balances.",
    textAr: "تحدد شركة ميتا سقفاً زمنياً أقصاه 37 شهراً لتقارير النتائج التفصيلية. يقع 97.2% من الإنفاق المدار داخل نافذة التحليل الدقيقة، بينما تم توثيق المتبقي من الرصيد التراكمي للحسابات."
  }
];
