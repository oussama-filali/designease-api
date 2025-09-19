const generator = require('../utils/generator');

exports.generate = (req, res) => {
  console.log('BODY:', req.body);

  const { component, category, ...options } = req.body;
  console.log('API GENERATE:', { component, category, options });

  try {
    // Charger dynamiquement le template pour récupérer le champ preview si existant
    let preview = null;
    try {
      const templatePath = `../templates/${category}/${component}.js`;
      const template = require(templatePath);
      if (template.preview) preview = template.preview;
    } catch {}

    const code = generator(component, category, options);
    res.json({ code, preview });
  } catch (err) {
    console.error('GENERATION ERROR:', err);
    res.status(500).json({ error: err.message });
  }
};
