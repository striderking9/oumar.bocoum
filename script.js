const root = document.documentElement;

const translations = {
  fr: {
    page_title: "Oumar Bocoum — Analyste de Données Senior",
    page_description: "Portfolio d’Oumar Bocoum, Analyste de Données Senior spécialisé dans les données humanitaires, l’automatisation, la qualité et la visualisation.",
    skip_link: "Aller au contenu", brand_role: "Analyste de Données Senior", main_nav: "Navigation principale",
    nav_expertise: "Expertise", nav_work: "Projets", nav_journey: "Parcours", nav_writing: "Écriture", nav_contact: "Contact",
    search_button: "Naviguer", theme_toggle: "Changer le thème", proof_label: "Repères professionnels", metrics_label: "Domaines d’intervention",
    hero_eyebrow: "Données humanitaires · Analyse · Décision", hero_title: "Je transforme les données de terrain en décisions fiables.",
    hero_lead: "Analyste de Données Senior et ingénieur en génie informatique, je conçois des systèmes qui relient collecte, qualité, analyse et visualisation pour éclairer l’action humanitaire.",
    hero_cta1: "Découvrir mes projets", hero_cta2: "Voir mon profil senior", proof_years: "ans d’expérience", proof_cycle: "cycle de données", proof_contexts: "contextes pays soutenus",
    pipeline_title: "De la question à la décision", pipeline_status: "Approche intégrée", step1_title: "Concevoir", step1: "Méthodologie, échantillonnage et XLSForm", step2_title: "Fiabiliser", step2: "Contrôles qualité et cleaning logs", step3_title: "Analyser", step3: "Indicateurs, pondération et interprétation", step4_title: "Décider", step4: "Dashboards, rapports et recommandations",
    metric1: "nettoyage, analyse et automatisation", metric2: "Power BI, Shiny et communication", metric3: "qualité, plausibilité et traçabilité", metric4: "information management humanitaire",
    expertise_kicker: "Expertise", expertise_title: "Un profil senior sur l’ensemble de la chaîne de données.", expertise_intro: "Je combine compréhension opérationnelle, rigueur analytique et ingénierie légère pour produire des résultats utilisables, reproductibles et défendables.",
    exp1_title: "Conception d’enquêtes", exp1_text: "Questionnaires Kobo/XLSForm, logiques complexes, choix des variables, échantillonnage et préparation de la collecte.", exp1_tag: "Échantillonnage",
    exp2_title: "Qualité des données", exp2_text: "Contrôles automatisés, plausibilité, détection d’anomalies, suivi enquêteurs et boucles de correction avec le terrain.",
    exp3_title: "Analyse humanitaire", exp3_text: "Construction et interprétation d’indicateurs multisectoriels pour transformer les données en constats et recommandations.", exp3_tag: "Analyse pondérée",
    exp4_title: "Pilotage et visualisation", exp4_text: "Trackers de collecte, suivi de représentativité et tableaux de bord adaptés aux besoins des équipes opérationnelles.",
    work_kicker: "Projets sélectionnés", work_title: "Des systèmes pensés pour le terrain et la décision.", work_intro: "Des projets où la qualité technique doit rester compatible avec les contraintes opérationnelles, les délais et la lisibilité pour les équipes.",
    dash_title: "Suivi de représentativité", dash_live: "Collecte", dash_kpi1: "Régions", dash_kpi2: "Cercles suivis", dash_kpi3: "Niveaux",
    case1_meta: "Évaluation multisectorielle", case1: "Pilotage de la donnée de la collecte à l’analyse : tracker Shiny, quotas par cercle et cluster, contrôle qualité, boucles sectorielles et suivi de la représentativité.",
    case2_visual: "règles et contrôles", case2_meta: "Automatisation", case2_title: "Moteur de contrôle qualité", case2: "Architecture réutilisable pour détecter les incohérences, prioriser les alertes et générer des cleaning logs exploitables par zone et par équipe.",
    case3_meta: "Analyse multisectorielle", case3_title: "Portefeuille d’évaluations humanitaires", case3: "Contributions aux cycles Post-RRM, ABA, FHRAOC, HSM et MSNA, ainsi qu’à des appuis analytiques en RDC et au Burkina Faso.",
    profile_kicker: "Profil senior", profile_title: "Plus qu’un changement d’intitulé.", profile_intro: "Mon rôle consiste à sécuriser la chaîne de données, mais aussi à poser les bonnes questions, expliquer les résultats et guider les décisions.",
    profile1: "<strong>Structurer</strong> des processus adaptés au contexte terrain et aux objectifs analytiques.", profile2: "<strong>Arbitrer</strong> entre qualité, délais, représentativité et faisabilité opérationnelle.", profile3: "<strong>Interpréter</strong> les résultats avec rigueur, contexte et sens critique.", profile4: "<strong>Transmettre</strong> les méthodes, documenter les leçons apprises et renforcer les équipes.",
    journey_kicker: "Parcours", journey_title: "Une progression construite sur le terrain.", journey_intro: "Ingénieur de formation, j’ai développé une spécialisation à l’intersection des données, des opérations humanitaires et de la décision.",
    journey1_title: "Entrée chez REACH / ACTED Mali", journey1_text: "Début comme Chargé de Données et premières responsabilités sur les évaluations et systèmes d’information humanitaires.", journey2_title: "Montée en responsabilité", journey2_text: "Post-RRM, ABA, FHRAOC, HSM et leadership data sur la MSNA Mali 2025, avec des appuis régionaux.", journey3_title: "Analyste de Données Senior", journey3_text: "Pilotage de workflows complexes, contrôle qualité avancé, analyse multisectorielle, automatisation et accompagnement à la décision.",
    book_cover_label: "Couverture du projet de livre Penser Data", book_kicker: "Projet éditorial", book_sub: "Devenir excellent dans un monde augmenté par l’IA", book_intro: "Un livre pour apprendre à comprendre les problèmes, questionner les données et produire de la valeur — au-delà de la simple maîtrise des outils.", book1: "Penser avant de coder", book2: "Créer de l’impact, pas seulement des graphiques", book3: "Faire de l’IA un levier, sans abandonner le jugement professionnel",
    contact_title: "Parlons données, systèmes et impact.", contact_intro: "Disponible pour échanger autour de l’analyse humanitaire, des systèmes de qualité et des projets data à fort impact.", download_cv: "Télécharger mon CV", footer_role: "Senior Data Analyst · Données humanitaires · Mali",
    command_title: "Naviguer vers une section", search_placeholder: "Rechercher une section…", close: "Fermer",
    lang_label: "Passer en anglais"
  },
  en: {
    page_title: "Oumar Bocoum — Senior Data Analyst",
    page_description: "Portfolio of Oumar Bocoum, a Senior Data Analyst specializing in humanitarian data, automation, quality assurance and visualization.",
    skip_link: "Skip to content", brand_role: "Senior Data Analyst", main_nav: "Main navigation",
    nav_expertise: "Expertise", nav_work: "Projects", nav_journey: "Journey", nav_writing: "Writing", nav_contact: "Contact",
    search_button: "Navigate", theme_toggle: "Change theme", proof_label: "Professional highlights", metrics_label: "Areas of practice",
    hero_eyebrow: "Humanitarian data · Analysis · Decisions", hero_title: "I turn field data into reliable decisions.",
    hero_lead: "A Senior Data Analyst and computer engineer, I design systems connecting data collection, quality assurance, analysis and visualization to inform humanitarian action.",
    hero_cta1: "Explore my projects", hero_cta2: "View my senior profile", proof_years: "years of experience", proof_cycle: "data lifecycle", proof_contexts: "country contexts supported",
    pipeline_title: "From question to decision", pipeline_status: "Integrated approach", step1_title: "Design", step1: "Methodology, sampling and XLSForm", step2_title: "Assure", step2: "Quality checks and cleaning logs", step3_title: "Analyze", step3: "Indicators, weighting and interpretation", step4_title: "Decide", step4: "Dashboards, reports and recommendations",
    metric1: "cleaning, analysis and automation", metric2: "Power BI, Shiny and communication", metric3: "quality, plausibility and traceability", metric4: "humanitarian information management",
    expertise_kicker: "Expertise", expertise_title: "A senior profile across the entire data lifecycle.", expertise_intro: "I combine operational understanding, analytical rigor and lightweight engineering to deliver results that are usable, reproducible and defensible.",
    exp1_title: "Survey design", exp1_text: "Kobo/XLSForm questionnaires, complex logic, variable selection, sampling and data-collection preparation.", exp1_tag: "Sampling",
    exp2_title: "Data quality", exp2_text: "Automated checks, plausibility testing, anomaly detection, enumerator monitoring and field correction loops.",
    exp3_title: "Humanitarian analysis", exp3_text: "Development and interpretation of multisectoral indicators to turn data into findings and recommendations.", exp3_tag: "Weighted analysis",
    exp4_title: "Monitoring and visualization", exp4_text: "Collection trackers, representativeness monitoring and dashboards tailored to operational teams’ needs.",
    work_kicker: "Selected projects", work_title: "Systems designed for field realities and decisions.", work_intro: "Projects where technical quality must remain compatible with operational constraints, deadlines and clarity for teams.",
    dash_title: "Representativeness tracking", dash_live: "Collection", dash_kpi1: "Regions", dash_kpi2: "Districts tracked", dash_kpi3: "Levels",
    case1_meta: "Multisectoral assessment", case1: "Data leadership from collection through analysis: Shiny tracker, district and cluster quotas, quality assurance, sector loops and representativeness monitoring.",
    case2_visual: "rules and checks", case2_meta: "Automation", case2_title: "Quality assurance engine", case2: "A reusable architecture to detect inconsistencies, prioritize alerts and generate cleaning logs that field teams can act on by area and team.",
    case3_meta: "Multisectoral analysis", case3_title: "Humanitarian assessment portfolio", case3: "Contributions to Post-RRM, ABA, FHRAOC, HSM and MSNA cycles, along with analytical support in the DRC and Burkina Faso.",
    profile_kicker: "Senior profile", profile_title: "More than a job-title change.", profile_intro: "My role is to secure the data chain, but also to ask the right questions, explain findings and guide decisions.",
    profile1: "<strong>Structure</strong> processes suited to field realities and analytical objectives.", profile2: "<strong>Balance</strong> quality, deadlines, representativeness and operational feasibility.", profile3: "<strong>Interpret</strong> findings with rigor, context and critical judgment.", profile4: "<strong>Transfer</strong> methods, document lessons learned and strengthen teams.",
    journey_kicker: "Journey", journey_title: "Progress built through field experience.", journey_intro: "An engineer by training, I developed expertise at the intersection of data, humanitarian operations and decision-making.",
    journey1_title: "Joined REACH / ACTED Mali", journey1_text: "Started as a Data Officer with initial responsibilities across humanitarian assessments and information systems.", journey2_title: "Growing responsibility", journey2_text: "Post-RRM, ABA, FHRAOC, HSM and data leadership for the 2025 Mali MSNA, alongside regional support assignments.", journey3_title: "Senior Data Analyst", journey3_text: "Leading complex workflows, advanced quality assurance, multisectoral analysis, automation and decision support.",
    book_cover_label: "Cover of the Penser Data book project", book_kicker: "Editorial project", book_sub: "Becoming outstanding in an AI-augmented world", book_intro: "A book about understanding problems, questioning data and creating value — beyond simply mastering tools.", book1: "Think before coding", book2: "Create impact, not just charts", book3: "Use AI as leverage without surrendering professional judgment",
    contact_title: "Let’s talk data, systems and impact.", contact_intro: "Open to conversations about humanitarian analysis, quality systems and high-impact data projects.", download_cv: "Download my résumé", footer_role: "Senior Data Analyst · Humanitarian Data · Mali",
    command_title: "Navigate to a section", search_placeholder: "Search for a section…", close: "Close",
    lang_label: "Passer en français"
  }
};

