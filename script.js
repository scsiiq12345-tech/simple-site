const cta = document.querySelector(".cta");
const themeButton = document.querySelector(".toggle-theme");
const langButton = document.querySelector(".toggle-lang");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
const savedTheme = localStorage.getItem("theme");
const body = document.body;
const html = document.documentElement;

const translations = {
  ru: {
    home_title: "Простой веб‑сайт",
    home_subtitle: "Чистая структура, приятный стиль и всё в одном файле.",
    nav_home: "Главная",
    nav_features: "Преимущества",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_about_page: "Страница о нас",
    nav_services_page: "Услуги",
    nav_contact_page: "Связаться",
    sn_start: "Старт",
    sn_key: "Ключевое",
    sn_story: "История",
    sn_form: "Форма",
    sn_mission: "Миссия",
    sn_team: "Команда",
    sn_values: "Ценности",
    sn_packages: "Пакеты",
    sn_process: "Процесс",
    sn_cases: "Задачи",
    sn_addons: "Дополнительно",
    sn_contacts: "Контакты",
    sn_hours: "График",
    home_badge: "Сайт за 5 минут",
    home_hero_title: "Стартовая страница для вашего проекта",
    home_hero_text:
      "Здесь можно быстро рассказать, чем вы занимаетесь, и добавить ключевые преимущества.",
    home_cta: "Посмотреть возможности →",
    features_title: "Преимущества для веб‑студии",
    features_intro:
      "Мы делаем сайты, которые помогают бизнесу быстро запускаться, собирать заявки и выглядеть современно без лишней сложности.",
    feature_light_title: "Лёгкий дизайн",
    feature_light_text: "Собираем чистые макеты без перегруза и лишних деталей.",
    feature_responsive_title: "Адаптивность",
    feature_responsive_text: "Страницы одинаково хорошо выглядят на всех устройствах.",
    feature_ready_title: "Готово к запуску",
    feature_ready_text: "Подготовим структуру и тексты, чтобы не терять время.",
    feature_fast_title: "Быстрое внедрение",
    feature_fast_text: "План и смета в первый день, дизайн — через 3–5 дней.",
    feature_reports_title: "Отчётность",
    feature_reports_text: "Даём промежуточные версии и фиксируем статус задач.",
    feature_support_title: "Поддержка",
    feature_support_text: "Сопровождаем после запуска и помогаем развиваться.",
    about_block_title: "Что дальше?",
    about_block_p1:
      "Замените тексты, добавьте логотип и расширьте блоки под себя. Этот шаблон легко превратить в лендинг или личную страницу.",
    about_block_p2:
      "Если нужен полный пакет — мы подготовим структуру, дизайн и тексты под вашу нишу, а также поможем с запуском и аналитикой.",
    contact_title: "Обратная связь",
    contact_intro: "Оставьте сообщение — мы ответим в течение дня.",
    footer_rights: "© 2026 Простой сайт. Все права защищены.",
    about_title: "О нас",
    about_subtitle: "Кто мы, как работаем и почему нам доверяют.",
    about_badge: "12 лет в отрасли",
    about_hero_title: "Веб‑студия, которая любит понятные сайты",
    about_hero_text:
      "Мы создаём проекты для малого и среднего бизнеса: от запуска лендинга до цифровой экосистемы с формами, аналитикой и интеграциями.",
    about_story_title: "Наша история",
    about_story_p1:
      "Мы начинали как небольшая команда, которая помогала знакомым с дизайном и запуском сайтов. Сейчас мы делаем понятные, быстрые и аккуратные веб‑решения для бизнеса и личных проектов.",
    about_story_p2:
      "За это время мы провели более 180 запусков: от сервисов доставки до образовательных платформ. Мы знаем, как сделать сайт понятным для клиента и выгодным для владельца.",
    about_mission_title: "Миссия",
    about_mission_p1:
      "Делать цифровые продукты простыми для пользователей и удобными для владельцев. Мы ценим ясность, честность и внимание к деталям.",
    about_mission_p2:
      "Каждый проект начинается с целей: заявки, продажи, бренд или поддержка клиентов. Мы подбираем решение так, чтобы оно работало именно на ваши показатели.",
    about_team_title: "Команда",
    team_alina_title: "Алина, дизайн",
    team_alina_text: "Создаёт визуальные решения и заботится о стиле.",
    team_max_title: "Максим, разработка",
    team_max_text: "Отвечает за скорость, структуру и код.",
    team_olga_title: "Ольга, менеджмент",
    team_olga_text: "Планирует процесс и держит сроки под контролем.",
    team_egor_title: "Егор, контент",
    team_egor_text: "Пишет тексты, которые объясняют и продают.",
    team_nat_title: "Наталья, аналитика",
    team_nat_text: "Настраивает метрики и помогает расти.",
    about_values_title: "Ценности",
    values_clear_title: "Понятность",
    values_clear_text: "Мы объясняем решения простыми словами.",
    values_speed_title: "Скорость",
    values_speed_text: "Быстро запускаем и доводим до результата.",
    values_support_title: "Поддержка",
    values_support_text: "Остаёмся на связи после запуска.",
    values_quality_title: "Качество",
    values_quality_text: "Следим за деталями, чтобы сайт не ломался и был удобным.",
    values_transparency_title: "Прозрачность",
    values_transparency_text: "Фиксируем задачи и сроки в рабочем плане.",
    services_title: "Услуги",
    services_subtitle: "Собрали всё, что нужно для запуска и развития проекта.",
    services_badge: "Пакеты под задачу",
    services_hero_title: "Услуги веб‑студии от идеи до запуска",
    services_hero_text:
      "Мы помогаем оформить продукт, структурировать контент и запустить сайт, который привлекает клиентов и упрощает работу команды.",
    services_packages_title: "Пакеты услуг",
    pack_start_title: "Старт",
    pack_start_text: "Лендинг или визитка с базовой структурой и дизайном.",
    pack_start_time: "Срок: 5–7 дней.",
    pack_business_title: "Бизнес",
    pack_business_text: "Несколько страниц, формы, аналитика и оптимизация.",
    pack_business_time: "Срок: 10–14 дней.",
    pack_pro_title: "Про",
    pack_pro_text: "Сложные интерфейсы, интеграции и поддержка 24/7.",
    pack_pro_time: "Срок: 3–4 недели.",
    services_process_title: "Как мы работаем",
    process_step1_title: "1. Бриф",
    process_step1_text: "Понимаем ваши цели и аудиторию.",
    process_step2_title: "2. Дизайн",
    process_step2_text: "Создаём визуальную концепцию и прототипы.",
    process_step3_title: "3. Разработка",
    process_step3_text: "Собираем сайт и готовим к запуску.",
    process_step4_title: "4. Поддержка",
    process_step4_text: "Помогаем развивать и улучшать продукт.",
    process_step5_title: "5. Контент",
    process_step5_text: "Редактируем тексты, чтобы они продавали.",
    process_step6_title: "6. Аналитика",
    process_step6_text: "Подключаем метрики и отслеживаем результат.",
    services_cases_title: "Примеры задач",
    services_cases_p1:
      "Настроить быстрый лендинг, обновить дизайн корпоративного сайта, добавить форму заявок или подготовить страницу для мероприятия.",
    services_cases_p2:
      "Мы также помогаем с переносом на новые платформы, созданием мини‑каталогов и подготовкой промостраниц под рекламные кампании.",
    services_addons_title: "Дополнительные опции",
    addons_brand_title: "Бренд‑гайд",
    addons_brand_text: "Соберём визуальные правила для вашего проекта.",
    addons_integrations_title: "Интеграции",
    addons_integrations_text: "Подключим CRM, почтовые сервисы и чаты.",
    addons_support_title: "Поддержка",
    addons_support_text: "Оперативные правки, обновления и консультации.",
    contact_page_title: "Связаться с нами",
    contact_page_subtitle: "Мы на связи каждый будний день с 10:00 до 19:00.",
    contact_badge: "Ответ в течение дня",
    contact_hero_title: "Поговорим о проекте",
    contact_hero_text:
      "Опишите задачу, и мы предложим оптимальный формат работы, сроки и бюджет.",
    contact_details_title: "Контактные данные",
    contact_email_title: "Email",
    contact_phone_title: "Телефон",
    contact_address_title: "Адрес",
    contact_address_text: "Москва, ул. Примерная, 10",
    contact_messengers_title: "Мессенджеры",
    contact_messengers_text: "Telegram и WhatsApp: @simple-site",
    contact_map_title: "Карта офиса",
    contact_hours_title: "График работы",
    contact_hours_p1: "Пн–Пт: 10:00–19:00, Сб: 11:00–16:00, Вс: выходной.",
    contact_hours_p2: "Срочные запросы — по договорённости.",
    contact_form_title: "Напишите нам",
    contact_form_intro: "Заполните форму, и мы ответим как можно быстрее.",
    thanks_title: "Спасибо за сообщение",
    thanks_heading: "Спасибо!",
    thanks_subtitle: "Мы получили ваше сообщение и скоро ответим.",
    thanks_badge: "Сообщение отправлено",
    thanks_hero_title: "Мы свяжемся с вами в течение дня",
    thanks_hero_text:
      "Пока вы ждёте ответ, можно посмотреть портфолио или изучить наши услуги.",
    thanks_cta: "Посмотреть услуги →",
    thanks_block_title: "Пока вы ждёте",
    thanks_block_text:
      "Мы можем подготовить предварительное предложение по вашему запросу. Если хотите ускорить процесс, добавьте в сообщение ссылки на сайты конкурентов или примеры, которые вам нравятся.",
    thanks_back: "Вернуться на главную",
    theme_day: "Светлая тема",
    theme_night: "Ночная тема",
    cta_opening: "Открываю раздел…",
    label_name: "Имя",
    label_email: "Email",
    label_topic: "Тема",
    label_message: "Сообщение",
    ph_name: "Ваше имя",
    ph_email: "you@email.com",
    ph_topic: "Например: новый сайт",
    ph_message: "Опишите задачу",
    btn_send: "Отправить сообщение",
    errors_required: "Это поле обязательно для заполнения.",
    errors_email: "Введите корректный email.",
    errors_generic: "Проверьте корректность данных.",
    status_invalid: "Пожалуйста, заполните все поля корректно.",
    status_missing_endpoint:
      "Укажите адрес формы в атрибуте action, чтобы включить отправку.",
    status_success: "Спасибо! Сообщение отправлено.",
    status_failed: "Не удалось отправить форму. Попробуйте позже.",
  },
  en: {
    home_title: "Simple Website",
    home_subtitle: "Clean structure, pleasant style, all in one file.",
    nav_home: "Home",
    nav_features: "Benefits",
    nav_about: "About",
    nav_contact: "Contacts",
    nav_about_page: "About Page",
    nav_services_page: "Services",
    nav_contact_page: "Get in touch",
    sn_start: "Start",
    sn_key: "Key points",
    sn_story: "Story",
    sn_form: "Form",
    sn_mission: "Mission",
    sn_team: "Team",
    sn_values: "Values",
    sn_packages: "Packages",
    sn_process: "Process",
    sn_cases: "Tasks",
    sn_addons: "Add-ons",
    sn_contacts: "Contacts",
    sn_hours: "Hours",
    home_badge: "Website in 5 minutes",
    home_hero_title: "A landing page for your project",
    home_hero_text:
      "Quickly explain what you do and highlight your key advantages.",
    home_cta: "See the features →",
    features_title: "Benefits for a web studio",
    features_intro:
      "We build sites that help businesses launch fast, capture leads, and look modern without extra complexity.",
    feature_light_title: "Light design",
    feature_light_text: "Clean layouts without clutter or extra details.",
    feature_responsive_title: "Responsive",
    feature_responsive_text: "Pages look great on all devices.",
    feature_ready_title: "Launch-ready",
    feature_ready_text: "We prepare structure and copy to save your time.",
    feature_fast_title: "Fast delivery",
    feature_fast_text: "Plan and estimate on day one, design in 3–5 days.",
    feature_reports_title: "Transparent reporting",
    feature_reports_text: "We share interim versions and status updates.",
    feature_support_title: "Support",
    feature_support_text: "We stay with you after launch and help you grow.",
    about_block_title: "What’s next?",
    about_block_p1:
      "Replace the text, add a logo, and expand the blocks. This template easily becomes a landing page or personal site.",
    about_block_p2:
      "Need a full package? We’ll craft structure, design, and copy for your niche and help with launch and analytics.",
    contact_title: "Contact us",
    contact_intro: "Leave a message — we’ll reply within a day.",
    footer_rights: "© 2026 Simple site. All rights reserved.",
    about_title: "About us",
    about_subtitle: "Who we are, how we work, and why clients trust us.",
    about_badge: "12 years in the industry",
    about_hero_title: "A web studio that loves clear websites",
    about_hero_text:
      "We build projects for small and mid-sized businesses: from landing pages to full digital ecosystems with forms, analytics, and integrations.",
    about_story_title: "Our story",
    about_story_p1:
      "We started as a small team helping friends with design and launches. Today we build clear, fast, and tidy web solutions for businesses and personal projects.",
    about_story_p2:
      "We’ve delivered 180+ launches, from delivery services to education platforms. We know how to make sites clear for customers and valuable for owners.",
    about_mission_title: "Mission",
    about_mission_p1:
      "Make digital products simple for users and convenient for owners. We value clarity, honesty, and attention to detail.",
    about_mission_p2:
      "Every project starts with goals: leads, sales, branding, or support. We tailor solutions to what matters for your metrics.",
    about_team_title: "Team",
    team_alina_title: "Alina, design",
    team_alina_text: "Creates visual solutions and keeps the style sharp.",
    team_max_title: "Maxim, development",
    team_max_text: "Responsible for speed, structure, and code.",
    team_olga_title: "Olga, management",
    team_olga_text: "Plans the process and keeps deadlines on track.",
    team_egor_title: "Egor, content",
    team_egor_text: "Writes copy that explains and sells.",
    team_nat_title: "Natalia, analytics",
    team_nat_text: "Sets up metrics and helps you grow.",
    about_values_title: "Values",
    values_clear_title: "Clarity",
    values_clear_text: "We explain decisions in plain language.",
    values_speed_title: "Speed",
    values_speed_text: "We launch fast and deliver results.",
    values_support_title: "Support",
    values_support_text: "We stay in touch after launch.",
    values_quality_title: "Quality",
    values_quality_text: "We mind the details so the site is stable and usable.",
    values_transparency_title: "Transparency",
    values_transparency_text: "We track tasks and timelines openly.",
    services_title: "Services",
    services_subtitle: "Everything you need to launch and grow a project.",
    services_badge: "Packages for your goals",
    services_hero_title: "Web studio services from idea to launch",
    services_hero_text:
      "We help shape your product, structure content, and launch a site that attracts clients and streamlines your team.",
    services_packages_title: "Service packages",
    pack_start_title: "Start",
    pack_start_text: "Landing page or business card site with core structure and design.",
    pack_start_time: "Timeline: 5–7 days.",
    pack_business_title: "Business",
    pack_business_text: "Multiple pages, forms, analytics, and optimization.",
    pack_business_time: "Timeline: 10–14 days.",
    pack_pro_title: "Pro",
    pack_pro_text: "Complex interfaces, integrations, and 24/7 support.",
    pack_pro_time: "Timeline: 3–4 weeks.",
    services_process_title: "How we work",
    process_step1_title: "1. Brief",
    process_step1_text: "We understand your goals and audience.",
    process_step2_title: "2. Design",
    process_step2_text: "We craft the visual concept and prototypes.",
    process_step3_title: "3. Development",
    process_step3_text: "We build the site and prep for launch.",
    process_step4_title: "4. Support",
    process_step4_text: "We help improve and grow the product.",
    process_step5_title: "5. Content",
    process_step5_text: "We edit copy so it converts.",
    process_step6_title: "6. Analytics",
    process_step6_text: "We connect metrics and track results.",
    services_cases_title: "Example tasks",
    services_cases_p1:
      "Set up a fast landing page, refresh a corporate site design, add a lead form, or prepare an event page.",
    services_cases_p2:
      "We also help with migrations, mini catalogs, and promo pages for ad campaigns.",
    services_addons_title: "Additional options",
    addons_brand_title: "Brand guide",
    addons_brand_text: "We’ll assemble visual rules for your project.",
    addons_integrations_title: "Integrations",
    addons_integrations_text: "We connect CRM, email services, and chats.",
    addons_support_title: "Support",
    addons_support_text: "Quick edits, updates, and consultations.",
    contact_page_title: "Contact us",
    contact_page_subtitle: "We’re available on weekdays from 10:00 to 19:00.",
    contact_badge: "Reply within a day",
    contact_hero_title: "Let’s talk about your project",
    contact_hero_text:
      "Describe your task and we’ll suggest the best format, timeline, and budget.",
    contact_details_title: "Contact details",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_address_title: "Address",
    contact_address_text: "Moscow, Example St, 10",
    contact_messengers_title: "Messengers",
    contact_messengers_text: "Telegram and WhatsApp: @simple-site",
    contact_map_title: "Office map",
    contact_hours_title: "Working hours",
    contact_hours_p1: "Mon–Fri: 10:00–19:00, Sat: 11:00–16:00, Sun: closed.",
    contact_hours_p2: "Urgent requests — by arrangement.",
    contact_form_title: "Write to us",
    contact_form_intro: "Fill out the form and we’ll respond quickly.",
    thanks_title: "Thanks for your message",
    thanks_heading: "Thank you!",
    thanks_subtitle: "We received your message and will reply soon.",
    thanks_badge: "Message sent",
    thanks_hero_title: "We’ll contact you within a day",
    thanks_hero_text:
      "While you wait, feel free to explore our portfolio or services.",
    thanks_cta: "View services →",
    thanks_block_title: "While you wait",
    thanks_block_text:
      "We can prepare a preliminary proposal. If you want to speed things up, include links to competitors or examples you like.",
    thanks_back: "Back to home",
    theme_day: "Light theme",
    theme_night: "Night theme",
    cta_opening: "Opening section…",
    label_name: "Name",
    label_email: "Email",
    label_topic: "Subject",
    label_message: "Message",
    ph_name: "Your name",
    ph_email: "you@email.com",
    ph_topic: "For example: new website",
    ph_message: "Describe your request",
    btn_send: "Send message",
    errors_required: "This field is required.",
    errors_email: "Enter a valid email.",
    errors_generic: "Please check the data.",
    status_invalid: "Please fill in all fields correctly.",
    status_missing_endpoint:
      "Add a form endpoint in the action attribute to enable sending.",
    status_success: "Thanks! Your message has been sent.",
    status_failed: "Couldn't send the form. Please try again later.",
  },
};

