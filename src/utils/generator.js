module.exports = (component, framework, options) => {
  try {
    const template = require(`../templates/${framework}/${component}.js`);
    return template(options);
  } catch (err) {
    throw new Error("Composant ou framework non pris en charge");
  }
};