let lang = localStorage.getItem("ob-lang") || "fr";
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const savedTheme = localStorage.getItem("ob-theme");

root.dataset.theme = savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function applyLanguage() {
  const dictionary = translations[lang];
  root.lang = lang;
  document.title = dictionary.page_title;
  document.querySelector('meta[name="description"]').content = dictionary.page_description;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });
  langToggle.textContent = lang === "fr" ? "EN" : "FR";
  langToggle.setAttribute("aria-label", dictionary.lang_label);
  localStorage.setItem("ob-lang", lang);
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("ob-theme", root.dataset.theme);
});

langToggle.addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  applyLanguage();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const modal = document.getElementById("commandModal");
const openButton = document.getElementById("openCommand");
const closeButton = document.getElementById("closeCommand");
const searchInput = document.getElementById("commandSearch");
let lastFocusedElement = null;

function openModal() {
  lastFocusedElement = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => searchInput.focus(), 50);
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  searchInput.value = "";
  filterCommands();
  if (lastFocusedElement) lastFocusedElement.focus();
}

function filterCommands() {
  const query = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".command-list button").forEach((button) => {
    button.hidden = !button.textContent.toLowerCase().includes(query);
  });
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
searchInput.addEventListener("input", filterCommands);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openModal();
  }
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

document.querySelectorAll(".command-list button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.target)?.scrollIntoView();
    closeModal();
  });
});

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/oumar-bocoum-10505114a/",
  github: "https://github.com/striderking9",
  cv: "assets/Curriculum Vitae Oumar BOCOUM.pdf"
};

document.querySelectorAll("[data-placeholder]").forEach((button) => {
  button.addEventListener("click", () => {
    const linkName = button.dataset.placeholder;
    const url = profileLinks[linkName];

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });
});

document.querySelectorAll("[data-placeholder]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.dataset.placeholder === "cv" ? "CV" : button.dataset.placeholder;
    showToast(translations[lang].placeholder.replace("{item}", item));
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
applyLanguage();