const storedLang = localStorage.getItem("lang");
const browserLang = navigator.language?.toLowerCase().startsWith("ru")
  ? "ru"
  : "en";
let currentLang = translations[storedLang] ? storedLang : browserLang;

const applyTheme = (mode) => {
  body.classList.toggle("theme-night", mode === "night");
  if (themeButton) {
    themeButton.textContent = mode === "night" ? t("theme_night") : t("theme_day");
  }
};

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const next = body.classList.contains("theme-night") ? "day" : "night";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

const t = (key) => translations[currentLang]?.[key] || key;

const applyLang = (lang) => {
  currentLang = translations[lang] ? lang : "ru";
  localStorage.setItem("lang", currentLang);
  html.setAttribute("lang", currentLang);
  if (langButton) {
    langButton.textContent = currentLang === "ru" ? "EN" : "RU";
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key) {
      node.textContent = t(key);
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (key && "placeholder" in node) {
      node.placeholder = t(key);
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const key = node.getAttribute("data-i18n-title");
    if (key) {
      node.setAttribute("title", t(key));
    }
  });
  const titleKey = document.querySelector("title")?.getAttribute("data-i18n");
  if (titleKey) {
    document.title = t(titleKey);
  }
  applyTheme(body.classList.contains("theme-night") ? "night" : "day");
};

