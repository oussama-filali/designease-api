const generator = require('../utils/generator');

exports.generate = (req, res) => {
  const { component, framework, ...options } = req.body;

  try {
    const code = generator(component, framework, options);
    res.json({ code });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
