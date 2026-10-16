// 简体中文文本。结构与 en.ts 相同（缺少翻译时 TypeScript 会提示）。
// 上线前请让母语为中文的人校对。如需繁体中文版本，可另外增加一种语言。
import type { Dictionary } from "@/i18n/types";

const zh: Dictionary = {
  meta: {
    siteTitle: "斯里兰卡私人定制旅行",
    description:
      "斯里兰卡私人导览旅行：古老城市、云雾缭绕的茶园、瀑布与野生动物，专属司机兼导游与专属车辆全程陪伴。",
    location: "斯里兰卡 · 全岛接送",
  },

  common: {
    skipToContent: "跳到正文",
    bookOnWhatsApp: "通过 WhatsApp 预订",
    chatOnWhatsApp: "在 WhatsApp 上咨询",
    chatWithUs: "联系我们",
    chatWithUsAria: "通过 WhatsApp 联系我们",
    viewTour: "查看行程",
    viewAllTours: "查看全部行程",
    viewGallery: "查看相册",
    readAllReviews: "阅读全部评价",
    exploreTours: "探索行程",
    browseTours: "浏览行程",
    ratingLabel: (rating) => `${rating} 星（满分 5 星）`,
  },

  nav: {
    tours: "行程",
    gallery: "相册",
    reviews: "评价",
    about: "关于我们",
    contact: "联系我们",
  },

  header: {
    homeAria: (name) => `${name} 首页`,
    mainMenu: "主菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
  },

  footer: {
    explore: "浏览",
    contact: "联系方式",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "在 TripAdvisor 上找到我们",
    menu: "页脚",
    rights: (name) => `© ${name}。保留所有权利。`,
  },

  tour: {
    fromPrice: (price) => `每人 ${price} 美元起`,
    priceOnRequest: "价格请咨询",
    privateTour: "私人行程",
    highlights: "行程亮点",
    thePlan: "行程安排",
    included: "费用包含",
    photos: "照片",
    bookThisTour: "预订此行程",
    finalPriceNote: "最终价格将通过 WhatsApp 确认",
    youMayAlsoLike: "您可能还喜欢",
    breadcrumb: "页面路径",
    loading: "正在加载行程",
  },

  reviewCard: {
    meta: (month, source) => `${month} · 来自 ${source}`,
  },

  cta: {
    eyebrow: "规划您的旅程",
    title: "告诉我们您的出行日期，其余的交给我们。",
    text: "通过 WhatsApp 给我们发消息。我们会亲自回复，并围绕您的需求安排行程。",
  },

  home: {
    heroEyebrow: "私人定制旅行 · 斯里兰卡",
    heroTitle: "从容不迫，邂逅美丽的斯里兰卡。",
    heroText:
      "古老城市、云雾缭绕的茶园、瀑布与野生动物，专属司机兼导游，专属车辆，只为您一人而行。",
    heroPoints: ["仅限私人行程", "当地专业导游", "全岛接送"],
    heroCaption: "狮子岩，文化三角区",
    whyEyebrow: "为什么选择我们",
    whyTitle: "本地小团队，亲切的欢迎",
    whyIntro: "我们不是大型旅行社。每一次行程都由我们自己的小团队规划、驾驶并带领。",
    reasons: {
      private: {
        title: "私人专享",
        text: "专属车辆和导游。没有拥挤的大巴，没有固定的时间表：一切按您的节奏。",
      },
      guides: {
        title: "本地导游，真实故事",
        text: "我们的导游在斯里兰卡出生长大，每到一处都会为您讲述背后的历史、美食和鲜为人知的地方。",
      },
      vehicles: {
        title: "舒适的车辆",
        text: (count) => `${count} 辆干净、保养良好的车辆，配有谨慎、经验丰富的司机。`,
      },
      booking: {
        title: "预订简单",
        text: "无需注册账号，也无需在线付款。发送申请，其余细节我们在 WhatsApp 上一起确定。",
      },
    },
    featuredEyebrow: "精选行程",
    featuredTitle: "最受喜爱的旅程",
    featuredIntro: "每个行程都是私人专享，可根据您的节奏和兴趣调整。",
    howEyebrow: "预订流程",
    howTitle: "预订不到一分钟",
    steps: [
      { title: "选择行程", text: "挑选您喜欢的行程，或告诉我们您想看什么。" },
      { title: "发送申请", text: "填写一份简短的表单。WhatsApp 会打开，您的信息已填好，发送即可。" },
      { title: "一起规划", text: "我们会在 WhatsApp 上亲自回复，确认日期、接送地点和价格。" },
    ],
    momentsEyebrow: "精彩瞬间",
    momentsTitle: "客人的旅途回忆",
    reviewsEyebrow: "客人评价",
    reviewsTitle: "客人怎么说",
  },

  toursPage: {
    metaTitle: "行程",
    metaDescription: "斯里兰卡私人一日游与短途旅行：锡吉里耶、康提、茶园、埃拉、大象与南部海岸。",
    eyebrow: "我们的行程",
    title: "畅游全岛的私人旅程",
    intro: "每个行程都是私人专享，配有专属车辆和导游。日期、节奏和停留点都可以调整，直接告诉我们即可。",
  },

  galleryPage: {
    metaTitle: "相册",
    metaDescription: "客人分享的斯里兰卡私人行程照片。",
    eyebrow: "相册",
    title: "旅途中的瞬间",
    intro: "来自真实行程的真实照片：我们的客人、我们的导游，以及我们乐于分享的地方。",
  },

  reviewsPage: {
    metaTitle: "评价",
    metaDescription: (name) => `客人对 ${name} 私人行程的评价。`,
    eyebrow: "客人评价",
    title: "来自客人的温暖话语",
    intro: "每一条评价都来自与我们同行的客人。",
    basedOn: (count) => `共 ${count} 条评价`,
    seeMore: "在 TripAdvisor 上查看更多",
  },

  about: {
    metaTitle: "关于我们",
    metaDescription: (name) => `${name} 是一家斯里兰卡小型出租车与旅游公司，提供本地导游带领的私人行程。`,
    eyebrow: "关于我们",
    title: "分享我们称之为家的这座岛",
    intro: (name) => `${name} 始于一个简单的想法：诚恳、亲切地向旅行者展示我们从小生长的斯里兰卡。`,
    storyEyebrow: "我们的故事",
    storyTitle: "一位本地导游，一支小团队，一座大岛",
    storyP1: (vehicles) =>
      `一切始于一位带游客游览家乡小城的导游，如今已发展为由导游和司机组成的小团队，拥有 ${vehicles} 辆车。我们有意保持小规模：这样每位客人都能得到我们全部的关注。`,
    storyP2:
      "从岩石要塞锡吉里耶到高地茶园，我们带您去著名景点，也带您去它们之间安静的地方，并讲述背后的故事。",
    factVehicles: "舒适的车辆",
    factPrivateValue: "100%",
    factPrivate: "私人行程",
    factIslandWideValue: "全岛",
    factIslandWide: "接送服务",
    travelEyebrow: "我们的旅行方式",
    travelTitle: "您的节奏，您的计划",
    travelP1:
      "每个行程都是私人专享。想在瀑布边多待一会儿，跳过某个景点，或是找城里最好吃的咖喱饭？告诉您的导游就好，这一天由您做主。",
    travelP2: "规划也很简单。通过 WhatsApp 给我们发消息，无论是抵达之前还是旅途之中，我们都会帮您安排行程。",
  },

  contact: {
    metaTitle: "联系我们",
    metaDescription: (name) => `通过 WhatsApp、电话或电子邮件联系 ${name}，规划您在斯里兰卡的私人行程。`,
    eyebrow: "联系我们",
    title: "一起规划您的旅程",
    intro: "最快的联系方式是 WhatsApp。直接发消息，或填写表单，我们会在 WhatsApp 上继续沟通。",
    whatsApp: "WhatsApp",
    phone: "电话",
    email: "电子邮件",
    whereWeAre: "我们的位置",
    formTitle: "发送申请",
    formIntro: "还没想好选哪个行程？留空即可，我们会为您推荐。",
  },

  booking: {
    tour: "行程",
    notSure: "还没想好，请为我推荐行程",
    name: "您的姓名",
    whatsApp: "WhatsApp 号码",
    whatsAppPlaceholder: "+86 138 0013 8000",
    date: "期望日期",
    adults: "成人",
    children: "儿童",
    pickup: "接送地点",
    pickupPlaceholder: "酒店名称或机场",
    message: "留言",
    optional: "（选填）",
    submit: "通过 WhatsApp 发送申请",
    note: "WhatsApp 会打开，您的信息已填好，发送即可。在我们与您确认之前，不会产生任何预订或付款。",
  },

  notFound: {
    eyebrow: "页面未找到",
    title: "这条路哪里也通不到",
    text: "您要找的页面已被移动或不再存在。让我们带您回去。",
  },

  photos: {
    "sigiriya-lake": "平静湖面对岸的锡吉里耶狮子岩",
    "sigiriya-view": "客人在锡吉里耶岩前",
    "sigiriya-guests": "我们的导游与客人在锡吉里耶附近",
    "village-rice-pounding": "客人在传统村庄里舂米",
    "village-weaving": "村庄里的棕榈叶编织体验",
    "village-cooking": "村庄厨房里柴火上的陶锅",
    "village-lunch": "家常斯里兰卡午餐",
    "kandy-temple": "客人在康提佛牙寺",
    "kandy-temple-gardens": "佛牙寺的花园",
    "kandy-hindu-temple": "色彩缤纷的印度教寺庙内部",
    "elephant-river-bath": "大象与客人在河中洗澡",
    "elephant-river": "客人在河中大象旁",
    "tea-plucking": "客人在山坡茶园里采茶",
    "labookellie-tea": "客人在拉布凯利茶园",
    "tea-plantation": "采茶工向客人示范如何采摘茶叶",
    "tea-picker": "客人背着篮子采茶",
    "ramboda-falls": "高地上的兰博达瀑布",
    "tea-centre": "俯瞰茶园，享用茶与蛋糕",
    "labookellie-guests": "我们的导游与客人在拉布凯利",
    "tea-country-guests": "茶乡里开心的客人",
    "nine-arch-bridge": "客人在埃拉九拱桥",
    "ella-waterfall": "我们的导游与客人在埃拉附近的瀑布",
    "ella-falls": "我们的导游站在飞流直下的瀑布旁",
    "waterfall-swim": "客人在带天然水池的瀑布前",
    "waterfall-pool": "客人在瀑布下的岩石水池里涉水",
    "elephant-encounter": "客人站在大象旁",
    "elephant-guests": "两位客人与大象合影",
    "elephant-selfie": "我们的导游与客人和大象",
    "south-coast": "客人在棕榈成行的南部海岸",
    "beach-guests": "我们的导游与一群客人在海边",
  },

  tours: {
    "sigiriya-village-life": {
      title: "锡吉里耶狮子岩与乡村生活",
      location: "锡吉里耶 · 哈巴拉纳",
      duration: "全天 · 约 10 小时",
      summary: "攀登 5 世纪的狮子岩要塞，然后在传统村庄里放慢脚步，享用一顿家常午餐。",
      description: [
        "锡吉里耶耸立在文化三角区平原之上，高达 200 米。我们很早出发，趁天热之前登山，经过著名的壁画和狮爪，一路到山顶的宫殿遗址。",
        "下午，我们远离人群。在农村里，您会看到人们用手舂米，尝试用椰子树叶编织，并一起享用柴火烹制的午餐。",
      ],
      highlights: [
        "攀登锡吉里耶狮子岩，联合国教科文组织世界遗产",
        "传统村庄参观，可亲手体验",
        "在村庄厨房享用家常斯里兰卡午餐",
        "避开人群，在湖边欣赏狮子岩",
      ],
      itinerary: [
        { title: "清晨接送", description: "酒店接您，前往锡吉里耶。" },
        { title: "锡吉里耶狮子岩", description: "导游带领登顶，约 2–3 小时。" },
        { title: "乡村体验", description: "舂米、棕榈叶编织，并漫步稻田。" },
        { title: "村庄午餐", description: "当地家庭准备的咖喱饭午餐。" },
        { title: "返程", description: "轻松驱车返回酒店。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "村庄午餐", "瓶装水"],
    },
    "kandy-temple-of-the-tooth": {
      title: "康提与佛牙寺",
      location: "康提 · 品纳瓦拉",
      duration: "全天 · 约 9 小时",
      summary: "斯里兰卡最后的王都：神圣的佛牙寺、色彩缤纷的印度教寺庙，以及在河中洗澡的大象。",
      description: [
        "康提坐落在青山之间，环绕着一片宁静的湖泊。导游带您参观佛牙舍利寺，这是岛上最重要的佛教圣地，并讲解仪式背后的故事。",
        "途中，我们会在一座满是雕刻彩绘神像的印度教寺庙停留，还会去大象下河洗澡的河边。",
      ],
      highlights: [
        "佛牙舍利寺，联合国教科文组织世界遗产",
        "参观色彩缤纷的印度教寺庙",
        "河中洗澡的大象",
        "康提湖与俯瞰全城的观景台",
      ],
      itinerary: [
        { title: "接送", description: "在康提或附近的酒店接您。" },
        { title: "河边的大象", description: "观看大象在河中洗澡嬉戏。" },
        { title: "印度教寺庙", description: "短暂参观装饰华丽的神庙。" },
        { title: "佛牙寺", description: "导游带领参观寺庙及花园。" },
        { title: "康提湖", description: "湖边漫步，并登上观景台俯瞰全城。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "瓶装水"],
    },
    "tea-country-nuwara-eliya": {
      title: "茶乡与努沃勒埃利耶",
      location: "兰博达 · 努沃勒埃利耶",
      duration: "全天 · 约 10 小时",
      summary: "盘山而上，进入云雾缭绕的山丘，与茶园采茶工一起采茶，并在茶园美景中品尝新鲜的锡兰红茶。",
      description: [
        "进入高地的公路一路经过瀑布和连绵不断的梯田茶园。在兰博达瀑布，我们停下来欣赏风景，然后进入高地清凉的空气中。",
        "在运营中的茶园里，您可以与采茶工一起尝试采摘茶叶，然后在俯瞰山谷的拉布凯利茶中心，坐下来享用一杯新鲜的茶和一块蛋糕。",
      ],
      highlights: [
        "与茶园采茶工一起采摘茶叶",
        "在拉布凯利品茶，欣赏山谷风景",
        "兰博达瀑布观景点",
        "努沃勒埃利耶，斯里兰卡的“小英格兰”",
      ],
      itinerary: [
        { title: "接送", description: "在康提或您在高地的酒店接您。" },
        { title: "兰博达瀑布", description: "上山途中在瀑布停留。" },
        { title: "采茶", description: "在运营中的茶园里加入采茶工的行列。" },
        { title: "拉布凯利茶中心", description: "俯瞰茶园，享用新鲜的茶和蛋糕。" },
        { title: "努沃勒埃利耶", description: "格里高利湖与殖民风格的市中心。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "品茶", "瓶装水"],
    },
    "ella-waterfalls": {
      title: "埃拉、九拱桥与瀑布",
      location: "埃拉 · 高地",
      duration: "2 天 · 1 晚",
      summary: "在埃拉度过轻松的两天：著名的九拱桥、丛林瀑布，以及可以游泳的清凉天然水池。",
      description: [
        "埃拉是一座被森林和茶园环绕的山间小镇。我们把您参观九拱桥的时间安排在火车经过之时，然后前往隐藏在山丘中的瀑布。",
        "第二天，在瀑布下的天然岩石水池里消暑，然后轻松返程。导游会选择最安静的地点和最佳的游览时间。",
      ],
      highlights: ["火车经过时的九拱桥", "拉瓦纳瀑布与更安静的隐秘瀑布", "在天然岩石水池中游泳", "埃拉隘口的山景"],
      itinerary: [
        { title: "第 1 天 · 前往埃拉", description: "沿着风景优美的路线穿越高地，前往埃拉。" },
        { title: "第 1 天 · 九拱桥", description: "步行到桥边，观看火车驶过。" },
        { title: "第 2 天 · 瀑布", description: "参观拉瓦纳瀑布和一处更安静的丛林瀑布。" },
        { title: "第 2 天 · 岩石水池", description: "返程前有时间游泳放松。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "司机住宿", "瓶装水"],
    },
    "elephant-encounter": {
      title: "与大象相遇",
      location: "斯里兰卡中部",
      duration: "半天 · 约 5 小时",
      summary: "近距离接触斯里兰卡温和的大象，由懂得如何尊重地观察它们的导游带领。",
      description: [
        "很少有什么时刻比站在大象身旁更令人难忘。这趟轻松的半日行程，让您在自然环境中近距离接触亚洲象。",
        "导游会讲述大象在斯里兰卡如何生活，以及如何安全、尊重地欣赏它们。很容易与锡吉里耶或康提行程组合。",
      ],
      highlights: ["近距离观看亚洲象", "了解斯里兰卡大象的生活", "节奏轻松，适合家庭"],
      itinerary: [
        { title: "接送", description: "酒店接您。" },
        { title: "与大象相遇", description: "在导游带领下，不慌不忙地与大象共处。" },
        { title: "返程", description: "返程途中停下来喝一个新鲜的王椰子。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "瓶装水"],
    },
    "south-coast-escape": {
      title: "南部海岸休闲游",
      location: "加勒 · 米瑞莎",
      duration: "全天 · 约 10 小时",
      summary: "棕榈成行的海滩、加勒古老的荷兰要塞，以及印度洋上悠然的日落。",
      description: [
        "南部海岸是斯里兰卡最悠闲的一面。我们沿着加勒要塞的城墙漫步，这座联合国教科文组织列入名录的古城有殖民风格的街巷和小咖啡馆。",
        "然后是海滩时光：金色沙滩、椰子树和温暖的海水，最后以海岸日落收尾。",
      ],
      highlights: ["加勒要塞，联合国教科文组织世界遗产", "南部海岸棕榈成行的海滩", "印度洋日落"],
      itinerary: [
        { title: "接送", description: "在南部或西部海岸的酒店接您。" },
        { title: "加勒要塞", description: "漫步城墙和古老街巷。" },
        { title: "海滩时光", description: "在安静的棕榈海滩上游泳放松。" },
        { title: "日落", description: "返程前欣赏夕阳西下。" },
      ],
      included: ["专属空调车辆", "会说英语的司机兼导游", "瓶装水"],
    },
  },

  reviews: {
    r1: {
      country: "英国",
      text: "导游让锡吉里耶变成了一个故事，而不只是一次攀登。之后在村里吃的午餐是整趟旅行中最好吃的一餐。通过 WhatsApp 预订非常方便。",
    },
    r2: {
      country: "德国",
      text: "和采茶工一起采茶，再在拉布凯利的美景中喝下这杯茶，令人难忘。车很舒适，开得很稳，而且总是准时。",
    },
    r3: {
      country: "法国",
      text: "从第一条消息起，我们就感到被照顾得很好。他清楚知道什么时候去九拱桥，既能看到火车又避开了人群。",
    },
    r4: {
      country: "荷兰",
      text: "这是一次像和朋友同游一样的私人行程。康提、寺庙和河中的大象，节奏都恰到好处。",
    },
    r5: {
      country: "西班牙",
      text: "热情、诚实、见多识广。那天下雨，他当天就调整了计划，带我们去了一处美丽的瀑布。",
    },
    r6: {
      country: "澳大利亚",
      text: "作为私人司机兼导游，性价比很高。南部海岸那天很悠闲，加勒要塞是亮点。我们会毫不犹豫地再次预订。",
    },
  },
};

export default zh;
