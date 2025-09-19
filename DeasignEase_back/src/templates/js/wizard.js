module.exports = () => `
// Wizard JS interactif
function goToStep(step) {
  document.querySelectorAll('.wizard-step').forEach((el, idx) => {
    el.classList.toggle('active', idx === step);
  });
}
`;