const applyLangWithAnimation = (lang) => {
  body.classList.add("lang-switching");
  setTimeout(() => {
    applyLang(lang);
    body.classList.remove("lang-switching");
  }, 120);
};

const initialTheme = savedTheme || (prefersLight.matches ? "day" : "night");

applyLang(currentLang);
applyTheme(initialTheme);

if (langButton) {
  langButton.addEventListener("click", () => {
    applyLangWithAnimation(currentLang === "ru" ? "en" : "ru");
  });
}

if (cta) {
  cta.addEventListener("click", () => {
    cta.textContent = t("cta_opening");
  });
}

const revealTargets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((target) => observer.observe(target));

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const isLinkForCurrentPage = (href) => {
  if (href.startsWith("#")) {
    return true;
  }
  return href.startsWith(`${currentPage}#`);
};

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const hash = href.includes("#") ? href.split("#").pop() : "";
    const isMatch = isLinkForCurrentPage(href) && hash === id;
    link.classList.toggle("is-active", isMatch);
  });
};

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => {
  if (section.id) {
    navObserver.observe(section);
  }
});

const showStatus = (message, status) => {
  if (!formStatus) {
    return;
  }
  formStatus.textContent = message;
  formStatus.classList.remove("is-error", "is-success");
  if (status) {
    formStatus.classList.add(status);
  }
};

