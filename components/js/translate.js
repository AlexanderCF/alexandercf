async function updateLanguageContent(lang) {
  const data = await fetchLanguageData(lang);
  const elements = {
    hero_name: "hero_name",
    hero_description: "hero_description",
    about_title: "about_title",
    about_subtitle: "about_subtitle",
    about_text: "about_text",
    about_skills: "about_skills",
    // Update project-related content
    projects_title: "projects_title",
    projects_description: "projects_description",
    projects_link: "projects_link",
    projects_button: "projects_button",
    projects_item_title_1: "projects_item_title_1",
    projects_item_description_1: "projects_item_description_1",
    projects_item_title_2: "projects_item_title_2",
    projects_item_description_2: "projects_item_description_2",
    projects_item_title_3: "projects_item_title_3",
    projects_item_description_3: "projects_item_description_3",
    projects_item_title_4: "projects_item_title_4",
    projects_item_description_4: "projects_item_description_4",
  };

  Object.keys(elements).forEach((key) => {
    const element = document.getElementById(elements[key]);
    if (element) {
      element.textContent = data[key];
    }
  });
}

// Cargar el objeto de idioma según el parámetro
function changeLanguage(lang) {
  let data = lang === "en" ? window.langEN : window.langES;
  if (!data) {
    alert(
      "No se encontró el objeto de idioma. Verifica que los archivos lang/en.js y lang/es.js se cargan antes que translate.js"
    );
    return;
  }
  // Actualizar los textos solo si existen los elementos y las claves
  if (data.hero_name && document.getElementById("hero_name"))
    document.getElementById("hero_name").textContent = data.hero_name;
  if (data.hero_description && document.getElementById("hero_description"))
    document.getElementById("hero_description").textContent =
      data.hero_description;
  if (data.about_title && document.getElementById("about_title"))
    document.getElementById("about_title").textContent = data.about_title;
  if (data.about_subtitle && document.getElementById("about_subtitle"))
    document.getElementById("about_subtitle").textContent = data.about_subtitle;
  if (data.about_text && document.getElementById("about_text"))
    document.getElementById("about_text").textContent = data.about_text;
  if (data.about_skills && document.getElementById("about_skills"))
    document.getElementById("about_skills").textContent = data.about_skills;
  if (data.projects_title && document.getElementById("projects_title"))
    document.getElementById("projects_title").textContent = data.projects_title;
  if (
    data.projects_description &&
    document.getElementById("projects_description")
  )
    document.getElementById("projects_description").textContent =
      data.projects_description;
  if (data.projects_link && document.getElementById("projects_link"))
    document.getElementById("projects_link").textContent = data.projects_link;
  // Botones de proyectos (hay varios, actualiza todos)
  if (data.projects_button) {
    const projectButtons = document.querySelectorAll(".projects__button");
    projectButtons.forEach((btn) => (btn.textContent = data.projects_button));
  }
  // Títulos y descripciones de proyectos
  for (let i = 1; i <= 4; i++) {
    if (data[`projects_item_title_${i}`]) {
      const title = document.getElementById(`projects_item_title_${i}`);
      if (title) title.textContent = data[`projects_item_title_${i}`];
    }
    if (data[`projects_item_description_${i}`]) {
      const desc = document.getElementById(`projects_item_description_${i}`);
      if (desc) desc.textContent = data[`projects_item_description_${i}`];
    }
  }
}
