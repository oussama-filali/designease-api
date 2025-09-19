module.exports = (component, category, options) => {
  try {
    // category = html, css, js, react
    const templatePath = `../templates/${category}/${component}.js`;
    const template = require(templatePath);
    // Si le template est une fonction, on l'appelle, sinon on retourne le contenu brut (ex: CSS)
    if (typeof template === 'function') {
      return template(options);
    } else if (typeof template === 'string') {
      return template;
    } else {
      throw new Error('Template non valide');
    }
  } catch (err) {
    console.error('Template loading error:', err);
    throw new Error(`Composant "${component}" ou catégorie "${category}" non pris en charge`);
  }
};