const getErrorMessage = (field) => {
  if (field.validity.valueMissing) {
    return t("errors_required");
  }
  if (field.type === "email" && field.validity.typeMismatch) {
    return t("errors_email");
  }
  return t("errors_generic");
};

const validateField = (field) => {
  if (!field) {
    return true;
  }
  const isValid = field.checkValidity();
  field.classList.toggle("is-invalid", !isValid);
  const hint = field.parentElement?.querySelector(".field-hint");
  if (hint) {
    hint.textContent = isValid ? "" : getErrorMessage(field);
    hint.classList.toggle("is-error", !isValid);
  }
  return isValid;
};

if (form) {
  const fields = form.querySelectorAll("input, textarea");
  const endpoint = form.dataset.endpoint || form.getAttribute("action");

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
      showStatus("", "");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid = null;
    const validity = Array.from(fields).every((field) => {
      const isValid = validateField(field);
      if (!isValid && !firstInvalid) {
        firstInvalid = field;
      }
      return isValid;
    });
    if (!validity) {
      showStatus(t("status_invalid"), "is-error");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }
    if (!endpoint || endpoint.includes("your-id")) {
      showStatus(t("status_missing_endpoint"), "is-error");
      return;
    }

    const formData = new FormData(form);

    fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        form.reset();
        fields.forEach((field) => field.classList.remove("is-invalid"));
        showStatus(t("status_success"), "is-success");
        setTimeout(() => {
          window.location.href = "thank-you.html";
        }, 500);
      })
      .catch(() => {
        showStatus(t("status_failed"), "is-error");
      });
  });
}

const enablePageTransitions = () => {
  if (!body.classList.contains("page-transition")) {
    return;
  }
  requestAnimationFrame(() => {
    body.classList.add("page-loaded");
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) {
      return;
    }
    if (link.target === "_blank") {
      return;
    }
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("#")) {
      return;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }
    if (!url.pathname.endsWith(".html")) {
      return;
    }
    if (url.pathname === window.location.pathname) {
      return;
    }
    event.preventDefault();
    body.classList.remove("page-loaded");
    body.classList.add("page-exit");
    setTimeout(() => {
      window.location.href = url.href;
    }, 220);
  });
};

enablePageTransitions();
