const generator = require('../utils/generator');

exports.generate = (req, res) => {
  const { component, framework, ...options } = req.body;
  console.log('API GENERATE:', { component, framework, options }); // Ajoute ce log

  try {
    const code = generator(component, framework, options);
    res.json({ code });
  } catch (err) {
    console.error('GENERATION ERROR:', err); // Ajoute ce log
    res.status(500).json({ error: err.message });
  }
};
