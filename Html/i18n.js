(() => {
  const navLabels = {
    en: ["Home", "About", "Internships", "Skills", "Projects", "Engagement"],
    fr: ["Accueil", "À propos", "Stages", "Compétences", "Projets", "Engagements"],
  };

  const pageCopy = {
    "home.html": [
      [".hero-content h4", "Hello, I'm", "Bonjour, je suis"],
      [".hero-content p", "Third-year Computer Engineering student with a Bachelor's degree in Big Data and Data Analytics.<br>Seeking a <strong>final-year internship (PFE)</strong>, with a particular interest in artificial intelligence.", "Étudiant en 3ᵉ année du cycle ingénieur en Génie Informatique, titulaire d’une licence en Big Data et Analyse de Données.<br>À la recherche d’un <strong>stage de fin d’études (PFE)</strong>, avec un intérêt particulier pour l’intelligence artificielle.", "html"],
      ["#contact-btn [data-i18n='contact']", "Contact Me", "Me contacter"],
      [".profile-portrait", "Mahmoud KCHAOU - Third-year Computer Engineering student", "Mahmoud KCHAOU - Étudiant en 3ᵉ année de Génie Informatique", "alt"],
    ],
    "About.html": [
      ["#academic-journey h2", "My Academic Journey", "Mon parcours académique"],
      [".timeline-content h4", ["Engineering Degree in Computer Science (In Progress)", "Bachelor's Degree in Big Data and Data Analysis", "High School Diploma in Technical Sciences"], ["Diplôme d’ingénieur en informatique (en cours)", "Licence en Big Data et analyse des données", "Baccalauréat en sciences techniques"]],
      [".education-school", ["International Institute of Technology, Sfax", "Higher Institute of Computer Science and Multimedia, Sfax", "Fadhel Ben Achour High School, Sfax"], ["Institut International de Technologie, Sfax", "Institut Supérieur d’Informatique et de Multimédia de Sfax", "Lycée Fadhel Ben Achour, Sfax"]],
      [".education-status", "In progress", "En cours"],
    ],
    "Internships.html": [
      ["#internships h2", "My Professional Internships", "Mes expériences professionnelles"],
      [".timeline-content h3", ["June 2026 - August 2026", "July 2025 - August 2025", "February 2024 - August 2024", "June 2023 - August 2023"], ["Juin 2026 - août 2026", "Juillet 2025 - août 2025", "Février 2024 - août 2024", "Juin 2023 - août 2023"]],
      [".timeline-item h4", ["Advanced Internship — Software Development", "Initiation Internship — Deep Learning", "Final-Year Project Internship — Timesheet Solution", "End-of-Year Project Internship — Media Management"], ["Stage de perfectionnement — Développement logiciel", "Stage d’initiation — Deep Learning", "Stage de projet de fin d’études — solution Timesheet", "Stage de projet de fin d’année — gestion des médias"]],
      [".timeline-content > p:nth-of-type(2)", [
        "Designed, developed and deployed an invoicing module with AI-assisted forecasting features and a chatbot.",
        "Developed a model to detect and classify lung cancer from 3D medical images.",
        "Developed a Timesheet solution for managing project work by employees.",
        "Developed a media management application to streamline social media publishing workflows.",
      ], [
        "Conçu, développé et mis en production un module de facturation intégrant des fonctionnalités de prévision assistées par l’IA et un chatbot.",
        "Développé un modèle de détection et de classification du cancer pulmonaire à partir d’images médicales 3D.",
        "Développé une solution Timesheet pour la gestion des projets des collaborateurs.",
        "Développé une application de gestion des médias pour optimiser les flux de publication sur les réseaux sociaux.",
      ]],
      [".timeline-image", ["ITANIS", "International Institute of Technology", "PROGED SOLUTIONS", "PROGED SOLUTIONS"], ["ITANIS", "Institut International de Technologie", "PROGED SOLUTIONS", "PROGED SOLUTIONS"], "alt"],
    ],
    "Projects.html": [
      [".projects-header h1", "My Projects", "Mes projets"],
      [".project-content h3", ["Exam Fraud Detection System", "Intelligent Coaching Application", "Business Intelligence Dashboard", "E-Commerce Application", "Graph Builder", "ERP Project", "Anonymous Forum"], ["Système de détection de fraude aux examens", "Application de coaching intelligent", "Tableau de bord décisionnel", "Application e-commerce", "Générateur de graphes", "Projet ERP", "Forum anonyme"]],
      [".project-content p", [
        "Development of a deep learning system for detecting exam fraud.", "Development of a mobile application for sports tracking.", "Creation of dashboards and data pipelines for business intelligence.", "Development of an e-commerce application using Spring Boot, JSP, Servlets and JPA.", "Design and development of a graph generation tool using Java and design patterns.", "Implementation and customization of an ERP system.", "Development of a web forum with a focus on human-computer interaction principles.",
      ], [
        "Développement d’un système de détection de fraude aux examens basé sur le deep learning.", "Développement d’une application mobile de suivi sportif.", "Création de tableaux de bord et de pipelines de données décisionnelles.", "Développement d’une application e-commerce avec Spring Boot, JSP, Servlets et JPA.", "Conception et développement d’un outil de génération de graphes avec Java et des patrons de conception.", "Implémentation et personnalisation d’un système ERP.", "Développement d’un forum web en appliquant des principes d’interaction humain-machine.",
      ]],
    ],
    "Skills.html": [
      [".skills-header h1", "Skills & Certifications", "Compétences et certifications"],
      [".category-header h2", ["ARTIFICIAL INTELLIGENCE", "DATA & BUSINESS INTELLIGENCE", "PROGRAMMING LANGUAGES", "LANGUAGES & FRAMEWORKS", "MICROSOFT TECHNOLOGIES", "DEVOPS & INFRASTRUCTURE"], ["INTELLIGENCE ARTIFICIELLE", "DONNÉES & INTELLIGENCE D’AFFAIRES", "LANGAGES DE PROGRAMMATION", "LANGAGES ET FRAMEWORKS", "TECHNOLOGIES MICROSOFT", "DEVOPS ET INFRASTRUCTURE"]],
      ["#certifications-title", "Certifications", "Certifications"],
      [".certifications-eyebrow", "Professional credentials", "Certifications professionnelles"],
      [".certification-issuer", ["Microsoft Certified", "Microsoft Certified", "Microsoft Certified", "Microsoft Certified", "Cisco Networking Academy"], ["Certification Microsoft", "Certification Microsoft", "Certification Microsoft", "Certification Microsoft", "Cisco Networking Academy"]],
      [".certification-title", ["Microsoft 365 Fundamentals", "Azure Fundamentals", "Power Platform Fundamentals", "Azure AI Fundamentals", "CCNA: Introduction to Networks"], ["Microsoft 365 — notions fondamentales", "Azure — notions fondamentales", "Power Platform — notions fondamentales", "Azure AI — notions fondamentales", "CCNA : introduction aux réseaux"]],
      [".certification-badge img", ["Microsoft Certified: Microsoft 365 Fundamentals badge", "Microsoft Certified: Azure Fundamentals badge", "Microsoft Certified: Power Platform Fundamentals badge", "Microsoft Certified: Azure AI Fundamentals badge", "Cisco Networking Academy CCNA: Introduction to Networks badge"], ["Badge Microsoft Certified — Microsoft 365 Fundamentals", "Badge Microsoft Certified — Azure Fundamentals", "Badge Microsoft Certified — Power Platform Fundamentals", "Badge Microsoft Certified — Azure AI Fundamentals", "Badge Cisco Networking Academy — CCNA : introduction aux réseaux"], "alt"],
      [".languages-section > h2", "Languages", "Langues"],
      [".languages-list > span", ["Arabic", "French", "English"], ["Arabe", "Français", "Anglais"], "childText"],
    ],
    "Social_Life.html": [
      [".container > h1", "Engagement & Interests", "Engagements & centres d’intérêt"],
      [".engagement-kicker", "COMMUNITY · LEADERSHIP · COMMUNICATION", "ENGAGEMENT · LEADERSHIP · COMMUNICATION"],
      [".activity-text h2", ["Tunisian Scouts", "IEEE IIT Student Branch"], ["Scouts tunisiens", "IEEE IIT Student Branch"], "childText"],
      [".activity-description", [
        "Active member of the Tunisian Scouts since 2018, serving as Scout Leader and Media Manager.",
        "Media Manager at the IEEE Student Branch.",
      ], [
        "Membre actif des Scouts tunisiens depuis 2018, chef scout et responsable média.",
        "Responsable média à la branche étudiante IEEE.",
      ]],
      [".activity-period", "Since 2018", "Depuis 2018"],
      [".role-badge", ["Scout Leader", "Media Manager", "Media Manager"], ["Chef scout", "Responsable médias", "Responsable médias"]],
      [".activity-image", ["Tunisian Scouts", "IEEE IIT"], ["Scouts tunisiens", "IEEE IIT"], "alt"],
      [".engagement-interests strong", "Interests", "Centres d’intérêt"],
      [".interests-caption strong", "Outside the classroom", "Au-delà des études"],
      [".interest-tags span", ["Running", "Hiking", "Photography"], ["Course à pied", "Randonnée", "Photographie"]],
    ],
  };

  function updateThemeToggle(language = window.portfolioLanguage || "en") {
    const button = document.getElementById("theme-toggle");
    if (!button) return;
    const isDark = document.documentElement.dataset.theme !== "light";
    const label = language === "fr"
      ? (isDark ? "Passer au thème clair" : "Passer au thème sombre")
      : (isDark ? "Switch to light theme" : "Switch to dark theme");
    const icon = button.querySelector("i");
    if (icon) icon.className = `bx ${isDark ? "bx-sun" : "bx-moon"}`;
    button.setAttribute("aria-label", label);
    button.title = label;
  }

  function applyTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch (_) {}
    updateThemeToggle();
  }

  function writeValue(element, value, mode) {
    if (mode === "alt") {
      element.alt = value;
      return;
    }
    if (mode === "html") {
      element.innerHTML = value;
      return;
    }
    if (mode === "childText" && element.children.length) {
      const textNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (textNode) textNode.textContent = ` ${value}`;
      else element.append(document.createTextNode(value));
      return;
    }
    element.textContent = value;
  }

  function setLanguage(language) {
    const lang = language === "fr" ? "fr" : "en";
    document.documentElement.lang = lang;
    window.portfolioLanguage = lang;

    document.querySelectorAll(".navlist a").forEach((link, index) => {
      if (navLabels[lang][index]) link.textContent = navLabels[lang][index];
    });

    const page = location.pathname.split("/").pop();
    for (const [selector, english, french, mode] of pageCopy[page] || []) {
      const elements = [...document.querySelectorAll(selector)];
      elements.forEach((element, index) => {
        const enValue = Array.isArray(english) ? english[index] : english;
        const frValue = Array.isArray(french) ? french[index] : french;
        const value = lang === "fr" ? frValue : enValue;
        if (value !== undefined) writeValue(element, value, mode);
      });
    }

    const languageGroup = document.querySelector(".language-switch");
    if (languageGroup) languageGroup.setAttribute("aria-label", lang === "fr" ? "Choisir la langue" : "Choose language");

    const certificationGrid = document.querySelector(".certification-grid");
    if (certificationGrid) certificationGrid.setAttribute("aria-label", lang === "fr" ? "Badges de certification" : "Certification badges");

    document.querySelectorAll(".language-switch button").forEach(button => {
      const active = button.dataset.lang === lang;
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", lang === "fr"
        ? (button.dataset.lang === "fr" ? "Français, langue actuelle" : "Passer en anglais")
        : (button.dataset.lang === "en" ? "English, current language" : "Switch to French"));
    });

    updateThemeToggle(lang);

    const menu = document.getElementById("menu-icon");
    if (menu) {
      const isOpen = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-label", lang === "fr"
        ? (isOpen ? "Fermer la navigation" : "Ouvrir la navigation")
        : (isOpen ? "Close navigation" : "Open navigation"));
    }

    try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
    document.documentElement.classList.remove("i18n-pending");
  }

  document.querySelectorAll(".language-switch button").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme;
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  let initialLanguage = "en";
  try { initialLanguage = localStorage.getItem("portfolio-language") || "en"; } catch (_) {}
  setLanguage(initialLanguage);
})();
